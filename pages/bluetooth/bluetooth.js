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
    signalUpdateInterval: null ,// 存储定时器ID
},

//------------------------------onload-------------------------------
  onLoad: function(options) {
    console.log("no");
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
    this.startSignalStrengthUpdate();         
 },

 onReady:function(){
  wx.setNavigationBarTitle({
    title:"设备功能",
  }); 
},

onShow:function(){
  const app = getApp();
  this.setData({
    Batterylockstate:app.globalData.batterylockstate
  })
},

onHide:function(){

},

onUnload:function(){
  console.log("yes");
},


//---------------------------------fun-------------------
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

  listentoBlue:function(){
    wx.notifyBLECharacteristicValueChange({
      deviceId: this.data.deviceId,
      serviceId: this.data.serviceId,
      characteristicId: this.data.characteristicId2,
      state: true,
      success: (_res) => {
        wx.showToast({
          title: '正在监听Bike',                
          icon: 'none',
          duration: 1000,
        });
      },
      fail: (_err) => {
        wx.showToast({
          title: '无法监听Bike',
          icon: 'none',
          duration: 1000,
        });
      }
    });

    wx.onBLECharacteristicValueChange((characteristic) => {
      const data = this.bufferToString(characteristic.value);
       this.receivedData(data); 
       this.judgelisten(data);
      });
  },

  sendCommandAndGoToInstrumentBoard:function(event){
    this.sendCommand(event);
    this.gotoInstrumentboard();
  },

  sendCommand: function(event) {  
    const command = event.currentTarget.dataset.command; 
    this.sendData(command);
  },

  gotoInstrumentboard: function() {
    wx.navigateTo({
      url: `/pages/instrumentBoard/instrumentBoard?deviceId=${this.data.deviceId}&serviceId=${this.data.serviceId}&characteristicId1=${this.data.characteristicId1}&characteristicId2=${this.data.characteristicId2}&name=${this.data.device.name}&signalStrength=${this.data.device.signalStrength}`
    });
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


//---------------------wx.onBLECharacteristicValueChange------------------
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

  receivedData: function(data) {
    this.setData({
        receivedData: data
    });
  },
//----------------------judge----------------------
judgelisten:function(data){
  if(data.includes('battery2')){
    this.setData({
      Batterylockstate:0
    })
  }
  else if(data.includes('battery1')){
    this.setData({
      Batterylockstate:1
    })
  }
  const app = getApp();
  app.globalData.batterylockstate = this.data.Batterylockstate
},

});
