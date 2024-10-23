// app.js
App({
  globalData:{
    userKey:'',
    devices: [],
  },

  onLaunch: function() {
    this.initializeBluetooth();         // find BLE device when launch
  },
  

//---------------------------------------------------------------------------
  initializeBluetooth: function() {
    wx.openBluetoothAdapter({          //apply for bluetooth search
      success: () => {
        this.bluetoothFind();
      },
      fail: () => {    
        wx.showToast({
          title: '无法开启蓝牙',
          icon: 'none',
          duration: 1000,
        }); 
      }
    }); 
  },

  bluetoothFind: function() {
    wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      interval: 3000,
      powerLevel: 0,
      services: ['E0FF'],                             //only find XLBLE
      success: () => {
        console.log("初始化正常")
        wx.onBluetoothDeviceFound((res) => {
        const foundDeviceIDs = res.devices.map(device => device.deviceId);
        
        this.globalData.devices = this.globalData.devices.filter(existingDevice => 
          foundDeviceIDs.includes(existingDevice.deviceID)
        );

        res.devices.forEach(device => {
          const deviceInfo = {
            deviceID: device.deviceId,
            name: device.name || "unknown device",
            signalStrength: device.RSSI || 0
          };
          
          if (!this.globalData.devices.some(existingDevice => existingDevice.deviceID === deviceInfo.deviceID)) {
            this.globalData.devices.push(deviceInfo);
          }
        });

        this.updateUI();
      });
    }
  });
},

//----------------------------------------------------------------------
  updateUI: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1]; // 获取当前页面
    currentPage.setData({
      devices: this.globalData.devices // 更新当前页面的设备列表
    });
  },


});
