// pages/instrumentBoard/instrumentBoard.js
Page({
  data: {
    deviceId: '',
    serviceId: '',
    characteristicId1: '',
    characteristicId2: '',
    Batterylockstate:-1,
    device: {
      name: '',
      signalStrength: 0
    },
    rotate_Counter: 0,                //用于接收传递过来的轮转数
    lastlyrotate_Counter:0,
    itinerary:0,
    speed:'',
    time:0,
    timer:null,
    price:'',
    batteryPower:'检测中',
    batteryPowerPercentage:'检测中',
    mileageavailable:'检测中',
    bikelock:0,
    Batterylockstate:-1,
    ifConnect:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title:"smart bike"
    }); 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const deviceInfo = getApp().globalData.deviceInfo;
    if (deviceInfo){
      this.updateInfoData(deviceInfo);
      this.listentoBlue();
      this.startSignalStrengthUpdate();
      this.updateSpeed();
      this.updateItinerary();
      
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
//-----------------------监听函数---------------------------------------------
updateInfoData:function(deviceInfo){
  this.setData({
    characteristicId1: deviceInfo.characteristicId1,  // write
    characteristicId2: deviceInfo.characteristicId2,  // notify
    deviceId: deviceInfo.deviceId,
    serviceId: deviceInfo.serviceId,
    price: deviceInfo.price,
    device: {
      name: deviceInfo.name,
      signalStrength: deviceInfo.signalStrength
    }
  });               //notify
  wx.setNavigationBarTitle({
    title: this.data.device.name
  }); 
},
//--------------------siganal update--------------------
startSignalStrengthUpdate: function() {
  this.setData({
    signalUpdateInterval: setInterval(() => {
      this.getDeviceRSSI(); // 定期更新信号强度
    }, 2000) // 每秒更新一次
  });
},

stopSignalStrengthUpdate: function() {
  clearInterval(this.data.signalUpdateInterval);
  this.setData({
    signalUpdateInterval: null
  });
},

getDeviceRSSI: function() {
  wx.getBLEDeviceRSSI({
    deviceId: this.data.deviceId,
    success: (res) => {
      this.setData({
        'device.signalStrength': res.RSSI // 更新信号强度
      });
    },
  });
},
//-----------------connect bluetooth--------------------
listentoBlue:function(){
  wx.notifyBLECharacteristicValueChange({
    deviceId: this.data.deviceId,
    serviceId: this.data.serviceId,
    characteristicId: this.data.characteristicId2,
    state: true,
    success: (_res) => {
      this.setData({
        bikelock : 1,
      })
    },
    fail: (_err) => {
    }
  });

    wx.onBLECharacteristicValueChange((characteristic) => {
      const data = this.bufferToString(characteristic.value); 
      this.judgelisten(data);
      });
  },

  judgelisten:function(data){
    if(data.includes('battery2')){
      this.setData({
        Batterylockstate:0          //意味着此时锁是关着的
      })
    }
    else if(data.includes('battery1')){         
      this.setData({
        Batterylockstate:1          //恰恰相反
      })
    }
    else if(data.includes('battery3')){         
      wx.showToast({
        title: '开锁失败了哦，找找有什么问题吧',
        icon: 'none',
        duration: 1000,
      });
    }
    else if(data.includes('battery4')){         
      wx.showToast({
        title: '关锁失败了哦，再试一次',
        icon: 'none',
        duration: 1000,
      });
    }
    if (data.includes('BV:')) {
      const match = data.match(/BV:\s*(\d+(\.\d+)?)/);
      if (match) {
        const Power = match[1];  
        this.setData({
          batteryPower: Power
        });
        this.doTobatteryPower(Power);
      }
    }
    if(data.includes('R:')){               //将轮转数提取出来
      console.log('have')
      this.setData({
        lastlyrotate_Counter:this.data.rotate_Counter,   //保留上一次的值
      });
      const mileageMatch = data.match(/R:\s*(\d+)/);
      if (mileageMatch) {
        const mileage = parseInt(mileageMatch[1], 10);
        this.setData({
          rotate_Counter: mileage
        });
        console.log(this.data.rotate_Counter);
      }
    }
    if(data.includes('ready')){
      this.startTimer();                        //如果回应已经开始供电，则开始计时
      wx.showToast({
        title: '开锁成功',
        icon: 'none',
        duration: 1000,
      })
    }
  },
//------------------used to convert-----------------
  doTobatteryPower:function(data){
    if (data){
      const powerNum = parseFloat(data);
      if(powerNum ){
        let percentage;
        if(powerNum <= 53.4 && powerNum >= 45){
          percentage = Math.floor(100 * (powerNum - 45) / (53.4 - 45));
        }
        else if(powerNum > 53.4){
          percentage = 100
        }
        else{
          percentage = 0
        }
        this.setData({
          batteryPowerPercentage:percentage
        });
      }
    }
  },

  sendCommand: function(event) {  
    const command = event.currentTarget.dataset.command; 
    this.sendData(command);
  },

  sendData: function(command) {
    wx.writeBLECharacteristicValue({
      characteristicId: this.data.characteristicId1,
      deviceId: this.data.deviceId,
      serviceId: this.data.serviceId,
      value: this.stringToBuffer(command),
      success: (_res) => {
        wx.showToast({
          title: '发送成功',
          icon: 'none',
          duration: 1000,
        });
      },
      fail: (_err) => {
        wx.showToast({
          title: '发送失败',
          icon: 'none',
          duration: 1000,
        });
      }
    });
  },

  stringToBuffer: function(str) {
    const buffer = new ArrayBuffer(str.length);
    const dataView = new Uint8Array(buffer);

    for (let i = 0; i < str.length; i++) {
      dataView[i] = str.charCodeAt(i);
    }
    return buffer;
  },

  bufferToString: function(buffer) {
    const dataView = new Uint8Array(buffer);
    return String.fromCharCode.apply(null, dataView);
  },

  //------------------进入下一个页面的函数----------------
  settleAccountAndsendCommand:function(event){
    this.stoptimer();                     //停止计数
    this.stopSpeedUpdate();
    this.stopItineraryUpdate();           //关闭定时器
    this.settleAccount();                 //进入下一个页面
    this.sendCommand(event);              //发送命令关车
  },

  settleAccount:function(){
    this.setData({
      ifConnect:0,
      bikelock:0
    })
    wx.navigateTo({
      url:`/pages/account/account?itinerary=${this.data.itinerary}&time=${this.data.time}&deviceId=${this.data.deviceId}&serviceId=${this.data.serviceId}&characteristicId1=${this.data.characteristicId1}&characteristicId2=${this.data.characteristicId2}&price=${this.data.price}&batteryPower=${this.data.batteryPower}&Batterylockstate=${this.data.Batterylockstate}&batteryPowerPercentage=${this.data.batteryPowerPercentage}`
    });
  },

  showerror:function(){
    wx.showToast({
      title: '还没有连接到设备哦，请先连接',
      icon: 'none',
      duration: 1000,
    })
  },
  
  startdrive:function(event){
    this.sendCommand(event);
    this.setData({
      ifConnect:1
    })
  },

  exit:function(){
    wx.closeBLEConnection({
      deviceId: this.data.deviceId,  // 断开蓝牙
      success: () => {
        this.setData({
          ifConnect:0,
          bikelock:0,
        })
        wx.switchTab({
          url: '/pages/equipment/equipment',
        });
      },
    })
  },

  //-----------------计算速度，里程的函数----------------
  itineraryCalculate:function(data){
    const calculatedValue = (3.14 * data * 0.4) / 1000;
    this.setData({
      itinerary:parseFloat(calculatedValue.toFixed(1))
    });
  },

  speedCalculate:function(data1,data2){
    const calculatedValue = ((data1-data2)*3.14*0.4)/0.3/3.6;
    const speed = Math.ceil(calculatedValue); // 向上取整

    const speed1 = Math.floor(speed / 10); // 十位数
    const speed2 = speed % 10; // 个位数

    const combinedSpeed = `${speed1}${speed2}`;

    this.setData({
      speed:combinedSpeed
     });
  },

  updateSpeed:function(){                    //每0.3s更新一次速度
    this.speedUpdateInterval = setInterval(() => {
      const data1 = this.data.rotate_Counter;
      const data2 = this.data.lastlyrotate_Counter;

      this.speedCalculate(data1,data2);
    },300);
  },

  stopSpeedUpdate: function() {
    clearInterval(this.speedUpdateInterval); // 停止定时更新
  },

  updateItinerary:function(){
    this.itineraryUpdateInterval = setInterval(() => {
      const data = this.data.rotate_Counter;

      this.itineraryCalculate(data);
    },5000);
  },

  stopItineraryUpdate: function() {
    clearInterval(this.itineraryUpdateInterval); // 停止定时更新
  },
  
  //------------------------计时------------------------------
  startTimer:function(){
    this.setData({
      timer:setInterval(() => {
        this.setData({
          time:this.data.time + 1
        })
      },60000)                  
    });
  },

  stoptimer:function(){
    clearInterval(this.data.timer);
    this.setData({
      timer:null
    });
  },



})