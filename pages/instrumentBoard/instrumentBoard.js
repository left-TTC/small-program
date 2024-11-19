// pages/instrumentBoard/instrumentBoard.js
import ethers from '../../dist/ethers.js';
import CryptoJS from '../../dist/crypto-js.js';   //aes加密
import drawQrcode from 'weapp-qrcode';

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
    speed:'00',
    batteryPowerPercentage:100,
    mileageavailable:'检测中',
    Batterylockstate:-1,
    ifConnect:0,          //启动状态
    devicecon:0,          //是否连接到车    iNIT 0
    showingModal:true,  //连接弹窗     Init true
    showingUserModal:false,        //用户界面弹窗
    ifUserLoad:false,      //用户是否登录
    ifRegisterAction:false,       //是否是注册行为 
    mnemonic:'',//助记词
    password:'',//密码
    mnemonicAgain:'',
    iconSrc1:'',//展示助记词格式是否正确图片的路径
    iconSrc2:'',//展示密码格式是否正确图片的路径
    iconSrc3:'',//展示确认助记词是否正确的路径
    passwordOK:false,//说明密码可以使用
    mnemonicOK:false,//说明助记词可以使用
    mnemonicAgainOK:false,//说明再次输入没有问题
    privateKey:'',//私钥，由助记词生成   ns
    wallet:'',//钱包，相当于账户     ns
    userName:'BIKEUSER',//用户名   ns
    userPhoto:'',//用户头像     ns
    lastlyConnectBLE:'',    //ns
    connectingName:'检测中',      //最多显示6个字
    UUIDOfSTM:'',//本次链接设备的UUID(STM32的CPU序列号)
    UsingDeviceChat:'',
    UsingDevicePhone:'',
    RentDeviceChat:'',//租借车的微信号
    RentDevicePhone:'',
    UsingcarVersion:'',//存放当前车辆软件版本号
    Phone:'',//用于临时储存输入的电话号码
    chat:'',
    connectingDeviceID:'',
    jsonDataString: '',   // 用于存储 JSON 数据的字符串
    isCollecting: true,  //是否需要继续连接字段
    ifUserInfo:false,    //是否已经储存账户信息
    ifShowUserInfo:false,//点击跳跃到基本信息栏
    ifMyDevice:false,    //显示为是否为我的车  init:false
    showingRentModal:false,//是否显示出借相关弹窗
    rentAddressInput:'',
    ifOpenBattery:'no',
    RentDay:'',
    RentTime:'',
    ifTrustRent:'no',
    showChangePAW:false ,//进入具体修改电话和微信的界面
    ifRentopenBattery:'',//记录如果是租界用户能不能开座舱锁
    whenRentCanUsedTo:'',//记录租借用户可以使用设备到什么时候
    showNeedRentModal:false,//需要借用设备时展示
    showTransferDevice:false,//转让设备界面
    transformInput:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getApp().initializeBluetooth();
    this.wheatherHaveWallet();
    //this.updateCircle(this.data.batteryPowerPercentage);
  },
  //读取内存是否有账号
  wheatherHaveWallet:function(){
    const wallet = wx.getStorageSync('walletAddress');
    if (wallet) {
      console.log('钱包地址已存储:', wallet);
      this.setData({ifUserLoad:true,})
      this.updateLoadUser();
  } else {
      console.log('没有存储钱包地址');
      this.setData({
        showingUserModal:true,
        ifRegisterAction:true
      })
  }
  },updateLoadUser:function(){
    const encryptPrivateKey = wx.getStorageSync('encryptedPrivateKeyEncryptedn');  //调取私钥
    const iv = wx.getStorageSync('encryptedPrivateKeyIv');   //调取iv
    const passWord = wx.getStorageSync('passWord');
    const privateKey = this.decryptPrivateKey(encryptPrivateKey,iv,passWord);
    const wallet = new ethers.Wallet(privateKey);
    const StorePhone = wx.getStorageSync('UsingDeviceChat');
    const StoreChat = wx.getStorageSync('UsingDevicePhone');
    this.setData({              //上号更新私钥和完整钱包
      privateKey:privateKey,
      wallet:wallet,
      UsingDeviceChat:StorePhone,
      UsingDevicePhone:StoreChat, 
    })   
  },

  onReady() {
    this.loadDevices();
    if(this.data.UsingDevicePhone!='' && this.data.UsingDeviceChat!=''){this.setData({ifUserInfo:true})}
  },
 
  onShow() {
    this.checkConnectionStatusInterval = setInterval(() => {
      const currentApp = getApp();
      if (currentApp.ifCounldConnect === true) {
        this.automaticLink();
        clearInterval(this.checkConnectionStatusInterval);
      }
    }, 500);
  },
  //自动连接最后一次使用的设备（如果在范围内）
  automaticLink:function(){
    const lastlyConnectBLE = wx.getStorageSync('lastlyConnectBLE');
    if(lastlyConnectBLE != '' && this.data.ifUserLoad === true){
        this.FindConnectingAndReConnect(lastlyConnectBLE)
        this.setData({
          showingModal:false
        })
    }
  },FindConnectingAndReConnect:function(data){
    wx.getConnectedBluetoothDevices({
      services: [],
      success:(res)=>{
        if(res.devices.length>0){
          wx.closeBLEConnection({
            deviceId: res.devices.deviceID,
            success:(res)=>{
              console.log('已关闭残留设备:',res.devices.deviceID)
              this.DoforDevice(data,null);
            }
          })
        }else{this.DoforDevice(data,null);}
      }
    })
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
    console.log(this.data.connectingDeviceID)
      wx.closeBLEConnection({
        deviceId: this.data.connectingDeviceID,
      })
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
  wx.getConnectedBluetoothDevices({ //get connecting device
    services: [],
    success:(res)=>{
      console.log('已检测');
      if(res.devices.length>0){ //means device noy 
        console.log('有残留设备');
        console.log(res);
        wx.closeBLEConnection({
          deviceId: res.devices.deviceID,
          success:()=>{
            console.log('已断开残留的BLE')
            const device = event.currentTarget.dataset.device;
            const deviceID = device.deviceID;
            const { name } = device;
            this.DoforDevice(deviceID,name);
            this.hideModal();
          },fail:()=>{console.log('不能关闭')}
        })
      }else{
        console.log(res);
        console.log('无残留设备');
        const device = event.currentTarget.dataset.device;
        const deviceID = device.deviceID;
        const { name } = device;
        this.DoforDevice(deviceID,name);
        this.hideModal();
      }
    },fail:(err)=>{
      console.log("获取失败",err)
    }
  })
},
changeDevice:function(){this.showModal()},
//------------------用于连接与获取必须的信息-------------------------
DoforDevice:function(deviceID,name){
  //1.连接蓝牙
  wx.createBLEConnection({
    deviceId: deviceID,
    connectionPriority:'high',
    fail:()=>{
      wx.showToast({
        title: '连接失败了',
        icon:'none',
        duration:1000,
      })
    },
    success:()=>{
      console.log("成功连接")
      this.getServices(deviceID);           //2.获取服务
      this.setData({
        lastlyConnectBLE:deviceID,
        connectingName:name,
        connectingDeviceID:deviceID,
      })
      console.log(this.data.connectingDeviceID)
    },
  })
},
getServices:function(deviceID){
  wx.getBLEDeviceServices({
    deviceId: deviceID,
    success:(res)=>{
      if (res.services.length > 0) {
        const targetService = res.services.find(service => service.uuid.startsWith('0000FFE0')); //过滤标准服务ID
        if(targetService){
          const serviceID = targetService.uuid;
          this.getCharacteristics(deviceID, serviceID);  // 获取特征ID
          console.log('成功得到服务：',serviceID);
        }else{console.log('没有满足的服务')}
      }
    },fail:(err)=>{console.log('没能得到服务:',err)}
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
        //console.log('特征1：',characteristicIds[0]);
        //console.log('特征2：',characteristicIds[1]);
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
  });
},
//------------------用于蓝牙设备功能的启用------------------
listentoBlue:function(){//收取信息
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
  }); wx.onBLECharacteristicValueChange((characteristic) => {
      const data = this.bufferToString(characteristic.value); 
      this.DealNowRecieved(data);
      });},
  DealNowRecieved:function(data){
    this.setData({
      jsonDataString:this.data.jsonDataString+data,      //每次收到都累计进去
    });if((this.data.jsonDataString).includes('<BN') && (this.data.jsonDataString).includes('OR>')){
      console.log('接收完整');
      this.CutCompleteData();
    }
  },CutCompleteData:function(){
    const match = this.data.jsonDataString.match(/<BN([\s\S]*?)OR>/);
    if (match && match[1]) {
      const wrappedData = match[1];  // 提取 <BG ... OR> 中的数据部分
      const [part1, part2] = wrappedData.split('+++');
      this.HandleCarve(part1,part2);
      this.setData({
        jsonDataString: ''
      });
    }
  },HandleCarve:function(part1,part2){
    const parsedData1=JSON.parse(part1);const parsedData2=JSON.parse(part2);
    console.log(parsedData1);console.log(parsedData2);
    if(parsedData2.Name && parsedData2.Wallet){
      this.handleUserInfo(parsedData2);
    }if(parsedData1.BatteryState){
      this.handleDeviceStatus(parsedData1);
    }
  },handleUserInfo:function(data){
    const name = data.Name;
    const userWechat = data.chat;
    const userPhone = data.Phone;
    const BikeAddress = data.Wallet;
    this.setData({connectingName:name})
    if(BikeAddress === this.data.wallet.address.substring(2)){ //说明是自己的车
      this.setData({ifMyDevice:true})             //标记
      if((userWechat != this.data.UsingDeviceChat || userPhone != this.data.UsingDevicePhone)&&(this.data.UsingDeviceChat.length>0||this.data.UsingDevicePhone.length>0)){
        console.log(userWechat);console.log(this.data.UsingDeviceChat);
        console.log(userPhone);console.log(this.data.UsingDevicePhone);
        this.sendMyPhoneAndChat();                //update the phone and chat
      }
    }else{this.setData({ifMyDevice:false})
    if((userWechat!=''|| userPhone!='')&&this.data.ifMyDevice === false){
      this.setData({RentDevicePhone:userPhone,RentDeviceChat:userWechat})
    }
  }
  },handleDeviceStatus:function(data){
    const batteryVoltage = data.BatteryVoltage;
    const batteryState = data.BatteryState;
    const rotate = data.Rotate;
    const uuid = data.UUID;
    const ERR = data.ERR;
    const Version = data.V;
    const RunningStatus = data.BS;
    if(this.data.ifMyDevice===false){
      const CanrentOpenBattery = data.RB;
      const RemainTime = data.TLim;
      this.setData({ifRentopenBattery:CanrentOpenBattery})
      this.calculateWhen(RemainTime);
    }
    this.DoToBatteryVoltage(batteryVoltage);
    this.DoToBatteryState(batteryState);
    this.DoToRatate(rotate);
    this.setData({UUIDOfSTM:uuid,UsingcarVersion:Version});
    this.ShowRunnigError(ERR);
    this.DealRunningStatus(RunningStatus);
  },DoToBatteryVoltage:function(data){
    this.doTobatteryPower(data);
  },DoToBatteryState:function(data){
    if(data === 'battery1'){
      if(this.data.Batterylockstate != 1){
        wx.showToast({ title: '开锁成功',icon:'success',duration:1000})
        this.setData({Batterylockstate:1})
      }
    }else if(data === 'battery2'){
      if(this.data.Batterylockstate != 0){
        wx.showToast({ title: '关锁成功',icon:'success',duration:1000})
        this.setData({Batterylockstate:0})
      }
    }else if(data === 'battery3'){
      wx.showToast({title: '开锁失败了',icon:'error',duration:1000})
    }else if(data === 'battery4'){
      wx.showToast({title: '关锁失败了',icon:'error',duration:1000})
    }
  },DoToRatate:function(data){
    this.setData({lastlyrotate_Counter:this.data.rotate_Counter,}); //保留上一次的值
    const mileageMatch = data.match(/R:\s*(\d+)/);
    if (mileageMatch) {
      const mileage = parseInt(mileageMatch[1], 10);
      this.setData({rotate_Counter: mileage});
    }
  },ShowRunnigError:function(ERR){
    if(ERR === 'UserErr'){wx.showToast({title: '您没有使用此设备的权限',icon:'error',duration:1000})}
    else if(ERR === 'CommandErr'){wx.showToast({title: '出现了问题哦',icon:'error',duration:1000})}
    else if(ERR === 'FormatErr'){wx.showToast({title: '出现了问题哦',icon:'error',duration:1000})}
    else if(ERR === 'RegisterErr'){wx.showToast({title: '注册失败，请重试',icon:'error',duration:1000})}
    else if(ERR === 'AddRrentErr'){wx.showToast({title: '添加租借失败，请重试',icon:'error',duration:1000})}
    else if(ERR === 'getRent'){wx.showToast({title: '添加租借成功',icon:'success',duration:1000})}
    else if(ERR === 'UpdateOld'){wx.showToast({title: '已更新租界用户信息',icon:'success',duration:1000})}
    else if(ERR === 'ChangeSuperOK'){wx.showToast({title: '转让成功',icon:'success',duration:1000})}
    else if(ERR === 'ChangeSuperErr'){wx.showToast({title: '转让失败，请重试',icon:'error',duration:1000})}
    else if(ERR === 'addPACOK'){wx.showToast({title: '添加用户信息成功',icon:'error',duration:1000})}
    else if(ERR === 'TimeErr'){wx.showToast({title: '命令超时',icon:'error',duration:1000})}
    else if(ERR === 'SignCmdErr'){wx.showToast({title: '命令有误',icon:'error',duration:1000})}
    else if(ERR === 'SignAddErr'){wx.showToast({title: '地址错误',icon:'error',duration:1000})}
    else if(ERR === 'IDErr'){wx.showToast({title: '出现了问题哦，请重试',icon:'error',duration:1000})}
    else if(ERR === 'UserErr'){wx.showToast({title: '您没有使用此设备的权限',icon:'error',duration:1000})}
  },DealRunningStatus:function(data){
    if(data === 1){
      if(this.data.ifConnect != 1){
        wx.showToast({ title: '已启动',icon:'success',duration:1000})
        this.setData({ifConnect:1})}
      }           
    else if(data === 0){
      if(this.data.ifConnect != 0){
        wx.showToast({ title: '已关闭',icon:'success',duration:1000})
        this.setData({ifConnect:0})}
      }
  },calculateWhen:function(data){
    console.log('timecalculate')
    const timestampInSeconds = parseInt(data);const currentTimestamp = Math.floor(Date.now() / 1000);
    const timeDifference = Math.abs(currentTimestamp - timestampInSeconds);
    const hours = Math.floor(timeDifference / 3600);const minutes = Math.floor((timeDifference % 3600) / 60);
    const TimeGet = hours +':'+ minutes;
    console.log('TimeGet')
    this.setData({whenRentCanUsedTo:TimeGet})
  },
