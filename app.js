// app.js
App({
  devices: [],
  ifCounldConnect:false,

  onLaunch: function() {
    //this.initializeBluetooth();         // find BLE device when launch
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
      allowDuplicatesKey: false,
      interval: 3000,
      powerLevel: 0,
      services: [], // 只查找特定服务的设备
      success: () => {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        this.ifCounldConnect = true;
        wx.onBluetoothDeviceFound((res) => {
          const foundDevices = res.devices.map(device => ({
            deviceID: device.deviceId,
            name: device.name ,
            signalStrength: device.RSSI || 0
          })).filter(device => device.name.startsWith("BIKE_"));
        const existingDevices = currentPage.data.devices || [];
        const updatedDevices = [...existingDevices];
        foundDevices.forEach(foundDevice => {
          const index = updatedDevices.findIndex(device => device.deviceID === foundDevice.deviceID);
          if (index === -1) {
            updatedDevices.push(foundDevice);  // 新设备加入列表
          } else {
            updatedDevices[index] = foundDevice;  // 更新已有设备信息
          }
        });
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