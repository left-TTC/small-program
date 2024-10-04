Page({
  data: {
    devices: [],
    services: [],
    characteristics: []
  },

  onLoad: function() {
    this.setData({
      devices: getApp().equipments 
    });
  },

  goToBluetooth: function(event) {
    const device = event.currentTarget.dataset.device;
    const deviceID = device.deviceID;
    const { name, signalStrength } = device;

    wx.createBLEConnection({
      deviceId: deviceID,
      success: (res) => {
        this.getServices(deviceID, name, signalStrength); 
      },
      fail: (err) => {
        wx.showToast({
          title: '连接失败',
          icon: 'none',
          duration: 1000,
        });
      }
    });
  },

  getServices: function(deviceId, name, signalStrength) {
    wx.getBLEDeviceServices({
      deviceId: deviceId,
      success: (res) => {
        if (res.services.length > 0) {
          const serviceId = res.services[0].uuid;
          this.updateDeviceService(deviceId, serviceId);
          this.getCharacteristics(deviceId, serviceId, name, signalStrength);
        }
      }
    });
  },

  getCharacteristics: function(deviceId, serviceId, name, signalStrength) {
    wx.getBLEDeviceCharacteristics({
      deviceId: deviceId,
      serviceId: serviceId,
      success: (res) => {
        if (res.characteristics.length > 0) {
          const characteristicIds = [];
          res.characteristics.forEach(characteristic => {
            characteristicIds.push(characteristic.uuid);
            this.updateDeviceCharacteristics(deviceId, serviceId, characteristic.uuid);
          });
          
          wx.navigateTo({
            url: `/pages/bluetooth/bluetooth?deviceId=${deviceId}&serviceId=${serviceId}&characteristicId1=${characteristicIds[0]}&characteristicId2=${characteristicIds[1]}&name=${name}&signalStrength=${signalStrength}`
          });
        }
      }
    });
  },

  updateDeviceService: function(deviceId, serviceId) {
    const services = this.data.services || [];
    const serviceInfo = { deviceId, serviceId };

    const exists = services.some(service => 
      service.deviceId === deviceId && 
      service.serviceId === serviceId
    );

    if (!exists) {
      services.push(serviceInfo);
      this.setData({ services });
    }
  },

  updateDeviceCharacteristics: function(deviceId, serviceId, characteristicId) {
    const characteristics = this.data.characteristics || [];
    const characteristicInfo = { deviceId, serviceId, characteristicId };

    if (!characteristics.some(characteristic => characteristic.characteristicId === characteristicId)) {
      characteristics.push(characteristicInfo);
      this.setData({ characteristics });
    }
  }
});
