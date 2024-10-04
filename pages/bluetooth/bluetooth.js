Page({
  data: {
    devices: {},
    receivedData: '',
    deviceId: '',
    serviceId: '',
    characteristicId1: '',
    characteristicId2: ''
  },

  onLoad: function(options) {
    const { deviceId, serviceId, characteristicId1, characteristicId2, name, signalStrength } = options;

    this.setData({
      deviceId: deviceId,
      serviceId: serviceId,
      characteristicId1: characteristicId1,                //write 
      characteristicId2: characteristicId2,                //notify
      device: {
        name: name,
        signalStrength: signalStrength
      }
    });

    wx.notifyBLECharacteristicValueChange({
      deviceId: this.data.deviceId,
      serviceId: this.data.serviceId,
      characteristicId: this.data.characteristicId2,
      state: true,
      success: (res) => {
        wx.showToast({
          title: '正在监听Bike',                
          icon: 'none',
          duration: 1000,
        });
      },
      fail: (err) => {
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
       });
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
      success: (res) => {
        wx.showToast({
          title: '发送成功',
          icon: 'none',
          duration: 1000,
        });
      },
      fail: (err) => {
        wx.showToast({
          title: '发送失败',
          icon: 'none',
          duration: 1000,
        });
        console.error("Failed to send command:", err);
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

  receivedData: function(data) {
    this.setData({
        receivedData: data
    });
  },

});
