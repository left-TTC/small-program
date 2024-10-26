// app.js
App({
  devices: [],

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
      services: [], // 只查找特定服务的设备
      success: () => {
        console.log("初始化正常");
        
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
  
        // 监听到设备
        wx.onBluetoothDeviceFound((res) => {
          const foundDevices = res.devices.map(device => ({
            deviceID: device.deviceId,
            name: device.name || "unknown device",
            signalStrength: device.RSSI || 0
          }));
  
          // 确保 existingDevices 是一个数组
          const existingDevices = Array.isArray(currentPage.data.devices) ? currentPage.data.devices : [];
  
          // 更新当前页面的设备列表
          const updatedDevices = existingDevices
            .filter(existingDevice => 
              foundDevices.some(foundDevice => foundDevice.deviceID === existingDevice.deviceID) // 保留存在的设备
            )
            .concat(foundDevices.filter(foundDevice => // 添加新发现的设备
              !existingDevices.some(existingDevice => existingDevice.deviceID === foundDevice.deviceID)
            ));
  
          // 更新设备列表
          currentPage.setData({
            devices: updatedDevices
          });
        });
      },
      fail: () => {
        console.log("启动蓝牙设备发现失败");
      }
    });
  },

//----------------------------------------------------------------------


});