//发信息
sendCommand1: function(data) {  
  const command = data + '\n'; 
  console.log(command);
  this.sendData(command);
},

sendsecretCommand:function(event){
  const command = event.currentTarget.dataset.command;
  const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command:command,
    UUID:this.data.UUIDOfSTM
  }
  var cmdstr=JSON.stringify(cmd)
  const signature =  this.data.wallet.signMessageSync(cmdstr);
  const obj = {
    cmd:cmdstr,
    PubKey: this.data.wallet.signingKey.publicKey,
    signature:signature,
    address:this.data.wallet.address
};
const jsonString = '<' + JSON.stringify(obj) + '>';
  console.log(jsonString);
  this.sendByTwenty(jsonString);
  wx.showToast({title: '已发送，请等待响应',icon:'success',duration:1000})
},
sendsecretUnfixedCommand:function(data){
  const command = data;
  const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command:command,
    UUID:this.data.UUIDOfSTM
  }
  var cmdstr=JSON.stringify(cmd)
  const signature =  this.data.wallet.signMessageSync(cmdstr);
  const obj = {
    cmd:cmdstr,
    PubKey: this.data.wallet.signingKey.publicKey,
    signature:signature,
    address:this.data.wallet.address
};
  const jsonString = '<' + JSON.stringify(obj) + '>';
  console.log(jsonString);
  this.sendByTwenty(jsonString);
},
sendMyPhoneAndChat:function(){
  const command = {
    Phone:this.data.UsingDevicePhone,
    Wechat:this.data.UsingDeviceChat,
  }
  var commandstr= JSON.stringify(command);
  const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command:'addPAC'+commandstr,
    UUID:this.data.UUIDOfSTM
  }
  var cmdstr=JSON.stringify(cmd)
  const signature =  this.data.wallet.signMessageSync(cmdstr);
  const obj = {
    cmd:cmdstr,
    PubKey: this.data.wallet.signingKey.publicKey,
    signature:signature,
    address:this.data.wallet.address
};const jsonString = '<' + JSON.stringify(obj) + '>';
  console.log(jsonString);
  this.sendByTwenty(jsonString);
},
sendByTwenty:function(JsonString){
  /*{"cmd":"{\"TimeStamp*/let startIndex = 0; 
  /*12345678901234567890*/const everySize = 20;
  const needTime = Math.ceil(JsonString.length / everySize);
  for(let i=0;i<needTime;i++){
    const endIndex = Math.min(startIndex + everySize, JsonString.length);
    const batch = JsonString.slice(startIndex, endIndex);
    this.sendData(batch);
    startIndex = endIndex;
  }
},
sendData: function(command) {
  console.log(this.data.characteristicId1);
  wx.writeBLECharacteristicValue({
    characteristicId: this.data.characteristicId1,
    deviceId: this.data.deviceId,
    serviceId: this.data.serviceId,
    value: this.stringToBuffer(command), 
    fail: (err) => {
      wx.showToast({
        title: '发送失败',
        icon: 'none',
        duration: 1000,
      });console.log('sendERROR:',err)
    },
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
  this.setData({signalUpdateInterval: null});
},
getDeviceRSSI: function() {
  wx.getBLEDeviceRSSI({
    deviceId: this.data.deviceId,
    success: (res) => {
      this.setData({'device.signalStrength': res.RSSI // 更新信号强度
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
        if(powerNum <= 53.4 && powerNum >= 45){percentage = Math.floor(100 * (powerNum - 45) / (53.4 - 45));}
        else if(powerNum > 53.4){percentage = 100}
        else{ percentage = 0}
        //this.animateCircle(percentage);
        this.setData({batteryPowerPercentage:percentage});
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
    //this.updateCircle(this.data.batteryPowerPercentage);
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
    //this.updateCircle(this.data.batteryPowerPercentage);
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
  },onInputRegister:function(event){
    const helpDO = event.detail.value;
    this.setData({
      mnemonic:helpDO
    });if (helpDO.length >= 10){
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
  },onInputRegister1:function(event){
    const helpDO = event.detail.value;
    this.setData({
      mnemonicAgain:helpDO
    });if (helpDO === this.data.mnemonic){
      this.setData({
        iconSrc3:'/image/right.png',
        mnemonicAgainOK:true
      })
    }else if(helpDO.length === 0){
      this.setData({
        iconSrc3:'',
        mnemonicAgainOK:false
      })
    }else{
      this.setData({
        iconSrc3:'/image/error.png',
        mnemonicAgainOK:false
      })
    }
  },onInputPassword:function(event){
    const helpDo = event.detail.value;
    this.setData({
      password:helpDo
    });if (helpDo.length === 6 && /^\d{6}$/.test(helpDo)){
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
  }, walletShow:function(){
    wx.showModal({
      title: '钱包地址',
      content: `${this.data.wallet.address}`,
      confirmText: '复制地址',
      cancelText:'退出',
      success:(res)=>{
        if(res.confirm){
          wx.setClipboardData({
            data: this.data.wallet.address,success:()=>{wx.showToast({
              title: '已复制',duration:1000})}
          })
        }
      }
  })},InFoShow:function(){
    this.setData({
      ifShowUserInfo:true
    })
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
    wx.showModal({
      title: '用户须知',
      content: '助记词须妥善保管，遗忘助记词将无法开启车辆',
      showCancel: false, 
      confirmText: '我已知晓',
      complete: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: this.data.mnemonic,
            success:()=>{
              wx.showToast({
                title: '助记词已复制,请自行保存',
                duration: 2000
              })
            }
          })
        }
      }
    })
    
  },
//用于生成随机数的方法
  generateRandomNumber:function() {        
    let iv = '';
    for (let i = 0; i < 16; i++) {
        const byte = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        iv += byte;
    }return CryptoJS.enc.Hex.parse(iv);
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
/*
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
},*/
//--------------租借界面----------------
showRentModal:function(){       //展示出借页面
  this.setData({
    showingRentModal:true
  })
},RentAdressInput:function(e){
  this.setData({
    rentAddressInput: e.detail.value
  })
},RentBatteryChange:function(e){
  const isChecked = e.detail.value;
  this.setData({
    ifOpenBattery: isChecked ? 'yes' : 'no'
  });
},RentChooseDay(e) {
  this.setData({
    RentDay: e.detail.value
  });
},RentChooseTime(e) {
  this.setData({
    RentTime: e.detail.value
  });
},RentTrustChange(e) {
  const isChecked = e.detail.value; 
  this.setData({
    ifTrustRent: isChecked ? 'yes' : 'no'
  });
},submitRent:function(){
  if(this.data.rentAddressInput.length == 42){
    let Time;
    if(this.data.RentTime.length == 0){Time = '23:59'}else{Time = this.data.RentTime}
    const realTime = this.data.RentDay +'T'+ Time;
    let data = new Date(realTime);let time = data.getTime();let RentTimeStamp = Math.floor(time/1000);console.log(realTime);console.log("时间戳（秒）:", RentTimeStamp);
    if(RentTimeStamp>Math.floor(Date.now() / 1000)){
      let battery;let Trust;
      if(this.data.ifOpenBattery === 'yes'){
        battery = '1';
      }else{battery = '0'}
      if(this.data.ifTrustRent === 'yes'){
        Trust = '$';
      }else{Trust = ''}  
      const content = `您将授权 ${this.data.rentAddressInput} 骑行 ${this.data.connectingName} 至 ${this.data.RentDay} ${Time}`;
      wx.showModal({
        title: '提醒',
        content: content,
        complete: (res) => {if (res.confirm) {
            const Command = 'RentAdd'+this.data.rentAddressInput+battery+RentTimeStamp+Trust;
            console.log(Command)
            this.sendsecretUnfixedCommand(Command);
            this.setData({rentAddressInput:'',ifOpenBattery:'no',RentDay:'',RentTime:'',ifTrustRent:'no',showingRentModal:false})}}
      })}else{
      wx.showToast({ title: '时间不正确',icon:'error', duration:1000})
    } }else{wx.showToast({title: '不是标准的钱包地址',icon:'error',duration:1000})
  }
},ExitRent:function(){
  this.setData({rentAddressInput:'',ifOpenBattery:'no',RentDay:'',RentTime:'',ifTrustRent:'no',showingRentModal:false})
},
//电话和微信号
backToWallet:function(){
  this.setData({ifShowUserInfo:false})
},backToPAW:function(){
  this.setData({showChangePAW:false,Phone:'',chat:''})
},ChangePhoneAndChat:function(){
  this.setData({showChangePAW:true})
},PhoneCHangeInput:function(e){
  this.setData({Phone:e.detail.value})
},ChatCHangeInput:function(e){
  this.setData({chat:e.detail.value})
},SubmitChangePAW:function(){
  if(this.data.Phone.length === 11){
    const content = `电话:${this.data.Phone} 微信:${this.data.chat}`
    wx.showModal({
      title: '请确认',
      content: content,
      confirmText:'确认无误',
      complete: (res) => {
        if (res.confirm) {
          this.setData({UsingDevicePhone:this.data.Phone,UsingDeviceChat:this.data.chat})
          wx.showToast({title: '修改成功',icon:'success',duration:1000})
          console.log(this.data.UsingDevicePhone);console.log(this.data.UsingDeviceChat)
          wx.setStorageSync('UsingDevicePhone', this.data.UsingDevicePhone);
          wx.setStorageSync('UsingDeviceChat', this.data.UsingDeviceChat)
        }
      }
    })
  }else{wx.showToast({title: '错误的电话格式',icon:'error',duration:1000 })}
},
/*
test:function(){
  this.generateQRCode();
  this.setData({showNeedRentModal:true})
}, generateQRCode: function() {
  const qrCodeString = "https://u.wechat.com/EDNEMHbDgmBm4HSYzifeImA?s=1"; // 要生成二维码的字符串
  drawQrcode({
      width: 200, // 二维码宽度
      height: 200, // 二维码高度
      canvasId: 'myQrcode', // canvas 的 ID
      text: qrCodeString, // 二维码内容
      correctLevel: { L: 1, M: 0, Q: 3, H: 2 }[H], // 纠错级别，L、M、Q、H
      background: '#ffffff', // 背景色
      foreground: '#000000' // 前景色
  });
}*/

//转让
showTransferDevice:function(){
  this.setData({showTransferDevice:true})
},transformInput:function(e){
  this.setData({
    transformInput: e.detail.value
  })
},TransformDevicebutton:function(){
  if(this.data.transformInput.length == 42){
    const cmd = 'SuChange'+this.data.transformInput;
    this.sendsecretUnfixedCommand(cmd)
  }else {
    wx.showToast({title: '地址不和规范',icon:'error',duration:1000})
  }
},exitTransform:function(){
  this.setData({showTransferDevice:false})
}
})