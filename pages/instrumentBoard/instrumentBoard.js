// pages/instrumentBoard/instrumentBoard.js
import ethers from '../../dist/ethers.js';
import CryptoJS from '../../dist/crypto-js.js';   //aes加密

Page({
  data: {
    deviceId: '',
    serviceId: '',
    devices:[],
    characteristicId1: '',
    characteristicId2: '',
    device: {
      name: '',
      signalStrength: 70
    },
    rotate_Counter: 0,                //用于接收传递过来的轮转数
    lastlyrotate_Counter:0,
    itinerary:0,
    speed:'00',
    time:0,
    timer:null,
    price:'10coins',
    batteryPowerPercentage:100,
    mileageavailable:'检测中',
    Batterylockstate:-1,
    ifConnect:0,          //启动状态
    devicecon:0,          //是否连接到车    
    showingModal:true,  //连接弹窗
    showingUserModal:false,        //用户界面弹窗
    ifUserLoad:false,      //用户是否登录
    ifRegisterAction:false,       //是否是注册行为 
    ifLoadAction:false,          //是否是登录行为
    mnemonic:'',//助记词
    password:'',//密码
    iconSrc1:'',//展示助记词格式是否正确图片的路径
    iconSrc2:'',//展示密码格式是否正确图片的路径
    passwordOK:false,//说明密码可以使用
    mnemonicOK:false,//说明助记词可以使用
    privateKey:'',//私钥，由助记词生成   ns
    wallet:'',//钱包，相当于账户     ns
    userName:'BIKEUSER',//用户名   ns
    userPhoto:'',//用户头像     ns
    lastlyConnectBLE:'',    //ns
    lastlyConnectBLEID:'',//上次连接设备的名字 ns
    connectingName:'未连接',      //最多显示6个字
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.wheatherHaveWallet();
    this.updateCircle(this.data.batteryPowerPercentage);
  },

  //读取内存是否有账号
  wheatherHaveWallet:function(){
    const wallet = wx.getStorageSync('walletAddress');
    if (wallet) {
      // 如果钱包地址存在
      console.log('钱包地址已存储:', wallet);
      this.setData({
        ifUserLoad:true,
      })
      this.updateLoadUser();
  } else {
      // 如果钱包地址不存在
      console.log('没有存储钱包地址');
      return false; // 返回 false，表示没有钱包地址
  }
  },

  updateLoadUser:function(){
    const encryptPrivateKey = wx.getStorageSync('encryptedPrivateKeyEncryptedn');  //调取私钥
    const iv = wx.getStorageSync('encryptedPrivateKeyIv');   //调取iv
    const passWord = wx.getStorageSync('passWord');

    const privateKey = this.decryptPrivateKey(encryptPrivateKey,iv,passWord);
    const wallet = new ethers.Wallet(privateKey);

    this.setData({              //上号更新私钥和完整钱包
      privateKey:privateKey,
      wallet:wallet,
    })   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.loadDevices();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.checkConnectionStatusInterval = setInterval(() => {
      const currentApp = getApp();
      console.log('正在计时')
      if (currentApp.ifCounldConnect === true) {
        this.automaticLink();
        clearInterval(this.checkConnectionStatusInterval);
      }
    }, 500);
  },

  //自动连接最后一次使用的设备（如果在范围内）
  automaticLink:function(){
    const lastlyConnectBLE = wx.getStorageSync('lastlyConnectBLE');
    const lastlyConnectBLEID = wx.getStorageSync('lastlyConnectBLEID');
    if(lastlyConnectBLE != '' && this.data.ifUserLoad === true){
        this.DoforDevice(lastlyConnectBLE,lastlyConnectBLEID)
        this.setData({
          showingModal:false
        })
    }
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
//-----------------------寻找设备的连接函数-------------------------
//总函数
aroundDeviceBluetoothConnect:function(event){
    const device = event.currentTarget.dataset.device;
    const deviceID = device.deviceID;
    const { name } = device;
    this.DoforDevice(deviceID,name);
    this.hideModal();
},

changeDevice:function(){
  this.showModal();
},

//------------------用于连接与获取必须的信息-------------------------
DoforDevice:function(deviceID,name){
  //1.连接蓝牙
  wx.createBLEConnection({
    deviceId: deviceID,
    fail:()=>{
      wx.showToast({
        title: '连接失败了',
        icon:'none',
        duration:1000,
      })
    },
    success:()=>{
      this.getServices(deviceID);           //2.获取服务
      this.setData({
        lastlyConnectBLE:deviceID,
        lastlyConnectBLEID:name,
        connectingName:name
      })
      console.log(this.data.connectingName)
    },
  })
},

getServices:function(deviceID){
  wx.getBLEDeviceServices({
    deviceId: deviceID,
    success:(res)=>{
      if (res.services.length > 0) {
        const serviceId = res.services[0].uuid;        
        this.getCharacteristics(deviceID, serviceId);                 //3.获取特征ID
      }
    },
  })
},

getCharacteristics: function(deviceId, serviceId){
  wx.getBLEDeviceCharacteristics({
    deviceId: deviceId,
    serviceId: serviceId,
    success:(res)=>{
      console.log('获取特征响应:', res);
      if (res.characteristics.length > 0){
        const characteristicIds = [];
        res.characteristics.forEach(characteristics => {
          characteristicIds.push(characteristics.uuid); // 收集特征的UUID
        });
        this.updateDeviceInformation(deviceId, serviceId, characteristicIds); // 只调用一次
      } 
    },
  })
},

updateDeviceInformation: function(deviceId, serviceId, characteristicIds) {
  const char1 = characteristicIds.length > 0 ? characteristicIds[0] : null;
  const char2 = characteristicIds.length > 1 ? characteristicIds[1] : null;

  this.setData({
    deviceId: deviceId,
    serviceId: serviceId,
    characteristicId1: char1,
    characteristicId2: char2,
  }, () =>{
    this.listentoBlue();
    this.startSignalStrengthUpdate();
    wx.setStorageSync('lastlyConnectBLE', this.data.lastlyConnectBLE);
    wx.setStorageSync('lastlyConnectBLEID', this.data.lastlyConnectBLEID);
  });
},

//------------------用于蓝牙设备功能的启用------------------
//收取信息
listentoBlue:function(){
  wx.notifyBLECharacteristicValueChange({
    deviceId: this.data.deviceId,
    serviceId: this.data.serviceId,
    characteristicId: this.data.characteristicId2,
    state: true,
    success: (_res) => {
      this.setData({
        devicecon:1,
      })
    },
  });

    wx.onBLECharacteristicValueChange((characteristic) => {
      const data = this.bufferToString(characteristic.value); 
      console.log(data);
      this.judgelisten(data);
      });
  },

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
    if(data.includes('R:')){               //将轮转数提取出来
      console.log('have')
      this.setData({
        lastlyrotate_Counter:this.data.rotate_Counter,   //保留上一次的值
      });
      const mileageMatch = data.match(/R:\s*(\d+)/);
      if (mileageMatch) {
        const mileage = parseInt(mileageMatch[1], 10);
        this.setData({
          rotate_Counter: mileage
        });
      }
    }
    if(data.includes('ready')){
      this.startTimer();                        //如果回应已经开始供电，则开始计时
    }
  },
//发信息
sendCommand: function(event) {  
  const command = event.currentTarget.dataset.command; 
  this.sendData(command);
},

sendsecretCommandToOpenBatteryLock:function(event){
  const command = event.currentTarget.dataset.command;
  const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command:command
  }
  var cmdstr=JSON.stringify(cmd)
  const signature =  this.data.wallet.signMessageSync(cmdstr);
  const obj = {
    cmd:cmdstr,
    PubKey: this.data.wallet.signingKey.publicKey,
    signature:signature,
    address:this.data.wallet.address
};
  const jsonString = JSON.stringify(obj) + '\n';
  console.log(jsonString);
  this.sendData(jsonString);
},

sendsecretCommandToStartDrive:function(event){
  const command = event.currentTarget.dataset.command;
  const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command:command
  }
  var cmdstr=JSON.stringify(cmd)
  const signature =  this.data.wallet.signMessageSync(cmdstr);
  const obj = {
    cmd:cmdstr,
    PubKey: this.data.wallet.signingKey.publicKey,
    signature:signature,
    address:this.data.wallet.address
};
const jsonString = JSON.stringify(obj) + '\n';
console.log(jsonString);
this.sendData(jsonString);
  this.setData({
    ifConnect:1
  })
},

