// pages/account/account.js
Page({
  data: {
    batteryPower:'',
    Batterylockstate:-1,
    deviceId: '',
    serviceId: '',
    characteristicId1: '',
    characteristicId2: '',
    totalSpend:'',
    itinerary:0,
    time:0,
    price:'',
  },

  onLoad(options) {
    const { deviceId, serviceId, characteristicId1, characteristicId2, batteryPower, price, itinerary, time, Batterylockstate } = options;
    this.setData({
      Batterylockstate:Number(Batterylockstate),
      deviceId:deviceId,
      serviceId:serviceId,
      characteristicId1:characteristicId1,
      characteristicId2,characteristicId2,
      batteryPower:batteryPower,
      price:price,
      itinerary:itinerary,
      time:time
    })
    console.log("Current Batterylockstate:", this.data.Batterylockstate);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title:"结算"
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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

  //----------------function-------------------
  backToHome: function () {
    console.log("成功进入函数")
    if (this.data.Batterylockstate === 1) {
      wx.showModal({
        title: '提示',
        content: '检测到电池锁未关闭',
        cancelText: '返回关闭', // 取消按钮文字
        confirmText: '电池已取', // 确认按钮文字
        success: (res) => {
          if (res.confirm) {
            wx.closeBLEConnection({
              deviceId: this.data.deviceId,  // 断开蓝牙
              success: () => {
                wx.switchTab({
                  url: '/pages/index/index',
                });
              },
              fail: () => {
                wx.showToast({
                  title: '无法断开蓝牙，请重试',
                });
              },
            });
          } else if (res.cancel) {
            wx.showToast({
              title: '为了您的财产安全，请先关锁再进行操作哦',
              icon: 'none',
            });
          }
        },
        fail:(err) =>{
          console.log(err)
        }
      });
    } else if (this.data.Batterylockstate === 0) {
      wx.closeBLEConnection({
        deviceId: this.data.deviceId,  // 断开蓝牙
        success: () => {
          wx.switchTab({
            url: '/pages/index/index',
          });
        },
        fail: () => {
          wx.showToast({
            title: '无法断开蓝牙，请重试',
          });
        },
      });
    }
  },

  listentoBlue:function(){
    wx.notifyBLECharacteristicValueChange({
      deviceId: this.data.deviceId,
      serviceId: this.data.serviceId,
      characteristicId: this.data.characteristicId2,
      state: true,
      fail: (_err) => {
        wx.showToast({
          title: '蓝牙出了点问题O.o',
          icon: 'none',
          duration: 1000,
        });
      }
    });
  
      wx.onBLECharacteristicValueChange((characteristic) => {
        const data = this.bufferToString(characteristic.value); 
        this.judgelisten(data);
        });
    },

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
      else if(data.includes('battery3')){         
        wx.showToast({
          title: '开锁失败了哦，找找有什么问题吧',
          icon: 'none',
          duration: 1000,
        });
      }
      else if(data.includes('battery4')){         
        wx.showToast({
          title: '关锁失败了哦，再试一次',
          icon: 'none',
          duration: 1000,
        });
      }
      if (data.includes('BV:')){
        Power = data.split('BV:')[1].trim() + '%';
        this.setData({
          batteryPower:Power
        })
      }
    },

    bufferToString: function(buffer) {
      const dataView = new Uint8Array(buffer);
      return String.fromCharCode.apply(null, dataView);
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
    

})