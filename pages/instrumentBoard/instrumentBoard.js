// pages/instrumentBoard/instrumentBoard.js
Page({
  data: {
    deviceId: '',
    serviceId: '',
    devices:[],
    characteristicId1: '',
    characteristicId2: '',
    device: {
      name: '',
      signalStrength: 70
    },
    rotate_Counter: 88,                //用于接收传递过来的轮转数
    lastlyrotate_Counter:0,
    itinerary:0,
    speed:'',
    time:0,
    timer:null,
    price:'10coins',
    batteryPower:'检测中',
    batteryPowerPercentage:80,
    mileageavailable:'检测中',
    Batterylockstate:-1,
    ifConnect:0,          //启动状态
    devicecon:0,          //是否连接到车    
    showingModal:true,
    showingUserModal:false,        //用户界面弹窗
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadDevices();
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
//-----------------------寻找设备的连接函数-------------------------
//总函数
aroundDeviceBluetoothConnect:function(event){
    const device = event.currentTarget.dataset.device;
    const deviceID = device.deviceID;
    const { name , signalStrength} = device;
 
    this.DoforDevice(deviceID, name, signalStrength);
    this.hideModal();

    wx.setNavigationBarTitle({
      title: name,
    })
},

changeDevice:function(){
  this.showModal();
},

//------------------用于连接与获取必须的信息-------------------------
DoforDevice:function(deviceID){
  //1.连接蓝牙
  wx.createBLEConnection({
    deviceId: deviceID,
    fail:()=>{
      wx.showToast({
        title: '连接失败了',
        icon:'none',
        duration:1000,
      })
    },
    success:()=>{
      this.getServices(deviceID);           //2.获取服务
    },
  })
},

getServices:function(deviceID){
  wx.getBLEDeviceServices({
    deviceId: deviceID,
    success:(res)=>{
      if (res.services.length > 0) {
        const serviceId = res.services[0].uuid;        
        this.getCharacteristics(deviceID, serviceId);                 //3.获取特征ID
      }
    },
  })
},


getCharacteristics: function(deviceId, serviceId){
  wx.getBLEDeviceCharacteristics({
    deviceId: deviceId,
    serviceId: serviceId,
    success:(res)=>{
      console.log('获取特征响应:', res);
      if (res.characteristics.length > 0){
        const characteristicIds = [];
        res.characteristics.forEach(characteristics => {
          characteristicIds.push(characteristics.uuid); // 收集特征的UUID
        });
        this.updateDeviceInformation(deviceId, serviceId, characteristicIds); // 只调用一次
      } 
    },
  })
},

updateDeviceInformation: function(deviceId, serviceId, characteristicIds) {
  const char1 = characteristicIds.length > 0 ? characteristicIds[0] : null;
  const char2 = characteristicIds.length > 1 ? characteristicIds[1] : null;

  this.setData({
    deviceId: deviceId,
    serviceId: serviceId,
    characteristicId1: char1,
    characteristicId2: char2,
  }, () =>{
    this.listentoBlue();
    this.startSignalStrengthUpdate();
  });
},
//------------------用于蓝牙设备功能的启用------------------
//收取信息
listentoBlue:function(){
  wx.notifyBLECharacteristicValueChange({
    deviceId: this.data.deviceId,
    serviceId: this.data.serviceId,
    characteristicId: this.data.characteristicId2,
    state: true,
    success: (_res) => {
      this.setData({
        devicecon:1,
      })
    },
  });

    wx.onBLECharacteristicValueChange((characteristic) => {
      const data = this.bufferToString(characteristic.value); 
      console.log(data);
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
      }
    }
    if(data.includes('ready')){
      this.startTimer();                        //如果回应已经开始供电，则开始计时
    }
  },
//发信息
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
    fail: () => {
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

bikelockCommand:function(event){
  const command = event.currentTarget.dataset.command; 
  console.log(command);
  this.sendData(command);
},

bikelockCommandstart:function(event){
  const command = event.currentTarget.dataset.command; 
  console.log(command);
  this.sendData(command);
  this.setData({
    ifConnect:1
  })
},

bikelockCommandclose:function(event){
  const command = event.currentTarget.dataset.command; 
  console.log(command);
  this.sendData(command);
  this.stoptimer();
  this.setData({
    ifConnect:0
  })
},
//--------------------用于刷新信号-------------------------
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

  //--------------------连接弹窗------------------
  showModal:function() {
    this.setData({
      showingModal: true
    });
    console.log(this.data.showingModal)
  },

  hideModal:function() {
    this.setData({
      showingModal:false
    })
  },
  //---------------更新设备列表----------------
  loadDevices: function() {
    const app = getApp();
    this.setData({
      devices: app.devices // 从全局获取设备列表
    });
  },



})