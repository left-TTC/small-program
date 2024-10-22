Page({
  data: {
    devices: {},
    receivedData: '',
    deviceId: '',
    serviceId: '',
    characteristicId1: '',
    characteristicId2: '',
    Batterylockstate:-1,
    price:'10coins',
    mileageavailable:"检测中",
    device: {
      name: '',
      signalStrength: 0
    },
    signalUpdateInterval: null ,// 存储定时器ID
    batteryPower:'检测中',
    batteryPowerPercentage:'检测中',
    userKey:'',
},

//------------------------------onload-------------------------------
  onLoad: function(options) {
    const { deviceId, serviceId, characteristicId1, characteristicId2, name, signalStrength,price } = options;
    this.setData({
      deviceId: deviceId,
      serviceId: serviceId,
      characteristicId1: characteristicId1,                //write 
      characteristicId2: characteristicId2,                //notify
      price:price,
      device: {
        name: name,
        signalStrength: signalStrength
      },
      userKey: getApp().globalData.userKey,
    });
    this.listentoBlue();
    this.startSignalStrengthUpdate();  
    this.sendSecrectCommand();
    console.log(userKey);       
 },

 onReady:function(){
  wx.setNavigationBarTitle({
    title:"详情",
  }); 
},

onShow:function(){

},

onHide:function(){

},

onUnload: function() {
  wx.closeBLEConnection({
    deviceId: this.data.deviceId,
  });
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
      url: `/pages/instrumentBoard/instrumentBoard?deviceId=${this.data.deviceId}&serviceId=${this.data.serviceId}&characteristicId1=${this.data.characteristicId1}&characteristicId2=${this.data.characteristicId2}&name=${this.data.device.name}&signalStrength=${this.data.device.signalStrength}&batteryPower=${this.data.batteryPower}&mileageavailable=${this.data.mileageavailable}&price=${this.data.price}&Batterylockstate=${this.data.Batterylockstate}&batteryPowerPercentage=${this.data.batteryPowerPercentage}`
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
      Batterylockstate:0          //意味着此时锁是关着的
    })
  }
  else if(data.includes('battery1')){         
    this.setData({
      Batterylockstate:1          //恰恰相反
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
  if (data.includes('BV:')) {
    const match = data.match(/BV:\s*(\d+(\.\d+)?)/);
    if (match) {
      const Power = match[1];  
      this.setData({
        batteryPower: Power
      });
      this.doTobatteryPower(Power);
    }
  }
},

doTobatteryPower:function(data){
  if (data){
    const powerNum = parseFloat(data);
    if(powerNum ){
      let percentage;
      if(powerNum <= 53.4 && powerNum >= 45){
        percentage = Math.floor(100 * (powerNum - 45) / (53.4 - 45));
      }
      else if(powerNum > 53.4){
        percentage = 100
      }
      else{
        percentage = 0
      }
      this.setData({
        batteryPowerPercentage:percentage
      });
    }
  }
},
//-----------------------------------------
generatePrivateKey:function(){
  const { keccak256 } = require('js-sha3');
  const elliptic = require('elliptic');                 //引入库
  const keccakUse = `${this.data.userkey}`;       //结合时间戳和用户名

  const privateKeyHex = keccak256(keccakUse);     //得到私钥
  console.log('Private Key:', privateKeyHex);

  const ec = new elliptic.ec('secp256k1');       //选择与以太坊一样的secp256k1椭圆曲线
  const keyPair = ec.keyFromPrivate(privateKeyHex);     //生成密钥对
  const publicKeyHex = keyPair.getPublic('hex');     //得到公钥
  console.log('Public Key:', publicKeyHex);
},

sendSecrectCommand:function(){
  const data = {
    Address: '0x0e498a179f313918e4a666d55f680a7647101353',
    Message: 'yesss',
    SignatureHash: '0xdae3bf260bcdef02bf0c118da35e433e92f2c01c57b5297f66e1b6ac1be832ea51294b6fb88beec0623a6832a8c99c37e10ecae91d54a8df4ba873521d9546041c',
    time: '12344565'
  };

  const jsonString = JSON.stringify(data);
  console.log(jsonString);
  this.sendData(jsonString);
},






});
