// app.js
App({
  equipments: [],                     // define devices array 
  sendfunctionNeed: [],               // used to save the information in (equipment.js) 

  onLaunch: function() {
    this.initializeBluetooth();         // find BLE device when launch
  },
  
  initializeBluetooth: function() {
    wx.openBluetoothAdapter({          //apply for bluetooth search
      success: () => {
        this.bluetoothFind();
      },
      fail: (err) => {        
      }
    }); 
  },

  bluetoothFind: function() {
    wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      interval: 0,
      powerLevel: 0,
      services: [],
      success: () => {
      },
      fail: (err) => {
      }
    });
  
    wx.onBluetoothDeviceFound((res) => {
      console.log("Found devices:", res.devices);
      res.devices.forEach(device => {
        const deviceInfo = {
          deviceID: device.deviceId,
          name: device.name || "unknown device",            //such as XLBLE
          signalStrength: device.RSSI || 0                  //number
        };
  
        const exists = this.equipments.some(existingDevice => existingDevice.deviceID === deviceInfo.deviceID);
        if (!exists) {
          this.equipments.push(deviceInfo);                    //if the equipment does not already exist,add
          // Update data on the page
          const app = getApp();
          app.equipments = this.equipments; // update global equipment list
        }
      });
      
      // Update UI on the page
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1]; // Get current page
      currentPage.setData({
        devices: this.equipments // Assuming you are updating the device list on the current page
      });
    });
  }
});
