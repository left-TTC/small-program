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
    rotate_Counter: 0                //用于接收传递过来的轮转数
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.setNavigationBarTitle({
      title:"仪表盘",
    }); 
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
//--------------------------------------------------------------------
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
      console.log(data); 
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
      const mileageMatch = data.match(/Mileage:\s*(\d+)/);
      if (mileageMatch) {
        const mileage = parseInt(mileageMatch[1], 10);
        this.setData({
          rotate_Counter: mileage
        });
      }
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

  
})