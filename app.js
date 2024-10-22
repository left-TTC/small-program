// app.js
App({
  devices: [],                     // define devices array 
  globalData:{
    userKey:''
  },

  onLaunch: function() {
    this.initializeBluetooth();         // find BLE device when launch
  },
  

//---------------------------------------------------------------------------
  initializeBluetooth: function() {
    wx.openBluetoothAdapter({          //apply for bluetooth search
      success: () => {
        this.bluetoothFind();
        this.upstateSignalStrength();
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

        wx.onBluetoothDeviceFound((res) => {
        const foundDeviceIDs = res.devices.map(device => device.deviceId);
        
        this.devices = this.devices.filter(existingDevice => 
          foundDeviceIDs.includes(existingDevice.deviceID)
        );

        res.devices.forEach(device => {
          const deviceInfo = {
            deviceID: device.deviceId,
            name: device.name || "unknown device",
            signalStrength: device.RSSI || 0
          };
          
          if (!this.devices.some(existingDevice => existingDevice.deviceID === deviceInfo.deviceID)) {
            this.devices.push(deviceInfo);
          }
        });

        this.updateUI();
      });
    }
  });
},

//---------------------------------------------------------------------
  upstateSignalStrength: function() {
    setInterval(() => {
      wx.getBluetoothDevices({
        success: (res) => {
          const devices = res.devices; // 获取所有已发现的设备
          devices.forEach(device => {
            const deviceInList = this.devices.find(d => d.deviceID === device.deviceId);
            if (deviceInList) {
              deviceInList.signalStrength = device.RSSI; // 更新信号强度
            }
          });
          this.updateUI(); // 更新所有页面的 UI
        },
        fail: (err) => {
          console.error('获取设备列表失败:', err);
        }
      });
    }, 2000); // 每秒更新一次
  },

//----------------------------------------------------------------------
  updateUI: function() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1]; // 获取当前页面
    currentPage.setData({
      devices: this.devices // 更新当前页面的设备列表
    });
  },


});
