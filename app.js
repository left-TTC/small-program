// app.js
App({
  devices: [],
  ifCounldConnect:false,

  onLaunch: function() {
    this.initializeBluetooth();         // find BLE device when launch
  },
  

//---------------------------------------------------------------------------
  initializeBluetooth: function() {
    wx.openBluetoothAdapter({          //apply for bluetooth search
      success: () => {
        this.bluetoothFind();
        this.ifCounldConnect = true;
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
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        wx.onBluetoothDeviceFound((res) => {
          const foundDevices = res.devices.map(device => ({
            deviceID: device.deviceId,
            name: device.name || "unknown device",
            signalStrength: device.RSSI || 0
          }));
          const existingDevices = Array.isArray(currentPage.data.devices) ? currentPage.data.devices : [];
          const updatedDevices = existingDevices
            .filter(existingDevice => 
              foundDevices.some(foundDevice => foundDevice.deviceID === existingDevice.deviceID) 
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