sendsecretCommandToStopDrive:function(event){
  const command = event.currentTarget.dataset.command;
  const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command:command
  }
  var cmdstr=JSON.stringify(cmd)
  const signature =  this.data.wallet.signMessageSync(cmdstr);
  const obj = {
    cmd:cmdstr,
    PubKey: this.data.wallet.signingKey.publicKey,
    signature:signature,
    address:this.data.wallet.address
};
const jsonString = JSON.stringify(obj) + '\n';
console.log(jsonString);
this.sendData(jsonString);
  this.stoptimer();
  this.setData({
    ifConnect:0
  })
},

sendData: function(command) {
  wx.writeBLECharacteristicValue({
    characteristicId: this.data.characteristicId1,
    deviceId: this.data.deviceId,
    serviceId: this.data.serviceId,
    value: this.stringToBuffer(command),
    fail: () => {
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

bufferToString: function(buffer) {
  const dataView = new Uint8Array(buffer);
  return String.fromCharCode.apply(null, dataView);
},

//--------------------用于刷新信号-------------------------
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


//------------------used to convert-----------------
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
        this.animateCircle(percentage);
        this.setData({
          batteryPowerPercentage:percentage
        });
      }
    }
  },
  //-----------------计算速度，里程的函数----------------
  itineraryCalculate:function(data){
    const calculatedValue = (3.14 * data * 0.4) / 1000;
    this.setData({
      itinerary:parseFloat(calculatedValue.toFixed(1))
    });
  },

  speedCalculate:function(data1,data2){
    const calculatedValue = ((data1-data2)*3.14*0.4)/0.3/3.6;
    const speed = Math.ceil(calculatedValue); // 向上取整
    const speed1 = Math.floor(speed / 10); // 十位数
    const speed2 = speed % 10; // 个位数
    const combinedSpeed = `${speed1}${speed2}`;
    this.setData({
      speed:combinedSpeed
     });
  },

  updateSpeed:function(){                    //每0.3s更新一次速度
    this.speedUpdateInterval = setInterval(() => {
      const data1 = this.data.rotate_Counter;
      const data2 = this.data.lastlyrotate_Counter;
      this.speedCalculate(data1,data2);
    },300);
  },

  stopSpeedUpdate: function() {
    clearInterval(this.speedUpdateInterval); // 停止定时更新
  },

  updateItinerary:function(){
    this.itineraryUpdateInterval = setInterval(() => {
      const data = this.data.rotate_Counter;

      this.itineraryCalculate(data);
    },5000);
  },

  stopItineraryUpdate: function() {
    clearInterval(this.itineraryUpdateInterval); // 停止定时更新
  },
  
  //------------------------计时------------------------------
  startTimer:function(){
    this.setData({
      timer:setInterval(() => {
        this.setData({
          time:this.data.time + 1
        })
      },60000)                  
    });
  },

  stoptimer:function(){
    clearInterval(this.data.timer);
    this.setData({
      timer:null
    });
  },

  //--------------------连接弹窗------------------
  showModal() {
    this.setData({
      showingModal: true
    });
  },

  hideModal:function() {
    this.setData({
      showingModal:false
    })
    this.updateCircle(this.data.batteryPowerPercentage);
  },

  showUserModal:function(){
    this.setData({
      showingUserModal:true
    })
  },

  hideUserModal:function(){
    this.setData({
      showingUserModal:false
    })
    this.updateCircle(this.data.batteryPowerPercentage);
  },

  showRegisterModal:function(){
    this.setData({
      ifRegisterAction:true
    })
  },

  hideRegisterModal:function(){
    this.setData({
      ifRegisterAction:false
    })
  },

  showLoadrModal:function(){
    this.setData({
      ifLoadAction:true
    })
  },

  hideLoadrModal:function(){
    this.setData({
      ifLoadAction:false
    })
  },

  exitRegisterOrLoad:function(){
    this.setData({
      ifLoadAction:false,
      ifRegisterAction:false
    })
  },
  //---------------更新设备列表----------------
  loadDevices: function() {
    const app = getApp();
    this.setData({
      devices: app.devices // 从全局获取设备列表
    });
  },
  //---------------用户登录-------------------
  userLoad:function(){

  },

  //---------------创建账号--------------------

  userRegister:function(){
    this.showRegisterModal()
  },

  onInputRegister:function(event){
    const helpDO = event.detail.value;

    this.setData({
      mnemonic:helpDO
    })

    if (helpDO.length >= 10){
      this.setData({
        iconSrc1:'/image/right.png',
        mnemonicOK:true
      })
    }else if(helpDO.length === 0){
      this.setData({
        iconSrc1:'',
        mnemonicOK:false
      })
    }else{
      this.setData({
        iconSrc1:'/image/error.png',
        mnemonicOK:false
      })
    }
  },

  onInputPassword:function(event){
    const helpDo = event.detail.value;

    this.setData({
      password:helpDo
    })

    if (helpDo.length === 6 && /^\d{6}$/.test(helpDo)){
      this.setData({
        iconSrc2:'/image/right.png',
        passwordOK:true
      })
    }else if(helpDo.length === 0){
      this.setData({
        iconSrc2:'',
        passwordOK:false
      })
    }else{
      this.setData({
        iconSrc2:'/image/error.png',
        passwordOK:false
      })
    }
  },

  walletShow:function(){
    wx.showModal({
      title: '钱包地址',
      content: `${this.data.wallet.address}`,
  });
  },
  //------------web部分-----------------
  onRegister:function(){//用户点击注册
    const privateKey = ethers.sha256(ethers.toUtf8Bytes(this.data.mnemonic));
    const wallet = new ethers.Wallet(privateKey);

    this.setData({                             //此时有数据，相当于已经登录
      privateKey:privateKey,
      wallet:wallet,
      ifUserLoad:true,                        //注册完后更新登录状态，
    })
    console.log('私钥：',this.data.privateKey);
    console.log('钱包：',this.data.wallet);

    const encryptedPrivateKey = this.encryptPrivateKey(privateKey,this.data.password);
    console.log(encryptedPrivateKey);
    const jiemi = this.decryptPrivateKey(encryptedPrivateKey.encrypted,encryptedPrivateKey.iv,this.data.password);
    console.log('jiemi:',jiemi);

    wx.setStorageSync('encryptedPrivateKeyIv', encryptedPrivateKey.iv);     //存储iv
    console.log('存储的加密私钥:', encryptedPrivateKey.iv);
    wx.setStorageSync('encryptedPrivateKeyEncryptedn', encryptedPrivateKey.encrypted);//储存私钥
    console.log('存储的IV:', encryptedPrivateKey.encrypted);
    wx.setStorageSync('walletAddress', wallet.address);      //存储钱包地址
    wx.setStorageSync('passWord',this.data.password);     //存储密码
    this.hideRegisterModal();
    
  },
//用于生成随机数的方法
  generateRandomNumber:function() {        
    let iv = '';
    for (let i = 0; i < 16; i++) {
        const byte = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        iv += byte;
    }
    return CryptoJS.enc.Hex.parse(iv);
},
//加密函数
  encryptPrivateKey: function(privateKey, passWord) {
    const hash = ethers.sha256(ethers.toUtf8Bytes(passWord));
    const key16 = CryptoJS.enc.Hex.parse(hash.slice(2, 34)); // 将前32个字符（16字节）转换为WordArray
    const iv = this.generateRandomNumber();
    console.log('iv:',iv.toString(CryptoJS.enc.Base64));
    const encrypted = CryptoJS.AES.encrypt(privateKey, key16, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return {
      iv: iv.toString(CryptoJS.enc.Base64),
      encrypted: encrypted.toString(), // 返回加密后的密钥
    };
},
//解密函数
  decryptPrivateKey:function(encryptedPrivateKey, iv, password) {
    const hash = ethers.sha256(ethers.toUtf8Bytes(password));
    const key16 = CryptoJS.enc.Hex.parse(hash.slice(2, 34));
    const ivword = CryptoJS.enc.Base64.parse(iv);

    const decrypted = CryptoJS.AES.decrypt(encryptedPrivateKey, key16, {
        iv: ivword,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);            //返回解密后的私钥
},

//电池圈的组件
changeBatteryLevel: function() {
  const newLevel = Math.floor(Math.random() * 101); // 随机生成 0-100 的电量
  this.animateCircle(newLevel); // 启动动画
},
// 动画填充电量
animateCircle: function(newLevel) {
  const targetLevel = newLevel; // 目标电量
  const duration = 1000; // 动画持续时间（毫秒）
  const frameCount = 30; // 帧数
  const startLevel = this.data.currentLevel; // 初始电量
  const change = targetLevel - startLevel; // 变化量
  let currentFrame = 0; // 记录帧数

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animate = () => {
    if (currentFrame < frameCount) {
      const progress = currentFrame / frameCount; // 当前进度
      const easedProgress = easeInOutQuad(progress); // 应用缓动效果
      const newLevel = startLevel + change * easedProgress; // 计算新的电量

      this.setData({ currentLevel: newLevel }); // 更新当前电量
      this.updateCircle((newLevel / 100) * 2 * Math.PI); // 绘制当前电量的角度

      currentFrame++;
      setTimeout(animate, duration / frameCount); // 设置下一帧
    } else {
      this.setData({ currentLevel: targetLevel }); // 确保最终值
      this.updateCircle((targetLevel / 100) * 2 * Math.PI); // 最后一次更新
    }
  };

  this.setData({ currentLevel: 0 }); // 确保从 0 开始
  animate(); // 启动动画
},
updateCircle: function(angle) {
  const ctx = wx.createCanvasContext('batterycanvas', this);
  // 获取容器的尺寸
  const query = wx.createSelectorQuery();
  query.select('.batteryBlock').boundingClientRect((rect) => {
    const centerX = rect.width / 2;  // 容器宽度的一半
    const centerY = rect.height /5*2; // 容器高度的一半
    ctx.clearRect(0, 0, rect.width, rect.height);
    // 绘制背景圈
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI);
    ctx.setStrokeStyle('#ebf5ed');
    ctx.setLineWidth(15);
    ctx.stroke();
    // 绘制电量圈
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, -Math.PI / 2, angle - Math.PI / 2);
    ctx.setStrokeStyle('#9ACD32');
    ctx.setLineWidth(15);
    ctx.stroke();
    ctx.draw();
  }).exec();
}
})