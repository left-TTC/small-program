// pages/instrumentBoard/instrumentBoard.js
Page({
  data: {
    devices: {},
    receivedData: '',
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
    latitude:0,
    longtitude:0,
    //markes:[],
    //searchkeyWord:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { deviceId, serviceId, characteristicId1, characteristicId2, name, signalStrength } = options;
    const app = getApp();
    this.setData({
      deviceId: deviceId,
      serviceId: serviceId,
      characteristicId1: characteristicId1,                //write 
      characteristicId2: characteristicId2,                //notify
      Batterylockstate: app.globalData.batterylockstate,
      device: {
        name: name,
        signalStrength: signalStrength
      }
    });
    this.listentoBlue();
    //this.checkLocationAuth();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title:this.data.device.name,
    }); 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.showModal({
      title: '提示',
      content: '将屏幕横向更好使用哦',
      showCancel: false,
      confirmText: '好', 
    });
    //this.locationInterval = setInterval(this.updateLocation, 5000);
    this.updateSpeed();
    this.updateItinerary();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    wx.setScreenOrientation({
      screenOrientation: 'portrait', // 竖屏
    });
    //clearInterval(this.locationInterval); 
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
listentoBlue:function(){
  wx.notifyBLECharacteristicValueChange({
    deviceId: this.data.deviceId,
    serviceId: this.data.serviceId,
    characteristicId: this.data.characteristicId2,
    state: true,
    success: (_res) => {
      wx.showToast({
        title: '可以正常使用',                
        icon: 'none',
        duration: 1000,
      });
    },
    fail: (_err) => {
      wx.showToast({
        title: '蓝牙出了点问题',
        icon: 'none',
        duration: 1000,
      });
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
        Batterylockstate:0
      })
    }
    if(data.includes('battery1')){
      this.setData({
        Batterylockstate:1
      })
    }
    if(data.includes('Mileage:')){               //将轮转数提取出来
      this.setData({
        lastlyrotate_Counter:this.data.rotate_Counter,   //保留上一次的值
      });
      const mileageMatch = data.match(/Mileage:\s*(\d+)/);
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
    const app = getApp();
    app.globalData.batterylockstate = this.data.Batterylockstate
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
    wx.navigateTo({
      url:`/pages/account/account?itinerary=${this.data.itinerary}&time=${this.data.time}`
    });
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
      console.log(this.data.speed);
    },300);
  },

  stopSpeedUpdate: function() {
    clearInterval(this.speedUpdateInterval); // 停止定时更新
  },

  updateItinerary:function(){
    this.itineraryUpdateInterval = setInterval(() => {
      const data = this.data.rotate_Counter;

      this.itineraryCalculate(data);
      console.log(this.data.itinerary);
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
//----------------导航部分------------------
// onInput(event){
//   this.setData({
//     searchkeyWord:event.detail.value
//   });
// },

/*onSearch() {
  const { searchKeyword } = this.data;

  wx.request({
    url: 'https://api.map.baidu.com/place/v2/search', // 这里以百度地图为例
    method: 'GET',
    data: {
      query: searchKeyword,
      location: `${this.data.latitude},${this.data.longitude}`, // 当前用户位置
      radius: 50000, // 搜索半径 50km
      output: 'json',
      ak: '你的百度地图AK' // 替换成你的API密钥
    },
    success: (res) => {
      if (res.data.results && res.data.results.length > 0) {
        const markers = res.data.results.map((item, index) => ({
          id: index + 1,
          latitude: item.location.lat,
          longitude: item.location.lng,
          iconPath: '/resources/marker.png', // 自定义标记图标路径
          width: 50,
          height: 50,
          title: item.name // 标记的标题
        }));
        this.setData({ markers });
      } else {
        wx.showToast({
          title: '未找到相关地点',
          icon: 'none'
        });
      }
    }
  });
},*/

  // updateLocation() {
  //   wx.getLocation({
  //     type: 'gcj02', // 火星坐标系
  //     success: (res) => {
  //       this.setData({
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //       });
  //     },
  //   });
  // },

  // checkLocationAuth() {
  //   wx.getSetting({
  //     success: (res) => {
  //       // 判断用户是否授权定位
  //       if (res.authSetting['scope.userLocation']) {
  //         this.updateLocation(); // 权限已授权，获取位置
  //         this.locationInterval = setInterval(this.updateLocation, 5000); // 每5秒更新位置
  //       } else {
  //         wx.authorize({
  //           scope: 'scope.userLocation',
  //           success: () => {
  //             this.updateLocation(); // 用户授权后获取位置
  //             this.locationInterval = setInterval(this.updateLocation, 5000); // 每5秒更新位置
  //           },
  //           fail: () => {
  //             wx.showToast({
  //               title: '请授权位置信息以继续使用该功能',
  //               icon: 'none',
  //             });
  //           }
  //         });
  //       }
  //     }
  //   });
  // },


})