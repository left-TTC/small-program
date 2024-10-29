module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1730085369168, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ethers = void 0;
const tslib_1 = require("tslib");
/**
 *  The Application Programming Interface (API) is the collection of
 *  functions, classes and types offered by the Ethers library.
 *
 *  @_section: api:Application Programming Interface  [about-api]
 *  @_navTitle: API
 */
const ethers = tslib_1.__importStar(require("./ethers.js"));
exports.ethers = ethers;
tslib_1.__exportStar(require("./ethers.js"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./ethers.js":1730085369169}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369169, function(require, module, exports) {

/////////////////////////////
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.ripemd160 = exports.keccak256 = exports.randomBytes = exports.computeHmac = exports.UndecodedEventLog = exports.EventLog = exports.ContractUnknownEventPayload = exports.ContractTransactionResponse = exports.ContractTransactionReceipt = exports.ContractEventPayload = exports.ContractFactory = exports.Contract = exports.BaseContract = exports.MessagePrefix = exports.EtherSymbol = exports.ZeroHash = exports.N = exports.MaxInt256 = exports.MinInt256 = exports.MaxUint256 = exports.WeiPerEther = exports.ZeroAddress = exports.resolveAddress = exports.isAddress = exports.isAddressable = exports.getCreate2Address = exports.getCreateAddress = exports.getIcapAddress = exports.getAddress = exports.Typed = exports.TransactionDescription = exports.Result = exports.LogDescription = exports.Interface = exports.Indexed = exports.ErrorDescription = exports.checkResultErrors = exports.StructFragment = exports.ParamType = exports.NamedFragment = exports.FunctionFragment = exports.FallbackFragment = exports.Fragment = exports.EventFragment = exports.ErrorFragment = exports.ConstructorFragment = exports.AbiCoder = exports.encodeBytes32String = exports.decodeBytes32String = exports.version = void 0;
exports.EnsPlugin = exports.Network = exports.EnsResolver = exports.WebSocketProvider = exports.SocketProvider = exports.IpcSocketProvider = exports.QuickNodeProvider = exports.PocketProvider = exports.InfuraWebSocketProvider = exports.InfuraProvider = exports.EtherscanProvider = exports.CloudflareProvider = exports.ChainstackProvider = exports.AnkrProvider = exports.AlchemyProvider = exports.BrowserProvider = exports.JsonRpcSigner = exports.JsonRpcProvider = exports.JsonRpcApiProvider = exports.FallbackProvider = exports.AbstractProvider = exports.VoidSigner = exports.NonceManager = exports.AbstractSigner = exports.TransactionResponse = exports.TransactionReceipt = exports.Log = exports.FeeData = exports.Block = exports.getDefaultProvider = exports.verifyTypedData = exports.TypedDataEncoder = exports.solidityPackedSha256 = exports.solidityPackedKeccak256 = exports.solidityPacked = exports.verifyMessage = exports.hashMessage = exports.dnsEncode = exports.namehash = exports.isValidName = exports.ensNormalize = exports.id = exports.SigningKey = exports.Signature = exports.lock = exports.scryptSync = exports.scrypt = exports.pbkdf2 = exports.sha512 = exports.sha256 = void 0;
exports.getUint = exports.getNumber = exports.getBigInt = exports.FixedNumber = exports.FetchCancelSignal = exports.FetchResponse = exports.FetchRequest = exports.EventPayload = exports.isError = exports.isCallException = exports.makeError = exports.assertPrivate = exports.assertNormalize = exports.assertArgumentCount = exports.assertArgument = exports.assert = exports.resolveProperties = exports.defineProperties = exports.zeroPadValue = exports.zeroPadBytes = exports.stripZerosLeft = exports.isBytesLike = exports.isHexString = exports.hexlify = exports.getBytesCopy = exports.getBytes = exports.dataSlice = exports.dataLength = exports.concat = exports.encodeBase64 = exports.decodeBase64 = exports.encodeBase58 = exports.decodeBase58 = exports.Transaction = exports.recoverAddress = exports.computeAddress = exports.accessListify = exports.showThrottleMessage = exports.copyRequest = exports.UnmanagedSubscriber = exports.SocketSubscriber = exports.SocketPendingSubscriber = exports.SocketEventSubscriber = exports.SocketBlockSubscriber = exports.MulticoinProviderPlugin = exports.NetworkPlugin = exports.GasCostPlugin = exports.FetchUrlFeeDataNetworkPlugin = exports.FeeDataNetworkPlugin = exports.EtherscanPlugin = void 0;
exports.wordlists = exports.WordlistOwlA = exports.WordlistOwl = exports.LangEn = exports.Wordlist = exports.encryptKeystoreJsonSync = exports.encryptKeystoreJson = exports.decryptKeystoreJson = exports.decryptKeystoreJsonSync = exports.decryptCrowdsaleJson = exports.isKeystoreJson = exports.isCrowdsaleJson = exports.getIndexedAccountPath = exports.getAccountPath = exports.defaultPath = exports.Wallet = exports.HDNodeVoidWallet = exports.HDNodeWallet = exports.BaseWallet = exports.Mnemonic = exports.uuidV4 = exports.encodeRlp = exports.decodeRlp = exports.Utf8ErrorFuncs = exports.toUtf8String = exports.toUtf8CodePoints = exports.toUtf8Bytes = exports.parseUnits = exports.formatUnits = exports.parseEther = exports.formatEther = exports.mask = exports.toTwos = exports.fromTwos = exports.toQuantity = exports.toNumber = exports.toBeHex = exports.toBigInt = exports.toBeArray = void 0;
var _version_js_1 = require("./_version.js");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return _version_js_1.version; } });
var index_js_1 = require("./abi/index.js");
Object.defineProperty(exports, "decodeBytes32String", { enumerable: true, get: function () { return index_js_1.decodeBytes32String; } });
Object.defineProperty(exports, "encodeBytes32String", { enumerable: true, get: function () { return index_js_1.encodeBytes32String; } });
Object.defineProperty(exports, "AbiCoder", { enumerable: true, get: function () { return index_js_1.AbiCoder; } });
Object.defineProperty(exports, "ConstructorFragment", { enumerable: true, get: function () { return index_js_1.ConstructorFragment; } });
Object.defineProperty(exports, "ErrorFragment", { enumerable: true, get: function () { return index_js_1.ErrorFragment; } });
Object.defineProperty(exports, "EventFragment", { enumerable: true, get: function () { return index_js_1.EventFragment; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return index_js_1.Fragment; } });
Object.defineProperty(exports, "FallbackFragment", { enumerable: true, get: function () { return index_js_1.FallbackFragment; } });
Object.defineProperty(exports, "FunctionFragment", { enumerable: true, get: function () { return index_js_1.FunctionFragment; } });
Object.defineProperty(exports, "NamedFragment", { enumerable: true, get: function () { return index_js_1.NamedFragment; } });
Object.defineProperty(exports, "ParamType", { enumerable: true, get: function () { return index_js_1.ParamType; } });
Object.defineProperty(exports, "StructFragment", { enumerable: true, get: function () { return index_js_1.StructFragment; } });
Object.defineProperty(exports, "checkResultErrors", { enumerable: true, get: function () { return index_js_1.checkResultErrors; } });
Object.defineProperty(exports, "ErrorDescription", { enumerable: true, get: function () { return index_js_1.ErrorDescription; } });
Object.defineProperty(exports, "Indexed", { enumerable: true, get: function () { return index_js_1.Indexed; } });
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return index_js_1.Interface; } });
Object.defineProperty(exports, "LogDescription", { enumerable: true, get: function () { return index_js_1.LogDescription; } });
Object.defineProperty(exports, "Result", { enumerable: true, get: function () { return index_js_1.Result; } });
Object.defineProperty(exports, "TransactionDescription", { enumerable: true, get: function () { return index_js_1.TransactionDescription; } });
Object.defineProperty(exports, "Typed", { enumerable: true, get: function () { return index_js_1.Typed; } });
var index_js_2 = require("./address/index.js");
Object.defineProperty(exports, "getAddress", { enumerable: true, get: function () { return index_js_2.getAddress; } });
Object.defineProperty(exports, "getIcapAddress", { enumerable: true, get: function () { return index_js_2.getIcapAddress; } });
Object.defineProperty(exports, "getCreateAddress", { enumerable: true, get: function () { return index_js_2.getCreateAddress; } });
Object.defineProperty(exports, "getCreate2Address", { enumerable: true, get: function () { return index_js_2.getCreate2Address; } });
Object.defineProperty(exports, "isAddressable", { enumerable: true, get: function () { return index_js_2.isAddressable; } });
Object.defineProperty(exports, "isAddress", { enumerable: true, get: function () { return index_js_2.isAddress; } });
Object.defineProperty(exports, "resolveAddress", { enumerable: true, get: function () { return index_js_2.resolveAddress; } });
var index_js_3 = require("./constants/index.js");
Object.defineProperty(exports, "ZeroAddress", { enumerable: true, get: function () { return index_js_3.ZeroAddress; } });
Object.defineProperty(exports, "WeiPerEther", { enumerable: true, get: function () { return index_js_3.WeiPerEther; } });
Object.defineProperty(exports, "MaxUint256", { enumerable: true, get: function () { return index_js_3.MaxUint256; } });
Object.defineProperty(exports, "MinInt256", { enumerable: true, get: function () { return index_js_3.MinInt256; } });
Object.defineProperty(exports, "MaxInt256", { enumerable: true, get: function () { return index_js_3.MaxInt256; } });
Object.defineProperty(exports, "N", { enumerable: true, get: function () { return index_js_3.N; } });
Object.defineProperty(exports, "ZeroHash", { enumerable: true, get: function () { return index_js_3.ZeroHash; } });
Object.defineProperty(exports, "EtherSymbol", { enumerable: true, get: function () { return index_js_3.EtherSymbol; } });
Object.defineProperty(exports, "MessagePrefix", { enumerable: true, get: function () { return index_js_3.MessagePrefix; } });
var index_js_4 = require("./contract/index.js");
Object.defineProperty(exports, "BaseContract", { enumerable: true, get: function () { return index_js_4.BaseContract; } });
Object.defineProperty(exports, "Contract", { enumerable: true, get: function () { return index_js_4.Contract; } });
Object.defineProperty(exports, "ContractFactory", { enumerable: true, get: function () { return index_js_4.ContractFactory; } });
Object.defineProperty(exports, "ContractEventPayload", { enumerable: true, get: function () { return index_js_4.ContractEventPayload; } });
Object.defineProperty(exports, "ContractTransactionReceipt", { enumerable: true, get: function () { return index_js_4.ContractTransactionReceipt; } });
Object.defineProperty(exports, "ContractTransactionResponse", { enumerable: true, get: function () { return index_js_4.ContractTransactionResponse; } });
Object.defineProperty(exports, "ContractUnknownEventPayload", { enumerable: true, get: function () { return index_js_4.ContractUnknownEventPayload; } });
Object.defineProperty(exports, "EventLog", { enumerable: true, get: function () { return index_js_4.EventLog; } });
Object.defineProperty(exports, "UndecodedEventLog", { enumerable: true, get: function () { return index_js_4.UndecodedEventLog; } });
var index_js_5 = require("./crypto/index.js");
Object.defineProperty(exports, "computeHmac", { enumerable: true, get: function () { return index_js_5.computeHmac; } });
Object.defineProperty(exports, "randomBytes", { enumerable: true, get: function () { return index_js_5.randomBytes; } });
Object.defineProperty(exports, "keccak256", { enumerable: true, get: function () { return index_js_5.keccak256; } });
Object.defineProperty(exports, "ripemd160", { enumerable: true, get: function () { return index_js_5.ripemd160; } });
Object.defineProperty(exports, "sha256", { enumerable: true, get: function () { return index_js_5.sha256; } });
Object.defineProperty(exports, "sha512", { enumerable: true, get: function () { return index_js_5.sha512; } });
Object.defineProperty(exports, "pbkdf2", { enumerable: true, get: function () { return index_js_5.pbkdf2; } });
Object.defineProperty(exports, "scrypt", { enumerable: true, get: function () { return index_js_5.scrypt; } });
Object.defineProperty(exports, "scryptSync", { enumerable: true, get: function () { return index_js_5.scryptSync; } });
Object.defineProperty(exports, "lock", { enumerable: true, get: function () { return index_js_5.lock; } });
Object.defineProperty(exports, "Signature", { enumerable: true, get: function () { return index_js_5.Signature; } });
Object.defineProperty(exports, "SigningKey", { enumerable: true, get: function () { return index_js_5.SigningKey; } });
var index_js_6 = require("./hash/index.js");
Object.defineProperty(exports, "id", { enumerable: true, get: function () { return index_js_6.id; } });
Object.defineProperty(exports, "ensNormalize", { enumerable: true, get: function () { return index_js_6.ensNormalize; } });
Object.defineProperty(exports, "isValidName", { enumerable: true, get: function () { return index_js_6.isValidName; } });
Object.defineProperty(exports, "namehash", { enumerable: true, get: function () { return index_js_6.namehash; } });
Object.defineProperty(exports, "dnsEncode", { enumerable: true, get: function () { return index_js_6.dnsEncode; } });
Object.defineProperty(exports, "hashMessage", { enumerable: true, get: function () { return index_js_6.hashMessage; } });
Object.defineProperty(exports, "verifyMessage", { enumerable: true, get: function () { return index_js_6.verifyMessage; } });
Object.defineProperty(exports, "solidityPacked", { enumerable: true, get: function () { return index_js_6.solidityPacked; } });
Object.defineProperty(exports, "solidityPackedKeccak256", { enumerable: true, get: function () { return index_js_6.solidityPackedKeccak256; } });
Object.defineProperty(exports, "solidityPackedSha256", { enumerable: true, get: function () { return index_js_6.solidityPackedSha256; } });
Object.defineProperty(exports, "TypedDataEncoder", { enumerable: true, get: function () { return index_js_6.TypedDataEncoder; } });
Object.defineProperty(exports, "verifyTypedData", { enumerable: true, get: function () { return index_js_6.verifyTypedData; } });
var index_js_7 = require("./providers/index.js");
Object.defineProperty(exports, "getDefaultProvider", { enumerable: true, get: function () { return index_js_7.getDefaultProvider; } });
Object.defineProperty(exports, "Block", { enumerable: true, get: function () { return index_js_7.Block; } });
Object.defineProperty(exports, "FeeData", { enumerable: true, get: function () { return index_js_7.FeeData; } });
Object.defineProperty(exports, "Log", { enumerable: true, get: function () { return index_js_7.Log; } });
Object.defineProperty(exports, "TransactionReceipt", { enumerable: true, get: function () { return index_js_7.TransactionReceipt; } });
Object.defineProperty(exports, "TransactionResponse", { enumerable: true, get: function () { return index_js_7.TransactionResponse; } });
Object.defineProperty(exports, "AbstractSigner", { enumerable: true, get: function () { return index_js_7.AbstractSigner; } });
Object.defineProperty(exports, "NonceManager", { enumerable: true, get: function () { return index_js_7.NonceManager; } });
Object.defineProperty(exports, "VoidSigner", { enumerable: true, get: function () { return index_js_7.VoidSigner; } });
Object.defineProperty(exports, "AbstractProvider", { enumerable: true, get: function () { return index_js_7.AbstractProvider; } });
Object.defineProperty(exports, "FallbackProvider", { enumerable: true, get: function () { return index_js_7.FallbackProvider; } });
Object.defineProperty(exports, "JsonRpcApiProvider", { enumerable: true, get: function () { return index_js_7.JsonRpcApiProvider; } });
Object.defineProperty(exports, "JsonRpcProvider", { enumerable: true, get: function () { return index_js_7.JsonRpcProvider; } });
Object.defineProperty(exports, "JsonRpcSigner", { enumerable: true, get: function () { return index_js_7.JsonRpcSigner; } });
Object.defineProperty(exports, "BrowserProvider", { enumerable: true, get: function () { return index_js_7.BrowserProvider; } });
Object.defineProperty(exports, "AlchemyProvider", { enumerable: true, get: function () { return index_js_7.AlchemyProvider; } });
Object.defineProperty(exports, "AnkrProvider", { enumerable: true, get: function () { return index_js_7.AnkrProvider; } });
Object.defineProperty(exports, "ChainstackProvider", { enumerable: true, get: function () { return index_js_7.ChainstackProvider; } });
Object.defineProperty(exports, "CloudflareProvider", { enumerable: true, get: function () { return index_js_7.CloudflareProvider; } });
Object.defineProperty(exports, "EtherscanProvider", { enumerable: true, get: function () { return index_js_7.EtherscanProvider; } });
Object.defineProperty(exports, "InfuraProvider", { enumerable: true, get: function () { return index_js_7.InfuraProvider; } });
Object.defineProperty(exports, "InfuraWebSocketProvider", { enumerable: true, get: function () { return index_js_7.InfuraWebSocketProvider; } });
Object.defineProperty(exports, "PocketProvider", { enumerable: true, get: function () { return index_js_7.PocketProvider; } });
Object.defineProperty(exports, "QuickNodeProvider", { enumerable: true, get: function () { return index_js_7.QuickNodeProvider; } });
Object.defineProperty(exports, "IpcSocketProvider", { enumerable: true, get: function () { return index_js_7.IpcSocketProvider; } });
Object.defineProperty(exports, "SocketProvider", { enumerable: true, get: function () { return index_js_7.SocketProvider; } });
Object.defineProperty(exports, "WebSocketProvider", { enumerable: true, get: function () { return index_js_7.WebSocketProvider; } });
Object.defineProperty(exports, "EnsResolver", { enumerable: true, get: function () { return index_js_7.EnsResolver; } });
Object.defineProperty(exports, "Network", { enumerable: true, get: function () { return index_js_7.Network; } });
Object.defineProperty(exports, "EnsPlugin", { enumerable: true, get: function () { return index_js_7.EnsPlugin; } });
Object.defineProperty(exports, "EtherscanPlugin", { enumerable: true, get: function () { return index_js_7.EtherscanPlugin; } });
Object.defineProperty(exports, "FeeDataNetworkPlugin", { enumerable: true, get: function () { return index_js_7.FeeDataNetworkPlugin; } });
Object.defineProperty(exports, "FetchUrlFeeDataNetworkPlugin", { enumerable: true, get: function () { return index_js_7.FetchUrlFeeDataNetworkPlugin; } });
Object.defineProperty(exports, "GasCostPlugin", { enumerable: true, get: function () { return index_js_7.GasCostPlugin; } });
Object.defineProperty(exports, "NetworkPlugin", { enumerable: true, get: function () { return index_js_7.NetworkPlugin; } });
Object.defineProperty(exports, "MulticoinProviderPlugin", { enumerable: true, get: function () { return index_js_7.MulticoinProviderPlugin; } });
Object.defineProperty(exports, "SocketBlockSubscriber", { enumerable: true, get: function () { return index_js_7.SocketBlockSubscriber; } });
Object.defineProperty(exports, "SocketEventSubscriber", { enumerable: true, get: function () { return index_js_7.SocketEventSubscriber; } });
Object.defineProperty(exports, "SocketPendingSubscriber", { enumerable: true, get: function () { return index_js_7.SocketPendingSubscriber; } });
Object.defineProperty(exports, "SocketSubscriber", { enumerable: true, get: function () { return index_js_7.SocketSubscriber; } });
Object.defineProperty(exports, "UnmanagedSubscriber", { enumerable: true, get: function () { return index_js_7.UnmanagedSubscriber; } });
Object.defineProperty(exports, "copyRequest", { enumerable: true, get: function () { return index_js_7.copyRequest; } });
Object.defineProperty(exports, "showThrottleMessage", { enumerable: true, get: function () { return index_js_7.showThrottleMessage; } });
var index_js_8 = require("./transaction/index.js");
Object.defineProperty(exports, "accessListify", { enumerable: true, get: function () { return index_js_8.accessListify; } });
Object.defineProperty(exports, "computeAddress", { enumerable: true, get: function () { return index_js_8.computeAddress; } });
Object.defineProperty(exports, "recoverAddress", { enumerable: true, get: function () { return index_js_8.recoverAddress; } });
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return index_js_8.Transaction; } });
var index_js_9 = require("./utils/index.js");
Object.defineProperty(exports, "decodeBase58", { enumerable: true, get: function () { return index_js_9.decodeBase58; } });
Object.defineProperty(exports, "encodeBase58", { enumerable: true, get: function () { return index_js_9.encodeBase58; } });
Object.defineProperty(exports, "decodeBase64", { enumerable: true, get: function () { return index_js_9.decodeBase64; } });
Object.defineProperty(exports, "encodeBase64", { enumerable: true, get: function () { return index_js_9.encodeBase64; } });
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return index_js_9.concat; } });
Object.defineProperty(exports, "dataLength", { enumerable: true, get: function () { return index_js_9.dataLength; } });
Object.defineProperty(exports, "dataSlice", { enumerable: true, get: function () { return index_js_9.dataSlice; } });
Object.defineProperty(exports, "getBytes", { enumerable: true, get: function () { return index_js_9.getBytes; } });
Object.defineProperty(exports, "getBytesCopy", { enumerable: true, get: function () { return index_js_9.getBytesCopy; } });
Object.defineProperty(exports, "hexlify", { enumerable: true, get: function () { return index_js_9.hexlify; } });
Object.defineProperty(exports, "isHexString", { enumerable: true, get: function () { return index_js_9.isHexString; } });
Object.defineProperty(exports, "isBytesLike", { enumerable: true, get: function () { return index_js_9.isBytesLike; } });
Object.defineProperty(exports, "stripZerosLeft", { enumerable: true, get: function () { return index_js_9.stripZerosLeft; } });
Object.defineProperty(exports, "zeroPadBytes", { enumerable: true, get: function () { return index_js_9.zeroPadBytes; } });
Object.defineProperty(exports, "zeroPadValue", { enumerable: true, get: function () { return index_js_9.zeroPadValue; } });
Object.defineProperty(exports, "defineProperties", { enumerable: true, get: function () { return index_js_9.defineProperties; } });
Object.defineProperty(exports, "resolveProperties", { enumerable: true, get: function () { return index_js_9.resolveProperties; } });
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return index_js_9.assert; } });
Object.defineProperty(exports, "assertArgument", { enumerable: true, get: function () { return index_js_9.assertArgument; } });
Object.defineProperty(exports, "assertArgumentCount", { enumerable: true, get: function () { return index_js_9.assertArgumentCount; } });
Object.defineProperty(exports, "assertNormalize", { enumerable: true, get: function () { return index_js_9.assertNormalize; } });
Object.defineProperty(exports, "assertPrivate", { enumerable: true, get: function () { return index_js_9.assertPrivate; } });
Object.defineProperty(exports, "makeError", { enumerable: true, get: function () { return index_js_9.makeError; } });
Object.defineProperty(exports, "isCallException", { enumerable: true, get: function () { return index_js_9.isCallException; } });
Object.defineProperty(exports, "isError", { enumerable: true, get: function () { return index_js_9.isError; } });
Object.defineProperty(exports, "EventPayload", { enumerable: true, get: function () { return index_js_9.EventPayload; } });
Object.defineProperty(exports, "FetchRequest", { enumerable: true, get: function () { return index_js_9.FetchRequest; } });
Object.defineProperty(exports, "FetchResponse", { enumerable: true, get: function () { return index_js_9.FetchResponse; } });
Object.defineProperty(exports, "FetchCancelSignal", { enumerable: true, get: function () { return index_js_9.FetchCancelSignal; } });
Object.defineProperty(exports, "FixedNumber", { enumerable: true, get: function () { return index_js_9.FixedNumber; } });
Object.defineProperty(exports, "getBigInt", { enumerable: true, get: function () { return index_js_9.getBigInt; } });
Object.defineProperty(exports, "getNumber", { enumerable: true, get: function () { return index_js_9.getNumber; } });
Object.defineProperty(exports, "getUint", { enumerable: true, get: function () { return index_js_9.getUint; } });
Object.defineProperty(exports, "toBeArray", { enumerable: true, get: function () { return index_js_9.toBeArray; } });
Object.defineProperty(exports, "toBigInt", { enumerable: true, get: function () { return index_js_9.toBigInt; } });
Object.defineProperty(exports, "toBeHex", { enumerable: true, get: function () { return index_js_9.toBeHex; } });
Object.defineProperty(exports, "toNumber", { enumerable: true, get: function () { return index_js_9.toNumber; } });
Object.defineProperty(exports, "toQuantity", { enumerable: true, get: function () { return index_js_9.toQuantity; } });
Object.defineProperty(exports, "fromTwos", { enumerable: true, get: function () { return index_js_9.fromTwos; } });
Object.defineProperty(exports, "toTwos", { enumerable: true, get: function () { return index_js_9.toTwos; } });
Object.defineProperty(exports, "mask", { enumerable: true, get: function () { return index_js_9.mask; } });
Object.defineProperty(exports, "formatEther", { enumerable: true, get: function () { return index_js_9.formatEther; } });
Object.defineProperty(exports, "parseEther", { enumerable: true, get: function () { return index_js_9.parseEther; } });
Object.defineProperty(exports, "formatUnits", { enumerable: true, get: function () { return index_js_9.formatUnits; } });
Object.defineProperty(exports, "parseUnits", { enumerable: true, get: function () { return index_js_9.parseUnits; } });
Object.defineProperty(exports, "toUtf8Bytes", { enumerable: true, get: function () { return index_js_9.toUtf8Bytes; } });
Object.defineProperty(exports, "toUtf8CodePoints", { enumerable: true, get: function () { return index_js_9.toUtf8CodePoints; } });
Object.defineProperty(exports, "toUtf8String", { enumerable: true, get: function () { return index_js_9.toUtf8String; } });
Object.defineProperty(exports, "Utf8ErrorFuncs", { enumerable: true, get: function () { return index_js_9.Utf8ErrorFuncs; } });
Object.defineProperty(exports, "decodeRlp", { enumerable: true, get: function () { return index_js_9.decodeRlp; } });
Object.defineProperty(exports, "encodeRlp", { enumerable: true, get: function () { return index_js_9.encodeRlp; } });
Object.defineProperty(exports, "uuidV4", { enumerable: true, get: function () { return index_js_9.uuidV4; } });
var index_js_10 = require("./wallet/index.js");
Object.defineProperty(exports, "Mnemonic", { enumerable: true, get: function () { return index_js_10.Mnemonic; } });
Object.defineProperty(exports, "BaseWallet", { enumerable: true, get: function () { return index_js_10.BaseWallet; } });
Object.defineProperty(exports, "HDNodeWallet", { enumerable: true, get: function () { return index_js_10.HDNodeWallet; } });
Object.defineProperty(exports, "HDNodeVoidWallet", { enumerable: true, get: function () { return index_js_10.HDNodeVoidWallet; } });
Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return index_js_10.Wallet; } });
Object.defineProperty(exports, "defaultPath", { enumerable: true, get: function () { return index_js_10.defaultPath; } });
Object.defineProperty(exports, "getAccountPath", { enumerable: true, get: function () { return index_js_10.getAccountPath; } });
Object.defineProperty(exports, "getIndexedAccountPath", { enumerable: true, get: function () { return index_js_10.getIndexedAccountPath; } });
Object.defineProperty(exports, "isCrowdsaleJson", { enumerable: true, get: function () { return index_js_10.isCrowdsaleJson; } });
Object.defineProperty(exports, "isKeystoreJson", { enumerable: true, get: function () { return index_js_10.isKeystoreJson; } });
Object.defineProperty(exports, "decryptCrowdsaleJson", { enumerable: true, get: function () { return index_js_10.decryptCrowdsaleJson; } });
Object.defineProperty(exports, "decryptKeystoreJsonSync", { enumerable: true, get: function () { return index_js_10.decryptKeystoreJsonSync; } });
Object.defineProperty(exports, "decryptKeystoreJson", { enumerable: true, get: function () { return index_js_10.decryptKeystoreJson; } });
Object.defineProperty(exports, "encryptKeystoreJson", { enumerable: true, get: function () { return index_js_10.encryptKeystoreJson; } });
Object.defineProperty(exports, "encryptKeystoreJsonSync", { enumerable: true, get: function () { return index_js_10.encryptKeystoreJsonSync; } });
var index_js_11 = require("./wordlists/index.js");
Object.defineProperty(exports, "Wordlist", { enumerable: true, get: function () { return index_js_11.Wordlist; } });
Object.defineProperty(exports, "LangEn", { enumerable: true, get: function () { return index_js_11.LangEn; } });
Object.defineProperty(exports, "WordlistOwl", { enumerable: true, get: function () { return index_js_11.WordlistOwl; } });
Object.defineProperty(exports, "WordlistOwlA", { enumerable: true, get: function () { return index_js_11.WordlistOwlA; } });
Object.defineProperty(exports, "wordlists", { enumerable: true, get: function () { return index_js_11.wordlists; } });
// dummy change; to pick-up ws security issue changes
//# sourceMappingURL=ethers.js.map
}, function(modId) { var map = {"./_version.js":1730085369170,"./abi/index.js":1730085369171,"./address/index.js":1730085369193,"./constants/index.js":1730085369208,"./contract/index.js":1730085369213,"./crypto/index.js":1730085369195,"./hash/index.js":1730085369217,"./providers/index.js":1730085369227,"./transaction/index.js":1730085369221,"./utils/index.js":1730085369174,"./wallet/index.js":1730085369264,"./wordlists/index.js":1730085369272}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369170, function(require, module, exports) {

/* Do NOT modify this file; see /src.ts/_admin/update-version.ts */
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
/**
 *  The current version of Ethers.
 */
exports.version = "6.13.4";
//# sourceMappingURL=_version.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369171, function(require, module, exports) {

/**
 *  The Application Binary Interface (ABI) describes how method input
 *  parameters should be encoded, their results decoded, and how to
 *  decode events and errors.
 *
 *  See [About ABIs](docs-abi) for more details how they are used.
 *
 *  @_section api/abi:Application Binary Interface  [about-abi]
 *  @_navTitle: ABI
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typed = exports.Result = exports.TransactionDescription = exports.LogDescription = exports.ErrorDescription = exports.Interface = exports.Indexed = exports.checkResultErrors = exports.StructFragment = exports.ParamType = exports.NamedFragment = exports.FunctionFragment = exports.Fragment = exports.FallbackFragment = exports.EventFragment = exports.ErrorFragment = exports.ConstructorFragment = exports.encodeBytes32String = exports.decodeBytes32String = exports.AbiCoder = void 0;
//////
var abi_coder_js_1 = require("./abi-coder.js");
Object.defineProperty(exports, "AbiCoder", { enumerable: true, get: function () { return abi_coder_js_1.AbiCoder; } });
var bytes32_js_1 = require("./bytes32.js");
Object.defineProperty(exports, "decodeBytes32String", { enumerable: true, get: function () { return bytes32_js_1.decodeBytes32String; } });
Object.defineProperty(exports, "encodeBytes32String", { enumerable: true, get: function () { return bytes32_js_1.encodeBytes32String; } });
var fragments_js_1 = require("./fragments.js");
Object.defineProperty(exports, "ConstructorFragment", { enumerable: true, get: function () { return fragments_js_1.ConstructorFragment; } });
Object.defineProperty(exports, "ErrorFragment", { enumerable: true, get: function () { return fragments_js_1.ErrorFragment; } });
Object.defineProperty(exports, "EventFragment", { enumerable: true, get: function () { return fragments_js_1.EventFragment; } });
Object.defineProperty(exports, "FallbackFragment", { enumerable: true, get: function () { return fragments_js_1.FallbackFragment; } });
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return fragments_js_1.Fragment; } });
Object.defineProperty(exports, "FunctionFragment", { enumerable: true, get: function () { return fragments_js_1.FunctionFragment; } });
Object.defineProperty(exports, "NamedFragment", { enumerable: true, get: function () { return fragments_js_1.NamedFragment; } });
Object.defineProperty(exports, "ParamType", { enumerable: true, get: function () { return fragments_js_1.ParamType; } });
Object.defineProperty(exports, "StructFragment", { enumerable: true, get: function () { return fragments_js_1.StructFragment; } });
var interface_js_1 = require("./interface.js");
Object.defineProperty(exports, "checkResultErrors", { enumerable: true, get: function () { return interface_js_1.checkResultErrors; } });
Object.defineProperty(exports, "Indexed", { enumerable: true, get: function () { return interface_js_1.Indexed; } });
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return interface_js_1.Interface; } });
Object.defineProperty(exports, "ErrorDescription", { enumerable: true, get: function () { return interface_js_1.ErrorDescription; } });
Object.defineProperty(exports, "LogDescription", { enumerable: true, get: function () { return interface_js_1.LogDescription; } });
Object.defineProperty(exports, "TransactionDescription", { enumerable: true, get: function () { return interface_js_1.TransactionDescription; } });
Object.defineProperty(exports, "Result", { enumerable: true, get: function () { return interface_js_1.Result; } });
var typed_js_1 = require("./typed.js");
Object.defineProperty(exports, "Typed", { enumerable: true, get: function () { return typed_js_1.Typed; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./bytes32.js":1730085369173}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369173, function(require, module, exports) {

/**
 *  About bytes32 strings...
 *
 *  @_docloc: api/utils:Bytes32 Strings
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBytes32String = exports.encodeBytes32String = void 0;
const index_js_1 = require("../utils/index.js");
/**
 *  Encodes %%text%% as a Bytes32 string.
 */
function encodeBytes32String(text) {
    // Get the bytes
    const bytes = (0, index_js_1.toUtf8Bytes)(text);
    // Check we have room for null-termination
    if (bytes.length > 31) {
        throw new Error("bytes32 string must be less than 32 bytes");
    }
    // Zero-pad (implicitly null-terminates)
    return (0, index_js_1.zeroPadBytes)(bytes, 32);
}
exports.encodeBytes32String = encodeBytes32String;
/**
 *  Encodes the Bytes32-encoded %%bytes%% into a string.
 */
function decodeBytes32String(_bytes) {
    const data = (0, index_js_1.getBytes)(_bytes, "bytes");
    // Must be 32 bytes with a null-termination
    if (data.length !== 32) {
        throw new Error("invalid bytes32 - not 32 bytes long");
    }
    if (data[31] !== 0) {
        throw new Error("invalid bytes32 string - no null terminator");
    }
    // Find the null termination
    let length = 31;
    while (data[length - 1] === 0) {
        length--;
    }
    // Determine the string value
    return (0, index_js_1.toUtf8String)(data.slice(0, length));
}
exports.decodeBytes32String = decodeBytes32String;
//# sourceMappingURL=bytes32.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369174, function(require, module, exports) {

/**
 *  There are many simple utilities required to interact with
 *  Ethereum and to simplify the library, without increasing
 *  the library dependencies for simple functions.
 *
 *  @_section api/utils:Utilities  [about-utils]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUtf8String = exports.toUtf8CodePoints = exports.toUtf8Bytes = exports.parseUnits = exports.formatUnits = exports.parseEther = exports.formatEther = exports.encodeRlp = exports.decodeRlp = exports.defineProperties = exports.resolveProperties = exports.toQuantity = exports.toBeArray = exports.toBeHex = exports.toNumber = exports.toBigInt = exports.getUint = exports.getNumber = exports.getBigInt = exports.mask = exports.toTwos = exports.fromTwos = exports.FixedNumber = exports.FetchCancelSignal = exports.FetchResponse = exports.FetchRequest = exports.EventPayload = exports.makeError = exports.assertNormalize = exports.assertPrivate = exports.assertArgumentCount = exports.assertArgument = exports.assert = exports.isError = exports.isCallException = exports.zeroPadBytes = exports.zeroPadValue = exports.stripZerosLeft = exports.dataSlice = exports.dataLength = exports.concat = exports.hexlify = exports.isBytesLike = exports.isHexString = exports.getBytesCopy = exports.getBytes = exports.encodeBase64 = exports.decodeBase64 = exports.encodeBase58 = exports.decodeBase58 = void 0;
exports.uuidV4 = exports.Utf8ErrorFuncs = void 0;
var base58_js_1 = require("./base58.js");
Object.defineProperty(exports, "decodeBase58", { enumerable: true, get: function () { return base58_js_1.decodeBase58; } });
Object.defineProperty(exports, "encodeBase58", { enumerable: true, get: function () { return base58_js_1.encodeBase58; } });
var base64_js_1 = require("./base64.js");
Object.defineProperty(exports, "decodeBase64", { enumerable: true, get: function () { return base64_js_1.decodeBase64; } });
Object.defineProperty(exports, "encodeBase64", { enumerable: true, get: function () { return base64_js_1.encodeBase64; } });
var data_js_1 = require("./data.js");
Object.defineProperty(exports, "getBytes", { enumerable: true, get: function () { return data_js_1.getBytes; } });
Object.defineProperty(exports, "getBytesCopy", { enumerable: true, get: function () { return data_js_1.getBytesCopy; } });
Object.defineProperty(exports, "isHexString", { enumerable: true, get: function () { return data_js_1.isHexString; } });
Object.defineProperty(exports, "isBytesLike", { enumerable: true, get: function () { return data_js_1.isBytesLike; } });
Object.defineProperty(exports, "hexlify", { enumerable: true, get: function () { return data_js_1.hexlify; } });
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return data_js_1.concat; } });
Object.defineProperty(exports, "dataLength", { enumerable: true, get: function () { return data_js_1.dataLength; } });
Object.defineProperty(exports, "dataSlice", { enumerable: true, get: function () { return data_js_1.dataSlice; } });
Object.defineProperty(exports, "stripZerosLeft", { enumerable: true, get: function () { return data_js_1.stripZerosLeft; } });
Object.defineProperty(exports, "zeroPadValue", { enumerable: true, get: function () { return data_js_1.zeroPadValue; } });
Object.defineProperty(exports, "zeroPadBytes", { enumerable: true, get: function () { return data_js_1.zeroPadBytes; } });
var errors_js_1 = require("./errors.js");
Object.defineProperty(exports, "isCallException", { enumerable: true, get: function () { return errors_js_1.isCallException; } });
Object.defineProperty(exports, "isError", { enumerable: true, get: function () { return errors_js_1.isError; } });
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return errors_js_1.assert; } });
Object.defineProperty(exports, "assertArgument", { enumerable: true, get: function () { return errors_js_1.assertArgument; } });
Object.defineProperty(exports, "assertArgumentCount", { enumerable: true, get: function () { return errors_js_1.assertArgumentCount; } });
Object.defineProperty(exports, "assertPrivate", { enumerable: true, get: function () { return errors_js_1.assertPrivate; } });
Object.defineProperty(exports, "assertNormalize", { enumerable: true, get: function () { return errors_js_1.assertNormalize; } });
Object.defineProperty(exports, "makeError", { enumerable: true, get: function () { return errors_js_1.makeError; } });
var events_js_1 = require("./events.js");
Object.defineProperty(exports, "EventPayload", { enumerable: true, get: function () { return events_js_1.EventPayload; } });
var fetch_js_1 = require("./fetch.js");
Object.defineProperty(exports, "FetchRequest", { enumerable: true, get: function () { return fetch_js_1.FetchRequest; } });
Object.defineProperty(exports, "FetchResponse", { enumerable: true, get: function () { return fetch_js_1.FetchResponse; } });
Object.defineProperty(exports, "FetchCancelSignal", { enumerable: true, get: function () { return fetch_js_1.FetchCancelSignal; } });
var fixednumber_js_1 = require("./fixednumber.js");
Object.defineProperty(exports, "FixedNumber", { enumerable: true, get: function () { return fixednumber_js_1.FixedNumber; } });
var maths_js_1 = require("./maths.js");
Object.defineProperty(exports, "fromTwos", { enumerable: true, get: function () { return maths_js_1.fromTwos; } });
Object.defineProperty(exports, "toTwos", { enumerable: true, get: function () { return maths_js_1.toTwos; } });
Object.defineProperty(exports, "mask", { enumerable: true, get: function () { return maths_js_1.mask; } });
Object.defineProperty(exports, "getBigInt", { enumerable: true, get: function () { return maths_js_1.getBigInt; } });
Object.defineProperty(exports, "getNumber", { enumerable: true, get: function () { return maths_js_1.getNumber; } });
Object.defineProperty(exports, "getUint", { enumerable: true, get: function () { return maths_js_1.getUint; } });
Object.defineProperty(exports, "toBigInt", { enumerable: true, get: function () { return maths_js_1.toBigInt; } });
Object.defineProperty(exports, "toNumber", { enumerable: true, get: function () { return maths_js_1.toNumber; } });
Object.defineProperty(exports, "toBeHex", { enumerable: true, get: function () { return maths_js_1.toBeHex; } });
Object.defineProperty(exports, "toBeArray", { enumerable: true, get: function () { return maths_js_1.toBeArray; } });
Object.defineProperty(exports, "toQuantity", { enumerable: true, get: function () { return maths_js_1.toQuantity; } });
var properties_js_1 = require("./properties.js");
Object.defineProperty(exports, "resolveProperties", { enumerable: true, get: function () { return properties_js_1.resolveProperties; } });
Object.defineProperty(exports, "defineProperties", { enumerable: true, get: function () { return properties_js_1.defineProperties; } });
var rlp_decode_js_1 = require("./rlp-decode.js");
Object.defineProperty(exports, "decodeRlp", { enumerable: true, get: function () { return rlp_decode_js_1.decodeRlp; } });
var rlp_encode_js_1 = require("./rlp-encode.js");
Object.defineProperty(exports, "encodeRlp", { enumerable: true, get: function () { return rlp_encode_js_1.encodeRlp; } });
var units_js_1 = require("./units.js");
Object.defineProperty(exports, "formatEther", { enumerable: true, get: function () { return units_js_1.formatEther; } });
Object.defineProperty(exports, "parseEther", { enumerable: true, get: function () { return units_js_1.parseEther; } });
Object.defineProperty(exports, "formatUnits", { enumerable: true, get: function () { return units_js_1.formatUnits; } });
Object.defineProperty(exports, "parseUnits", { enumerable: true, get: function () { return units_js_1.parseUnits; } });
var utf8_js_1 = require("./utf8.js");
Object.defineProperty(exports, "toUtf8Bytes", { enumerable: true, get: function () { return utf8_js_1.toUtf8Bytes; } });
Object.defineProperty(exports, "toUtf8CodePoints", { enumerable: true, get: function () { return utf8_js_1.toUtf8CodePoints; } });
Object.defineProperty(exports, "toUtf8String", { enumerable: true, get: function () { return utf8_js_1.toUtf8String; } });
Object.defineProperty(exports, "Utf8ErrorFuncs", { enumerable: true, get: function () { return utf8_js_1.Utf8ErrorFuncs; } });
var uuid_js_1 = require("./uuid.js");
Object.defineProperty(exports, "uuidV4", { enumerable: true, get: function () { return uuid_js_1.uuidV4; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./base58.js":1730085369175,"./base64.js":1730085369180,"./data.js":1730085369176,"./errors.js":1730085369177,"./maths.js":1730085369179,"./properties.js":1730085369178,"./rlp-decode.js":1730085369184,"./rlp-encode.js":1730085369185,"./units.js":1730085369186,"./utf8.js":1730085369188,"./uuid.js":1730085369189}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369175, function(require, module, exports) {

/**
 *  The [Base58 Encoding](link-base58) scheme allows a **numeric** value
 *  to be encoded as a compact string using a radix of 58 using only
 *  alpha-numeric characters. Confusingly similar characters are omitted
 *  (i.e. ``"l0O"``).
 *
 *  Note that Base58 encodes a **numeric** value, not arbitrary bytes,
 *  since any zero-bytes on the left would get removed. To mitigate this
 *  issue most schemes that use Base58 choose specific high-order values
 *  to ensure non-zero prefixes.
 *
 *  @_subsection: api/utils:Base58 Encoding [about-base58]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase58 = exports.encodeBase58 = void 0;
const data_js_1 = require("./data.js");
const errors_js_1 = require("./errors.js");
const maths_js_1 = require("./maths.js");
const Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
let Lookup = null;
function getAlpha(letter) {
    if (Lookup == null) {
        Lookup = {};
        for (let i = 0; i < Alphabet.length; i++) {
            Lookup[Alphabet[i]] = BigInt(i);
        }
    }
    const result = Lookup[letter];
    (0, errors_js_1.assertArgument)(result != null, `invalid base58 value`, "letter", letter);
    return result;
}
const BN_0 = BigInt(0);
const BN_58 = BigInt(58);
/**
 *  Encode %%value%% as a Base58-encoded string.
 */
function encodeBase58(_value) {
    const bytes = (0, data_js_1.getBytes)(_value);
    let value = (0, maths_js_1.toBigInt)(bytes);
    let result = "";
    while (value) {
        result = Alphabet[Number(value % BN_58)] + result;
        value /= BN_58;
    }
    // Account for leading padding zeros
    for (let i = 0; i < bytes.length; i++) {
        if (bytes[i]) {
            break;
        }
        result = Alphabet[0] + result;
    }
    return result;
}
exports.encodeBase58 = encodeBase58;
/**
 *  Decode the Base58-encoded %%value%%.
 */
function decodeBase58(value) {
    let result = BN_0;
    for (let i = 0; i < value.length; i++) {
        result *= BN_58;
        result += getAlpha(value[i]);
    }
    return result;
}
exports.decodeBase58 = decodeBase58;
//# sourceMappingURL=base58.js.map
}, function(modId) { var map = {"./data.js":1730085369176,"./errors.js":1730085369177,"./maths.js":1730085369179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369176, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroPadBytes = exports.zeroPadValue = exports.stripZerosLeft = exports.dataSlice = exports.dataLength = exports.concat = exports.hexlify = exports.isBytesLike = exports.isHexString = exports.getBytesCopy = exports.getBytes = void 0;
/**
 *  Some data helpers.
 *
 *
 *  @_subsection api/utils:Data Helpers  [about-data]
 */
const errors_js_1 = require("./errors.js");
function _getBytes(value, name, copy) {
    if (value instanceof Uint8Array) {
        if (copy) {
            return new Uint8Array(value);
        }
        return value;
    }
    if (typeof (value) === "string" && value.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
        const result = new Uint8Array((value.length - 2) / 2);
        let offset = 2;
        for (let i = 0; i < result.length; i++) {
            result[i] = parseInt(value.substring(offset, offset + 2), 16);
            offset += 2;
        }
        return result;
    }
    (0, errors_js_1.assertArgument)(false, "invalid BytesLike value", name || "value", value);
}
/**
 *  Get a typed Uint8Array for %%value%%. If already a Uint8Array
 *  the original %%value%% is returned; if a copy is required use
 *  [[getBytesCopy]].
 *
 *  @see: getBytesCopy
 */
function getBytes(value, name) {
    return _getBytes(value, name, false);
}
exports.getBytes = getBytes;
/**
 *  Get a typed Uint8Array for %%value%%, creating a copy if necessary
 *  to prevent any modifications of the returned value from being
 *  reflected elsewhere.
 *
 *  @see: getBytes
 */
function getBytesCopy(value, name) {
    return _getBytes(value, name, true);
}
exports.getBytesCopy = getBytesCopy;
/**
 *  Returns true if %%value%% is a valid [[HexString]].
 *
 *  If %%length%% is ``true`` or a //number//, it also checks that
 *  %%value%% is a valid [[DataHexString]] of %%length%% (if a //number//)
 *  bytes of data (e.g. ``0x1234`` is 2 bytes).
 */
function isHexString(value, length) {
    if (typeof (value) !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (typeof (length) === "number" && value.length !== 2 + 2 * length) {
        return false;
    }
    if (length === true && (value.length % 2) !== 0) {
        return false;
    }
    return true;
}
exports.isHexString = isHexString;
/**
 *  Returns true if %%value%% is a valid representation of arbitrary
 *  data (i.e. a valid [[DataHexString]] or a Uint8Array).
 */
function isBytesLike(value) {
    return (isHexString(value, true) || (value instanceof Uint8Array));
}
exports.isBytesLike = isBytesLike;
const HexCharacters = "0123456789abcdef";
/**
 *  Returns a [[DataHexString]] representation of %%data%%.
 */
function hexlify(data) {
    const bytes = getBytes(data);
    let result = "0x";
    for (let i = 0; i < bytes.length; i++) {
        const v = bytes[i];
        result += HexCharacters[(v & 0xf0) >> 4] + HexCharacters[v & 0x0f];
    }
    return result;
}
exports.hexlify = hexlify;
/**
 *  Returns a [[DataHexString]] by concatenating all values
 *  within %%data%%.
 */
function concat(datas) {
    return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
}
exports.concat = concat;
/**
 *  Returns the length of %%data%%, in bytes.
 */
function dataLength(data) {
    if (isHexString(data, true)) {
        return (data.length - 2) / 2;
    }
    return getBytes(data).length;
}
exports.dataLength = dataLength;
/**
 *  Returns a [[DataHexString]] by slicing %%data%% from the %%start%%
 *  offset to the %%end%% offset.
 *
 *  By default %%start%% is 0 and %%end%% is the length of %%data%%.
 */
function dataSlice(data, start, end) {
    const bytes = getBytes(data);
    if (end != null && end > bytes.length) {
        (0, errors_js_1.assert)(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
            buffer: bytes, length: bytes.length, offset: end
        });
    }
    return hexlify(bytes.slice((start == null) ? 0 : start, (end == null) ? bytes.length : end));
}
exports.dataSlice = dataSlice;
/**
 *  Return the [[DataHexString]] result by stripping all **leading**
 ** zero bytes from %%data%%.
 */
function stripZerosLeft(data) {
    let bytes = hexlify(data).substring(2);
    while (bytes.startsWith("00")) {
        bytes = bytes.substring(2);
    }
    return "0x" + bytes;
}
exports.stripZerosLeft = stripZerosLeft;
function zeroPad(data, length, left) {
    const bytes = getBytes(data);
    (0, errors_js_1.assert)(length >= bytes.length, "padding exceeds data length", "BUFFER_OVERRUN", {
        buffer: new Uint8Array(bytes),
        length: length,
        offset: length + 1
    });
    const result = new Uint8Array(length);
    result.fill(0);
    if (left) {
        result.set(bytes, length - bytes.length);
    }
    else {
        result.set(bytes, 0);
    }
    return hexlify(result);
}
/**
 *  Return the [[DataHexString]] of %%data%% padded on the **left**
 *  to %%length%% bytes.
 *
 *  If %%data%% already exceeds %%length%%, a [[BufferOverrunError]] is
 *  thrown.
 *
 *  This pads data the same as **values** are in Solidity
 *  (e.g. ``uint128``).
 */
function zeroPadValue(data, length) {
    return zeroPad(data, length, true);
}
exports.zeroPadValue = zeroPadValue;
/**
 *  Return the [[DataHexString]] of %%data%% padded on the **right**
 *  to %%length%% bytes.
 *
 *  If %%data%% already exceeds %%length%%, a [[BufferOverrunError]] is
 *  thrown.
 *
 *  This pads data the same as **bytes** are in Solidity
 *  (e.g. ``bytes16``).
 */
function zeroPadBytes(data, length) {
    return zeroPad(data, length, false);
}
exports.zeroPadBytes = zeroPadBytes;
//# sourceMappingURL=data.js.map
}, function(modId) { var map = {"./errors.js":1730085369177}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369177, function(require, module, exports) {

/**
 *  All errors in ethers include properties to ensure they are both
 *  human-readable (i.e. ``.message``) and machine-readable (i.e. ``.code``).
 *
 *  The [[isError]] function can be used to check the error ``code`` and
 *  provide a type guard for the properties present on that error interface.
 *
 *  @_section: api/utils/errors:Errors  [about-errors]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPrivate = exports.assertNormalize = exports.assertArgumentCount = exports.assertArgument = exports.assert = exports.makeError = exports.isCallException = exports.isError = void 0;
const _version_js_1 = require("../_version.js");
const properties_js_1 = require("./properties.js");
function stringify(value) {
    if (value == null) {
        return "null";
    }
    if (Array.isArray(value)) {
        return "[ " + (value.map(stringify)).join(", ") + " ]";
    }
    if (value instanceof Uint8Array) {
        const HEX = "0123456789abcdef";
        let result = "0x";
        for (let i = 0; i < value.length; i++) {
            result += HEX[value[i] >> 4];
            result += HEX[value[i] & 0xf];
        }
        return result;
    }
    if (typeof (value) === "object" && typeof (value.toJSON) === "function") {
        return stringify(value.toJSON());
    }
    switch (typeof (value)) {
        case "boolean":
        case "symbol":
            return value.toString();
        case "bigint":
            return BigInt(value).toString();
        case "number":
            return (value).toString();
        case "string":
            return JSON.stringify(value);
        case "object": {
            const keys = Object.keys(value);
            keys.sort();
            return "{ " + keys.map((k) => `${stringify(k)}: ${stringify(value[k])}`).join(", ") + " }";
        }
    }
    return `[ COULD NOT SERIALIZE ]`;
}
/**
 *  Returns true if the %%error%% matches an error thrown by ethers
 *  that matches the error %%code%%.
 *
 *  In TypeScript environments, this can be used to check that %%error%%
 *  matches an EthersError type, which means the expected properties will
 *  be set.
 *
 *  @See [ErrorCodes](api:ErrorCode)
 *  @example
 *    try {
 *      // code....
 *    } catch (e) {
 *      if (isError(e, "CALL_EXCEPTION")) {
 *          // The Type Guard has validated this object
 *          console.log(e.data);
 *      }
 *    }
 */
function isError(error, code) {
    return (error && error.code === code);
}
exports.isError = isError;
/**
 *  Returns true if %%error%% is a [[CallExceptionError].
 */
function isCallException(error) {
    return isError(error, "CALL_EXCEPTION");
}
exports.isCallException = isCallException;
/**
 *  Returns a new Error configured to the format ethers emits errors, with
 *  the %%message%%, [[api:ErrorCode]] %%code%% and additional properties
 *  for the corresponding EthersError.
 *
 *  Each error in ethers includes the version of ethers, a
 *  machine-readable [[ErrorCode]], and depending on %%code%%, additional
 *  required properties. The error message will also include the %%message%%,
 *  ethers version, %%code%% and all additional properties, serialized.
 */
function makeError(message, code, info) {
    let shortMessage = message;
    {
        const details = [];
        if (info) {
            if ("message" in info || "code" in info || "name" in info) {
                throw new Error(`value will overwrite populated values: ${stringify(info)}`);
            }
            for (const key in info) {
                if (key === "shortMessage") {
                    continue;
                }
                const value = (info[key]);
                //                try {
                details.push(key + "=" + stringify(value));
                //                } catch (error: any) {
                //                console.log("MMM", error.message);
                //                    details.push(key + "=[could not serialize object]");
                //                }
            }
        }
        details.push(`code=${code}`);
        details.push(`version=${_version_js_1.version}`);
        if (details.length) {
            message += " (" + details.join(", ") + ")";
        }
    }
    let error;
    switch (code) {
        case "INVALID_ARGUMENT":
            error = new TypeError(message);
            break;
        case "NUMERIC_FAULT":
        case "BUFFER_OVERRUN":
            error = new RangeError(message);
            break;
        default:
            error = new Error(message);
    }
    (0, properties_js_1.defineProperties)(error, { code });
    if (info) {
        Object.assign(error, info);
    }
    if (error.shortMessage == null) {
        (0, properties_js_1.defineProperties)(error, { shortMessage });
    }
    return error;
}
exports.makeError = makeError;
/**
 *  Throws an EthersError with %%message%%, %%code%% and additional error
 *  %%info%% when %%check%% is falsish..
 *
 *  @see [[api:makeError]]
 */
function assert(check, message, code, info) {
    if (!check) {
        throw makeError(message, code, info);
    }
}
exports.assert = assert;
/**
 *  A simple helper to simply ensuring provided arguments match expected
 *  constraints, throwing if not.
 *
 *  In TypeScript environments, the %%check%% has been asserted true, so
 *  any further code does not need additional compile-time checks.
 */
function assertArgument(check, message, name, value) {
    assert(check, message, "INVALID_ARGUMENT", { argument: name, value: value });
}
exports.assertArgument = assertArgument;
function assertArgumentCount(count, expectedCount, message) {
    if (message == null) {
        message = "";
    }
    if (message) {
        message = ": " + message;
    }
    assert(count >= expectedCount, "missing arguemnt" + message, "MISSING_ARGUMENT", {
        count: count,
        expectedCount: expectedCount
    });
    assert(count <= expectedCount, "too many arguments" + message, "UNEXPECTED_ARGUMENT", {
        count: count,
        expectedCount: expectedCount
    });
}
exports.assertArgumentCount = assertArgumentCount;
const _normalizeForms = ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
    try {
        // General test for normalize
        /* c8 ignore start */
        if ("test".normalize(form) !== "test") {
            throw new Error("bad");
        }
        ;
        /* c8 ignore stop */
        if (form === "NFD") {
            const check = String.fromCharCode(0xe9).normalize("NFD");
            const expected = String.fromCharCode(0x65, 0x0301);
            /* c8 ignore start */
            if (check !== expected) {
                throw new Error("broken");
            }
            /* c8 ignore stop */
        }
        accum.push(form);
    }
    catch (error) { }
    return accum;
}, []);
/**
 *  Throws if the normalization %%form%% is not supported.
 */
function assertNormalize(form) {
    assert(_normalizeForms.indexOf(form) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
        operation: "String.prototype.normalize", info: { form }
    });
}
exports.assertNormalize = assertNormalize;
/**
 *  Many classes use file-scoped values to guard the constructor,
 *  making it effectively private. This facilitates that pattern
 *  by ensuring the %%givenGaurd%% matches the file-scoped %%guard%%,
 *  throwing if not, indicating the %%className%% if provided.
 */
function assertPrivate(givenGuard, guard, className) {
    if (className == null) {
        className = "";
    }
    if (givenGuard !== guard) {
        let method = className, operation = "new";
        if (className) {
            method += ".";
            operation += " " + className;
        }
        assert(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
            operation
        });
    }
}
exports.assertPrivate = assertPrivate;
//# sourceMappingURL=errors.js.map
}, function(modId) { var map = {"../_version.js":1730085369170,"./properties.js":1730085369178}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369178, function(require, module, exports) {

/**
 *  Property helper functions.
 *
 *  @_subsection api/utils:Properties  [about-properties]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineProperties = exports.resolveProperties = void 0;
function checkType(value, type, name) {
    const types = type.split("|").map(t => t.trim());
    for (let i = 0; i < types.length; i++) {
        switch (type) {
            case "any":
                return;
            case "bigint":
            case "boolean":
            case "number":
            case "string":
                if (typeof (value) === type) {
                    return;
                }
        }
    }
    const error = new Error(`invalid value for type ${type}`);
    error.code = "INVALID_ARGUMENT";
    error.argument = `value.${name}`;
    error.value = value;
    throw error;
}
/**
 *  Resolves to a new object that is a copy of %%value%%, but with all
 *  values resolved.
 */
async function resolveProperties(value) {
    const keys = Object.keys(value);
    const results = await Promise.all(keys.map((k) => Promise.resolve(value[k])));
    return results.reduce((accum, v, index) => {
        accum[keys[index]] = v;
        return accum;
    }, {});
}
exports.resolveProperties = resolveProperties;
/**
 *  Assigns the %%values%% to %%target%% as read-only values.
 *
 *  It %%types%% is specified, the values are checked.
 */
function defineProperties(target, values, types) {
    for (let key in values) {
        let value = values[key];
        const type = (types ? types[key] : null);
        if (type) {
            checkType(value, type, key);
        }
        Object.defineProperty(target, key, { enumerable: true, value, writable: false });
    }
}
exports.defineProperties = defineProperties;
//# sourceMappingURL=properties.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369179, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.toQuantity = exports.toBeArray = exports.toBeHex = exports.toNumber = exports.getNumber = exports.toBigInt = exports.getUint = exports.getBigInt = exports.mask = exports.toTwos = exports.fromTwos = void 0;
/**
 *  Some mathematic operations.
 *
 *  @_subsection: api/utils:Math Helpers  [about-maths]
 */
const data_js_1 = require("./data.js");
const errors_js_1 = require("./errors.js");
const BN_0 = BigInt(0);
const BN_1 = BigInt(1);
//const BN_Max256 = (BN_1 << BigInt(256)) - BN_1;
// IEEE 754 support 53-bits of mantissa
const maxValue = 0x1fffffffffffff;
/**
 *  Convert %%value%% from a twos-compliment representation of %%width%%
 *  bits to its value.
 *
 *  If the highest bit is ``1``, the result will be negative.
 */
function fromTwos(_value, _width) {
    const value = getUint(_value, "value");
    const width = BigInt(getNumber(_width, "width"));
    (0, errors_js_1.assert)((value >> width) === BN_0, "overflow", "NUMERIC_FAULT", {
        operation: "fromTwos", fault: "overflow", value: _value
    });
    // Top bit set; treat as a negative value
    if (value >> (width - BN_1)) {
        const mask = (BN_1 << width) - BN_1;
        return -(((~value) & mask) + BN_1);
    }
    return value;
}
exports.fromTwos = fromTwos;
/**
 *  Convert %%value%% to a twos-compliment representation of
 *  %%width%% bits.
 *
 *  The result will always be positive.
 */
function toTwos(_value, _width) {
    let value = getBigInt(_value, "value");
    const width = BigInt(getNumber(_width, "width"));
    const limit = (BN_1 << (width - BN_1));
    if (value < BN_0) {
        value = -value;
        (0, errors_js_1.assert)(value <= limit, "too low", "NUMERIC_FAULT", {
            operation: "toTwos", fault: "overflow", value: _value
        });
        const mask = (BN_1 << width) - BN_1;
        return ((~value) & mask) + BN_1;
    }
    else {
        (0, errors_js_1.assert)(value < limit, "too high", "NUMERIC_FAULT", {
            operation: "toTwos", fault: "overflow", value: _value
        });
    }
    return value;
}
exports.toTwos = toTwos;
/**
 *  Mask %%value%% with a bitmask of %%bits%% ones.
 */
function mask(_value, _bits) {
    const value = getUint(_value, "value");
    const bits = BigInt(getNumber(_bits, "bits"));
    return value & ((BN_1 << bits) - BN_1);
}
exports.mask = mask;
/**
 *  Gets a BigInt from %%value%%. If it is an invalid value for
 *  a BigInt, then an ArgumentError will be thrown for %%name%%.
 */
function getBigInt(value, name) {
    switch (typeof (value)) {
        case "bigint": return value;
        case "number":
            (0, errors_js_1.assertArgument)(Number.isInteger(value), "underflow", name || "value", value);
            (0, errors_js_1.assertArgument)(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
            return BigInt(value);
        case "string":
            try {
                if (value === "") {
                    throw new Error("empty string");
                }
                if (value[0] === "-" && value[1] !== "-") {
                    return -BigInt(value.substring(1));
                }
                return BigInt(value);
            }
            catch (e) {
                (0, errors_js_1.assertArgument)(false, `invalid BigNumberish string: ${e.message}`, name || "value", value);
            }
    }
    (0, errors_js_1.assertArgument)(false, "invalid BigNumberish value", name || "value", value);
}
exports.getBigInt = getBigInt;
/**
 *  Returns %%value%% as a bigint, validating it is valid as a bigint
 *  value and that it is positive.
 */
function getUint(value, name) {
    const result = getBigInt(value, name);
    (0, errors_js_1.assert)(result >= BN_0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
        fault: "overflow", operation: "getUint", value
    });
    return result;
}
exports.getUint = getUint;
const Nibbles = "0123456789abcdef";
/*
 * Converts %%value%% to a BigInt. If %%value%% is a Uint8Array, it
 * is treated as Big Endian data.
 */
function toBigInt(value) {
    if (value instanceof Uint8Array) {
        let result = "0x0";
        for (const v of value) {
            result += Nibbles[v >> 4];
            result += Nibbles[v & 0x0f];
        }
        return BigInt(result);
    }
    return getBigInt(value);
}
exports.toBigInt = toBigInt;
/**
 *  Gets a //number// from %%value%%. If it is an invalid value for
 *  a //number//, then an ArgumentError will be thrown for %%name%%.
 */
function getNumber(value, name) {
    switch (typeof (value)) {
        case "bigint":
            (0, errors_js_1.assertArgument)(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
            return Number(value);
        case "number":
            (0, errors_js_1.assertArgument)(Number.isInteger(value), "underflow", name || "value", value);
            (0, errors_js_1.assertArgument)(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
            return value;
        case "string":
            try {
                if (value === "") {
                    throw new Error("empty string");
                }
                return getNumber(BigInt(value), name);
            }
            catch (e) {
                (0, errors_js_1.assertArgument)(false, `invalid numeric string: ${e.message}`, name || "value", value);
            }
    }
    (0, errors_js_1.assertArgument)(false, "invalid numeric value", name || "value", value);
}
exports.getNumber = getNumber;
/**
 *  Converts %%value%% to a number. If %%value%% is a Uint8Array, it
 *  is treated as Big Endian data. Throws if the value is not safe.
 */
function toNumber(value) {
    return getNumber(toBigInt(value));
}
exports.toNumber = toNumber;
/**
 *  Converts %%value%% to a Big Endian hexstring, optionally padded to
 *  %%width%% bytes.
 */
function toBeHex(_value, _width) {
    const value = getUint(_value, "value");
    let result = value.toString(16);
    if (_width == null) {
        // Ensure the value is of even length
        if (result.length % 2) {
            result = "0" + result;
        }
    }
    else {
        const width = getNumber(_width, "width");
        (0, errors_js_1.assert)(width * 2 >= result.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
            operation: "toBeHex",
            fault: "overflow",
            value: _value
        });
        // Pad the value to the required width
        while (result.length < (width * 2)) {
            result = "0" + result;
        }
    }
    return "0x" + result;
}
exports.toBeHex = toBeHex;
/**
 *  Converts %%value%% to a Big Endian Uint8Array.
 */
function toBeArray(_value) {
    const value = getUint(_value, "value");
    if (value === BN_0) {
        return new Uint8Array([]);
    }
    let hex = value.toString(16);
    if (hex.length % 2) {
        hex = "0" + hex;
    }
    const result = new Uint8Array(hex.length / 2);
    for (let i = 0; i < result.length; i++) {
        const offset = i * 2;
        result[i] = parseInt(hex.substring(offset, offset + 2), 16);
    }
    return result;
}
exports.toBeArray = toBeArray;
/**
 *  Returns a [[HexString]] for %%value%% safe to use as a //Quantity//.
 *
 *  A //Quantity// does not have and leading 0 values unless the value is
 *  the literal value `0x0`. This is most commonly used for JSSON-RPC
 *  numeric values.
 */
function toQuantity(value) {
    let result = (0, data_js_1.hexlify)((0, data_js_1.isBytesLike)(value) ? value : toBeArray(value)).substring(2);
    while (result.startsWith("0")) {
        result = result.substring(1);
    }
    if (result === "") {
        result = "0";
    }
    return "0x" + result;
}
exports.toQuantity = toQuantity;
//# sourceMappingURL=maths.js.map
}, function(modId) { var map = {"./data.js":1730085369176,"./errors.js":1730085369177}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369180, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBase64 = exports.decodeBase64 = void 0;
/**
 *  [Base64 encoding](link-wiki-base64) using 6-bit words to encode
 *  arbitrary bytes into a string using 65 printable symbols, the
 *  upper-case and lower-case alphabet, the digits ``0`` through ``9``,
 *  ``"+"`` and ``"/"`` with the ``"="`` used for padding.
 *
 *  @_subsection: api/utils:Base64 Encoding  [about-base64]
 */
const data_js_1 = require("./data.js");
/**
 *  Decodes the base-64 encoded %%value%%.
 *
 *  @example:
 *    // The decoded value is always binary data...
 *    result = decodeBase64("SGVsbG8gV29ybGQhIQ==")
 *    //_result:
 *
 *    // ...use toUtf8String to convert it to a string.
 *    toUtf8String(result)
 *    //_result:
 *
 *    // Decoding binary data
 *    decodeBase64("EjQ=")
 *    //_result:
 */
function decodeBase64(value) {
    return (0, data_js_1.getBytesCopy)(Buffer.from(value, "base64"));
}
exports.decodeBase64 = decodeBase64;
;
/**
 *  Encodes %%data%% as a base-64 encoded string.
 *
 *  @example:
 *    // Encoding binary data as a hexstring
 *    encodeBase64("0x1234")
 *    //_result:
 *
 *    // Encoding binary data as a Uint8Array
 *    encodeBase64(new Uint8Array([ 0x12, 0x34 ]))
 *    //_result:
 *
 *    // The input MUST be data...
 *    encodeBase64("Hello World!!")
 *    //_error:
 *
 *    // ...use toUtf8Bytes for this.
 *    encodeBase64(toUtf8Bytes("Hello World!!"))
 *    //_result:
 */
function encodeBase64(data) {
    return Buffer.from((0, data_js_1.getBytes)(data)).toString("base64");
}
exports.encodeBase64 = encodeBase64;
//# sourceMappingURL=base64.js.map
}, function(modId) { var map = {"./data.js":1730085369176}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369184, function(require, module, exports) {

//See: https://github.com/ethereum/wiki/wiki/RLP
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeRlp = void 0;
const data_js_1 = require("./data.js");
const errors_js_1 = require("./errors.js");
const data_js_2 = require("./data.js");
function hexlifyByte(value) {
    let result = value.toString(16);
    while (result.length < 2) {
        result = "0" + result;
    }
    return "0x" + result;
}
function unarrayifyInteger(data, offset, length) {
    let result = 0;
    for (let i = 0; i < length; i++) {
        result = (result * 256) + data[offset + i];
    }
    return result;
}
function _decodeChildren(data, offset, childOffset, length) {
    const result = [];
    while (childOffset < offset + 1 + length) {
        const decoded = _decode(data, childOffset);
        result.push(decoded.result);
        childOffset += decoded.consumed;
        (0, errors_js_1.assert)(childOffset <= offset + 1 + length, "child data too short", "BUFFER_OVERRUN", {
            buffer: data, length, offset
        });
    }
    return { consumed: (1 + length), result: result };
}
// returns { consumed: number, result: Object }
function _decode(data, offset) {
    (0, errors_js_1.assert)(data.length !== 0, "data too short", "BUFFER_OVERRUN", {
        buffer: data, length: 0, offset: 1
    });
    const checkOffset = (offset) => {
        (0, errors_js_1.assert)(offset <= data.length, "data short segment too short", "BUFFER_OVERRUN", {
            buffer: data, length: data.length, offset
        });
    };
    // Array with extra length prefix
    if (data[offset] >= 0xf8) {
        const lengthLength = data[offset] - 0xf7;
        checkOffset(offset + 1 + lengthLength);
        const length = unarrayifyInteger(data, offset + 1, lengthLength);
        checkOffset(offset + 1 + lengthLength + length);
        return _decodeChildren(data, offset, offset + 1 + lengthLength, lengthLength + length);
    }
    else if (data[offset] >= 0xc0) {
        const length = data[offset] - 0xc0;
        checkOffset(offset + 1 + length);
        return _decodeChildren(data, offset, offset + 1, length);
    }
    else if (data[offset] >= 0xb8) {
        const lengthLength = data[offset] - 0xb7;
        checkOffset(offset + 1 + lengthLength);
        const length = unarrayifyInteger(data, offset + 1, lengthLength);
        checkOffset(offset + 1 + lengthLength + length);
        const result = (0, data_js_1.hexlify)(data.slice(offset + 1 + lengthLength, offset + 1 + lengthLength + length));
        return { consumed: (1 + lengthLength + length), result: result };
    }
    else if (data[offset] >= 0x80) {
        const length = data[offset] - 0x80;
        checkOffset(offset + 1 + length);
        const result = (0, data_js_1.hexlify)(data.slice(offset + 1, offset + 1 + length));
        return { consumed: (1 + length), result: result };
    }
    return { consumed: 1, result: hexlifyByte(data[offset]) };
}
/**
 *  Decodes %%data%% into the structured data it represents.
 */
function decodeRlp(_data) {
    const data = (0, data_js_2.getBytes)(_data, "data");
    const decoded = _decode(data, 0);
    (0, errors_js_1.assertArgument)(decoded.consumed === data.length, "unexpected junk after rlp payload", "data", _data);
    return decoded.result;
}
exports.decodeRlp = decodeRlp;
//# sourceMappingURL=rlp-decode.js.map
}, function(modId) { var map = {"./data.js":1730085369176,"./errors.js":1730085369177}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369185, function(require, module, exports) {

//See: https://github.com/ethereum/wiki/wiki/RLP
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeRlp = void 0;
const data_js_1 = require("./data.js");
function arrayifyInteger(value) {
    const result = [];
    while (value) {
        result.unshift(value & 0xff);
        value >>= 8;
    }
    return result;
}
function _encode(object) {
    if (Array.isArray(object)) {
        let payload = [];
        object.forEach(function (child) {
            payload = payload.concat(_encode(child));
        });
        if (payload.length <= 55) {
            payload.unshift(0xc0 + payload.length);
            return payload;
        }
        const length = arrayifyInteger(payload.length);
        length.unshift(0xf7 + length.length);
        return length.concat(payload);
    }
    const data = Array.prototype.slice.call((0, data_js_1.getBytes)(object, "object"));
    if (data.length === 1 && data[0] <= 0x7f) {
        return data;
    }
    else if (data.length <= 55) {
        data.unshift(0x80 + data.length);
        return data;
    }
    const length = arrayifyInteger(data.length);
    length.unshift(0xb7 + length.length);
    return length.concat(data);
}
const nibbles = "0123456789abcdef";
/**
 *  Encodes %%object%% as an RLP-encoded [[DataHexString]].
 */
function encodeRlp(object) {
    let result = "0x";
    for (const v of _encode(object)) {
        result += nibbles[v >> 4];
        result += nibbles[v & 0xf];
    }
    return result;
}
exports.encodeRlp = encodeRlp;
//# sourceMappingURL=rlp-encode.js.map
}, function(modId) { var map = {"./data.js":1730085369176}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369186, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEther = exports.formatEther = exports.parseUnits = exports.formatUnits = void 0;
/**
 *  Most interactions with Ethereum requires integer values, which use
 *  the smallest magnitude unit.
 *
 *  For example, imagine dealing with dollars and cents. Since dollars
 *  are divisible, non-integer values are possible, such as ``$10.77``.
 *  By using the smallest indivisible unit (i.e. cents), the value can
 *  be kept as the integer ``1077``.
 *
 *  When receiving decimal input from the user (as a decimal string),
 *  the value should be converted to an integer and when showing a user
 *  a value, the integer value should be converted to a decimal string.
 *
 *  This creates a clear distinction, between values to be used by code
 *  (integers) and values used for display logic to users (decimals).
 *
 *  The native unit in Ethereum, //ether// is divisible to 18 decimal places,
 *  where each individual unit is called a //wei//.
 *
 *  @_subsection api/utils:Unit Conversion  [about-units]
 */
const errors_js_1 = require("./errors.js");
const fixednumber_js_1 = require("./fixednumber.js");
const maths_js_1 = require("./maths.js");
const names = [
    "wei",
    "kwei",
    "mwei",
    "gwei",
    "szabo",
    "finney",
    "ether",
];
/**
 *  Converts %%value%% into a //decimal string//, assuming %%unit%% decimal
 *  places. The %%unit%% may be the number of decimal places or the name of
 *  a unit (e.g. ``"gwei"`` for 9 decimal places).
 *
 */
function formatUnits(value, unit) {
    let decimals = 18;
    if (typeof (unit) === "string") {
        const index = names.indexOf(unit);
        (0, errors_js_1.assertArgument)(index >= 0, "invalid unit", "unit", unit);
        decimals = 3 * index;
    }
    else if (unit != null) {
        decimals = (0, maths_js_1.getNumber)(unit, "unit");
    }
    return fixednumber_js_1.FixedNumber.fromValue(value, decimals, { decimals, width: 512 }).toString();
}
exports.formatUnits = formatUnits;
/**
 *  Converts the //decimal string// %%value%% to a BigInt, assuming
 *  %%unit%% decimal places. The %%unit%% may the number of decimal places
 *  or the name of a unit (e.g. ``"gwei"`` for 9 decimal places).
 */
function parseUnits(value, unit) {
    (0, errors_js_1.assertArgument)(typeof (value) === "string", "value must be a string", "value", value);
    let decimals = 18;
    if (typeof (unit) === "string") {
        const index = names.indexOf(unit);
        (0, errors_js_1.assertArgument)(index >= 0, "invalid unit", "unit", unit);
        decimals = 3 * index;
    }
    else if (unit != null) {
        decimals = (0, maths_js_1.getNumber)(unit, "unit");
    }
    return fixednumber_js_1.FixedNumber.fromString(value, { decimals, width: 512 }).value;
}
exports.parseUnits = parseUnits;
/**
 *  Converts %%value%% into a //decimal string// using 18 decimal places.
 */
function formatEther(wei) {
    return formatUnits(wei, 18);
}
exports.formatEther = formatEther;
/**
 *  Converts the //decimal string// %%ether%% to a BigInt, using 18
 *  decimal places.
 */
function parseEther(ether) {
    return parseUnits(ether, 18);
}
exports.parseEther = parseEther;
//# sourceMappingURL=units.js.map
}, function(modId) { var map = {"./errors.js":1730085369177,"./maths.js":1730085369179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369188, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.toUtf8CodePoints = exports.toUtf8String = exports.toUtf8Bytes = exports.Utf8ErrorFuncs = void 0;
/**
 *  Using strings in Ethereum (or any security-basd system) requires
 *  additional care. These utilities attempt to mitigate some of the
 *  safety issues as well as provide the ability to recover and analyse
 *  strings.
 *
 *  @_subsection api/utils:Strings and UTF-8  [about-strings]
 */
const data_js_1 = require("./data.js");
const errors_js_1 = require("./errors.js");
function errorFunc(reason, offset, bytes, output, badCodepoint) {
    (0, errors_js_1.assertArgument)(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes);
}
function ignoreFunc(reason, offset, bytes, output, badCodepoint) {
    // If there is an invalid prefix (including stray continuation), skip any additional continuation bytes
    if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
        let i = 0;
        for (let o = offset + 1; o < bytes.length; o++) {
            if (bytes[o] >> 6 !== 0x02) {
                break;
            }
            i++;
        }
        return i;
    }
    // This byte runs us past the end of the string, so just jump to the end
    // (but the first byte was read already read and therefore skipped)
    if (reason === "OVERRUN") {
        return bytes.length - offset - 1;
    }
    // Nothing to skip
    return 0;
}
function replaceFunc(reason, offset, bytes, output, badCodepoint) {
    // Overlong representations are otherwise "valid" code points; just non-deistingtished
    if (reason === "OVERLONG") {
        (0, errors_js_1.assertArgument)(typeof (badCodepoint) === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
        output.push(badCodepoint);
        return 0;
    }
    // Put the replacement character into the output
    output.push(0xfffd);
    // Otherwise, process as if ignoring errors
    return ignoreFunc(reason, offset, bytes, output, badCodepoint);
}
/**
 *  A handful of popular, built-in UTF-8 error handling strategies.
 *
 *  **``"error"``** - throws on ANY illegal UTF-8 sequence or
 *  non-canonical (overlong) codepoints (this is the default)
 *
 *  **``"ignore"``** - silently drops any illegal UTF-8 sequence
 *  and accepts non-canonical (overlong) codepoints
 *
 *  **``"replace"``** - replace any illegal UTF-8 sequence with the
 *  UTF-8 replacement character (i.e. ``"\\ufffd"``) and accepts
 *  non-canonical (overlong) codepoints
 *
 *  @returns: Record<"error" | "ignore" | "replace", Utf8ErrorFunc>
 */
exports.Utf8ErrorFuncs = Object.freeze({
    error: errorFunc,
    ignore: ignoreFunc,
    replace: replaceFunc
});
// http://stackoverflow.com/questions/13356493/decode-utf-8-with-javascript#13691499
function getUtf8CodePoints(_bytes, onError) {
    if (onError == null) {
        onError = exports.Utf8ErrorFuncs.error;
    }
    const bytes = (0, data_js_1.getBytes)(_bytes, "bytes");
    const result = [];
    let i = 0;
    // Invalid bytes are ignored
    while (i < bytes.length) {
        const c = bytes[i++];
        // 0xxx xxxx
        if (c >> 7 === 0) {
            result.push(c);
            continue;
        }
        // Multibyte; how many bytes left for this character?
        let extraLength = null;
        let overlongMask = null;
        // 110x xxxx 10xx xxxx
        if ((c & 0xe0) === 0xc0) {
            extraLength = 1;
            overlongMask = 0x7f;
            // 1110 xxxx 10xx xxxx 10xx xxxx
        }
        else if ((c & 0xf0) === 0xe0) {
            extraLength = 2;
            overlongMask = 0x7ff;
            // 1111 0xxx 10xx xxxx 10xx xxxx 10xx xxxx
        }
        else if ((c & 0xf8) === 0xf0) {
            extraLength = 3;
            overlongMask = 0xffff;
        }
        else {
            if ((c & 0xc0) === 0x80) {
                i += onError("UNEXPECTED_CONTINUE", i - 1, bytes, result);
            }
            else {
                i += onError("BAD_PREFIX", i - 1, bytes, result);
            }
            continue;
        }
        // Do we have enough bytes in our data?
        if (i - 1 + extraLength >= bytes.length) {
            i += onError("OVERRUN", i - 1, bytes, result);
            continue;
        }
        // Remove the length prefix from the char
        let res = c & ((1 << (8 - extraLength - 1)) - 1);
        for (let j = 0; j < extraLength; j++) {
            let nextChar = bytes[i];
            // Invalid continuation byte
            if ((nextChar & 0xc0) != 0x80) {
                i += onError("MISSING_CONTINUE", i, bytes, result);
                res = null;
                break;
            }
            ;
            res = (res << 6) | (nextChar & 0x3f);
            i++;
        }
        // See above loop for invalid continuation byte
        if (res === null) {
            continue;
        }
        // Maximum code point
        if (res > 0x10ffff) {
            i += onError("OUT_OF_RANGE", i - 1 - extraLength, bytes, result, res);
            continue;
        }
        // Reserved for UTF-16 surrogate halves
        if (res >= 0xd800 && res <= 0xdfff) {
            i += onError("UTF16_SURROGATE", i - 1 - extraLength, bytes, result, res);
            continue;
        }
        // Check for overlong sequences (more bytes than needed)
        if (res <= overlongMask) {
            i += onError("OVERLONG", i - 1 - extraLength, bytes, result, res);
            continue;
        }
        result.push(res);
    }
    return result;
}
// http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
/**
 *  Returns the UTF-8 byte representation of %%str%%.
 *
 *  If %%form%% is specified, the string is normalized.
 */
function toUtf8Bytes(str, form) {
    (0, errors_js_1.assertArgument)(typeof (str) === "string", "invalid string value", "str", str);
    if (form != null) {
        (0, errors_js_1.assertNormalize)(form);
        str = str.normalize(form);
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 0x80) {
            result.push(c);
        }
        else if (c < 0x800) {
            result.push((c >> 6) | 0xc0);
            result.push((c & 0x3f) | 0x80);
        }
        else if ((c & 0xfc00) == 0xd800) {
            i++;
            const c2 = str.charCodeAt(i);
            (0, errors_js_1.assertArgument)(i < str.length && ((c2 & 0xfc00) === 0xdc00), "invalid surrogate pair", "str", str);
            // Surrogate Pair
            const pair = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
            result.push((pair >> 18) | 0xf0);
            result.push(((pair >> 12) & 0x3f) | 0x80);
            result.push(((pair >> 6) & 0x3f) | 0x80);
            result.push((pair & 0x3f) | 0x80);
        }
        else {
            result.push((c >> 12) | 0xe0);
            result.push(((c >> 6) & 0x3f) | 0x80);
            result.push((c & 0x3f) | 0x80);
        }
    }
    return new Uint8Array(result);
}
exports.toUtf8Bytes = toUtf8Bytes;
;
//export 
function _toUtf8String(codePoints) {
    return codePoints.map((codePoint) => {
        if (codePoint <= 0xffff) {
            return String.fromCharCode(codePoint);
        }
        codePoint -= 0x10000;
        return String.fromCharCode((((codePoint >> 10) & 0x3ff) + 0xd800), ((codePoint & 0x3ff) + 0xdc00));
    }).join("");
}
/**
 *  Returns the string represented by the UTF-8 data %%bytes%%.
 *
 *  When %%onError%% function is specified, it is called on UTF-8
 *  errors allowing recovery using the [[Utf8ErrorFunc]] API.
 *  (default: [error](Utf8ErrorFuncs))
 */
function toUtf8String(bytes, onError) {
    return _toUtf8String(getUtf8CodePoints(bytes, onError));
}
exports.toUtf8String = toUtf8String;
/**
 *  Returns the UTF-8 code-points for %%str%%.
 *
 *  If %%form%% is specified, the string is normalized.
 */
function toUtf8CodePoints(str, form) {
    return getUtf8CodePoints(toUtf8Bytes(str, form));
}
exports.toUtf8CodePoints = toUtf8CodePoints;
//# sourceMappingURL=utf8.js.map
}, function(modId) { var map = {"./data.js":1730085369176,"./errors.js":1730085369177}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369189, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidV4 = void 0;
/**
 *  Explain UUID and link to RFC here.
 *
 *  @_subsection: api/utils:UUID  [about-uuid]
 */
const data_js_1 = require("./data.js");
/**
 *  Returns the version 4 [[link-uuid]] for the %%randomBytes%%.
 *
 *  @see: https://www.ietf.org/rfc/rfc4122.txt (Section 4.4)
 */
function uuidV4(randomBytes) {
    const bytes = (0, data_js_1.getBytes)(randomBytes, "randomBytes");
    // Section: 4.1.3:
    // - time_hi_and_version[12:16] = 0b0100
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    // Section 4.4
    // - clock_seq_hi_and_reserved[6] = 0b0
    // - clock_seq_hi_and_reserved[7] = 0b1
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const value = (0, data_js_1.hexlify)(bytes);
    return [
        value.substring(2, 10),
        value.substring(10, 14),
        value.substring(14, 18),
        value.substring(18, 22),
        value.substring(22, 34),
    ].join("-");
}
exports.uuidV4 = uuidV4;
//# sourceMappingURL=uuid.js.map
}, function(modId) { var map = {"./data.js":1730085369176}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369193, function(require, module, exports) {

/**
 *  Addresses are a fundamental part of interacting with Ethereum. They
 *  represent the gloabal identity of Externally Owned Accounts (accounts
 *  backed by a private key) and contracts.
 *
 *  The Ethereum Naming Service (ENS) provides an interconnected ecosystem
 *  of contracts, standards and libraries which enable looking up an
 *  address for an ENS name.
 *
 *  These functions help convert between various formats, validate
 *  addresses and safely resolve ENS names.
 *
 *  @_section: api/address:Addresses  [about-addresses]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAddress = exports.isAddress = exports.isAddressable = exports.getCreate2Address = exports.getCreateAddress = exports.getIcapAddress = exports.getAddress = void 0;
null;
var address_js_1 = require("./address.js");
Object.defineProperty(exports, "getAddress", { enumerable: true, get: function () { return address_js_1.getAddress; } });
Object.defineProperty(exports, "getIcapAddress", { enumerable: true, get: function () { return address_js_1.getIcapAddress; } });
var contract_address_js_1 = require("./contract-address.js");
Object.defineProperty(exports, "getCreateAddress", { enumerable: true, get: function () { return contract_address_js_1.getCreateAddress; } });
Object.defineProperty(exports, "getCreate2Address", { enumerable: true, get: function () { return contract_address_js_1.getCreate2Address; } });
var checks_js_1 = require("./checks.js");
Object.defineProperty(exports, "isAddressable", { enumerable: true, get: function () { return checks_js_1.isAddressable; } });
Object.defineProperty(exports, "isAddress", { enumerable: true, get: function () { return checks_js_1.isAddress; } });
Object.defineProperty(exports, "resolveAddress", { enumerable: true, get: function () { return checks_js_1.resolveAddress; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./address.js":1730085369194,"./contract-address.js":1730085369206,"./checks.js":1730085369207}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369194, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getIcapAddress = exports.getAddress = void 0;
const index_js_1 = require("../crypto/index.js");
const index_js_2 = require("../utils/index.js");
const BN_0 = BigInt(0);
const BN_36 = BigInt(36);
function getChecksumAddress(address) {
    //    if (!isHexString(address, 20)) {
    //        logger.throwArgumentError("invalid address", "address", address);
    //    }
    address = address.toLowerCase();
    const chars = address.substring(2).split("");
    const expanded = new Uint8Array(40);
    for (let i = 0; i < 40; i++) {
        expanded[i] = chars[i].charCodeAt(0);
    }
    const hashed = (0, index_js_2.getBytes)((0, index_js_1.keccak256)(expanded));
    for (let i = 0; i < 40; i += 2) {
        if ((hashed[i >> 1] >> 4) >= 8) {
            chars[i] = chars[i].toUpperCase();
        }
        if ((hashed[i >> 1] & 0x0f) >= 8) {
            chars[i + 1] = chars[i + 1].toUpperCase();
        }
    }
    return "0x" + chars.join("");
}
// See: https://en.wikipedia.org/wiki/International_Bank_Account_Number
// Create lookup table
const ibanLookup = {};
for (let i = 0; i < 10; i++) {
    ibanLookup[String(i)] = String(i);
}
for (let i = 0; i < 26; i++) {
    ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
}
// How many decimal digits can we process? (for 64-bit float, this is 15)
// i.e. Math.floor(Math.log10(Number.MAX_SAFE_INTEGER));
const safeDigits = 15;
function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    let expanded = address.split("").map((c) => { return ibanLookup[c]; }).join("");
    // Javascript can handle integers safely up to 15 (decimal) digits
    while (expanded.length >= safeDigits) {
        let block = expanded.substring(0, safeDigits);
        expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    let checksum = String(98 - (parseInt(expanded, 10) % 97));
    while (checksum.length < 2) {
        checksum = "0" + checksum;
    }
    return checksum;
}
;
const Base36 = (function () {
    ;
    const result = {};
    for (let i = 0; i < 36; i++) {
        const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i];
        result[key] = BigInt(i);
    }
    return result;
})();
function fromBase36(value) {
    value = value.toLowerCase();
    let result = BN_0;
    for (let i = 0; i < value.length; i++) {
        result = result * BN_36 + Base36[value[i]];
    }
    return result;
}
/**
 *  Returns a normalized and checksumed address for %%address%%.
 *  This accepts non-checksum addresses, checksum addresses and
 *  [[getIcapAddress]] formats.
 *
 *  The checksum in Ethereum uses the capitalization (upper-case
 *  vs lower-case) of the characters within an address to encode
 *  its checksum, which offers, on average, a checksum of 15-bits.
 *
 *  If %%address%% contains both upper-case and lower-case, it is
 *  assumed to already be a checksum address and its checksum is
 *  validated, and if the address fails its expected checksum an
 *  error is thrown.
 *
 *  If you wish the checksum of %%address%% to be ignore, it should
 *  be converted to lower-case (i.e. ``.toLowercase()``) before
 *  being passed in. This should be a very rare situation though,
 *  that you wish to bypass the safegaurds in place to protect
 *  against an address that has been incorrectly copied from another
 *  source.
 *
 *  @example:
 *    // Adds the checksum (via upper-casing specific letters)
 *    getAddress("0x8ba1f109551bd432803012645ac136ddd64dba72")
 *    //_result:
 *
 *    // Converts ICAP address and adds checksum
 *    getAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36");
 *    //_result:
 *
 *    // Throws an error if an address contains mixed case,
 *    // but the checksum fails
 *    getAddress("0x8Ba1f109551bD432803012645Ac136ddd64DBA72")
 *    //_error:
 */
function getAddress(address) {
    (0, index_js_2.assertArgument)(typeof (address) === "string", "invalid address", "address", address);
    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        // Missing the 0x prefix
        if (!address.startsWith("0x")) {
            address = "0x" + address;
        }
        const result = getChecksumAddress(address);
        // It is a checksummed address with a bad checksum
        (0, index_js_2.assertArgument)(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
        return result;
    }
    // Maybe ICAP? (we only support direct mode)
    if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        // It is an ICAP address with a bad checksum
        (0, index_js_2.assertArgument)(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
        let result = fromBase36(address.substring(4)).toString(16);
        while (result.length < 40) {
            result = "0" + result;
        }
        return getChecksumAddress("0x" + result);
    }
    (0, index_js_2.assertArgument)(false, "invalid address", "address", address);
}
exports.getAddress = getAddress;
/**
 *  The [ICAP Address format](link-icap) format is an early checksum
 *  format which attempts to be compatible with the banking
 *  industry [IBAN format](link-wiki-iban) for bank accounts.
 *
 *  It is no longer common or a recommended format.
 *
 *  @example:
 *    getIcapAddress("0x8ba1f109551bd432803012645ac136ddd64dba72");
 *    //_result:
 *
 *    getIcapAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36");
 *    //_result:
 *
 *    // Throws an error if the ICAP checksum is wrong
 *    getIcapAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK37");
 *    //_error:
 */
function getIcapAddress(address) {
    //let base36 = _base16To36(getAddress(address).substring(2)).toUpperCase();
    let base36 = BigInt(getAddress(address)).toString(36).toUpperCase();
    while (base36.length < 30) {
        base36 = "0" + base36;
    }
    return "XE" + ibanChecksum("XE00" + base36) + base36;
}
exports.getIcapAddress = getIcapAddress;
//# sourceMappingURL=address.js.map
}, function(modId) { var map = {"../crypto/index.js":1730085369195,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369195, function(require, module, exports) {

/**
 *  A fundamental building block of Ethereum is the underlying
 *  cryptographic primitives.
 *
 *  @_section: api/crypto:Cryptographic Functions   [about-crypto]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lock = exports.Signature = exports.SigningKey = exports.scryptSync = exports.scrypt = exports.pbkdf2 = exports.sha512 = exports.sha256 = exports.ripemd160 = exports.keccak256 = exports.randomBytes = exports.computeHmac = void 0;
null;
// We import all these so we can export lock()
const hmac_js_1 = require("./hmac.js");
Object.defineProperty(exports, "computeHmac", { enumerable: true, get: function () { return hmac_js_1.computeHmac; } });
const keccak_js_1 = require("./keccak.js");
Object.defineProperty(exports, "keccak256", { enumerable: true, get: function () { return keccak_js_1.keccak256; } });
const ripemd160_js_1 = require("./ripemd160.js");
Object.defineProperty(exports, "ripemd160", { enumerable: true, get: function () { return ripemd160_js_1.ripemd160; } });
const pbkdf2_js_1 = require("./pbkdf2.js");
Object.defineProperty(exports, "pbkdf2", { enumerable: true, get: function () { return pbkdf2_js_1.pbkdf2; } });
const random_js_1 = require("./random.js");
Object.defineProperty(exports, "randomBytes", { enumerable: true, get: function () { return random_js_1.randomBytes; } });
const scrypt_js_1 = require("./scrypt.js");
Object.defineProperty(exports, "scrypt", { enumerable: true, get: function () { return scrypt_js_1.scrypt; } });
Object.defineProperty(exports, "scryptSync", { enumerable: true, get: function () { return scrypt_js_1.scryptSync; } });
const sha2_js_1 = require("./sha2.js");
Object.defineProperty(exports, "sha256", { enumerable: true, get: function () { return sha2_js_1.sha256; } });
Object.defineProperty(exports, "sha512", { enumerable: true, get: function () { return sha2_js_1.sha512; } });
var signing_key_js_1 = require("./signing-key.js");
Object.defineProperty(exports, "SigningKey", { enumerable: true, get: function () { return signing_key_js_1.SigningKey; } });
var signature_js_1 = require("./signature.js");
Object.defineProperty(exports, "Signature", { enumerable: true, get: function () { return signature_js_1.Signature; } });
/**
 *  Once called, prevents any future change to the underlying cryptographic
 *  primitives using the ``.register`` feature for hooks.
 */
function lock() {
    hmac_js_1.computeHmac.lock();
    keccak_js_1.keccak256.lock();
    pbkdf2_js_1.pbkdf2.lock();
    random_js_1.randomBytes.lock();
    ripemd160_js_1.ripemd160.lock();
    scrypt_js_1.scrypt.lock();
    scrypt_js_1.scryptSync.lock();
    sha2_js_1.sha256.lock();
    sha2_js_1.sha512.lock();
    random_js_1.randomBytes.lock();
}
exports.lock = lock;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./hmac.js":1730085369196,"./keccak.js":1730085369198,"./ripemd160.js":1730085369199,"./pbkdf2.js":1730085369200,"./random.js":1730085369201,"./scrypt.js":1730085369202,"./sha2.js":1730085369203}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369196, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHmac = void 0;
/**
 *  An **HMAC** enables verification that a given key was used
 *  to authenticate a payload.
 *
 *  See: [[link-wiki-hmac]]
 *
 *  @_subsection: api/crypto:HMAC  [about-hmac]
 */
const crypto_js_1 = require("./crypto.js");
const index_js_1 = require("../utils/index.js");
let locked = false;
const _computeHmac = function (algorithm, key, data) {
    return (0, crypto_js_1.createHmac)(algorithm, key).update(data).digest();
};
let __computeHmac = _computeHmac;
/**
 *  Return the HMAC for %%data%% using the %%key%% key with the underlying
 *  %%algo%% used for compression.
 *
 *  @example:
 *    key = id("some-secret")
 *
 *    // Compute the HMAC
 *    computeHmac("sha256", key, "0x1337")
 *    //_result:
 *
 *    // To compute the HMAC of UTF-8 data, the data must be
 *    // converted to UTF-8 bytes
 *    computeHmac("sha256", key, toUtf8Bytes("Hello World"))
 *    //_result:
 *
 */
function computeHmac(algorithm, _key, _data) {
    const key = (0, index_js_1.getBytes)(_key, "key");
    const data = (0, index_js_1.getBytes)(_data, "data");
    return (0, index_js_1.hexlify)(__computeHmac(algorithm, key, data));
}
exports.computeHmac = computeHmac;
computeHmac._ = _computeHmac;
computeHmac.lock = function () { locked = true; };
computeHmac.register = function (func) {
    if (locked) {
        throw new Error("computeHmac is locked");
    }
    __computeHmac = func;
};
Object.freeze(computeHmac);
//# sourceMappingURL=hmac.js.map
}, function(modId) { var map = {"./crypto.js":1730085369197,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369197, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBytes = exports.pbkdf2Sync = exports.createHmac = exports.createHash = void 0;
var crypto_1 = require("crypto");
Object.defineProperty(exports, "createHash", { enumerable: true, get: function () { return crypto_1.createHash; } });
Object.defineProperty(exports, "createHmac", { enumerable: true, get: function () { return crypto_1.createHmac; } });
Object.defineProperty(exports, "pbkdf2Sync", { enumerable: true, get: function () { return crypto_1.pbkdf2Sync; } });
Object.defineProperty(exports, "randomBytes", { enumerable: true, get: function () { return crypto_1.randomBytes; } });
//# sourceMappingURL=crypto.js.map
}, function(modId) { var map = {"crypto":1730085369197}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369198, function(require, module, exports) {

/**
 *  Cryptographic hashing functions
 *
 *  @_subsection: api/crypto:Hash Functions [about-crypto-hashing]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.keccak256 = void 0;
const sha3_1 = require("@noble/hashes/sha3");
const index_js_1 = require("../utils/index.js");
let locked = false;
const _keccak256 = function (data) {
    return (0, sha3_1.keccak_256)(data);
};
let __keccak256 = _keccak256;
/**
 *  Compute the cryptographic KECCAK256 hash of %%data%%.
 *
 *  The %%data%% **must** be a data representation, to compute the
 *  hash of UTF-8 data use the [[id]] function.
 *
 *  @returns DataHexstring
 *  @example:
 *    keccak256("0x")
 *    //_result:
 *
 *    keccak256("0x1337")
 *    //_result:
 *
 *    keccak256(new Uint8Array([ 0x13, 0x37 ]))
 *    //_result:
 *
 *    // Strings are assumed to be DataHexString, otherwise it will
 *    // throw. To hash UTF-8 data, see the note above.
 *    keccak256("Hello World")
 *    //_error:
 */
function keccak256(_data) {
    const data = (0, index_js_1.getBytes)(_data, "data");
    return (0, index_js_1.hexlify)(__keccak256(data));
}
exports.keccak256 = keccak256;
keccak256._ = _keccak256;
keccak256.lock = function () { locked = true; };
keccak256.register = function (func) {
    if (locked) {
        throw new TypeError("keccak256 is locked");
    }
    __keccak256 = func;
};
Object.freeze(keccak256);
//# sourceMappingURL=keccak.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369199, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ripemd160 = void 0;
const ripemd160_1 = require("@noble/hashes/ripemd160");
const index_js_1 = require("../utils/index.js");
let locked = false;
const _ripemd160 = function (data) {
    return (0, ripemd160_1.ripemd160)(data);
};
let __ripemd160 = _ripemd160;
/**
 *  Compute the cryptographic RIPEMD-160 hash of %%data%%.
 *
 *  @_docloc: api/crypto:Hash Functions
 *  @returns DataHexstring
 *
 *  @example:
 *    ripemd160("0x")
 *    //_result:
 *
 *    ripemd160("0x1337")
 *    //_result:
 *
 *    ripemd160(new Uint8Array([ 0x13, 0x37 ]))
 *    //_result:
 *
 */
function ripemd160(_data) {
    const data = (0, index_js_1.getBytes)(_data, "data");
    return (0, index_js_1.hexlify)(__ripemd160(data));
}
exports.ripemd160 = ripemd160;
ripemd160._ = _ripemd160;
ripemd160.lock = function () { locked = true; };
ripemd160.register = function (func) {
    if (locked) {
        throw new TypeError("ripemd160 is locked");
    }
    __ripemd160 = func;
};
Object.freeze(ripemd160);
//# sourceMappingURL=ripemd160.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369200, function(require, module, exports) {

/**
 *  A **Password-Based Key-Derivation Function** is designed to create
 *  a sequence of bytes suitible as a **key** from a human-rememberable
 *  password.
 *
 *  @_subsection: api/crypto:Passwords  [about-pbkdf]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pbkdf2 = void 0;
const crypto_js_1 = require("./crypto.js");
const index_js_1 = require("../utils/index.js");
let locked = false;
const _pbkdf2 = function (password, salt, iterations, keylen, algo) {
    return (0, crypto_js_1.pbkdf2Sync)(password, salt, iterations, keylen, algo);
};
let __pbkdf2 = _pbkdf2;
/**
 *  Return the [[link-pbkdf2]] for %%keylen%% bytes for %%password%% using
 *  the %%salt%% and using %%iterations%% of %%algo%%.
 *
 *  This PBKDF is outdated and should not be used in new projects, but is
 *  required to decrypt older files.
 *
 *  @example:
 *    // The password must be converted to bytes, and it is generally
 *    // best practices to ensure the string has been normalized. Many
 *    // formats explicitly indicate the normalization form to use.
 *    password = "hello"
 *    passwordBytes = toUtf8Bytes(password, "NFKC")
 *
 *    salt = id("some-salt")
 *
 *    // Compute the PBKDF2
 *    pbkdf2(passwordBytes, salt, 1024, 16, "sha256")
 *    //_result:
 */
function pbkdf2(_password, _salt, iterations, keylen, algo) {
    const password = (0, index_js_1.getBytes)(_password, "password");
    const salt = (0, index_js_1.getBytes)(_salt, "salt");
    return (0, index_js_1.hexlify)(__pbkdf2(password, salt, iterations, keylen, algo));
}
exports.pbkdf2 = pbkdf2;
pbkdf2._ = _pbkdf2;
pbkdf2.lock = function () { locked = true; };
pbkdf2.register = function (func) {
    if (locked) {
        throw new Error("pbkdf2 is locked");
    }
    __pbkdf2 = func;
};
Object.freeze(pbkdf2);
//# sourceMappingURL=pbkdf2.js.map
}, function(modId) { var map = {"./crypto.js":1730085369197,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369201, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBytes = void 0;
/**
 *  A **Cryptographically Secure Random Value** is one that has been
 *  generated with additional care take to prevent side-channels
 *  from allowing others to detect it and prevent others from through
 *  coincidence generate the same values.
 *
 *  @_subsection: api/crypto:Random Values  [about-crypto-random]
 */
const crypto_js_1 = require("./crypto.js");
let locked = false;
const _randomBytes = function (length) {
    return new Uint8Array((0, crypto_js_1.randomBytes)(length));
};
let __randomBytes = _randomBytes;
/**
 *  Return %%length%% bytes of cryptographically secure random data.
 *
 *  @example:
 *    randomBytes(8)
 *    //_result:
 */
function randomBytes(length) {
    return __randomBytes(length);
}
exports.randomBytes = randomBytes;
randomBytes._ = _randomBytes;
randomBytes.lock = function () { locked = true; };
randomBytes.register = function (func) {
    if (locked) {
        throw new Error("randomBytes is locked");
    }
    __randomBytes = func;
};
Object.freeze(randomBytes);
//# sourceMappingURL=random.js.map
}, function(modId) { var map = {"./crypto.js":1730085369197}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369202, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.scryptSync = exports.scrypt = void 0;
const scrypt_1 = require("@noble/hashes/scrypt");
const index_js_1 = require("../utils/index.js");
let lockedSync = false, lockedAsync = false;
const _scryptAsync = async function (passwd, salt, N, r, p, dkLen, onProgress) {
    return await (0, scrypt_1.scryptAsync)(passwd, salt, { N, r, p, dkLen, onProgress });
};
const _scryptSync = function (passwd, salt, N, r, p, dkLen) {
    return (0, scrypt_1.scrypt)(passwd, salt, { N, r, p, dkLen });
};
let __scryptAsync = _scryptAsync;
let __scryptSync = _scryptSync;
/**
 *  The [[link-wiki-scrypt]] uses a memory and cpu hard method of
 *  derivation to increase the resource cost to brute-force a password
 *  for a given key.
 *
 *  This means this algorithm is intentionally slow, and can be tuned to
 *  become slower. As computation and memory speed improve over time,
 *  increasing the difficulty maintains the cost of an attacker.
 *
 *  For example, if a target time of 5 seconds is used, a legitimate user
 *  which knows their password requires only 5 seconds to unlock their
 *  account. A 6 character password has 68 billion possibilities, which
 *  would require an attacker to invest over 10,000 years of CPU time. This
 *  is of course a crude example (as password generally aren't random),
 *  but demonstrates to value of imposing large costs to decryption.
 *
 *  For this reason, if building a UI which involved decrypting or
 *  encrypting datsa using scrypt, it is recommended to use a
 *  [[ProgressCallback]] (as event short periods can seem lik an eternity
 *  if the UI freezes). Including the phrase //"decrypting"// in the UI
 *  can also help, assuring the user their waiting is for a good reason.
 *
 *  @_docloc: api/crypto:Passwords
 *
 *  @example:
 *    // The password must be converted to bytes, and it is generally
 *    // best practices to ensure the string has been normalized. Many
 *    // formats explicitly indicate the normalization form to use.
 *    password = "hello"
 *    passwordBytes = toUtf8Bytes(password, "NFKC")
 *
 *    salt = id("some-salt")
 *
 *    // Compute the scrypt
 *    scrypt(passwordBytes, salt, 1024, 8, 1, 16)
 *    //_result:
 */
async function scrypt(_passwd, _salt, N, r, p, dkLen, progress) {
    const passwd = (0, index_js_1.getBytes)(_passwd, "passwd");
    const salt = (0, index_js_1.getBytes)(_salt, "salt");
    return (0, index_js_1.hexlify)(await __scryptAsync(passwd, salt, N, r, p, dkLen, progress));
}
exports.scrypt = scrypt;
scrypt._ = _scryptAsync;
scrypt.lock = function () { lockedAsync = true; };
scrypt.register = function (func) {
    if (lockedAsync) {
        throw new Error("scrypt is locked");
    }
    __scryptAsync = func;
};
Object.freeze(scrypt);
/**
 *  Provides a synchronous variant of [[scrypt]].
 *
 *  This will completely lock up and freeze the UI in a browser and will
 *  prevent any event loop from progressing. For this reason, it is
 *  preferred to use the [async variant](scrypt).
 *
 *  @_docloc: api/crypto:Passwords
 *
 *  @example:
 *    // The password must be converted to bytes, and it is generally
 *    // best practices to ensure the string has been normalized. Many
 *    // formats explicitly indicate the normalization form to use.
 *    password = "hello"
 *    passwordBytes = toUtf8Bytes(password, "NFKC")
 *
 *    salt = id("some-salt")
 *
 *    // Compute the scrypt
 *    scryptSync(passwordBytes, salt, 1024, 8, 1, 16)
 *    //_result:
 */
function scryptSync(_passwd, _salt, N, r, p, dkLen) {
    const passwd = (0, index_js_1.getBytes)(_passwd, "passwd");
    const salt = (0, index_js_1.getBytes)(_salt, "salt");
    return (0, index_js_1.hexlify)(__scryptSync(passwd, salt, N, r, p, dkLen));
}
exports.scryptSync = scryptSync;
scryptSync._ = _scryptSync;
scryptSync.lock = function () { lockedSync = true; };
scryptSync.register = function (func) {
    if (lockedSync) {
        throw new Error("scryptSync is locked");
    }
    __scryptSync = func;
};
Object.freeze(scryptSync);
//# sourceMappingURL=scrypt.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369203, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.sha512 = exports.sha256 = void 0;
const crypto_js_1 = require("./crypto.js");
const index_js_1 = require("../utils/index.js");
const _sha256 = function (data) {
    return (0, crypto_js_1.createHash)("sha256").update(data).digest();
};
const _sha512 = function (data) {
    return (0, crypto_js_1.createHash)("sha512").update(data).digest();
};
let __sha256 = _sha256;
let __sha512 = _sha512;
let locked256 = false, locked512 = false;
/**
 *  Compute the cryptographic SHA2-256 hash of %%data%%.
 *
 *  @_docloc: api/crypto:Hash Functions
 *  @returns DataHexstring
 *
 *  @example:
 *    sha256("0x")
 *    //_result:
 *
 *    sha256("0x1337")
 *    //_result:
 *
 *    sha256(new Uint8Array([ 0x13, 0x37 ]))
 *    //_result:
 *
 */
function sha256(_data) {
    const data = (0, index_js_1.getBytes)(_data, "data");
    return (0, index_js_1.hexlify)(__sha256(data));
}
exports.sha256 = sha256;
sha256._ = _sha256;
sha256.lock = function () { locked256 = true; };
sha256.register = function (func) {
    if (locked256) {
        throw new Error("sha256 is locked");
    }
    __sha256 = func;
};
Object.freeze(sha256);
/**
 *  Compute the cryptographic SHA2-512 hash of %%data%%.
 *
 *  @_docloc: api/crypto:Hash Functions
 *  @returns DataHexstring
 *
 *  @example:
 *    sha512("0x")
 *    //_result:
 *
 *    sha512("0x1337")
 *    //_result:
 *
 *    sha512(new Uint8Array([ 0x13, 0x37 ]))
 *    //_result:
 */
function sha512(_data) {
    const data = (0, index_js_1.getBytes)(_data, "data");
    return (0, index_js_1.hexlify)(__sha512(data));
}
exports.sha512 = sha512;
sha512._ = _sha512;
sha512.lock = function () { locked512 = true; };
sha512.register = function (func) {
    if (locked512) {
        throw new Error("sha512 is locked");
    }
    __sha512 = func;
};
Object.freeze(sha256);
//# sourceMappingURL=sha2.js.map
}, function(modId) { var map = {"./crypto.js":1730085369197,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369206, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCreate2Address = exports.getCreateAddress = void 0;
const index_js_1 = require("../crypto/index.js");
const index_js_2 = require("../utils/index.js");
const address_js_1 = require("./address.js");
// http://ethereum.stackexchange.com/questions/760/how-is-the-address-of-an-ethereum-contract-computed
/**
 *  Returns the address that would result from a ``CREATE`` for %%tx%%.
 *
 *  This can be used to compute the address a contract will be
 *  deployed to by an EOA when sending a deployment transaction (i.e.
 *  when the ``to`` address is ``null``).
 *
 *  This can also be used to compute the address a contract will be
 *  deployed to by a contract, by using the contract's address as the
 *  ``to`` and the contract's nonce.
 *
 *  @example
 *    from = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
 *    nonce = 5;
 *
 *    getCreateAddress({ from, nonce });
 *    //_result:
 */
function getCreateAddress(tx) {
    const from = (0, address_js_1.getAddress)(tx.from);
    const nonce = (0, index_js_2.getBigInt)(tx.nonce, "tx.nonce");
    let nonceHex = nonce.toString(16);
    if (nonceHex === "0") {
        nonceHex = "0x";
    }
    else if (nonceHex.length % 2) {
        nonceHex = "0x0" + nonceHex;
    }
    else {
        nonceHex = "0x" + nonceHex;
    }
    return (0, address_js_1.getAddress)((0, index_js_2.dataSlice)((0, index_js_1.keccak256)((0, index_js_2.encodeRlp)([from, nonceHex])), 12));
}
exports.getCreateAddress = getCreateAddress;
/**
 *  Returns the address that would result from a ``CREATE2`` operation
 *  with the given %%from%%, %%salt%% and %%initCodeHash%%.
 *
 *  To compute the %%initCodeHash%% from a contract's init code, use
 *  the [[keccak256]] function.
 *
 *  For a quick overview and example of ``CREATE2``, see [[link-ricmoo-wisps]].
 *
 *  @example
 *    // The address of the contract
 *    from = "0x8ba1f109551bD432803012645Ac136ddd64DBA72"
 *
 *    // The salt
 *    salt = id("HelloWorld")
 *
 *    // The hash of the initCode
 *    initCode = "0x6394198df16000526103ff60206004601c335afa6040516060f3";
 *    initCodeHash = keccak256(initCode)
 *
 *    getCreate2Address(from, salt, initCodeHash)
 *    //_result:
 */
function getCreate2Address(_from, _salt, _initCodeHash) {
    const from = (0, address_js_1.getAddress)(_from);
    const salt = (0, index_js_2.getBytes)(_salt, "salt");
    const initCodeHash = (0, index_js_2.getBytes)(_initCodeHash, "initCodeHash");
    (0, index_js_2.assertArgument)(salt.length === 32, "salt must be 32 bytes", "salt", _salt);
    (0, index_js_2.assertArgument)(initCodeHash.length === 32, "initCodeHash must be 32 bytes", "initCodeHash", _initCodeHash);
    return (0, address_js_1.getAddress)((0, index_js_2.dataSlice)((0, index_js_1.keccak256)((0, index_js_2.concat)(["0xff", from, salt, initCodeHash])), 12));
}
exports.getCreate2Address = getCreate2Address;
//# sourceMappingURL=contract-address.js.map
}, function(modId) { var map = {"../crypto/index.js":1730085369195,"../utils/index.js":1730085369174,"./address.js":1730085369194}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369207, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAddress = exports.isAddress = exports.isAddressable = void 0;
const index_js_1 = require("../utils/index.js");
const address_js_1 = require("./address.js");
/**
 *  Returns true if %%value%% is an object which implements the
 *  [[Addressable]] interface.
 *
 *  @example:
 *    // Wallets and AbstractSigner sub-classes
 *    isAddressable(Wallet.createRandom())
 *    //_result:
 *
 *    // Contracts
 *    contract = new Contract("dai.tokens.ethers.eth", [ ], provider)
 *    isAddressable(contract)
 *    //_result:
 */
function isAddressable(value) {
    return (value && typeof (value.getAddress) === "function");
}
exports.isAddressable = isAddressable;
/**
 *  Returns true if %%value%% is a valid address.
 *
 *  @example:
 *    // Valid address
 *    isAddress("0x8ba1f109551bD432803012645Ac136ddd64DBA72")
 *    //_result:
 *
 *    // Valid ICAP address
 *    isAddress("XE65GB6LDNXYOFTX0NSV3FUWKOWIXAMJK36")
 *    //_result:
 *
 *    // Invalid checksum
 *    isAddress("0x8Ba1f109551bD432803012645Ac136ddd64DBa72")
 *    //_result:
 *
 *    // Invalid ICAP checksum
 *    isAddress("0x8Ba1f109551bD432803012645Ac136ddd64DBA72")
 *    //_result:
 *
 *    // Not an address (an ENS name requires a provided and an
 *    // asynchronous API to access)
 *    isAddress("ricmoo.eth")
 *    //_result:
 */
function isAddress(value) {
    try {
        (0, address_js_1.getAddress)(value);
        return true;
    }
    catch (error) { }
    return false;
}
exports.isAddress = isAddress;
async function checkAddress(target, promise) {
    const result = await promise;
    if (result == null || result === "0x0000000000000000000000000000000000000000") {
        (0, index_js_1.assert)(typeof (target) !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
        (0, index_js_1.assertArgument)(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
    }
    return (0, address_js_1.getAddress)(result);
}
/**
 *  Resolves to an address for the %%target%%, which may be any
 *  supported address type, an [[Addressable]] or a Promise which
 *  resolves to an address.
 *
 *  If an ENS name is provided, but that name has not been correctly
 *  configured a [[UnconfiguredNameError]] is thrown.
 *
 *  @example:
 *    addr = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
 *
 *    // Addresses are return synchronously
 *    resolveAddress(addr, provider)
 *    //_result:
 *
 *    // Address promises are resolved asynchronously
 *    resolveAddress(Promise.resolve(addr))
 *    //_result:
 *
 *    // ENS names are resolved asynchronously
 *    resolveAddress("dai.tokens.ethers.eth", provider)
 *    //_result:
 *
 *    // Addressable objects are resolved asynchronously
 *    contract = new Contract(addr, [ ])
 *    resolveAddress(contract, provider)
 *    //_result:
 *
 *    // Unconfigured ENS names reject
 *    resolveAddress("nothing-here.ricmoo.eth", provider)
 *    //_error:
 *
 *    // ENS names require a NameResolver object passed in
 *    // (notice the provider was omitted)
 *    resolveAddress("nothing-here.ricmoo.eth")
 *    //_error:
 */
function resolveAddress(target, resolver) {
    if (typeof (target) === "string") {
        if (target.match(/^0x[0-9a-f]{40}$/i)) {
            return (0, address_js_1.getAddress)(target);
        }
        (0, index_js_1.assert)(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
        return checkAddress(target, resolver.resolveName(target));
    }
    else if (isAddressable(target)) {
        return checkAddress(target, target.getAddress());
    }
    else if (target && typeof (target.then) === "function") {
        return checkAddress(target, target);
    }
    (0, index_js_1.assertArgument)(false, "unsupported addressable value", "target", target);
}
exports.resolveAddress = resolveAddress;
//# sourceMappingURL=checks.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174,"./address.js":1730085369194}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369208, function(require, module, exports) {

/**
 *  Some common constants useful for Ethereum.
 *
 *  @_section: api/constants: Constants  [about-constants]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagePrefix = exports.EtherSymbol = exports.MaxInt256 = exports.MinInt256 = exports.MaxUint256 = exports.WeiPerEther = exports.N = exports.ZeroHash = exports.ZeroAddress = void 0;
var addresses_js_1 = require("./addresses.js");
Object.defineProperty(exports, "ZeroAddress", { enumerable: true, get: function () { return addresses_js_1.ZeroAddress; } });
var hashes_js_1 = require("./hashes.js");
Object.defineProperty(exports, "ZeroHash", { enumerable: true, get: function () { return hashes_js_1.ZeroHash; } });
var numbers_js_1 = require("./numbers.js");
Object.defineProperty(exports, "N", { enumerable: true, get: function () { return numbers_js_1.N; } });
Object.defineProperty(exports, "WeiPerEther", { enumerable: true, get: function () { return numbers_js_1.WeiPerEther; } });
Object.defineProperty(exports, "MaxUint256", { enumerable: true, get: function () { return numbers_js_1.MaxUint256; } });
Object.defineProperty(exports, "MinInt256", { enumerable: true, get: function () { return numbers_js_1.MinInt256; } });
Object.defineProperty(exports, "MaxInt256", { enumerable: true, get: function () { return numbers_js_1.MaxInt256; } });
var strings_js_1 = require("./strings.js");
Object.defineProperty(exports, "EtherSymbol", { enumerable: true, get: function () { return strings_js_1.EtherSymbol; } });
Object.defineProperty(exports, "MessagePrefix", { enumerable: true, get: function () { return strings_js_1.MessagePrefix; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./addresses.js":1730085369209,"./hashes.js":1730085369210,"./numbers.js":1730085369211,"./strings.js":1730085369212}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369209, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroAddress = void 0;
/**
 *  A constant for the zero address.
 *
 *  (**i.e.** ``"0x0000000000000000000000000000000000000000"``)
 */
exports.ZeroAddress = "0x0000000000000000000000000000000000000000";
//# sourceMappingURL=addresses.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369210, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroHash = void 0;
/**
 *  A constant for the zero hash.
 *
 *  (**i.e.** ``"0x0000000000000000000000000000000000000000000000000000000000000000"``)
 */
exports.ZeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";
//# sourceMappingURL=hashes.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369211, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxInt256 = exports.MinInt256 = exports.MaxUint256 = exports.WeiPerEther = exports.N = void 0;
/**
 *  A constant for the order N for the secp256k1 curve.
 *
 *  (**i.e.** ``0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n``)
 */
exports.N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
/**
 *  A constant for the number of wei in a single ether.
 *
 *  (**i.e.** ``1000000000000000000n``)
 */
exports.WeiPerEther = BigInt("1000000000000000000");
/**
 *  A constant for the maximum value for a ``uint256``.
 *
 *  (**i.e.** ``0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn``)
 */
exports.MaxUint256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
/**
 *  A constant for the minimum value for an ``int256``.
 *
 *  (**i.e.** ``-8000000000000000000000000000000000000000000000000000000000000000n``)
 */
exports.MinInt256 = BigInt("0x8000000000000000000000000000000000000000000000000000000000000000") * BigInt(-1);
/**
 *  A constant for the maximum value for an ``int256``.
 *
 *  (**i.e.** ``0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn``)
 */
exports.MaxInt256 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
//# sourceMappingURL=numbers.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369212, function(require, module, exports) {

// NFKC (composed)             // (decomposed)
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagePrefix = exports.EtherSymbol = void 0;
/**
 *  A constant for the ether symbol (normalized using NFKC).
 *
 *  (**i.e.** ``"\\u039e"``)
 */
exports.EtherSymbol = "\u039e"; // "\uD835\uDF63";
/**
 *  A constant for the [[link-eip-191]] personal message prefix.
 *
 *  (**i.e.** ``"\\x19Ethereum Signed Message:\\n"``)
 */
exports.MessagePrefix = "\x19Ethereum Signed Message:\n";
//# sourceMappingURL=strings.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369213, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.UndecodedEventLog = exports.EventLog = exports.ContractTransactionResponse = exports.ContractTransactionReceipt = exports.ContractUnknownEventPayload = exports.ContractEventPayload = exports.ContractFactory = exports.Contract = exports.BaseContract = void 0;
/**
 *  A **Contract** object is a meta-class (a class whose definition is
 *  defined at runtime), which communicates with a deployed smart contract
 *  on the blockchain and provides a simple JavaScript interface to call
 *  methods, send transaction, query historic logs and listen for its events.
 *
 *  @_section: api/contract:Contracts  [about-contracts]
 */
var contract_js_1 = require("./contract.js");
Object.defineProperty(exports, "BaseContract", { enumerable: true, get: function () { return contract_js_1.BaseContract; } });
Object.defineProperty(exports, "Contract", { enumerable: true, get: function () { return contract_js_1.Contract; } });
var factory_js_1 = require("./factory.js");
Object.defineProperty(exports, "ContractFactory", { enumerable: true, get: function () { return factory_js_1.ContractFactory; } });
var wrappers_js_1 = require("./wrappers.js");
Object.defineProperty(exports, "ContractEventPayload", { enumerable: true, get: function () { return wrappers_js_1.ContractEventPayload; } });
Object.defineProperty(exports, "ContractUnknownEventPayload", { enumerable: true, get: function () { return wrappers_js_1.ContractUnknownEventPayload; } });
Object.defineProperty(exports, "ContractTransactionReceipt", { enumerable: true, get: function () { return wrappers_js_1.ContractTransactionReceipt; } });
Object.defineProperty(exports, "ContractTransactionResponse", { enumerable: true, get: function () { return wrappers_js_1.ContractTransactionResponse; } });
Object.defineProperty(exports, "EventLog", { enumerable: true, get: function () { return wrappers_js_1.EventLog; } });
Object.defineProperty(exports, "UndecodedEventLog", { enumerable: true, get: function () { return wrappers_js_1.UndecodedEventLog; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369217, function(require, module, exports) {

/**
 *  Utilities for common tasks involving hashing. Also see
 *  [cryptographic hashing](about-crypto-hashing).
 *
 *  @_section: api/hashing:Hashing Utilities  [about-hashing]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTypedData = exports.TypedDataEncoder = exports.solidityPackedSha256 = exports.solidityPackedKeccak256 = exports.solidityPacked = exports.verifyMessage = exports.hashMessage = exports.dnsEncode = exports.namehash = exports.isValidName = exports.ensNormalize = exports.id = void 0;
var id_js_1 = require("./id.js");
Object.defineProperty(exports, "id", { enumerable: true, get: function () { return id_js_1.id; } });
var namehash_js_1 = require("./namehash.js");
Object.defineProperty(exports, "ensNormalize", { enumerable: true, get: function () { return namehash_js_1.ensNormalize; } });
Object.defineProperty(exports, "isValidName", { enumerable: true, get: function () { return namehash_js_1.isValidName; } });
Object.defineProperty(exports, "namehash", { enumerable: true, get: function () { return namehash_js_1.namehash; } });
Object.defineProperty(exports, "dnsEncode", { enumerable: true, get: function () { return namehash_js_1.dnsEncode; } });
var message_js_1 = require("./message.js");
Object.defineProperty(exports, "hashMessage", { enumerable: true, get: function () { return message_js_1.hashMessage; } });
Object.defineProperty(exports, "verifyMessage", { enumerable: true, get: function () { return message_js_1.verifyMessage; } });
var solidity_js_1 = require("./solidity.js");
Object.defineProperty(exports, "solidityPacked", { enumerable: true, get: function () { return solidity_js_1.solidityPacked; } });
Object.defineProperty(exports, "solidityPackedKeccak256", { enumerable: true, get: function () { return solidity_js_1.solidityPackedKeccak256; } });
Object.defineProperty(exports, "solidityPackedSha256", { enumerable: true, get: function () { return solidity_js_1.solidityPackedSha256; } });
var typed_data_js_1 = require("./typed-data.js");
Object.defineProperty(exports, "TypedDataEncoder", { enumerable: true, get: function () { return typed_data_js_1.TypedDataEncoder; } });
Object.defineProperty(exports, "verifyTypedData", { enumerable: true, get: function () { return typed_data_js_1.verifyTypedData; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./id.js":1730085369218,"./namehash.js":1730085369219,"./message.js":1730085369220,"./solidity.js":1730085369225}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369218, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
const index_js_1 = require("../crypto/index.js");
const index_js_2 = require("../utils/index.js");
/**
 *  A simple hashing function which operates on UTF-8 strings to
 *  compute an 32-byte identifier.
 *
 *  This simply computes the [UTF-8 bytes](toUtf8Bytes) and computes
 *  the [[keccak256]].
 *
 *  @example:
 *    id("hello world")
 *    //_result:
 */
function id(value) {
    return (0, index_js_1.keccak256)((0, index_js_2.toUtf8Bytes)(value));
}
exports.id = id;
//# sourceMappingURL=id.js.map
}, function(modId) { var map = {"../crypto/index.js":1730085369195,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369219, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.dnsEncode = exports.namehash = exports.isValidName = exports.ensNormalize = void 0;
const index_js_1 = require("../crypto/index.js");
const index_js_2 = require("../utils/index.js");
const ens_normalize_1 = require("@adraffy/ens-normalize");
const Zeros = new Uint8Array(32);
Zeros.fill(0);
function checkComponent(comp) {
    (0, index_js_2.assertArgument)(comp.length !== 0, "invalid ENS name; empty component", "comp", comp);
    return comp;
}
function ensNameSplit(name) {
    const bytes = (0, index_js_2.toUtf8Bytes)(ensNormalize(name));
    const comps = [];
    if (name.length === 0) {
        return comps;
    }
    let last = 0;
    for (let i = 0; i < bytes.length; i++) {
        const d = bytes[i];
        // A separator (i.e. "."); copy this component
        if (d === 0x2e) {
            comps.push(checkComponent(bytes.slice(last, i)));
            last = i + 1;
        }
    }
    // There was a stray separator at the end of the name
    (0, index_js_2.assertArgument)(last < bytes.length, "invalid ENS name; empty component", "name", name);
    comps.push(checkComponent(bytes.slice(last)));
    return comps;
}
/**
 *  Returns the ENS %%name%% normalized.
 */
function ensNormalize(name) {
    try {
        if (name.length === 0) {
            throw new Error("empty label");
        }
        return (0, ens_normalize_1.ens_normalize)(name);
    }
    catch (error) {
        (0, index_js_2.assertArgument)(false, `invalid ENS name (${error.message})`, "name", name);
    }
}
exports.ensNormalize = ensNormalize;
/**
 *  Returns ``true`` if %%name%% is a valid ENS name.
 */
function isValidName(name) {
    try {
        return (ensNameSplit(name).length !== 0);
    }
    catch (error) { }
    return false;
}
exports.isValidName = isValidName;
/**
 *  Returns the [[link-namehash]] for %%name%%.
 */
function namehash(name) {
    (0, index_js_2.assertArgument)(typeof (name) === "string", "invalid ENS name; not a string", "name", name);
    (0, index_js_2.assertArgument)(name.length, `invalid ENS name (empty label)`, "name", name);
    let result = Zeros;
    const comps = ensNameSplit(name);
    while (comps.length) {
        result = (0, index_js_1.keccak256)((0, index_js_2.concat)([result, (0, index_js_1.keccak256)((comps.pop()))]));
    }
    return (0, index_js_2.hexlify)(result);
}
exports.namehash = namehash;
/**
 *  Returns the DNS encoded %%name%%.
 *
 *  This is used for various parts of ENS name resolution, such
 *  as the wildcard resolution.
 */
function dnsEncode(name, _maxLength) {
    const length = (_maxLength != null) ? _maxLength : 63;
    (0, index_js_2.assertArgument)(length <= 255, "DNS encoded label cannot exceed 255", "length", length);
    return (0, index_js_2.hexlify)((0, index_js_2.concat)(ensNameSplit(name).map((comp) => {
        (0, index_js_2.assertArgument)(comp.length <= length, `label ${JSON.stringify(name)} exceeds ${length} bytes`, "name", name);
        const bytes = new Uint8Array(comp.length + 1);
        bytes.set(comp, 1);
        bytes[0] = bytes.length - 1;
        return bytes;
    }))) + "00";
}
exports.dnsEncode = dnsEncode;
//# sourceMappingURL=namehash.js.map
}, function(modId) { var map = {"../crypto/index.js":1730085369195,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369220, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMessage = exports.hashMessage = void 0;
const index_js_1 = require("../crypto/index.js");
const index_js_2 = require("../constants/index.js");
const index_js_3 = require("../transaction/index.js");
const index_js_4 = require("../utils/index.js");
/**
 *  Computes the [[link-eip-191]] personal-sign message digest to sign.
 *
 *  This prefixes the message with [[MessagePrefix]] and the decimal length
 *  of %%message%% and computes the [[keccak256]] digest.
 *
 *  If %%message%% is a string, it is converted to its UTF-8 bytes
 *  first. To compute the digest of a [[DataHexString]], it must be converted
 *  to [bytes](getBytes).
 *
 *  @example:
 *    hashMessage("Hello World")
 *    //_result:
 *
 *    // Hashes the SIX (6) string characters, i.e.
 *    // [ "0", "x", "4", "2", "4", "3" ]
 *    hashMessage("0x4243")
 *    //_result:
 *
 *    // Hashes the TWO (2) bytes [ 0x42, 0x43 ]...
 *    hashMessage(getBytes("0x4243"))
 *    //_result:
 *
 *    // ...which is equal to using data
 *    hashMessage(new Uint8Array([ 0x42, 0x43 ]))
 *    //_result:
 *
 */
function hashMessage(message) {
    if (typeof (message) === "string") {
        message = (0, index_js_4.toUtf8Bytes)(message);
    }
    return (0, index_js_1.keccak256)((0, index_js_4.concat)([
        (0, index_js_4.toUtf8Bytes)(index_js_2.MessagePrefix),
        (0, index_js_4.toUtf8Bytes)(String(message.length)),
        message
    ]));
}
exports.hashMessage = hashMessage;
/**
 *  Return the address of the private key that produced
 *  the signature %%sig%% during signing for %%message%%.
 */
function verifyMessage(message, sig) {
    const digest = hashMessage(message);
    return (0, index_js_3.recoverAddress)(digest, sig);
}
exports.verifyMessage = verifyMessage;
//# sourceMappingURL=message.js.map
}, function(modId) { var map = {"../crypto/index.js":1730085369195,"../constants/index.js":1730085369208,"../transaction/index.js":1730085369221,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369221, function(require, module, exports) {

/**
 *  Each state-changing operation on Ethereum requires a transaction.
 *
 *  @_section api/transaction:Transactions  [about-transactions]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.recoverAddress = exports.computeAddress = exports.accessListify = void 0;
null;
var accesslist_js_1 = require("./accesslist.js");
Object.defineProperty(exports, "accessListify", { enumerable: true, get: function () { return accesslist_js_1.accessListify; } });
var address_js_1 = require("./address.js");
Object.defineProperty(exports, "computeAddress", { enumerable: true, get: function () { return address_js_1.computeAddress; } });
Object.defineProperty(exports, "recoverAddress", { enumerable: true, get: function () { return address_js_1.recoverAddress; } });
var transaction_js_1 = require("./transaction.js");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return transaction_js_1.Transaction; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./accesslist.js":1730085369222,"./address.js":1730085369223}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369222, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.accessListify = void 0;
const index_js_1 = require("../address/index.js");
const index_js_2 = require("../utils/index.js");
function accessSetify(addr, storageKeys) {
    return {
        address: (0, index_js_1.getAddress)(addr),
        storageKeys: storageKeys.map((storageKey, index) => {
            (0, index_js_2.assertArgument)((0, index_js_2.isHexString)(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
            return storageKey.toLowerCase();
        })
    };
}
/**
 *  Returns a [[AccessList]] from any ethers-supported access-list structure.
 */
function accessListify(value) {
    if (Array.isArray(value)) {
        return value.map((set, index) => {
            if (Array.isArray(set)) {
                (0, index_js_2.assertArgument)(set.length === 2, "invalid slot set", `value[${index}]`, set);
                return accessSetify(set[0], set[1]);
            }
            (0, index_js_2.assertArgument)(set != null && typeof (set) === "object", "invalid address-slot set", "value", value);
            return accessSetify(set.address, set.storageKeys);
        });
    }
    (0, index_js_2.assertArgument)(value != null && typeof (value) === "object", "invalid access list", "value", value);
    const result = Object.keys(value).map((addr) => {
        const storageKeys = value[addr].reduce((accum, storageKey) => {
            accum[storageKey] = true;
            return accum;
        }, {});
        return accessSetify(addr, Object.keys(storageKeys).sort());
    });
    result.sort((a, b) => (a.address.localeCompare(b.address)));
    return result;
}
exports.accessListify = accessListify;
//# sourceMappingURL=accesslist.js.map
}, function(modId) { var map = {"../address/index.js":1730085369193,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369223, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverAddress = exports.computeAddress = void 0;
const index_js_1 = require("../address/index.js");
const index_js_2 = require("../crypto/index.js");
/**
 *  Returns the address for the %%key%%.
 *
 *  The key may be any standard form of public key or a private key.
 */
function computeAddress(key) {
    let pubkey;
    if (typeof (key) === "string") {
        pubkey = index_js_2.SigningKey.computePublicKey(key, false);
    }
    else {
        pubkey = key.publicKey;
    }
    return (0, index_js_1.getAddress)((0, index_js_2.keccak256)("0x" + pubkey.substring(4)).substring(26));
}
exports.computeAddress = computeAddress;
/**
 *  Returns the recovered address for the private key that was
 *  used to sign %%digest%% that resulted in %%signature%%.
 */
function recoverAddress(digest, signature) {
    return computeAddress(index_js_2.SigningKey.recoverPublicKey(digest, signature));
}
exports.recoverAddress = recoverAddress;
//# sourceMappingURL=address.js.map
}, function(modId) { var map = {"../address/index.js":1730085369193,"../crypto/index.js":1730085369195}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369225, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.solidityPackedSha256 = exports.solidityPackedKeccak256 = exports.solidityPacked = void 0;
const index_js_1 = require("../address/index.js");
const index_js_2 = require("../crypto/index.js");
const index_js_3 = require("../utils/index.js");
const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
function _pack(type, value, isArray) {
    switch (type) {
        case "address":
            if (isArray) {
                return (0, index_js_3.getBytes)((0, index_js_3.zeroPadValue)(value, 32));
            }
            return (0, index_js_3.getBytes)((0, index_js_1.getAddress)(value));
        case "string":
            return (0, index_js_3.toUtf8Bytes)(value);
        case "bytes":
            return (0, index_js_3.getBytes)(value);
        case "bool":
            value = (!!value ? "0x01" : "0x00");
            if (isArray) {
                return (0, index_js_3.getBytes)((0, index_js_3.zeroPadValue)(value, 32));
            }
            return (0, index_js_3.getBytes)(value);
    }
    let match = type.match(regexNumber);
    if (match) {
        let signed = (match[1] === "int");
        let size = parseInt(match[2] || "256");
        (0, index_js_3.assertArgument)((!match[2] || match[2] === String(size)) && (size % 8 === 0) && size !== 0 && size <= 256, "invalid number type", "type", type);
        if (isArray) {
            size = 256;
        }
        if (signed) {
            value = (0, index_js_3.toTwos)(value, size);
        }
        return (0, index_js_3.getBytes)((0, index_js_3.zeroPadValue)((0, index_js_3.toBeArray)(value), size / 8));
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        (0, index_js_3.assertArgument)(String(size) === match[1] && size !== 0 && size <= 32, "invalid bytes type", "type", type);
        (0, index_js_3.assertArgument)((0, index_js_3.dataLength)(value) === size, `invalid value for ${type}`, "value", value);
        if (isArray) {
            return (0, index_js_3.getBytes)((0, index_js_3.zeroPadBytes)(value, 32));
        }
        return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
        const baseType = match[1];
        const count = parseInt(match[2] || String(value.length));
        (0, index_js_3.assertArgument)(count === value.length, `invalid array length for ${type}`, "value", value);
        const result = [];
        value.forEach(function (value) {
            result.push(_pack(baseType, value, true));
        });
        return (0, index_js_3.getBytes)((0, index_js_3.concat)(result));
    }
    (0, index_js_3.assertArgument)(false, "invalid type", "type", type);
}
// @TODO: Array Enum
/**
 *   Computes the [[link-solc-packed]] representation of %%values%%
 *   respectively to their %%types%%.
 *
 *   @example:
 *       addr = "0x8ba1f109551bd432803012645ac136ddd64dba72"
 *       solidityPacked([ "address", "uint" ], [ addr, 45 ]);
 *       //_result:
 */
function solidityPacked(types, values) {
    (0, index_js_3.assertArgument)(types.length === values.length, "wrong number of values; expected ${ types.length }", "values", values);
    const tight = [];
    types.forEach(function (type, index) {
        tight.push(_pack(type, values[index]));
    });
    return (0, index_js_3.hexlify)((0, index_js_3.concat)(tight));
}
exports.solidityPacked = solidityPacked;
/**
 *   Computes the [[link-solc-packed]] [[keccak256]] hash of %%values%%
 *   respectively to their %%types%%.
 *
 *   @example:
 *       addr = "0x8ba1f109551bd432803012645ac136ddd64dba72"
 *       solidityPackedKeccak256([ "address", "uint" ], [ addr, 45 ]);
 *       //_result:
 */
function solidityPackedKeccak256(types, values) {
    return (0, index_js_2.keccak256)(solidityPacked(types, values));
}
exports.solidityPackedKeccak256 = solidityPackedKeccak256;
/**
 *   Computes the [[link-solc-packed]] [[sha256]] hash of %%values%%
 *   respectively to their %%types%%.
 *
 *   @example:
 *       addr = "0x8ba1f109551bd432803012645ac136ddd64dba72"
 *       solidityPackedSha256([ "address", "uint" ], [ addr, 45 ]);
 *       //_result:
 */
function solidityPackedSha256(types, values) {
    return (0, index_js_2.sha256)(solidityPacked(types, values));
}
exports.solidityPackedSha256 = solidityPackedSha256;
//# sourceMappingURL=solidity.js.map
}, function(modId) { var map = {"../address/index.js":1730085369193,"../crypto/index.js":1730085369195,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369227, function(require, module, exports) {

/**
 *  A **Provider** provides a connection to the blockchain, whch can be
 *  used to query its current state, simulate execution and send transactions
 *  to update the state.
 *
 *  It is one of the most fundamental components of interacting with a
 *  blockchain application, and there are many ways to connect, such as over
 *  HTTP, WebSockets or injected providers such as [MetaMask](link-metamask).
 *
 *  @_section: api/providers:Providers  [about-providers]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEventSubscriber = exports.SocketPendingSubscriber = exports.SocketBlockSubscriber = exports.SocketSubscriber = exports.WebSocketProvider = exports.SocketProvider = exports.IpcSocketProvider = exports.QuickNodeProvider = exports.PocketProvider = exports.InfuraWebSocketProvider = exports.InfuraProvider = exports.EtherscanPlugin = exports.EtherscanProvider = exports.ChainstackProvider = exports.CloudflareProvider = exports.AnkrProvider = exports.AlchemyProvider = exports.BrowserProvider = exports.JsonRpcSigner = exports.JsonRpcProvider = exports.JsonRpcApiProvider = exports.FallbackProvider = exports.copyRequest = exports.TransactionResponse = exports.TransactionReceipt = exports.Log = exports.FeeData = exports.Block = exports.FetchUrlFeeDataNetworkPlugin = exports.FeeDataNetworkPlugin = exports.EnsPlugin = exports.GasCostPlugin = exports.NetworkPlugin = exports.NonceManager = exports.Network = exports.MulticoinProviderPlugin = exports.EnsResolver = exports.getDefaultProvider = exports.showThrottleMessage = exports.VoidSigner = exports.AbstractSigner = exports.UnmanagedSubscriber = exports.AbstractProvider = void 0;
var abstract_provider_js_1 = require("./abstract-provider.js");
Object.defineProperty(exports, "AbstractProvider", { enumerable: true, get: function () { return abstract_provider_js_1.AbstractProvider; } });
Object.defineProperty(exports, "UnmanagedSubscriber", { enumerable: true, get: function () { return abstract_provider_js_1.UnmanagedSubscriber; } });
var abstract_signer_js_1 = require("./abstract-signer.js");
Object.defineProperty(exports, "AbstractSigner", { enumerable: true, get: function () { return abstract_signer_js_1.AbstractSigner; } });
Object.defineProperty(exports, "VoidSigner", { enumerable: true, get: function () { return abstract_signer_js_1.VoidSigner; } });
var community_js_1 = require("./community.js");
Object.defineProperty(exports, "showThrottleMessage", { enumerable: true, get: function () { return community_js_1.showThrottleMessage; } });
var default_provider_js_1 = require("./default-provider.js");
Object.defineProperty(exports, "getDefaultProvider", { enumerable: true, get: function () { return default_provider_js_1.getDefaultProvider; } });
var ens_resolver_js_1 = require("./ens-resolver.js");
Object.defineProperty(exports, "EnsResolver", { enumerable: true, get: function () { return ens_resolver_js_1.EnsResolver; } });
Object.defineProperty(exports, "MulticoinProviderPlugin", { enumerable: true, get: function () { return ens_resolver_js_1.MulticoinProviderPlugin; } });
var network_js_1 = require("./network.js");
Object.defineProperty(exports, "Network", { enumerable: true, get: function () { return network_js_1.Network; } });
var signer_noncemanager_js_1 = require("./signer-noncemanager.js");
Object.defineProperty(exports, "NonceManager", { enumerable: true, get: function () { return signer_noncemanager_js_1.NonceManager; } });
var plugins_network_js_1 = require("./plugins-network.js");
Object.defineProperty(exports, "NetworkPlugin", { enumerable: true, get: function () { return plugins_network_js_1.NetworkPlugin; } });
Object.defineProperty(exports, "GasCostPlugin", { enumerable: true, get: function () { return plugins_network_js_1.GasCostPlugin; } });
Object.defineProperty(exports, "EnsPlugin", { enumerable: true, get: function () { return plugins_network_js_1.EnsPlugin; } });
Object.defineProperty(exports, "FeeDataNetworkPlugin", { enumerable: true, get: function () { return plugins_network_js_1.FeeDataNetworkPlugin; } });
Object.defineProperty(exports, "FetchUrlFeeDataNetworkPlugin", { enumerable: true, get: function () { return plugins_network_js_1.FetchUrlFeeDataNetworkPlugin; } });
var provider_js_1 = require("./provider.js");
Object.defineProperty(exports, "Block", { enumerable: true, get: function () { return provider_js_1.Block; } });
Object.defineProperty(exports, "FeeData", { enumerable: true, get: function () { return provider_js_1.FeeData; } });
Object.defineProperty(exports, "Log", { enumerable: true, get: function () { return provider_js_1.Log; } });
Object.defineProperty(exports, "TransactionReceipt", { enumerable: true, get: function () { return provider_js_1.TransactionReceipt; } });
Object.defineProperty(exports, "TransactionResponse", { enumerable: true, get: function () { return provider_js_1.TransactionResponse; } });
Object.defineProperty(exports, "copyRequest", { enumerable: true, get: function () { return provider_js_1.copyRequest; } });
var provider_fallback_js_1 = require("./provider-fallback.js");
Object.defineProperty(exports, "FallbackProvider", { enumerable: true, get: function () { return provider_fallback_js_1.FallbackProvider; } });
var provider_jsonrpc_js_1 = require("./provider-jsonrpc.js");
Object.defineProperty(exports, "JsonRpcApiProvider", { enumerable: true, get: function () { return provider_jsonrpc_js_1.JsonRpcApiProvider; } });
Object.defineProperty(exports, "JsonRpcProvider", { enumerable: true, get: function () { return provider_jsonrpc_js_1.JsonRpcProvider; } });
Object.defineProperty(exports, "JsonRpcSigner", { enumerable: true, get: function () { return provider_jsonrpc_js_1.JsonRpcSigner; } });
var provider_browser_js_1 = require("./provider-browser.js");
Object.defineProperty(exports, "BrowserProvider", { enumerable: true, get: function () { return provider_browser_js_1.BrowserProvider; } });
var provider_alchemy_js_1 = require("./provider-alchemy.js");
Object.defineProperty(exports, "AlchemyProvider", { enumerable: true, get: function () { return provider_alchemy_js_1.AlchemyProvider; } });
var provider_ankr_js_1 = require("./provider-ankr.js");
Object.defineProperty(exports, "AnkrProvider", { enumerable: true, get: function () { return provider_ankr_js_1.AnkrProvider; } });
var provider_cloudflare_js_1 = require("./provider-cloudflare.js");
Object.defineProperty(exports, "CloudflareProvider", { enumerable: true, get: function () { return provider_cloudflare_js_1.CloudflareProvider; } });
var provider_chainstack_js_1 = require("./provider-chainstack.js");
Object.defineProperty(exports, "ChainstackProvider", { enumerable: true, get: function () { return provider_chainstack_js_1.ChainstackProvider; } });
var provider_etherscan_js_1 = require("./provider-etherscan.js");
Object.defineProperty(exports, "EtherscanProvider", { enumerable: true, get: function () { return provider_etherscan_js_1.EtherscanProvider; } });
Object.defineProperty(exports, "EtherscanPlugin", { enumerable: true, get: function () { return provider_etherscan_js_1.EtherscanPlugin; } });
var provider_infura_js_1 = require("./provider-infura.js");
Object.defineProperty(exports, "InfuraProvider", { enumerable: true, get: function () { return provider_infura_js_1.InfuraProvider; } });
Object.defineProperty(exports, "InfuraWebSocketProvider", { enumerable: true, get: function () { return provider_infura_js_1.InfuraWebSocketProvider; } });
var provider_pocket_js_1 = require("./provider-pocket.js");
Object.defineProperty(exports, "PocketProvider", { enumerable: true, get: function () { return provider_pocket_js_1.PocketProvider; } });
var provider_quicknode_js_1 = require("./provider-quicknode.js");
Object.defineProperty(exports, "QuickNodeProvider", { enumerable: true, get: function () { return provider_quicknode_js_1.QuickNodeProvider; } });
const provider_ipcsocket_js_1 = require("./provider-ipcsocket.js"); /*-browser*/
Object.defineProperty(exports, "IpcSocketProvider", { enumerable: true, get: function () { return provider_ipcsocket_js_1.IpcSocketProvider; } });
var provider_socket_js_1 = require("./provider-socket.js");
Object.defineProperty(exports, "SocketProvider", { enumerable: true, get: function () { return provider_socket_js_1.SocketProvider; } });
var provider_websocket_js_1 = require("./provider-websocket.js");
Object.defineProperty(exports, "WebSocketProvider", { enumerable: true, get: function () { return provider_websocket_js_1.WebSocketProvider; } });
var provider_socket_js_2 = require("./provider-socket.js");
Object.defineProperty(exports, "SocketSubscriber", { enumerable: true, get: function () { return provider_socket_js_2.SocketSubscriber; } });
Object.defineProperty(exports, "SocketBlockSubscriber", { enumerable: true, get: function () { return provider_socket_js_2.SocketBlockSubscriber; } });
Object.defineProperty(exports, "SocketPendingSubscriber", { enumerable: true, get: function () { return provider_socket_js_2.SocketPendingSubscriber; } });
Object.defineProperty(exports, "SocketEventSubscriber", { enumerable: true, get: function () { return provider_socket_js_2.SocketEventSubscriber; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./community.js":1730085369230,"./default-provider.js":1730085369231,"./provider-cloudflare.js":1730085369235}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369230, function(require, module, exports) {

/**
 *  There are many awesome community services that provide Ethereum
 *  nodes both for developers just starting out and for large-scale
 *  communities.
 *
 *  @_section: api/providers/thirdparty: Community Providers  [thirdparty]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.showThrottleMessage = void 0;
// Show the throttle message only once per service
const shown = new Set();
/**
 *  Displays a warning in tht console when the community resource is
 *  being used too heavily by the app, recommending the developer
 *  acquire their own credentials instead of using the community
 *  credentials.
 *
 *  The notification will only occur once per service.
 */
function showThrottleMessage(service) {
    if (shown.has(service)) {
        return;
    }
    shown.add(service);
    console.log("========= NOTICE =========");
    console.log(`Request-Rate Exceeded for ${service} (this message will not be repeated)`);
    console.log("");
    console.log("The default API keys for each service are provided as a highly-throttled,");
    console.log("community resource for low-traffic projects and early prototyping.");
    console.log("");
    console.log("While your application will continue to function, we highly recommended");
    console.log("signing up for your own API keys to improve performance, increase your");
    console.log("request rate/limit and enable other perks, such as metrics and advanced APIs.");
    console.log("");
    console.log("For more details: https:/\/docs.ethers.org/api-keys/");
    console.log("==========================");
}
exports.showThrottleMessage = showThrottleMessage;
//# sourceMappingURL=community.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369231, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultProvider = void 0;
const index_js_1 = require("../utils/index.js");
const provider_ankr_js_1 = require("./provider-ankr.js");
const provider_alchemy_js_1 = require("./provider-alchemy.js");
const provider_chainstack_js_1 = require("./provider-chainstack.js");
const provider_cloudflare_js_1 = require("./provider-cloudflare.js");
const provider_etherscan_js_1 = require("./provider-etherscan.js");
const provider_infura_js_1 = require("./provider-infura.js");
//import { PocketProvider } from "./provider-pocket.js";
const provider_quicknode_js_1 = require("./provider-quicknode.js");
const provider_fallback_js_1 = require("./provider-fallback.js");
const provider_jsonrpc_js_1 = require("./provider-jsonrpc.js");
const network_js_1 = require("./network.js");
const provider_websocket_js_1 = require("./provider-websocket.js");
function isWebSocketLike(value) {
    return (value && typeof (value.send) === "function" &&
        typeof (value.close) === "function");
}
const Testnets = "goerli kovan sepolia classicKotti optimism-goerli arbitrum-goerli matic-mumbai bnbt".split(" ");
/**
 *  Returns a default provider for %%network%%.
 *
 *  If %%network%% is a [[WebSocketLike]] or string that begins with
 *  ``"ws:"`` or ``"wss:"``, a [[WebSocketProvider]] is returned backed
 *  by that WebSocket or URL.
 *
 *  If %%network%% is a string that begins with ``"HTTP:"`` or ``"HTTPS:"``,
 *  a [[JsonRpcProvider]] is returned connected to that URL.
 *
 *  Otherwise, a default provider is created backed by well-known public
 *  Web3 backends (such as [[link-infura]]) using community-provided API
 *  keys.
 *
 *  The %%options%% allows specifying custom API keys per backend (setting
 *  an API key to ``"-"`` will omit that provider) and ``options.exclusive``
 *  can be set to either a backend name or and array of backend names, which
 *  will whitelist **only** those backends.
 *
 *  Current backend strings supported are:
 *  - ``"alchemy"``
 *  - ``"ankr"``
 *  - ``"cloudflare"``
 *  - ``"chainstack"``
 *  - ``"etherscan"``
 *  - ``"infura"``
 *  - ``"publicPolygon"``
 *  - ``"quicknode"``
 *
 *  @example:
 *    // Connect to a local Geth node
 *    provider = getDefaultProvider("http://localhost:8545/");
 *
 *    // Connect to Ethereum mainnet with any current and future
 *    // third-party services available
 *    provider = getDefaultProvider("mainnet");
 *
 *    // Connect to Polygon, but only allow Etherscan and
 *    // INFURA and use "MY_API_KEY" in calls to Etherscan.
 *    provider = getDefaultProvider("matic", {
 *      etherscan: "MY_API_KEY",
 *      exclusive: [ "etherscan", "infura" ]
 *    });
 */
function getDefaultProvider(network, options) {
    if (options == null) {
        options = {};
    }
    const allowService = (name) => {
        if (options[name] === "-") {
            return false;
        }
        if (typeof (options.exclusive) === "string") {
            return (name === options.exclusive);
        }
        if (Array.isArray(options.exclusive)) {
            return (options.exclusive.indexOf(name) !== -1);
        }
        return true;
    };
    if (typeof (network) === "string" && network.match(/^https?:/)) {
        return new provider_jsonrpc_js_1.JsonRpcProvider(network);
    }
    if (typeof (network) === "string" && network.match(/^wss?:/) || isWebSocketLike(network)) {
        return new provider_websocket_js_1.WebSocketProvider(network);
    }
    // Get the network and name, if possible
    let staticNetwork = null;
    try {
        staticNetwork = network_js_1.Network.from(network);
    }
    catch (error) { }
    const providers = [];
    if (allowService("publicPolygon") && staticNetwork) {
        if (staticNetwork.name === "matic") {
            providers.push(new provider_jsonrpc_js_1.JsonRpcProvider("https:/\/polygon-rpc.com/", staticNetwork, { staticNetwork }));
        }
        else if (staticNetwork.name === "matic-amoy") {
            providers.push(new provider_jsonrpc_js_1.JsonRpcProvider("https:/\/rpc-amoy.polygon.technology/", staticNetwork, { staticNetwork }));
        }
    }
    if (allowService("alchemy")) {
        try {
            providers.push(new provider_alchemy_js_1.AlchemyProvider(network, options.alchemy));
        }
        catch (error) { }
    }
    if (allowService("ankr") && options.ankr != null) {
        try {
            providers.push(new provider_ankr_js_1.AnkrProvider(network, options.ankr));
        }
        catch (error) { }
    }
    if (allowService("chainstack")) {
        try {
            providers.push(new provider_chainstack_js_1.ChainstackProvider(network, options.chainstack));
        }
        catch (error) { }
    }
    if (allowService("cloudflare")) {
        try {
            providers.push(new provider_cloudflare_js_1.CloudflareProvider(network));
        }
        catch (error) { }
    }
    if (allowService("etherscan")) {
        try {
            providers.push(new provider_etherscan_js_1.EtherscanProvider(network, options.etherscan));
        }
        catch (error) { }
    }
    if (allowService("infura")) {
        try {
            let projectId = options.infura;
            let projectSecret = undefined;
            if (typeof (projectId) === "object") {
                projectSecret = projectId.projectSecret;
                projectId = projectId.projectId;
            }
            providers.push(new provider_infura_js_1.InfuraProvider(network, projectId, projectSecret));
        }
        catch (error) { }
    }
    /*
        if (options.pocket !== "-") {
            try {
                let appId = options.pocket;
                let secretKey: undefined | string = undefined;
                let loadBalancer: undefined | boolean = undefined;
                if (typeof(appId) === "object") {
                    loadBalancer = !!appId.loadBalancer;
                    secretKey = appId.secretKey;
                    appId = appId.appId;
                }
                providers.push(new PocketProvider(network, appId, secretKey, loadBalancer));
            } catch (error) { console.log(error); }
        }
    */
    if (allowService("quicknode")) {
        try {
            let token = options.quicknode;
            providers.push(new provider_quicknode_js_1.QuickNodeProvider(network, token));
        }
        catch (error) { }
    }
    (0, index_js_1.assert)(providers.length, "unsupported default network", "UNSUPPORTED_OPERATION", {
        operation: "getDefaultProvider"
    });
    // No need for a FallbackProvider
    if (providers.length === 1) {
        return providers[0];
    }
    // We use the floor because public third-party providers can be unreliable,
    // so a low number of providers with a large quorum will fail too often
    let quorum = Math.floor(providers.length / 2);
    if (quorum > 2) {
        quorum = 2;
    }
    // Testnets don't need as strong a security gaurantee and speed is
    // more useful during testing
    if (staticNetwork && Testnets.indexOf(staticNetwork.name) !== -1) {
        quorum = 1;
    }
    // Provided override qorum takes priority
    if (options && options.quorum) {
        quorum = options.quorum;
    }
    return new provider_fallback_js_1.FallbackProvider(providers, undefined, { quorum });
}
exports.getDefaultProvider = getDefaultProvider;
//# sourceMappingURL=default-provider.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174,"./provider-cloudflare.js":1730085369235}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369235, function(require, module, exports) {

/**
 *  About Cloudflare
 *
 *  @_subsection: api/providers/thirdparty:Cloudflare  [providers-cloudflare]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareProvider = void 0;
const index_js_1 = require("../utils/index.js");
const network_js_1 = require("./network.js");
const provider_jsonrpc_js_1 = require("./provider-jsonrpc.js");
/**
 *  About Cloudflare...
 */
class CloudflareProvider extends provider_jsonrpc_js_1.JsonRpcProvider {
    constructor(_network) {
        if (_network == null) {
            _network = "mainnet";
        }
        const network = network_js_1.Network.from(_network);
        (0, index_js_1.assertArgument)(network.name === "mainnet", "unsupported network", "network", _network);
        super("https:/\/cloudflare-eth.com/", network, { staticNetwork: network });
    }
}
exports.CloudflareProvider = CloudflareProvider;
//# sourceMappingURL=provider-cloudflare.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369264, function(require, module, exports) {

/**
 *  When interacting with Ethereum, it is necessary to use a private
 *  key authenticate actions by signing a payload.
 *
 *  Wallets are the simplest way to expose the concept of an
 *  //Externally Owner Account// (EOA) as it wraps a private key
 *  and supports high-level methods to sign common types of interaction
 *  and send transactions.
 *
 *  The class most developers will want to use is [[Wallet]], which
 *  can load a private key directly or from any common wallet format.
 *
 *  The [[HDNodeWallet]] can be used when it is necessary to access
 *  low-level details of how an HD wallets are derived, exported
 *  or imported.
 *
 *  @_section: api/wallet:Wallets  [about-wallets]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = exports.Mnemonic = exports.encryptKeystoreJsonSync = exports.encryptKeystoreJson = exports.decryptKeystoreJson = exports.decryptKeystoreJsonSync = exports.isKeystoreJson = exports.decryptCrowdsaleJson = exports.isCrowdsaleJson = exports.HDNodeVoidWallet = exports.HDNodeWallet = exports.getIndexedAccountPath = exports.getAccountPath = exports.defaultPath = exports.BaseWallet = void 0;
var base_wallet_js_1 = require("./base-wallet.js");
Object.defineProperty(exports, "BaseWallet", { enumerable: true, get: function () { return base_wallet_js_1.BaseWallet; } });
var hdwallet_js_1 = require("./hdwallet.js");
Object.defineProperty(exports, "defaultPath", { enumerable: true, get: function () { return hdwallet_js_1.defaultPath; } });
Object.defineProperty(exports, "getAccountPath", { enumerable: true, get: function () { return hdwallet_js_1.getAccountPath; } });
Object.defineProperty(exports, "getIndexedAccountPath", { enumerable: true, get: function () { return hdwallet_js_1.getIndexedAccountPath; } });
Object.defineProperty(exports, "HDNodeWallet", { enumerable: true, get: function () { return hdwallet_js_1.HDNodeWallet; } });
Object.defineProperty(exports, "HDNodeVoidWallet", { enumerable: true, get: function () { return hdwallet_js_1.HDNodeVoidWallet; } });
var json_crowdsale_js_1 = require("./json-crowdsale.js");
Object.defineProperty(exports, "isCrowdsaleJson", { enumerable: true, get: function () { return json_crowdsale_js_1.isCrowdsaleJson; } });
Object.defineProperty(exports, "decryptCrowdsaleJson", { enumerable: true, get: function () { return json_crowdsale_js_1.decryptCrowdsaleJson; } });
var json_keystore_js_1 = require("./json-keystore.js");
Object.defineProperty(exports, "isKeystoreJson", { enumerable: true, get: function () { return json_keystore_js_1.isKeystoreJson; } });
Object.defineProperty(exports, "decryptKeystoreJsonSync", { enumerable: true, get: function () { return json_keystore_js_1.decryptKeystoreJsonSync; } });
Object.defineProperty(exports, "decryptKeystoreJson", { enumerable: true, get: function () { return json_keystore_js_1.decryptKeystoreJson; } });
Object.defineProperty(exports, "encryptKeystoreJson", { enumerable: true, get: function () { return json_keystore_js_1.encryptKeystoreJson; } });
Object.defineProperty(exports, "encryptKeystoreJsonSync", { enumerable: true, get: function () { return json_keystore_js_1.encryptKeystoreJsonSync; } });
var mnemonic_js_1 = require("./mnemonic.js");
Object.defineProperty(exports, "Mnemonic", { enumerable: true, get: function () { return mnemonic_js_1.Mnemonic; } });
var wallet_js_1 = require("./wallet.js");
Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return wallet_js_1.Wallet; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./json-crowdsale.js":1730085369267,"./json-keystore.js":1730085369269}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369267, function(require, module, exports) {

/**
 *  @_subsection: api/wallet:JSON Wallets  [json-wallets]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptCrowdsaleJson = exports.isCrowdsaleJson = void 0;
const aes_js_1 = require("aes-js");
const index_js_1 = require("../address/index.js");
const index_js_2 = require("../crypto/index.js");
const index_js_3 = require("../hash/index.js");
const index_js_4 = require("../utils/index.js");
const utils_js_1 = require("./utils.js");
/**
 *  Returns true if %%json%% is a valid JSON Crowdsale wallet.
 */
function isCrowdsaleJson(json) {
    try {
        const data = JSON.parse(json);
        if (data.encseed) {
            return true;
        }
    }
    catch (error) { }
    return false;
}
exports.isCrowdsaleJson = isCrowdsaleJson;
// See: https://github.com/ethereum/pyethsaletool
/**
 *  Before Ethereum launched, it was necessary to create a wallet
 *  format for backers to use, which would be used to receive ether
 *  as a reward for contributing to the project.
 *
 *  The [[link-crowdsale]] format is now obsolete, but it is still
 *  useful to support and the additional code is fairly trivial as
 *  all the primitives required are used through core portions of
 *  the library.
 */
function decryptCrowdsaleJson(json, _password) {
    const data = JSON.parse(json);
    const password = (0, utils_js_1.getPassword)(_password);
    // Ethereum Address
    const address = (0, index_js_1.getAddress)((0, utils_js_1.spelunk)(data, "ethaddr:string!"));
    // Encrypted Seed
    const encseed = (0, utils_js_1.looseArrayify)((0, utils_js_1.spelunk)(data, "encseed:string!"));
    (0, index_js_4.assertArgument)(encseed && (encseed.length % 16) === 0, "invalid encseed", "json", json);
    const key = (0, index_js_4.getBytes)((0, index_js_2.pbkdf2)(password, password, 2000, 32, "sha256")).slice(0, 16);
    const iv = encseed.slice(0, 16);
    const encryptedSeed = encseed.slice(16);
    // Decrypt the seed
    const aesCbc = new aes_js_1.CBC(key, iv);
    const seed = (0, aes_js_1.pkcs7Strip)((0, index_js_4.getBytes)(aesCbc.decrypt(encryptedSeed)));
    // This wallet format is weird... Convert the binary encoded hex to a string.
    let seedHex = "";
    for (let i = 0; i < seed.length; i++) {
        seedHex += String.fromCharCode(seed[i]);
    }
    return { address, privateKey: (0, index_js_3.id)(seedHex) };
}
exports.decryptCrowdsaleJson = decryptCrowdsaleJson;
//# sourceMappingURL=json-crowdsale.js.map
}, function(modId) { var map = {"../address/index.js":1730085369193,"../crypto/index.js":1730085369195,"../hash/index.js":1730085369217,"../utils/index.js":1730085369174,"./utils.js":1730085369268}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369268, function(require, module, exports) {

/**
 *  @_ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.spelunk = exports.getPassword = exports.zpad = exports.looseArrayify = void 0;
const index_js_1 = require("../utils/index.js");
function looseArrayify(hexString) {
    if (typeof (hexString) === "string" && !hexString.startsWith("0x")) {
        hexString = "0x" + hexString;
    }
    return (0, index_js_1.getBytesCopy)(hexString);
}
exports.looseArrayify = looseArrayify;
function zpad(value, length) {
    value = String(value);
    while (value.length < length) {
        value = '0' + value;
    }
    return value;
}
exports.zpad = zpad;
function getPassword(password) {
    if (typeof (password) === 'string') {
        return (0, index_js_1.toUtf8Bytes)(password, "NFKC");
    }
    return (0, index_js_1.getBytesCopy)(password);
}
exports.getPassword = getPassword;
function spelunk(object, _path) {
    const match = _path.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
    (0, index_js_1.assertArgument)(match != null, "invalid path", "path", _path);
    const path = match[1];
    const type = match[3];
    const reqd = (match[4] === "!");
    let cur = object;
    for (const comp of path.toLowerCase().split('.')) {
        // Search for a child object with a case-insensitive matching key
        if (Array.isArray(cur)) {
            if (!comp.match(/^[0-9]+$/)) {
                break;
            }
            cur = cur[parseInt(comp)];
        }
        else if (typeof (cur) === "object") {
            let found = null;
            for (const key in cur) {
                if (key.toLowerCase() === comp) {
                    found = cur[key];
                    break;
                }
            }
            cur = found;
        }
        else {
            cur = null;
        }
        if (cur == null) {
            break;
        }
    }
    (0, index_js_1.assertArgument)(!reqd || cur != null, "missing required value", "path", path);
    if (type && cur != null) {
        if (type === "int") {
            if (typeof (cur) === "string" && cur.match(/^-?[0-9]+$/)) {
                return parseInt(cur);
            }
            else if (Number.isSafeInteger(cur)) {
                return cur;
            }
        }
        if (type === "number") {
            if (typeof (cur) === "string" && cur.match(/^-?[0-9.]*$/)) {
                return parseFloat(cur);
            }
        }
        if (type === "data") {
            if (typeof (cur) === "string") {
                return looseArrayify(cur);
            }
        }
        if (type === "array" && Array.isArray(cur)) {
            return cur;
        }
        if (type === typeof (cur)) {
            return cur;
        }
        (0, index_js_1.assertArgument)(false, `wrong type found for ${type} `, "path", path);
    }
    return cur;
}
exports.spelunk = spelunk;
/*
export function follow(object: any, path: string): null | string {
    let currentChild = object;

    for (const comp of path.toLowerCase().split('/')) {

        // Search for a child object with a case-insensitive matching key
        let matchingChild = null;
        for (const key in currentChild) {
             if (key.toLowerCase() === comp) {
                 matchingChild = currentChild[key];
                 break;
             }
        }

        if (matchingChild === null) { return null; }

        currentChild = matchingChild;
    }

    return currentChild;
}

// "path/to/something:type!"
export function followRequired(data: any, path: string): string {
    const value = follow(data, path);
    if (value != null) { return value; }
    return logger.throwArgumentError("invalid value", `data:${ path }`,
    JSON.stringify(data));
}
*/
// See: https://www.ietf.org/rfc/rfc4122.txt (Section 4.4)
/*
export function uuidV4(randomBytes: BytesLike): string {
    const bytes = getBytes(randomBytes, "randomBytes");

    // Section: 4.1.3:
    // - time_hi_and_version[12:16] = 0b0100
    bytes[6] = (bytes[6] & 0x0f) | 0x40;

    // Section 4.4
    // - clock_seq_hi_and_reserved[6] = 0b0
    // - clock_seq_hi_and_reserved[7] = 0b1
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const value = hexlify(bytes);

    return [
       value.substring(2, 10),
       value.substring(10, 14),
       value.substring(14, 18),
       value.substring(18, 22),
       value.substring(22, 34),
    ].join("-");
}
*/
//# sourceMappingURL=utils.js.map
}, function(modId) { var map = {"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369269, function(require, module, exports) {

/**
 *  The JSON Wallet formats allow a simple way to store the private
 *  keys needed in Ethereum along with related information and allows
 *  for extensible forms of encryption.
 *
 *  These utilities facilitate decrypting and encrypting the most common
 *  JSON Wallet formats.
 *
 *  @_subsection: api/wallet:JSON Wallets  [json-wallets]
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptKeystoreJson = exports.encryptKeystoreJsonSync = exports.decryptKeystoreJson = exports.decryptKeystoreJsonSync = exports.isKeystoreJson = void 0;
const aes_js_1 = require("aes-js");
const index_js_1 = require("../address/index.js");
const index_js_2 = require("../crypto/index.js");
const index_js_3 = require("../transaction/index.js");
const index_js_4 = require("../utils/index.js");
const utils_js_1 = require("./utils.js");
const _version_js_1 = require("../_version.js");
const defaultPath = "m/44'/60'/0'/0/0";
/**
 *  Returns true if %%json%% is a valid JSON Keystore Wallet.
 */
function isKeystoreJson(json) {
    try {
        const data = JSON.parse(json);
        const version = ((data.version != null) ? parseInt(data.version) : 0);
        if (version === 3) {
            return true;
        }
    }
    catch (error) { }
    return false;
}
exports.isKeystoreJson = isKeystoreJson;
function decrypt(data, key, ciphertext) {
    const cipher = (0, utils_js_1.spelunk)(data, "crypto.cipher:string");
    if (cipher === "aes-128-ctr") {
        const iv = (0, utils_js_1.spelunk)(data, "crypto.cipherparams.iv:data!");
        const aesCtr = new aes_js_1.CTR(key, iv);
        return (0, index_js_4.hexlify)(aesCtr.decrypt(ciphertext));
    }
    (0, index_js_4.assert)(false, "unsupported cipher", "UNSUPPORTED_OPERATION", {
        operation: "decrypt"
    });
}
function getAccount(data, _key) {
    const key = (0, index_js_4.getBytes)(_key);
    const ciphertext = (0, utils_js_1.spelunk)(data, "crypto.ciphertext:data!");
    const computedMAC = (0, index_js_4.hexlify)((0, index_js_2.keccak256)((0, index_js_4.concat)([key.slice(16, 32), ciphertext]))).substring(2);
    (0, index_js_4.assertArgument)(computedMAC === (0, utils_js_1.spelunk)(data, "crypto.mac:string!").toLowerCase(), "incorrect password", "password", "[ REDACTED ]");
    const privateKey = decrypt(data, key.slice(0, 16), ciphertext);
    const address = (0, index_js_3.computeAddress)(privateKey);
    if (data.address) {
        let check = data.address.toLowerCase();
        if (!check.startsWith("0x")) {
            check = "0x" + check;
        }
        (0, index_js_4.assertArgument)((0, index_js_1.getAddress)(check) === address, "keystore address/privateKey mismatch", "address", data.address);
    }
    const account = { address, privateKey };
    // Version 0.1 x-ethers metadata must contain an encrypted mnemonic phrase
    const version = (0, utils_js_1.spelunk)(data, "x-ethers.version:string");
    if (version === "0.1") {
        const mnemonicKey = key.slice(32, 64);
        const mnemonicCiphertext = (0, utils_js_1.spelunk)(data, "x-ethers.mnemonicCiphertext:data!");
        const mnemonicIv = (0, utils_js_1.spelunk)(data, "x-ethers.mnemonicCounter:data!");
        const mnemonicAesCtr = new aes_js_1.CTR(mnemonicKey, mnemonicIv);
        account.mnemonic = {
            path: ((0, utils_js_1.spelunk)(data, "x-ethers.path:string") || defaultPath),
            locale: ((0, utils_js_1.spelunk)(data, "x-ethers.locale:string") || "en"),
            entropy: (0, index_js_4.hexlify)((0, index_js_4.getBytes)(mnemonicAesCtr.decrypt(mnemonicCiphertext)))
        };
    }
    return account;
}
function getDecryptKdfParams(data) {
    const kdf = (0, utils_js_1.spelunk)(data, "crypto.kdf:string");
    if (kdf && typeof (kdf) === "string") {
        if (kdf.toLowerCase() === "scrypt") {
            const salt = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.salt:data!");
            const N = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.n:int!");
            const r = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.r:int!");
            const p = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.p:int!");
            // Make sure N is a power of 2
            (0, index_js_4.assertArgument)(N > 0 && (N & (N - 1)) === 0, "invalid kdf.N", "kdf.N", N);
            (0, index_js_4.assertArgument)(r > 0 && p > 0, "invalid kdf", "kdf", kdf);
            const dkLen = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.dklen:int!");
            (0, index_js_4.assertArgument)(dkLen === 32, "invalid kdf.dklen", "kdf.dflen", dkLen);
            return { name: "scrypt", salt, N, r, p, dkLen: 64 };
        }
        else if (kdf.toLowerCase() === "pbkdf2") {
            const salt = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.salt:data!");
            const prf = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.prf:string!");
            const algorithm = prf.split("-").pop();
            (0, index_js_4.assertArgument)(algorithm === "sha256" || algorithm === "sha512", "invalid kdf.pdf", "kdf.pdf", prf);
            const count = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.c:int!");
            const dkLen = (0, utils_js_1.spelunk)(data, "crypto.kdfparams.dklen:int!");
            (0, index_js_4.assertArgument)(dkLen === 32, "invalid kdf.dklen", "kdf.dklen", dkLen);
            return { name: "pbkdf2", salt, count, dkLen, algorithm };
        }
    }
    (0, index_js_4.assertArgument)(false, "unsupported key-derivation function", "kdf", kdf);
}
/**
 *  Returns the account details for the JSON Keystore Wallet %%json%%
 *  using %%password%%.
 *
 *  It is preferred to use the [async version](decryptKeystoreJson)
 *  instead, which allows a [[ProgressCallback]] to keep the user informed
 *  as to the decryption status.
 *
 *  This method will block the event loop (freezing all UI) until decryption
 *  is complete, which can take quite some time, depending on the wallet
 *  paramters and platform.
 */
function decryptKeystoreJsonSync(json, _password) {
    const data = JSON.parse(json);
    const password = (0, utils_js_1.getPassword)(_password);
    const params = getDecryptKdfParams(data);
    if (params.name === "pbkdf2") {
        const { salt, count, dkLen, algorithm } = params;
        const key = (0, index_js_2.pbkdf2)(password, salt, count, dkLen, algorithm);
        return getAccount(data, key);
    }
    (0, index_js_4.assert)(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params });
    const { salt, N, r, p, dkLen } = params;
    const key = (0, index_js_2.scryptSync)(password, salt, N, r, p, dkLen);
    return getAccount(data, key);
}
exports.decryptKeystoreJsonSync = decryptKeystoreJsonSync;
function stall(duration) {
    return new Promise((resolve) => { setTimeout(() => { resolve(); }, duration); });
}
/**
 *  Resolves to the decrypted JSON Keystore Wallet %%json%% using the
 *  %%password%%.
 *
 *  If provided, %%progress%% will be called periodically during the
 *  decrpytion to provide feedback, and if the function returns
 *  ``false`` will halt decryption.
 *
 *  The %%progressCallback%% will **always** receive ``0`` before
 *  decryption begins and ``1`` when complete.
 */
async function decryptKeystoreJson(json, _password, progress) {
    const data = JSON.parse(json);
    const password = (0, utils_js_1.getPassword)(_password);
    const params = getDecryptKdfParams(data);
    if (params.name === "pbkdf2") {
        if (progress) {
            progress(0);
            await stall(0);
        }
        const { salt, count, dkLen, algorithm } = params;
        const key = (0, index_js_2.pbkdf2)(password, salt, count, dkLen, algorithm);
        if (progress) {
            progress(1);
            await stall(0);
        }
        return getAccount(data, key);
    }
    (0, index_js_4.assert)(params.name === "scrypt", "cannot be reached", "UNKNOWN_ERROR", { params });
    const { salt, N, r, p, dkLen } = params;
    const key = await (0, index_js_2.scrypt)(password, salt, N, r, p, dkLen, progress);
    return getAccount(data, key);
}
exports.decryptKeystoreJson = decryptKeystoreJson;
function getEncryptKdfParams(options) {
    // Check/generate the salt
    const salt = (options.salt != null) ? (0, index_js_4.getBytes)(options.salt, "options.salt") : (0, index_js_2.randomBytes)(32);
    // Override the scrypt password-based key derivation function parameters
    let N = (1 << 17), r = 8, p = 1;
    if (options.scrypt) {
        if (options.scrypt.N) {
            N = options.scrypt.N;
        }
        if (options.scrypt.r) {
            r = options.scrypt.r;
        }
        if (options.scrypt.p) {
            p = options.scrypt.p;
        }
    }
    (0, index_js_4.assertArgument)(typeof (N) === "number" && N > 0 && Number.isSafeInteger(N) && (BigInt(N) & BigInt(N - 1)) === BigInt(0), "invalid scrypt N parameter", "options.N", N);
    (0, index_js_4.assertArgument)(typeof (r) === "number" && r > 0 && Number.isSafeInteger(r), "invalid scrypt r parameter", "options.r", r);
    (0, index_js_4.assertArgument)(typeof (p) === "number" && p > 0 && Number.isSafeInteger(p), "invalid scrypt p parameter", "options.p", p);
    return { name: "scrypt", dkLen: 32, salt, N, r, p };
}
function _encryptKeystore(key, kdf, account, options) {
    const privateKey = (0, index_js_4.getBytes)(account.privateKey, "privateKey");
    // Override initialization vector
    const iv = (options.iv != null) ? (0, index_js_4.getBytes)(options.iv, "options.iv") : (0, index_js_2.randomBytes)(16);
    (0, index_js_4.assertArgument)(iv.length === 16, "invalid options.iv length", "options.iv", options.iv);
    // Override the uuid
    const uuidRandom = (options.uuid != null) ? (0, index_js_4.getBytes)(options.uuid, "options.uuid") : (0, index_js_2.randomBytes)(16);
    (0, index_js_4.assertArgument)(uuidRandom.length === 16, "invalid options.uuid length", "options.uuid", options.iv);
    // This will be used to encrypt the wallet (as per Web3 secret storage)
    // - 32 bytes   As normal for the Web3 secret storage (derivedKey, macPrefix)
    // - 32 bytes   AES key to encrypt mnemonic with (required here to be Ethers Wallet)
    const derivedKey = key.slice(0, 16);
    const macPrefix = key.slice(16, 32);
    // Encrypt the private key
    const aesCtr = new aes_js_1.CTR(derivedKey, iv);
    const ciphertext = (0, index_js_4.getBytes)(aesCtr.encrypt(privateKey));
    // Compute the message authentication code, used to check the password
    const mac = (0, index_js_2.keccak256)((0, index_js_4.concat)([macPrefix, ciphertext]));
    // See: https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition
    const data = {
        address: account.address.substring(2).toLowerCase(),
        id: (0, index_js_4.uuidV4)(uuidRandom),
        version: 3,
        Crypto: {
            cipher: "aes-128-ctr",
            cipherparams: {
                iv: (0, index_js_4.hexlify)(iv).substring(2),
            },
            ciphertext: (0, index_js_4.hexlify)(ciphertext).substring(2),
            kdf: "scrypt",
            kdfparams: {
                salt: (0, index_js_4.hexlify)(kdf.salt).substring(2),
                n: kdf.N,
                dklen: 32,
                p: kdf.p,
                r: kdf.r
            },
            mac: mac.substring(2)
        }
    };
    // If we have a mnemonic, encrypt it into the JSON wallet
    if (account.mnemonic) {
        const client = (options.client != null) ? options.client : `ethers/${_version_js_1.version}`;
        const path = account.mnemonic.path || defaultPath;
        const locale = account.mnemonic.locale || "en";
        const mnemonicKey = key.slice(32, 64);
        const entropy = (0, index_js_4.getBytes)(account.mnemonic.entropy, "account.mnemonic.entropy");
        const mnemonicIv = (0, index_js_2.randomBytes)(16);
        const mnemonicAesCtr = new aes_js_1.CTR(mnemonicKey, mnemonicIv);
        const mnemonicCiphertext = (0, index_js_4.getBytes)(mnemonicAesCtr.encrypt(entropy));
        const now = new Date();
        const timestamp = (now.getUTCFullYear() + "-" +
            (0, utils_js_1.zpad)(now.getUTCMonth() + 1, 2) + "-" +
            (0, utils_js_1.zpad)(now.getUTCDate(), 2) + "T" +
            (0, utils_js_1.zpad)(now.getUTCHours(), 2) + "-" +
            (0, utils_js_1.zpad)(now.getUTCMinutes(), 2) + "-" +
            (0, utils_js_1.zpad)(now.getUTCSeconds(), 2) + ".0Z");
        const gethFilename = ("UTC--" + timestamp + "--" + data.address);
        data["x-ethers"] = {
            client, gethFilename, path, locale,
            mnemonicCounter: (0, index_js_4.hexlify)(mnemonicIv).substring(2),
            mnemonicCiphertext: (0, index_js_4.hexlify)(mnemonicCiphertext).substring(2),
            version: "0.1"
        };
    }
    return JSON.stringify(data);
}
/**
 *  Return the JSON Keystore Wallet for %%account%% encrypted with
 *  %%password%%.
 *
 *  The %%options%% can be used to tune the password-based key
 *  derivation function parameters, explicitly set the random values
 *  used. Any provided [[ProgressCallback]] is ignord.
 */
function encryptKeystoreJsonSync(account, password, options) {
    if (options == null) {
        options = {};
    }
    const passwordBytes = (0, utils_js_1.getPassword)(password);
    const kdf = getEncryptKdfParams(options);
    const key = (0, index_js_2.scryptSync)(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64);
    return _encryptKeystore((0, index_js_4.getBytes)(key), kdf, account, options);
}
exports.encryptKeystoreJsonSync = encryptKeystoreJsonSync;
/**
 *  Resolved to the JSON Keystore Wallet for %%account%% encrypted
 *  with %%password%%.
 *
 *  The %%options%% can be used to tune the password-based key
 *  derivation function parameters, explicitly set the random values
 *  used and provide a [[ProgressCallback]] to receive periodic updates
 *  on the completion status..
 */
async function encryptKeystoreJson(account, password, options) {
    if (options == null) {
        options = {};
    }
    const passwordBytes = (0, utils_js_1.getPassword)(password);
    const kdf = getEncryptKdfParams(options);
    const key = await (0, index_js_2.scrypt)(passwordBytes, kdf.salt, kdf.N, kdf.r, kdf.p, 64, options.progressCallback);
    return _encryptKeystore((0, index_js_4.getBytes)(key), kdf, account, options);
}
exports.encryptKeystoreJson = encryptKeystoreJson;
//# sourceMappingURL=json-keystore.js.map
}, function(modId) { var map = {"../address/index.js":1730085369193,"../crypto/index.js":1730085369195,"../transaction/index.js":1730085369221,"../utils/index.js":1730085369174,"./utils.js":1730085369268,"../_version.js":1730085369170}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369272, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.wordlists = exports.WordlistOwlA = exports.WordlistOwl = exports.LangEn = exports.Wordlist = void 0;
/**
 *  A Wordlist is a set of 2048 words used to encode private keys
 *  (or other binary data) that is easier for humans to write down,
 *  transcribe and dictate.
 *
 *  The [[link-bip-39]] standard includes several checksum bits,
 *  depending on the size of the mnemonic phrase.
 *
 *  A mnemonic phrase may be 12, 15, 18, 21 or 24 words long. For
 *  most purposes 12 word mnemonics should be used, as including
 *  additional words increases the difficulty and potential for
 *  mistakes and does not offer any effective improvement on security.
 *
 *  There are a variety of [[link-bip39-wordlists]] for different
 *  languages, but for maximal compatibility, the
 *  [English Wordlist](LangEn) is recommended.
 *
 *  @_section: api/wordlists:Wordlists [about-wordlists]
 */
var wordlist_js_1 = require("./wordlist.js");
Object.defineProperty(exports, "Wordlist", { enumerable: true, get: function () { return wordlist_js_1.Wordlist; } });
var lang_en_js_1 = require("./lang-en.js");
Object.defineProperty(exports, "LangEn", { enumerable: true, get: function () { return lang_en_js_1.LangEn; } });
var wordlist_owl_js_1 = require("./wordlist-owl.js");
Object.defineProperty(exports, "WordlistOwl", { enumerable: true, get: function () { return wordlist_owl_js_1.WordlistOwl; } });
var wordlist_owla_js_1 = require("./wordlist-owla.js");
Object.defineProperty(exports, "WordlistOwlA", { enumerable: true, get: function () { return wordlist_owla_js_1.WordlistOwlA; } });
var wordlists_js_1 = require("./wordlists.js");
Object.defineProperty(exports, "wordlists", { enumerable: true, get: function () { return wordlists_js_1.wordlists; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./lang-en.js":1730085369274,"./wordlists.js":1730085369278}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369274, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangEn = void 0;
const wordlist_owl_js_1 = require("./wordlist-owl.js");
const words = "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO";
const checksum = "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60";
let wordlist = null;
/**
 *  The [[link-bip39-en]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangEn extends wordlist_owl_js_1.WordlistOwl {
    /**
     *  Creates a new instance of the English language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langEn]] should suffice.
     *
     *  @_ignore:
     */
    constructor() { super("en", words, checksum); }
    /**
     *  Returns a singleton instance of a ``LangEn``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangEn();
        }
        return wordlist;
    }
}
exports.LangEn = LangEn;
//# sourceMappingURL=lang-en.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369278, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.wordlists = void 0;
const lang_cz_js_1 = require("./lang-cz.js");
const lang_en_js_1 = require("./lang-en.js");
const lang_es_js_1 = require("./lang-es.js");
const lang_fr_js_1 = require("./lang-fr.js");
const lang_ja_js_1 = require("./lang-ja.js");
const lang_ko_js_1 = require("./lang-ko.js");
const lang_it_js_1 = require("./lang-it.js");
const lang_pt_js_1 = require("./lang-pt.js");
const lang_zh_js_1 = require("./lang-zh.js");
/**
 *  The available Wordlists by their
 *  [ISO 639-1 Language Code](link-wiki-iso639).
 *
 *  (**i.e.** [cz](LangCz), [en](LangEn), [es](LangEs), [fr](LangFr),
 *  [ja](LangJa), [ko](LangKo), [it](LangIt), [pt](LangPt),
 *  [zh_cn](LangZh), [zh_tw](LangZh))
 *
 *  The dist files (in the ``/dist`` folder) have had all languages
 *  except English stripped out, which reduces the library size by
 *  about 80kb. If required, they are available by importing the
 *  included ``wordlists-extra.min.js`` file.
 */
exports.wordlists = {
    cz: lang_cz_js_1.LangCz.wordlist(),
    en: lang_en_js_1.LangEn.wordlist(),
    es: lang_es_js_1.LangEs.wordlist(),
    fr: lang_fr_js_1.LangFr.wordlist(),
    it: lang_it_js_1.LangIt.wordlist(),
    pt: lang_pt_js_1.LangPt.wordlist(),
    ja: lang_ja_js_1.LangJa.wordlist(),
    ko: lang_ko_js_1.LangKo.wordlist(),
    zh_cn: lang_zh_js_1.LangZh.wordlist("cn"),
    zh_tw: lang_zh_js_1.LangZh.wordlist("tw"),
};
//# sourceMappingURL=wordlists.js.map
}, function(modId) { var map = {"./lang-cz.js":1730085369279,"./lang-en.js":1730085369274,"./lang-es.js":1730085369281,"./lang-fr.js":1730085369283,"./lang-ja.js":1730085369285,"./lang-ko.js":1730085369287,"./lang-it.js":1730085369289,"./lang-pt.js":1730085369291,"./lang-zh.js":1730085369293}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369279, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangCz = void 0;
const wordlist_owl_js_1 = require("./wordlist-owl.js");
const words = "0itatkastcenaovo$taouleraeki&chor*teci%enbalodaeladet'!Chn=0Di#%E%^1Resa2Rese3CeT'#0EjKohol0Pu)%0A&sDul#Ekdo)Ke)Ti#Ul|3}aOgan%0FaltI$@tPi,%TmaTronom0LasL{i#Ol0Tobus4Yl:B#}<CilCul#D!_Ge)GrHnoKterieLa^L{#LkonLon-LvanLzaMbusNkom!R[rR{RmanRokoRvaTer#TohVl&Zal#Zili#Zu#3D&RanSe^StieTonZin#ZmocZ)k3CyklD]Ft-KinyLan%Og,fO]gTvaZon2AhobytAt*/E/aEdu+EskIk!Iz&Ok|Oud Ud2B-BrDl.D~H!(JkotJ|K<ysLe$R>R'?TaUb_U/!U^U+Ur!Xer2A^v#Ambo,An#AtrEp)Ike)KoLohOnzOskevUn{#Usin#Z^Zy2Bl.Bn|})D _D#D'aF{Jar(Kv?LdokLvaN^NkrRzaTikVolZola3D+tL.T'#0Ukot:PartRev&3DrDu+J/JnLaLerLkemLn?N.Nn(N'#NtrumNz<StopisT#2AlupaAp`]Ar aA)E/t!EmieI/otIrurgL`Le[Lub M_Mu,ObotO/olOd[O+,Om=Op Oro[OvRapotRl RtRupTiv(Ud.Utn!V!Vil#V(Y[Y$!Yt 0Bu+Gare)H_&HlaNkotRkusSter&Ta%TrusZin>Z(2O&2KolivUv!4It_N(0Dn(Ke)KrPot0Ak~AlIkRkot2Kli$a:L-oRe[T_Tum1E,1B!a}'#Cib_Fic Fla%KlKr{Mokr!PreseRbyS#T-tiv3Kob,zKt|O^P]mSkSp+jV`]Vo/2AhaOuhoUhopis1Es0BroByt-C@t}ut DnesH+dHo^H,JemJn?Kl`KolaKt<Kum@tLarLevaL.MaM.ntMluv M'Nut P`PisPln PosudPr'odPu$ Raz R(RtSahSl'St!-SudSy)TazT-Tk~Uf!Utn!Voz%Z`uZn!Z<%2Aho)AkAm!ikAv>AzeDolObn(OgerieOzdSn(T Z(2B@}'noD-HaH'#S SnoT(0Oj?Or>2Nam :9O]gOnomie0EktronIpsa0AilIseO%P!ie2Izo^O/aOpejOs2EjEn%K<)Kymo0Ike)0F<ie0Olu%1Eku%KurzePed?P]zeP<tT,kt:C#Jf#Kul)N!ikN)zieRmacieV< Zo+3De,%J{onN#3Al#Gu,ntLozofLtrNan%N)Xa%0Ord1An_IrtOtila2NdSf<T[lT#Ton2Ak%Es#On)2KarNk%3Zi#:LejeRant3N{i#O]g3Lot.2Azu,Ejt2LemLfi$aTi#2AfAmofonAnu+EpIlOgOtes#2Ma:D?DrLaL@#N[NopisRfaRpu&V,n3Bk(J#lJnoJtmanK)rLmaM!omR>R&S]Zky3St<ik2Ad'#AsivkyAvaEd!EnO^v>OhOup(T!Ub.U/o)0AtO)Yz0IsOjivoOut0Bl.Boj}DinyDl!Dno)D|Jn(KejLin#L#LubMo+N [No,%RalR^RizontRkoRliv>RmonRn.RoskopR$voSpo^St.T'(U[UfUp!Us#V<2Ad[An?Av(Az^Bo+kD.D]D(N-Ob#Oma^OtOu^Oz@St#Ub(Yz!2B@(B~D[KotMrS aSto)0Ozd2Bn(D,ntGie&M&Sterik:2Yl#3Ned2O&0Uze0Un a0F-%Fla%KasoOva%Sp-%Tern{Vali^Ve$<Zer%3Onie:Blko})Ho^Kmi+K(L'>N)rRmarkRoSanSnoT#V<Zyk3Din>D+Dn!_HlanKotL@L oMn(NomP?S{erV Zd>Zero3NakNdyNo/Sk,Sto)Trn?Zva3En|1Gurt5R):Bar{B_Bin{}&D{Did]HanJakJu)KaoKtusLam aLhotyLibrLn(Me,MkolivM&Ni[lNoeNt<Pal.P_aP olaP#P+Po)PrPu$aPy[,Ram_Rot#RtonSaTa]gTed,U%UzaVa+cZaj#Ze)Ziv(2EkolivEsi0Dlub@MpRami#3No2A%kAdivoAmApotAsi#AunEcEn[Ep!Es~IdImaIs&Ob*kO#nOpaOubUb'&Us!Uzk(0EnIt!Otr0IhaOt0Al?Ber>B#BlihaBylaC*rH=J@>KosKtejlLapsLe^LizeLoMandoMe)MikMn!aMo,MpasMun aN!N%ptNd?N>NfeseNgresN.NkursN)ktNzervaPan>PieP~Pr'#Rb_R-t<Rmid]RoptevRpusRu&RytoRz{S!>St#T_T+)T*lUk!Up_&Us-Uz]VbojZaZ<oh2Ab?A/Aj.Al|AsopisAv!aEd EjcarEs[Eve)Ik{ItikIzeKav>Me+cMivoOcanOkOni#Op OupaOv#T-Uh`]Up?Ut(Vin#Y/+Yp)Y$alYt2Dlan#FrJn(KlaLaj^Li/L#Lom{Ltu,NaPodivuRtRz<Til0Al aAsin#E$<2No]gS_.Ta,T?T#T'>V`]:B,d<})nDn(IkKom>M_aMpaN'#S?SoStu,Tin#V.3B#CkdyD@Dn?D'#Dv.G@^GieG,%H%Hk(H~KtvarNo/odNtil#P@#Pid]T`]T>TmoTokruhVhartV a%Vobok3B,}ot#DojedDsk(H'.Jav>L-M{#NieN#No+umStop`T.T|5Bi$aDivodGi#GopedKal aK{Mc|P!aPu/RdSosTrU^lUhU#Usk!V>3Tiv(1Cer&CiferMpSkSt,%0I%2RaRi#S.:DamD]Gi$rHagonJ{-J _J< aKakK'?Kr_aL[L.L|Lv?Min#Nd+NkoRn(SakrSkotSopu$T?Tri#Tur aZan>ZivoZl Zur#2Lo[0}anikD a%D'.LasaL*nNtol#TlaTo^TrZe,3G,%H~Hu+K.KrofonL@>Lim{rL(Mi#Nc'&Ni[rNom{Nul(S#StrX|2Ad(HaH'.OkS!Uv 1I/Ohem0BilCn(D_#Dl [HylaKroL-ulaM@t#Nar/aNoklN$rumNt|NzunSazSkytStTiva%T<#Ty#U/aUdr(Zai#Z-Zol2Am<Av@>KevTvolaZ{Zut(0T _1DrcF]nL!MieN?S{Ta%ZeumZi#nt3Sliv>0Da:B*r!}yt!Da%Dbyt-DhozDobroDpisHlasHn!Hodi+H,d Iv aJedn*Ji$oJm=K]n Kon>Krm LevoMaz!Mluv Nom{rOkoOpakO$roP`!PevnoPln P~Pos+dPr(oRod RubyRy/]S` S-!S+poSt!TolikV@-Vr/Vzd<yZv!3Be}!CkyDa+koDb!DuhGa%H{Ho^J@JprveKlidLib(Mil(MocO/o)On#PokojR(RvSmyslS*l`Tv<UronV.Zvyk+3Co)JakKamKdyKlKte,kTro5C+hHav?M.%RaR-S _Sn(UzeVinyVo)Zd,5DaD+G{T Tn(Trie3Mfa:0AlArv AvaDivEcEhn!Ejm=Ez aHajo[Iln?Jasn J-tK]p La$L-Li[LohaLu^NosOh! Oj-OutRaz>R&Ru[RysSahSluhaS)r!UvVazVin VodVyk+Yv!_Z<0AsElEn Hl` Ho)H,&It~0BojByt}odCiz Ebr!Esl!Evzd!EzvaH`%Hod J{JinudKazK*p LivLu#Ml#Oln(P`PisPl=P<Pu$ Pyk!Raz#S*d StupSunTokTudVahaVe)Vol!V,%tZ&k1I&Sajd1LasNiskoRa^Roz Ryz-2ApEn?Li#NoOuzl OvyRasaResRs-RuhUpantUr#Us 0Ejn.Iz|0AkE+)Ez L`.L*v!LuvaYl0Ehdy1Ak|As-E,%I%Il(Is|O,Oz?RavduRoti1B al}e$rGieL?LojT_0A^}~I#IvoLavaLep Ln L' N'aO[Ol Pa+cT@T,haTu^Ty/Voj 0Epl IskOpRh!Rl(RokRubyV<1A~ArEsLivn O%1Id1Do[:}!_Ci@tD*/H<-KtLan^L>LivoLu[Mf+tMls-N@#Ni#N&N|N$voNtof+Pri#Rke)RodieR)Ru#Ry[Se#Siv aSt_#T@tTro&V*kZnehtZ*r-3C#DagogJs-K]LotonNal)Ndr-NzeRiskopRoStr(Tar^T?Tro+jVn.Xeso3Ani$aHaJav?K+KnikL.Ln(Lul#Nze)Pe)S!_Sto+Tev&Vn?V'ar2A%n)Ak!Am@Ane)A$i#At Avid]AzE/Em@oEn)EsEtivoEv_Iv!N NoO/aOd.Om[OutUkYn2Bav Byt}odC Ctiv>D!D%n Deps!Dh+dDiv Dkl`Dman DnikDo[Dpo,D,zD$!aDvodDzimEzieHan#Hnut#H'<HromaHybIn)Ji$#Jm=Kaz K+sKojKrokKu)KynLedneLib-Lk~LohaLynomMaluMi~Ml#MocM$aMys+tNe/!N<#Nur(P`!P_Pis-Pla/Pros Ps!PudR`%R%RodRu/aRyvS` SedSilaSkokSlan>S*d SpoluS)vaSud-SypTahT#nT+skTom-T,vaTupaTvo,U#zUtoUzdroVahaVidlaVlakVozVr/V$!VykVzde/Zd,vZem-Zn!-Z<Zv!2Ac|Ah<yAkti#A+sAot>Ap<-AseAv^IncipKnoObud O%ntoOdejOfeseOh,Oj-tO]m Omi+Onik!Op`OrokOs[OtonOut-OvazS#v#St@Udk(UtV-Voh<y0An>OvodTruh0Actvo0Ber)}DlKav>Kl.Kr+LtMpaNcP@SaSin#St.T|Ty#3Rami^SkT_::C-}otDia%Dn?DonFtGbyKe)K'.M@oMp*/NdeRa/R aS'&StrTo+$Zan%Zid]3Ag|Ak%CeptDakt<Fer@tF+xJnokKlamaK<dKrutKt<Pu)%VizeVmaVolverZerva3Sk|Ziko5Boti#Dokm@H'#K+KokoMan{oP'odPu/aRejsSolStl.Tmi$rTopedTun^Ub@#U/oUpU,V.Vn?Zb<Z/odZd!Zezn!Zhod%Zin#ZjezdZ#zZ]haZmarZp`Zru/ZsahZtokZumZvod5Bri#}`]Kav?Kopis3BaBol'}l(D]P`]T.Z(:Di$aH!KoM>Mizd!Mo)N #Rdin#San#T_ Z[Z@?0Or0H|1B,n#CeseD`]Dim@tD]Hn!Jm=Ke,K)Kun^KvojeM@oNoRvisS` Sho,SkokSl!St,SuvSyp!T[T.Tk!T~Trv!VerZ&m2O^R~0FonLn?R#Rot-RupTua%1AfandrAliskoAnz@AutEptikIcaL`[L@?LoLuzO[O#nOroRip)RzUp.V(Vr&0Abi#Adid]An.A$Avn(Ed|Ep>EvaEz.IbI&Izn?OnOup-OvoU/UhaUn%Up#Za0A,gdE)&Il$voL*vaOgR`RkRt#Ut-Ysl0AdAhaOb0Bo)}aD'#KolP#TvaUbojUc Ud%UhlasUl`Um,kUp,vaUsedUtokUvis{0Al'&As _IsLavOd-Oj@>OluOnz<Orn(Ou$aR/aU$ 1An^AzD%NaN>Ovn!P@StUb1An?Ar(aAti#Av[EhnoEz#OdolaO+kOpaOrnoOup!Ra/ResRh~RomRu&Ud&Upn?VolYk0Bj-tBtropy}arD(KnoNd!N=Rik!aR'.0AhAl$voEtrAt[Az-Is+It-Obo^Odid]Or#Rab2Kav#KotN-N'>P!Pk(R'(S_T(:B+t#Bu+H*nJemnoJfunJgaJ Jn(Kti#Mh+MponNc|N>NkerPe)V@.Z!_3}ni#HdyKut.LefonMno)Nd@%Ni$aN<P])P&PrveRapieRmos#Xtil3}oSkopisTu+k1Ad+cAn.0Ap#Esk!UkotUpa0El1A+)Pin#PolRzoUhaU+c2Ad?Akt<AmpAsaAverzaEf E$Ez<Hav.Hl.O/uOj?Os#Ou[P%P _Pk(Ub>U/l Uhl?UsV!2DyH~H(Nd,Ri$aR&jZemsko0ArohOr[Rd(Rz2GrKev:0Oh(OzeR!R*s-RusYt'&0HoTiv(0Iv 3R` 1Edn!I$ M=0Az!_Lidn Lon Otv Roj 0I%I)Ov 0Yv`]0Av If<maIk~1Ad~L!n Ly~Out!Rav 1AnAz 0Ed~Il|Mrt N`n N=Oud Tl!Tr~0Ah|K!Lum O~Op@>R*s 1Al Oln Oz'#3D,v ElEn.L.N!:GonL/aL*nNaN^lNil#RanRhanyR|1ElkuHod0Ova0DroGe)%J%Lbl*dL{rhL _LmocLry[Nk'Ran^RzeS_#SkrzeSn?SpoduS)Ter.Ver#3B,%}rDeoh,D.D+LaN?S{Tal aZeZ #0Ezd0L`Us0Aj#AkAs>EvoHk(IvN'#Oup!1Uc|Uk0DaDiv(Doz&kD$voJ@skyJ&JskoLantL[L LnoSk'#Zid]Z'&0Ravo1Ab>A%tAhA)Ba}o+kH!StvaTu+0Ad T*p Tup0Ip4Bav Br!}|D!D,Fot H+d!H~Hod H,d Hub Jasn J{Jm=K]p Kon!L-!Maz!Mez Miz{Mys+tNe/!Nik!Nut P`!Pl! P,v Pu$ Raz R'n!Rv!Sl' SokoS)v Su~Syp!Tas Tes!Tr! Vi~Vol!Vrh_Zdob Zn!0AduBud }op D<Du/Dy/!E$upH+demKazLyk!NikOr-P*,TahT-::993Lofon::Br!Byd+t}|DarmoDus F*k!Hlt Hod H,^Hy~J!>J{Ji$ K+p!K*p Lep Mez Mot!Mys+tNe/!Nik!Pl! Poj Ps!Raz S)v Su~Taj Temn Tk~Ujm=Val Ve+tVin Vol!Vrt!Zvon 0Av RusuUd|Yt-1A+#ArmaAtn(IvoOb RojVihYm`]0L@.ManM.Pt!Z`uZdola2At Lt~Lubo#Ot' Ru[0MaMn?0Emn 0Lam!Oum!R!#Umav#0AtoEh#O[OmO$Ozvyk0Ap|ArAt-IjeIz{Ocn Odr!Rzl.Ut|0AkAl(Am@!Ovu0B,z Tav Ub-Ufa+0Lod Omal RavaR( Rud#Rvu1A^An C`]N (NoOv&Y/l Zav(1I/aR! 0B'.Br0Ed~EnkuEs_aOnR!Uk'odYk";
const checksum = "0x25f44555f4af25b51a711136e1c7d6e50ce9f8917d39d6b1f076b2bb4d2fac1a";
let wordlist = null;
/**
 *  The [[link-bip39-cz]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangCz extends wordlist_owl_js_1.WordlistOwl {
    /**
     *  Creates a new instance of the Czech language Wordlist.
     *
     *  Using the constructor should be unnecessary, instead use the
     *  [[wordlist]] singleton method.
     *
     *  @_ignore:
     */
    constructor() { super("cz", words, checksum); }
    /**
     *  Returns a singleton instance of a ``LangCz``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangCz();
        }
        return wordlist;
    }
}
exports.LangCz = LangCz;
//# sourceMappingURL=lang-cz.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369281, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangEs = void 0;
const wordlist_owla_js_1 = require("./wordlist-owla.js");
const words = "0arertoiotadonoaRteirroenaNonaLsolocoiliaralaorrenadaChoN$n0A>Dom,EjaI!#Oga&O'Or#RazoR*Ue=U<0Ab Adem@Ce<C~Ei)ElgaEn#Ept I&L  NeOg!O<TivoToTrizTu Ud*U!&Us 0Ic#Mit*Opt Or'Ua`Ul#0Reo0Ect Ic~In Irm 0IlIt On@Os#Ot Reg R$UaU&U?aUja0OgoOr+0ReSl 0Ed_zE'Us)1Ac[nAmb_ArmaBaBumCaldeDeaEg_Ej Er%E%F?!GaGo&nIa&I,#Iv$MaMejaMib T TezaTivoToTu[Um'Z 0AbleAn)Apo]ArgoAs B Bi#E'IgoIs%dOrP oPl$0|oC@'C]D D,Em@Gu=Il=ImoIsOt T,aTiguoTojoUalUl Unc$Ad*EjoO1Ag A[#Eti#IoLic O&Or)OyoR,d!Rob Ues%U+1A&A`ArBit+BolBus#|ivoCoD!D?]DuoEaI&IesM.i-esOmaPaP.Reg=RozRugaTeTis%0AA&Al#C,<Egur EoE<rI,#I=Ist*NoOmb+P!oT?]T+Tu#Um*Un#0AjoAqueArEn#EoI>Le%OmoRa!RozUn0DazD$GeLaM,#S,)T^0AlAnceA+EEl]`E`EstruzI.I<2ErU{U'0Af[nArO)Uc Uf_Ul:BaB^|eH@IleJ Lanz/c.LdeMbuN>Nd-oRb(>RnizR+Scu]S#nSu[Tal]T!@T*Tu%UlZ 3BeBid/=S SoSt@3|oEnNgo2An>OqueUsa2ABi`BoCaCi`DaDegaIn//!oLsaMb-{dNi#N}saiRdeRr SqueTeTinVe{Zal2AvoAzoEchaEveIl=In>IsaOcaOmaOnceO)UjaUs>U#2CeoCleE'EyFan{F.HoIt_L#Rbuj(l(+Sc TacaZ.:Bal=BezaBi`B[CaoDav!D,aErFeI{ImanJaJ.LLam Lc$L&Li{dLleLm/^LvoMaMb$Mel=Mi'Mp}c!Nd?Nel-gu+Nic-#N-.ObaOsPazPi%nPo)Pt Puch((b.RcelRe%Rg(i'RneRpe%R+R%SaS>S!oSpaS#rT^ceT_U{lUsaZo3Bol]D!D+Ld/eb_Lo<Lu]M,#Niz-t+Rc(&Rez(oRr R)zaSpedT+2AcalAle>AmpuAnc]ApaAr]I>Is)IvoOqueOzaUle%Up 0Cl.EgoE=EnEr#F[G +M->NeN%P_sR>Rue]SneTaU{d2Am^AnA+AseAveI,)ImaInica2B_Cc~|i'Ci`CoDigoDoF_G!He)JinJoL/ch/eg$Lg Lin/l LmoLum`Mba)M!Mi{Mo&Mpr-deNej}g-oc!Nsej}t PaPi(az.Rba%RchoR&nR.(r!S!SmosS%2AneoAt!E Ec!Ei&EmaIaIm,Ip%IsisOmoOnicaOque%U&Uz2Ad+Ar#At+BoBr*| aEl=En#Er{Es%EvaId Lebr/p/#Mb_Mpl*N-e%O%P.Pul( R$<R<RvaTis:M-z(R&T?3B!B?Ca{C*DoF,saFin*J LfinLga&Li#M^-<N%lP^)RechoR+%Sayu'SeoSf?eSnu&Sti'Sv$TalleT,!U{3AAb=AdemaAman)A`Ar$BujoCt En)E%EzFic?G'Lem/u*N!oRec#Rig*S>Se'Sf[zVaVi'5BleCeL^Ming}N Ra&Rm*R<SSis2Ag.Oga2|aDaE=E'LceOQueR Rez(o:0A'R$0H OUa&r0AdIc~Ific$I#rUc 1Ec#Icaz3EEmp=1Efan)Eg*Em,#Ev IpseI)Ix*Og$Ud*0Bu&It*Oc~Pa)Pe'PleoP_sa0A'C go|ufeC@EmigoE+Fa&F!moGa'Igm/aceOrmeRe&SayoS, T!oTr VaseV$1Oca0Uipo0Izo0Ca]C,aCol Crib*Cu&Enc@F!aFu!zoPa{PejoP@PosaPumaQuiT TeTi=Tufa0ApaEr'Ic-@1Ad*Alu En#It 1Ac#Am,Ce<CusaEn#Ig*Il$Ist*I#P!#Plic P.!T_mo:BricaBu]|a{C?C#rE`J/d/=L<Lt MaM?@Mo<Ra.Rmaci(olRsaSeTigaU`V^X3Br!o|/izORi(ozRt?Rv^Stin3AbleAnzaArB[Cc~|aDeoEb_ElE[Es%Gu[J JoL/e)L@lLt+NNc-g*Ni#Rma2A>Au%EchaOrO%U*UjoU^2B@CaGa%G.L$Lle#N&Rm(+Rtun(z SaTo2Aca<Ag?AnjaAseAudeE*E'EsaIoI#U%2EgoEn)ErzaGaM Nc~Nd(g.R@S?TbolTu+:Ce]FasI%JoL/!i/=Mb- Nch}g-<RajeRzaSoli`St ToV?an3Me=M*NN!}$N)Ran$R,)Rm,S#3Gan)M`s$R Ro2Aci OboOr@2LLfoLo<LpeM(&R?([TaTeoZ 2A{Afi>A'AsaAtisAveIe%Il=IpeIsI#O<rUaUe<UmoUpo2An)ApoArd@Er[IaI'I.I<It [Sa'St :B!B?Bl C!|aD/l Mac(i`ZZa`3B?]B[|oLa&L$Mbr(*Rma'RoeRv*3E=Er+Ga&Gi,eJoM'S#r@5Ci>G Gu!aJaMb_Ng}^Nr((mig('St?Yo5E>ElgaEr%E<EvoI{IrMa'Me&M?deM}d*RacanR#:1O'0EalIomaO=2Lesi/uUal4EgalUs~0Ag,AnIt P P!$P.!Pul<0CapazDiceEr)FielF^meG,$Ic$M,<MuneNa#Sec#S%n)T!esTimoTu*Ut?Vi!'3AIsOn@0L/o):BaliB.M.RabeRdinR[U]Zmin3FeRinga3Ne)5R`d(obaV,Ya5ErgaEvesEzGa&rGoGue)Ic$N>Ngl-$Nt Pit!R S#V,?Zg :7Lo5A]:B$C$C[DoD+nG #GrimaGu`I>M!Mi`Mp --ch-gos%NzaPizRgoRvaStimaTaTexT*U_lV Zo3AlCc~|eC#rErG~Gumb_Ja'Ngu-#NaOnOp &S~TalT[VeY,{3B!%dB+C^D!Di EnzoGaG!oMaMi)M.Mp$NceN&Ne-go)N}t!`Qui&SoS%T!aT$T+2AgaAmaAn#AveEg En Ev Or Ov!Uv@2BoC~CoCu[GicaG+MbrizM}jaTe5|aC*G J}-esPaSt+ToZ:Ce%|oD!aD_Du+Est+F@G@GoIzL{dLe%Ll/oMaMboMutN>N&Nej Ng-iquiNj N}<N%Na`PaQuin(R>Re(f?Rg,Ri&RmolR+nR)sRzoSaSc aSivoT T!@TizTrizXimoY^Z^ca3|aDal]D$Du]J?]J^L,/.M^i-^NsajeN)NuRca&R,gueRi#SS.TaT!To&T+Zc]3E&ElEmb+G/Lag+Lit Ll.M}-!}im}u#OpeR SaS!@S?SmoTadTo5|?aC~DaDe=HoJ LdeL!Li'M,#Mi- c-ed-j-#NoRad(d!Re'R*R+Rs(%lScaStr TivoV!V?Zo5|oD EbleE]Er)Est[G_J!L/e%L%N&Nec(alRoScu=SeoSgoSicaS=:C C~D IpeRanj(izRr SalTalTivoTu[lUseaValVeVi{d3C$Ct G Goc$G+OnRv$ToUt+V V!a3|oDoEb]E#NezNoTi&Vel5Bleza|eMin(i(m()TaTic@Va#Ve]V$5BeCaCleoD?=DoE[EveEzLoM!oTr@:Sis0E<IspoJe#R(!oS!v T,!V$0AA<Ea'H,%HoIoReTavoTub_Ul#Up Urr*0I IoIsea0S)0EnsaEr%Ic$Rec!0Ro1DoR0O1AEa{Fa#IvoLaMoOrVi&0Bligo0DaZa1A>C~E[In On!T TicaUes#1Ac~A&rAlBi%CaD,EjaGa'G@Gul=I,)Ig,Il]OQues%Uga0Ad@Cu+Ez'OT[0O'Ro1EjaU=1I&Ige'0En)0O':C#D_El]Gi`GoIsJ oLabr/>Le%Li&Lm/om/p NNalNi>Nt!-ue=PaPelP?]Que)R Rcel(edR*RoRpa&RqueR[foR)S SeoS~SoS%TaT$Tr@UsaU%VoYa<3A#nCa&C!a|oDalD*G IneL L{'Le/ig+LlejoLoLuc--s N.OnOrPi'Que'R(ch(d!Rez(f?Ri>Rl(mi<R+Rs.aSaScaSimoS%`Ta=T+leoZZu`3C |.EEd[Er`EzaJam/ Lo#Mi,%N}#rNz-aOjoP(a%S Sci`SoS%T.Zca2AcaAnA%AyaAzaEi#E'OmoUmaU[l2B_CoD!D$EmaEs@E%L,Lici/=LvoMa{Me=MoMp-!Rc~R%lSa{Se!SibleS)T,c@T+Zo2A&E>zEgun%Em$EnsaE<Ev$ImoIncipeIs~Iv OaOb Oce<Oduc#OezaOfe<rOg[maOleOmesaOn#Op$OximoUeba2Bli>|!oD^Eb=Er%Es#Lg/*Lm.LpoL<M-#NalNoPaP?(e:99Ed EjaEm Er!E<Ie#ImicaInceIt :Ba'B@BoC~DicalIzMaMp-ch}goPazPi&P#SgoSpaToYoZaZ.3Acc~Ali{dBa'Bo)Ca!Ce%|azoCog!C_oC#Cur<DD.&Duc*FlejoF^maF[nFug$Ga=G*G]G_<H,I'IrJ/a#LevoLieveLle'LojM Med$M}>rNd*N%P #Pet*Po<Pt?SSca)Si`Spe#S#Sum,T*oT^'T[#Un*VesVis%YZ 3CoEgoEn{EsgoFaGi&G^Nc.N.OQuezaSaTmoToZo5BleCeCi D DeoD?]ErJizoJoM!oMp!NN>N{PaP!oSaScaSt+T 5BiB^DoE{G*I&In/e%LoMboM^Ptu[TaTi`:Ba&B!B$BleC GazG[&L/&L!oL*Lm.L.Ls/#LudLv Mb-c~Ndi-e Ng_Ni{dN}#PoQueRdin()nSt_TanU`Xof.3Cc~CoC_#C%DGu*IsL=LvaMa`M?l-d-<rNalN^P  P@Qui(RieRm.Rv*S,%S~TaT,%V!oXoX#3D[Es%E)G=G'Lab/b L,c$L]Mbo=M$R,aS)maT$Tu 5B_C$D$LLap/{&Le{dLi&Lt Luc~Mbr-de}i&No+NrisaPaPl P^)R&Rp_s()oS)nTa'5AveB*Ce<D^Eg[E=E'Er)Fr*Je#L%nM P! Pl*P.!P_moRR>Re'Rg*S#T?:Ba>BiqueB]BuCoC#JoL L>L,#Ll/.Ma'Mb^Ng}quePaPe)P@P.Qu?l(deRe(if(je%RotR+R%TuajeU+ZaZ.3At+|oC]CnicaJa&J!Ji&L/efo'MaM^Mp=NazNd!N!NisN<Ori(api(>Rmi'Rnur(+rSisSo+StigoT!aX#Z3B$Bu+nEmpoEn{Er[E<G_J!/deMb_Mi&M}%OPi>PoR(.TanT!eTu=Za5Al]B?=C Ci'DoG/&M N}#P PeQueRaxR!oRm,%RneoRoRpe&R_R<RtugaSS>S!Xi>2AbajoAc#rA!Afi>AgoAjeAmoAnceA#AumaAz EbolEguaEin%EnEp EsIbuIgoIpaIs)IunfoOfeoOmpaOn>OpaO)OzoU>Ue'Ufa2B!@BoEr#MbaM^NelNic(bin(ismoR'T^:0Ic 9C!a0B[l0I{dIrIv!<OT A3Ba'BeG,)Na0ArU $0IlOp@1A:CaC$Cu`G GoI`J?l/eLi&LleL^Lvu]Mp*oR(i R.So3Ci'C#rHicu=In)JezL/!oLozN-c!Nd-e'Ng N*N%NusRRa'RboRdeRed(j(<Rt!3AAjeBr C$CtimaDaDeoDr$EjoErnesG^LLl-ag_N}e&OlinRalRgoRtudS^Sp!aS%Tami`U&VazV!oV*Vo5LcanLum,Lv!RazT ToZ5E=Lg :::C!Te3GuaM('So9DoGaGur:F*}jaPa#Rza93N(+5MoR&";
const accents = "aeiou7695@@BZWWavwUJkO@Y-Kn))YEGq#E@O)cI@#ZkMHv$e*))M!!)D**$GW!oKm*Acoh^k&It-pi^SYW)$^n!G)bO!Wkzam(jS#X)Og*^l^RW!bQ#QygBKXfzE))hti!Qm)Cng%%c)mJiI*HJWbmYniCLwNdYyY%WKO^bnT$PuGOr!IvHu&G(GKbtBuhiW&!eO@XMeoYQeCa#!MrTJCq!OW&CHG(WCcW%%)$rfrIegu$)w!G)JGmWWw)MnD%SXXWIT^LWAZuVWB^W)eTL^x&$WGHW(nKWEMA)#$F$x$Waekqs,n7715)W*HM-$WAcCiu(a))VCZ)GG%(*CWWdW%$D!UCO$M";
const checksum = "0xf74fb7092aeacdfbf8959557de22098da512207fb9f109cb526994938cf40300";
let wordlist = null;
/**
 *  The [[link-bip39-es]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangEs extends wordlist_owla_js_1.WordlistOwlA {
    /**
     *  Creates a new instance of the Spanish language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langEs]] should suffice.
     *
     *  @_ignore:
     */
    constructor() { super("es", words, accents, checksum); }
    /**
     *  Returns a singleton instance of a ``LangEs``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangEs();
        }
        return wordlist;
    }
}
exports.LangEs = LangEs;
//# sourceMappingURL=lang-es.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369283, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangFr = void 0;
const wordlist_owla_js_1 = require("./wordlist-owla.js");
const words = "0erreleontiteurinueiriet cegeanseali medenel q)eniluxaus ch0Ais}And$Diqu E`#Ol*Ord Ou%rOy RasifReuv Ri,Rog RuptS_-SoluS'@UsifYss=0A@m+AjouAr+nCab]Cep,Clam Cola@Cro~eCu}ErbeHatHe,Idu]I Omp&Qu *R$y?Te'TifT)l0Ep&EquatHesifJec%fJug Mett!M* Op,Or Ouc*Res<RoitUl&V be0R R$ef0Fai!Fec,Fi~eF!{Fub]0Ac Enc I#I,Raf Reab#Ru?1D Gu`#L>Mab#S/-0Ou,Us,1Arm Chim+Er&Geb!G)I_ I?ntLeg Lia.Lou Lum O'd*PagaTes<Veo#0A&'BiguB!Enag Ertu?Id$Ir=Orc O'Ovib#Phib+P#'Us/t0Aly<Apho!Ar~+Atom+C+nE/%rG#Gois<Gu#{Im=Nex N$-N)lOd(Om=+Ony?Orm=T_[Tido&X+{1Ai}Eri%fL/*Olog+Pa!`Pe]Por,Puy 0UariumUeduc0Bit!Bus&De'Doi<G_tLequ(Matu!Me?ntMoi!Mu!P_,Ra~ Riv Ro}S_icT +lTic#0PectPh=&P* S|tS v*S+t&Soc>S' TicotT!Tu-0El>O?RiumRo-Ta^T_%fT* Trap 0Ba(eB .Da-Dib#G' Ro!Tom[Tru~e0A]Anc Ari-En*Er<Eug#Ia&'I@I$I}O(eOu R`1I=Io?:D.Fou Ga.G)t&Igna@L/c Lc$Le(eLisa.Mb(Ncai!Nda.Nl+)Nn>eNqu>Rb>R`R$R^Rra.Ss(S%$Ta`#Te|T,+Udr>Vard 3Let&L>Lo&Nefi-R-|Rg Rl(eRmudaSa-Sog[Ta`Ur!3B $Cyc#Du#JouL/L(g)LlardNai!Olog+Ops+OtypeScuitS$Sto'iTu?Zar!2AfardAg)An~*Ess/tInd OndOqu Ous$2BardB(eI!I}Li@Nb$Nd*Nhe'Nif>NusRdu!R[T&Uc#Ue{Ug+Ul$Uqu(Ur<Usso#U%^Xe'2An~eAs>AveEbisE~eEuva.Ico]Iga@Ill/tIo~eI^O~u!Od Onz Ous<Oye'U?Us^Ut=Uy/t2Ff#Iss$L#%nRe|R(S% T( To*Vab#Vet&:B/$B(eChet&De|D!Fe(eIllouIss$Lcu]Lep(Lib!Lm Lomn+Lvai!Mara@M aMi$Mpag[N=Net$N$N%[NularPab#Por=Pri-Psu#P,Pu~eRab(eRb$eRes}RibouRna.Rot&R!|Rt$Sca@S>S^Ssu!U}U%$V=>V [Viar3D`#Intu!Les&Llu#Ndr>Ns' Ntr=Rc#Rebr=Ri<Rn Rve|S}2Agr(Ai<A#'Amb!An-Apit!Arb$As<'At$Auss$Av* Emi<En`#Equ>Er~ Ev=I_Iff!Ign$Im eIotLoru!OcolatOis*O<O)t&Ro?U&0Ga!Gog[M_,NemaNtr Rcu]R R^T [Toy_Tr$V`2A*$A?'Aqu As<Av>I_tIgn ImatIva.O~eOna.Opor&2B=tBraCas<Co% D Dif>Ff!Gn Hesi$Iff Inc L eLibriLl(eLma,L$elMbatMed+Mm/@MpactNc tNdui!Nf>N.]Nno,Ns$[NtactNvexePa(P+Ra`Rbe|Rda.Rni~eRpusR!ctR&.Smi^Stu?T$U@Upu!Ura.U&|Uvr*Yo&2AbeA(&Ava&Ay$Eatu!Edi,E?{Eu}Evet&Ib]I Ist=I,eOi!Oqu Ota#Uci=UelYp,2Bi^E`l*Il]eIs(eIv!Lm( L%v Mu]Pi@Ra%fR<'3Anu!C#L(d!Ni^:Ign M>Ng N<'Uph(3Batt!Bi,Bord Brid But/tC= Cemb!Ch* Cid Clar Cor Cri!Cup]Da#Duc%fEs<F_sifFi]Fray Gag Givr Glu%rGraf Jeun Li-Log M/d Me' Mol*Ni~ Nou N&l#Nud PartP_}Pha}Plac Po}R/g Rob Sast!S-n&S tSign Sobe*Ss( Str>Ta~ Tes,To' T!s<V/c V_*V( Vo*3Ab#Alog)Am/tC,Ff  G  Git=G[Lu M/~eM(u Oxy@Rec%fRig Scu,Spo}Ssip St/-V %rVi}5Ci#C&'G?IgtMa(eMici#Mp,Na&'Nj$Nn Pam(eRto*Ru!Sa.Se'Ss>Ta%$U/>Ub#U-'U,Y_2Ag$Ap Es}Ibb]Oitu!2P +P#xeRab#Rc*3Nas%e:0Lou*0Ar,HarpeHel#La* Lip<Lo!Lu<O#Onom+Or-Ou,Ra}Rem Riva(RouU?U!u`0If>Uqu 1Fac Fec%fFig+FortFray Fusi$0Ali}Ar 2Ec,1Abor Arg*Ectr$Eg/tEph/tEveIgib#I%s?O.Ucid Ud 0B=]Bell*Bry$Er|@Issi$M_ O%$Ouvo*P e'Ploy Por,Pri<Ulsi$0Cadr Ch eClaveCo~eDigu Dos}DroitDui!Erg+F/-F m Fou*Gag G(Glob Ig?Jamb JeuLev NemiNuye{Ri~*Roba.Seig[Tas}T_d!T>To' Trav Um  Vah*Viab#Voy Zy?0L+n0Aiss*Arg[At/tAu#Ic +I@m+I Ilog)I[Iso@ItapheO^ReuveRouv Uis/t0U !Uipe0Ig Osi$Re'Up%$0C=>Pad$Pe-P+g#Po*PritQuiv Say S_-S+uSor Ti?TomacTra@0Ag eA]An~eA%^E(d!Endo*Er[lH/olHi^Hn+Ir Off Oi#Onn/tO'd*R/.RoitU@0Phor+0Alu Asi$Enta`I@n-I,Olu%fOqu 1ActAg  Auc Cel]Cit/tClusifCu<Ecu,Emp#Erc H= Hor,I.n-I]Is,O%^Ped>Plor Po}Prim QuisT_sifTrai!Ul,:B#Bu#{Cet&Ci#Ctu!Ibl*Lai<Me{M`#R-'RfeluR(eRou~eSc( T=Tig)Uc$U%fVe'Vori3Bri#C$d D  L(M?M'Ndo*Od=Rm Ro-Rve'S%v=U`#Ut!Vr>3AscoCe]C%fDe#Gu!Latu!Leta.L>eL#ulLm LouLtr N/c N*O#R?Ssu!X 2A* Am?As^At&'E|E~eE'Exi$Oc$O!Uctu Ui@Uvi=2L+Nd +Ngib#Nta(eRc Rg $Rmu]Rtu[Ssi#Ud!Ug eU`]Ulu!Urmi2Agi#Ai<An~*App Aye'Ega&E( El$Em*E[s+E!Iab#Ic%$Iss$Ivo#OidOma.Ont=Ot,Uit2Gi%fI&Re'R+{R%fSi$T':Gn Lax+L +Mbad R/%rRd+nRn*Rrig)Zel#Z$3AntLa%[Lu#Ndar?N =N+NouN%lOlog+O?t!R/iumR?St)lY}3B>C]RafeV!2A-AiveIs}ObeOi!Or+{2Lfe'M?Nf]R.R`#Udr$Uff!UlotUp`#Urm/dUt&2Ad)lAffi%A(eAndApp(AtuitAv*EnatIffu!Il]Imp Ogn Ond Ot&OupeUg U% Uy e2EpardErr>I@Im|veIta!Sta%f3Mnas&Rostat:Bitu@Cho*L&Me|NgarN[t$RicotRm$+Rp$Sard3LiumMato?RbeRiss$Rm(eR$Si,U!{3B n BouLar/tStoi!V 5MardMma.Mo.[N['Nor N&{R@Riz$Rlo.Rm$eRrib#U#{Us<5BlotI#{Ma(Mb#Mi@Mo'R]3Dro?lG+[M[Pno<:2Yl#2Nor U/e4Lici&Lusi$0A.Bib I,M_<Mobi#Muab#PactP i=Plor Po}Prim Pu,0Carn C_d+Ci@ntCl( Colo!Dex Di-Duc%fEditEp%eExactF(iFlig Form Fusi$G  H= Hib Jec,Ju!No-ntOcu]Ond Scri!Sec&Sig[Soli&Sp* S%nctSul,TactT_<Ti?Trig)Tui%fU%#Vasi$V_,Vi,Voqu 3Oni^Rad>ReelRi,0O]2Oi!Res<:GuarIll*MbeNv>Rd(Ug U[Velot3Tab#T$UdiU[s<9Ind!N~ Ng]Ue'UissifUrn=Vi=Y|Ye{5Bi]Ge?ntNiorP$Ris&S%-Te{V_i#:Yak7M$oOs^:BelBi=Bo' C  Cto<Gu[I[Is}I% Mbe|Mel#MpeN-'Nga.N,[P(R.'R?Ur>VaboVo*3Ctu!G=G Gu?SsiveTt!V>Xi^Zard3As<B  B!C_-Cor[E.Ev!Gatu!Go,G)M Mi&M$a@Mpi@Neai!NgotOn-|Qui@S>eS,ThiumTi.Ttor=V!'5Gi^Inta(Is*MbricT +U UrdUt!UveY=5B+Ci@Cra%fE'Gub!Is/tM>eNai!NdiR$T,X){:Ch(eGas(G_taGi^Ig!Ill$In%_Ir+Is$Jor Lax Lefi-Lhe'Li-L#t&MmouthNda,Niab#Nqu/tN&|N)lRath$Rb!R~/dRdiRi%?R^'Rr$R&]Scot&SsifT +lT>eTra^Udi!Ussa@UveXim=3Ch/tC$nuDa`#Dec(Di,Du<Il#'L/.Lod+Mb!Moi!Nac N Nh*Ns$.NtorRc!diRi&R#Ssag Su!T=Teo!Tho@T>Ub#3Au]CrobeEt&Gn$Gr L+uLli$Mi^N-N =Nim=Nor Nu&Rac#Roi,Ssi#X&5Bi#D [El#{Ndi=Ni&'Nna+Not$eNst!Ntag[Nu?ntQ)'R-|Rsu!R% Te'TifU~eUf#Ul(Uss$Ut$Uv/t5L%p#Ni%$Ra`#Re[Rmu!Sc#SeumSic+nTa%$T T)l3Ria@R%l#S,eThi^:Ge'PpeRquoisRr Ta%$Ti$Tu!Ufra.U%^Vi!3Bu#{CtarFas&Ga%$Glig Goc>I.Rve{Ttoy Ur$eUtr$Veu3CheCkelTra&Ve|5B#CifCt'[Ir-'I<t&Ma@Mb!{Mm Rma%fTab#Tif>Toi!Urr*Uve|Va&'Vemb!Vi-5A.Anc I!Isib#M oP%=Q)Tri%f:0E*Jec%fLig Sc'S v Stac#T_*T' 0Casi$Cup E/Tob!Troy Tup]Ulai!0E'Or/t1F_}Fic>Fr*0Ive1Se|S`l$2Fac%fIv>0Bra.Ett!0Ct){Du]E!{Iri^1A#A^Er Ini$PortunPrim T Ti^1A.{An.Bi&D$n E`#G/eG)`Ifi-Ne?ntQ)T+0C`]Mo<Satu!0Ar+0Rag/Rs$T`Trag Vra.0A%$1Y@Y.[1O[:Isib#La-Lma!sLo'@Lp Na~eNdaNgol(Niqu N[|NoramaNt=$PayeP>Po,PyrusRadoxeR-l#Res<Rfum R]Ro#Rra(R<m Rtag Ru!Rv_*Ssi$S&^T [lT+n-Tr$V`l$Voi}Y Ysa.3Ig[Int!La.Lic/L#Lou<Lu~eNdu#Netr Nib#NsifN'+Pi&PlumRdrixRfor Rio@Rmu,Rp#xeRs`R&S Ta#TitTr*Up#2Ara$Ob+O^Ot$Ra<Ysi^0AnoCt'=E-Er!Euv!Lo&N-|Pet&Qu Rog)Sc(eSt$Vo,XelZza2AcardAf$dAis*An A^Astr$A&|E' ExusIa.OmbOng U+Uma.2Chet&Es+E&In&Ir>Iss$Iv!Lai!Lic>L#nLyg$eMma@Mp>Nct)lNd  NeyR%^Si%$S<d Stu!Tag Te|Ti$U-Ula(Um$Urp!Uss(Uvo*2A*+A%^Ec+{Edi!EfixeElu@EnomE<n-E&x&Evo*Imi%fIn-Is$Iv Ob#?O-d Odi.Of$dOg!sO+Oje,Olog)O?n Op!Osp eO&g O)s<Ov beU@n-U[|0Y~o<1BlicC $I}LpeLsarNai<Ni%fPit!Rif>Zz#3Rami@:99AsarE!l#Es%$Ietu@It,O%_t:C(eC$,D+{G$d(I@'Is(L_%rLl$.Mas}Pi@Sa.Tis}Vag V(Y$n 3Ac%fAg*Ali}Anim Cevo*Ci,Clam Col,Cru,Cu]Cyc]Dig Dou,Fai!F#xeForm Fra(Fu.G=+nGi$Gla.Gul>I, Je,Jou La%fLev L+fMar^Me@Mi<M$,Mpl*Mu NardNfortNif]N$c Ntr NvoiPl>Por,Pri<P%#Qu(S veS(e{Soud!SpectS,SultatTabl*T_*Ticu#Tomb Trac Uni$Uss*V/~eViv!Vol&Vulsif3Ches<De|E'Gi@Go]Nc Pos,Sib#S^T)lV=V>e5Che{M/-Mp!N-Nd(Se|S>Ta%fTorTu#U.U`#U#|U%[Y|?5B/BisCheEl#G){In Is<|S S%^3Th?:B]Bo,B!Co~eFariGes<Is*La@LiveL$Lu MediNc%$Ngl>Rcas?Rd(eT' Ug!nuUm$U,Uva.V/tV$n 1AlpelAnda#E]atEnarioEpt!HemaI_-Ind O!Ru%nUlp,1An-Cab#Ch Cou C!,Da%fDui!Ig['Jo'Lec%fMa(eMb]M_-M(=Na&'Nsib#N&n-Par Q)n-Re(R.ntR+{Rru!RumRvi-Sa?V*Vra.Xtup#3D =Ec#Eg Ff]G#Gn=L_-LiciumMp#Nc eNist!Ph$RopSmi^Tu 1I 3Ci=C#DiumIg[{LdatLe`Litu@Lub#Mb!M?`Mno]N@N.'N[t&No!Rc>R%rS+T%<Uc+{Udu!Uff#U#v UpapeUr-U%r Uv_*0Ac+{A%=Eci=H eIr=3Ab#A%$ErnumImulusIpu]RictUd+{Upe'Ylis&0Bli?BstratB%lBv_*C-sC!FfixeGg  Ive'Lfa&P bePpl>Rfa-Rica&R?n Rpri<Rs|tRv+Spect3LlabeMbo#Metr+Nap<NtaxeS&?:BacBl>C%#Il]L_tLism/L$n Mbo'Mi}Ngib#PisQu( Rd RifR%[S<TamiToua.UpeU!|X 3Mo(Mpo!lNa`#Nd!Ne'N*Nsi$Rm( R[Rrib#T(eX&2E?Eor+Erap+Orax0BiaE@Mi@Reli!Ro*SsuT/eT!Tub 5Bogg/L /tMa&Ni^N[|P$y?R~eRd!Rna@Rp`#R!ntR<Rt)TemU~ Urna.Us}X(e2Ac%$AficAgi^Ah*A(An~ Ava`Ef#Emp EsorEu`Ia.Ibun=Ico,Ilog+IompheIp]It' Ivi=Omb$eOncOpic=Oupe|2I#LipeMul&N[lRb(eTe'Toy Y|3Mp/Ph$Pi^R/:0Ues^9Ti?Tras$1Ani?If>I$I^Itai!Iv s3AniumBa(Tic/t0A.I[UelU!0I#Op+:Car?Cc(Gab$dG)Ill/tInc!Is<|Lab#Li<Ll$LveMpi!N`#Pe'R>Se{Ss=S&3C&'Det&Get=Hicu#InardLo-Nd!diN  Ng Ni?{Ntou<Rdu!R(Rn*RrouR}RtuSt$T /Tus&X/tX 3AducAn@Ctoi!D/.DeoG[t&G)'La(Lla.Naig!Ol$P eRe?ntRtuo<RusSa.Se'Si$S^{S)lT=Tes<Tico#Tr(eVa-Vipa!5Ca%$Gu I#Is(Itu!La`#Lc/L%g Lu?Ra-R&xT Ulo*Ya.Yel#:G$:3N$:Cht:3B!NithS&9Olog+";
const accents = "e7693&)U*o&)Ry^)*)W))))#X^))))@@)#Wf)m%)#!))AG)&IIAQIIIBIIHJNAgBIILIDJGo)))HIQIIIIA(IGgJHH(BIIxX#)Ou)@*IAAPIIIJHQJ)&QIQPYI(HYAQC%)!))QHJJ@)#)^f*^AXCJ))$%CP))%&m)u)@e^A#G#))W@!(IKK%!(I%))O@QA))@GG#e))))WHJIWh))my@IIBT^)!)HAYGETHI*))!QnUDG)))nBoKAC*HwyQh))$&)G&)UGO)G)))(BX#v**)%O,e7686)I))@)&)gdMP()))ud)p#L))I^FIHYdWG))D@DFV)QA)o%MyTh%*)Z)%)n(XANc^R)YS";
const checksum = "0x51deb7ae009149dc61a6bd18a918eb7ac78d2775726c68e598b92d002519b045";
let wordlist = null;
/**
 *  The [[link-bip39-fr]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangFr extends wordlist_owla_js_1.WordlistOwlA {
    /**
     *  Creates a new instance of the French language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langFr]] should suffice.
     *
     *  @_ignore:
     */
    constructor() { super("fr", words, accents, checksum); }
    /**
     *  Returns a singleton instance of a ``LangFr``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangFr();
        }
        return wordlist;
    }
}
exports.LangFr = LangFr;
//# sourceMappingURL=lang-fr.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369285, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangJa = void 0;
const index_js_1 = require("../hash/index.js");
const index_js_2 = require("../utils/index.js");
const wordlist_js_1 = require("./wordlist.js");
const data = [
    // 4-kana words
    "AQRASRAGBAGUAIRAHBAghAURAdBAdcAnoAMEAFBAFCBKFBQRBSFBCXBCDBCHBGFBEQBpBBpQBIkBHNBeOBgFBVCBhBBhNBmOBmRBiHBiFBUFBZDBvFBsXBkFBlcBjYBwDBMBBTBBTRBWBBWXXaQXaRXQWXSRXCFXYBXpHXOQXHRXhRXuRXmXXbRXlXXwDXTRXrCXWQXWGaBWaKcaYgasFadQalmaMBacAKaRKKBKKXKKjKQRKDRKCYKCRKIDKeVKHcKlXKjHKrYNAHNBWNaRNKcNIBNIONmXNsXNdXNnBNMBNRBNrXNWDNWMNFOQABQAHQBrQXBQXFQaRQKXQKDQKOQKFQNBQNDQQgQCXQCDQGBQGDQGdQYXQpBQpQQpHQLXQHuQgBQhBQhCQuFQmXQiDQUFQZDQsFQdRQkHQbRQlOQlmQPDQjDQwXQMBQMDQcFQTBQTHQrDDXQDNFDGBDGQDGRDpFDhFDmXDZXDbRDMYDRdDTRDrXSAhSBCSBrSGQSEQSHBSVRShYShkSyQSuFSiBSdcSoESocSlmSMBSFBSFKSFNSFdSFcCByCaRCKcCSBCSRCCrCGbCEHCYXCpBCpQCIBCIHCeNCgBCgFCVECVcCmkCmwCZXCZFCdRClOClmClFCjDCjdCnXCwBCwXCcRCFQCFjGXhGNhGDEGDMGCDGCHGIFGgBGVXGVEGVRGmXGsXGdYGoSGbRGnXGwXGwDGWRGFNGFLGFOGFdGFkEABEBDEBFEXOEaBEKSENBENDEYXEIgEIkEgBEgQEgHEhFEudEuFEiBEiHEiFEZDEvBEsXEsFEdXEdREkFEbBEbRElFEPCEfkEFNYAEYAhYBNYQdYDXYSRYCEYYoYgQYgRYuRYmCYZTYdBYbEYlXYjQYRbYWRpKXpQopQnpSFpCXpIBpISphNpdBpdRpbRpcZpFBpFNpFDpFopFrLADLBuLXQLXcLaFLCXLEhLpBLpFLHXLeVLhILdHLdRLoDLbRLrXIABIBQIBCIBsIBoIBMIBRIXaIaRIKYIKRINBINuICDIGBIIDIIkIgRIxFIyQIiHIdRIbYIbRIlHIwRIMYIcRIRVITRIFBIFNIFQOABOAFOBQOaFONBONMOQFOSFOCDOGBOEQOpBOLXOIBOIFOgQOgFOyQOycOmXOsXOdIOkHOMEOMkOWWHBNHXNHXWHNXHDuHDRHSuHSRHHoHhkHmRHdRHkQHlcHlRHwBHWcgAEgAggAkgBNgBQgBEgXOgYcgLXgHjgyQgiBgsFgdagMYgWSgFQgFEVBTVXEVKBVKNVKDVKYVKRVNBVNYVDBVDxVSBVSRVCjVGNVLXVIFVhBVhcVsXVdRVbRVlRhBYhKYhDYhGShxWhmNhdahdkhbRhjohMXhTRxAXxXSxKBxNBxEQxeNxeQxhXxsFxdbxlHxjcxFBxFNxFQxFOxFoyNYyYoybcyMYuBQuBRuBruDMuCouHBudQukkuoBulVuMXuFEmCYmCRmpRmeDmiMmjdmTFmFQiADiBOiaRiKRiNBiNRiSFiGkiGFiERipRiLFiIFihYibHijBijEiMXiWBiFBiFCUBQUXFUaRUNDUNcUNRUNFUDBUSHUCDUGBUGFUEqULNULoUIRUeEUeYUgBUhFUuRUiFUsXUdFUkHUbBUjSUjYUwXUMDUcHURdUTBUrBUrXUrQZAFZXZZaRZKFZNBZQFZCXZGBZYdZpBZLDZIFZHXZHNZeQZVRZVFZmXZiBZvFZdFZkFZbHZbFZwXZcCZcRZRBvBQvBGvBLvBWvCovMYsAFsBDsaRsKFsNFsDrsSHsSFsCXsCRsEBsEHsEfspBsLBsLDsIgsIRseGsbRsFBsFQsFSdNBdSRdCVdGHdYDdHcdVbdySduDdsXdlRdwXdWYdWcdWRkBMkXOkaRkNIkNFkSFkCFkYBkpRkeNkgBkhVkmXksFklVkMBkWDkFNoBNoaQoaFoNBoNXoNaoNEoSRoEroYXoYCoYbopRopFomXojkowXorFbBEbEIbdBbjYlaRlDElMXlFDjKjjSRjGBjYBjYkjpRjLXjIBjOFjeVjbRjwBnXQnSHnpFnLXnINnMBnTRwXBwXNwXYwNFwQFwSBwGFwLXwLDweNwgBwuHwjDwnXMBXMpFMIBMeNMTHcaQcNBcDHcSFcCXcpBcLXcLDcgFcuFcnXcwXccDcTQcrFTQErXNrCHrpFrgFrbFrTHrFcWNYWNbWEHWMXWTR",
    // 5-kana words
    "ABGHABIJAEAVAYJQALZJAIaRAHNXAHdcAHbRAZJMAZJRAZTRAdVJAklmAbcNAjdRAMnRAMWYAWpRAWgRAFgBAFhBAFdcBNJBBNJDBQKBBQhcBQlmBDEJBYJkBYJTBpNBBpJFBIJBBIJDBIcABOKXBOEJBOVJBOiJBOZJBepBBeLXBeIFBegBBgGJBVJXBuocBiJRBUJQBlXVBlITBwNFBMYVBcqXBTlmBWNFBWiJBWnRBFGHBFwXXKGJXNJBXNZJXDTTXSHSXSVRXSlHXCJDXGQJXEhXXYQJXYbRXOfXXeNcXVJFXhQJXhEJXdTRXjdXXMhBXcQTXRGBXTEBXTnQXFCXXFOFXFgFaBaFaBNJaBCJaBpBaBwXaNJKaNJDaQIBaDpRaEPDaHMFamDJalEJaMZJaFaFaFNBaFQJaFLDaFVHKBCYKBEBKBHDKXaFKXGdKXEJKXpHKXIBKXZDKXwXKKwLKNacKNYJKNJoKNWcKDGdKDTRKChXKGaRKGhBKGbRKEBTKEaRKEPTKLMDKLWRKOHDKVJcKdBcKlIBKlOPKFSBKFEPKFpFNBNJNJBQNBGHNBEPNBHXNBgFNBVXNBZDNBsXNBwXNNaRNNJDNNJENNJkNDCJNDVDNGJRNJiDNZJNNsCJNJFNNFSBNFCXNFEPNFLXNFIFQJBFQCaRQJEQQLJDQLJFQIaRQOqXQHaFQHHQQVJXQVJDQhNJQmEIQZJFQsJXQJrFQWbRDJABDBYJDXNFDXCXDXLXDXZDDXsJDQqXDSJFDJCXDEPkDEqXDYmQDpSJDOCkDOGQDHEIDVJDDuDuDWEBDJFgSBNDSBSFSBGHSBIBSBTQSKVYSJQNSJQiSJCXSEqXSJYVSIiJSOMYSHAHSHaQSeCFSepQSegBSHdHSHrFShSJSJuHSJUFSkNRSrSrSWEBSFaHSJFQSFCXSFGDSFYXSFODSFgBSFVXSFhBSFxFSFkFSFbBSFMFCADdCJXBCXaFCXKFCXNFCXCXCXGBCXEJCXYBCXLDCXIBCXOPCXHXCXgBCXhBCXiBCXlDCXcHCJNBCJNFCDCJCDGBCDVXCDhBCDiDCDJdCCmNCpJFCIaRCOqXCHCHCHZJCViJCuCuCmddCJiFCdNBCdHhClEJCnUJCreSCWlgCWTRCFBFCFNBCFYBCFVFCFhFCFdSCFTBCFWDGBNBGBQFGJBCGBEqGBpBGBgQGNBEGNJYGNkOGNJRGDUFGJpQGHaBGJeNGJeEGVBlGVKjGiJDGvJHGsVJGkEBGMIJGWjNGFBFGFCXGFGBGFYXGFpBGFMFEASJEAWpEJNFECJVEIXSEIQJEOqXEOcFEeNcEHEJEHlFEJgFEhlmEmDJEmZJEiMBEUqXEoSREPBFEPXFEPKFEPSFEPEFEPpFEPLXEPIBEJPdEPcFEPTBEJnXEqlHEMpREFCXEFODEFcFYASJYJAFYBaBYBVXYXpFYDhBYCJBYJGFYYbRYeNcYJeVYiIJYZJcYvJgYvJRYJsXYsJFYMYMYreVpBNHpBEJpBwXpQxFpYEJpeNDpJeDpeSFpeCHpHUJpHbBpHcHpmUJpiiJpUJrpsJuplITpFaBpFQqpFGBpFEfpFYBpFpBpFLJpFIDpFgBpFVXpFyQpFuFpFlFpFjDpFnXpFwXpJFMpFTBLXCJLXEFLXhFLXUJLXbFLalmLNJBLSJQLCLCLGJBLLDJLHaFLeNFLeSHLeCXLepFLhaRLZsJLsJDLsJrLocaLlLlLMdbLFNBLFSBLFEHLFkFIBBFIBXFIBaQIBKXIBSFIBpHIBLXIBgBIBhBIBuHIBmXIBiFIBZXIBvFIBbFIBjQIBwXIBWFIKTRIQUJIDGFICjQIYSRIINXIJeCIVaRImEkIZJFIvJRIsJXIdCJIJoRIbBQIjYBIcqXITFVIreVIFKFIFSFIFCJIFGFIFLDIFIBIJFOIFgBIFVXIJFhIFxFIFmXIFdHIFbBIJFrIJFWOBGBOQfXOOKjOUqXOfXBOqXEOcqXORVJOFIBOFlDHBIOHXiFHNTRHCJXHIaRHHJDHHEJHVbRHZJYHbIBHRsJHRkDHWlmgBKFgBSBgBCDgBGHgBpBgBIBgBVJgBuBgBvFgKDTgQVXgDUJgGSJgOqXgmUMgZIJgTUJgWIEgFBFgFNBgFDJgFSFgFGBgFYXgJFOgFgQgFVXgFhBgFbHgJFWVJABVQKcVDgFVOfXVeDFVhaRVmGdViJYVMaRVFNHhBNDhBCXhBEqhBpFhBLXhNJBhSJRheVXhhKEhxlmhZIJhdBQhkIJhbMNhMUJhMZJxNJgxQUJxDEkxDdFxSJRxplmxeSBxeCXxeGFxeYXxepQxegBxWVcxFEQxFLXxFIBxFgBxFxDxFZtxFdcxFbBxFwXyDJXyDlcuASJuDJpuDIBuCpJuGSJuIJFueEFuZIJusJXudWEuoIBuWGJuFBcuFKEuFNFuFQFuFDJuFGJuFVJuFUtuFdHuFTBmBYJmNJYmQhkmLJDmLJomIdXmiJYmvJRmsJRmklmmMBymMuCmclmmcnQiJABiJBNiJBDiBSFiBCJiBEFiBYBiBpFiBLXiBTHiJNciDEfiCZJiECJiJEqiOkHiHKFieNDiHJQieQcieDHieSFieCXieGFieEFieIHiegFihUJixNoioNXiFaBiFKFiFNDiFEPiFYXitFOitFHiFgBiFVEiFmXiFitiFbBiFMFiFrFUCXQUIoQUIJcUHQJUeCEUHwXUUJDUUqXUdWcUcqXUrnQUFNDUFSHUFCFUFEfUFLXUtFOZBXOZXSBZXpFZXVXZEQJZEJkZpDJZOqXZeNHZeCDZUqXZFBQZFEHZFLXvBAFvBKFvBCXvBEPvBpHvBIDvBgFvBuHvQNJvFNFvFGBvFIBvJFcsXCDsXLXsXsXsXlFsXcHsQqXsJQFsEqXseIFsFEHsFjDdBxOdNpRdNJRdEJbdpJRdhZJdnSJdrjNdFNJdFQHdFhNkNJDkYaRkHNRkHSRkVbRkuMRkjSJkcqDoSJFoEiJoYZJoOfXohEBoMGQocqXbBAFbBXFbBaFbBNDbBGBbBLXbBTBbBWDbGJYbIJHbFQqbFpQlDgQlOrFlVJRjGEBjZJRnXvJnXbBnEfHnOPDngJRnxfXnUJWwXEJwNpJwDpBwEfXwrEBMDCJMDGHMDIJMLJDcQGDcQpHcqXccqNFcqCXcFCJRBSBRBGBRBEJRBpQTBNFTBQJTBpBTBVXTFABTFSBTFCFTFGBTFMDrXCJrXLDrDNJrEfHrFQJrFitWNjdWNTR",
    // 6-kana words
    "AKLJMANOPFASNJIAEJWXAYJNRAIIbRAIcdaAeEfDAgidRAdjNYAMYEJAMIbRAFNJBAFpJFBBIJYBDZJFBSiJhBGdEBBEJfXBEJqXBEJWRBpaUJBLXrXBIYJMBOcfXBeEfFBestXBjNJRBcDJOBFEqXXNvJRXDMBhXCJNYXOAWpXONJWXHDEBXeIaRXhYJDXZJSJXMDJOXcASJXFVJXaBQqXaBZJFasXdQaFSJQaFEfXaFpJHaFOqXKBNSRKXvJBKQJhXKEJQJKEJGFKINJBKIJjNKgJNSKVElmKVhEBKiJGFKlBgJKjnUJKwsJYKMFIJKFNJDKFIJFKFOfXNJBSFNJBCXNBpJFNJBvQNJBMBNJLJXNJOqXNJeCXNJeGFNdsJCNbTKFNwXUJQNFEPQDiJcQDMSJQSFpBQGMQJQJeOcQyCJEQUJEBQJFBrQFEJqDXDJFDJXpBDJXIMDGiJhDIJGRDJeYcDHrDJDVXgFDkAWpDkIgRDjDEqDMvJRDJFNFDJFIBSKclmSJQOFSJQVHSJQjDSJGJBSJGJFSECJoSHEJqSJHTBSJVJDSViJYSZJNBSJsJDSFSJFSFEfXSJFLXCBUJVCJXSBCJXpBCXVJXCJXsXCJXdFCJNJHCLIJgCHiJFCVNJMChCJhCUHEJCsJTRCJdYcCoQJCCFEfXCFIJgCFUJxCFstFGJBaQGJBIDGQJqXGYJNRGJHKFGeQqDGHEJFGJeLXGHIiJGHdBlGUJEBGkIJTGFQPDGJFEqEAGegEJIJBEJVJXEhQJTEiJNcEJZJFEJoEqEjDEqEPDsXEPGJBEPOqXEPeQFEfDiDEJfEFEfepQEfMiJEqXNBEqDIDEqeSFEqVJXEMvJRYXNJDYXEJHYKVJcYYJEBYJeEcYJUqXYFpJFYFstXpAZJMpBSJFpNBNFpeQPDpHLJDpHIJFpHgJFpeitFpHZJFpJFADpFSJFpJFCJpFOqXpFitBpJFZJLXIJFLIJgRLVNJWLVHJMLwNpJLFGJBLFLJDLFOqXLJFUJIBDJXIBGJBIJBYQIJBIBIBOqXIBcqDIEGJFILNJTIIJEBIOiJhIJeNBIJeIBIhiJIIWoTRIJFAHIJFpBIJFuHIFUtFIJFTHOSBYJOEcqXOHEJqOvBpFOkVJrObBVJOncqDOcNJkHhNJRHuHJuHdMhBgBUqXgBsJXgONJBgHNJDgHHJQgJeitgHsJXgJyNagyDJBgZJDrgsVJQgkEJNgkjSJgJFAHgFCJDgFZtMVJXNFVXQfXVJXDJVXoQJVQVJQVDEfXVDvJHVEqNFVeQfXVHpJFVHxfXVVJSRVVmaRVlIJOhCXVJhHjYkhxCJVhWVUJhWiJcxBNJIxeEqDxfXBFxcFEPxFSJFxFYJXyBDQJydaUJyFOPDuYCJYuLvJRuHLJXuZJLDuFOPDuFZJHuFcqXmKHJdmCQJcmOsVJiJAGFitLCFieOfXiestXiZJMEikNJQirXzFiFQqXiFIJFiFZJFiFvtFUHpJFUteIcUteOcUVCJkUhdHcUbEJEUJqXQUMNJhURjYkUFitFZDGJHZJIxDZJVJXZJFDJZJFpQvBNJBvBSJFvJxBrseQqDsVFVJdFLJDkEJNBkmNJYkFLJDoQJOPoGsJRoEAHBoEJfFbBQqDbBZJHbFVJXlFIJBjYIrXjeitcjjCEBjWMNBwXQfXwXOaFwDsJXwCJTRwrCZJMDNJQcDDJFcqDOPRYiJFTBsJXTQIJBTFEfXTFLJDrXEJFrEJXMrFZJFWEJdEWYTlm",
    // 7-kana words
    "ABCDEFACNJTRAMBDJdAcNJVXBLNJEBXSIdWRXErNJkXYDJMBXZJCJaXMNJaYKKVJKcKDEJqXKDcNJhKVJrNYKbgJVXKFVJSBNBYBwDNJeQfXNJeEqXNhGJWENJFiJRQlIJbEQJfXxDQqXcfXQFNDEJQFwXUJDYcnUJDJIBgQDIUJTRDJFEqDSJQSJFSJQIJFSOPeZtSJFZJHCJXQfXCTDEqFGJBSJFGJBOfXGJBcqXGJHNJDGJRLiJEJfXEqEJFEJPEFpBEJYJBZJFYBwXUJYiJMEBYJZJyTYTONJXpQMFXFpeGIDdpJFstXpJFcPDLBVSJRLHQJqXLJFZJFIJBNJDIJBUqXIBkFDJIJEJPTIYJGWRIJeQPDIJeEfHIJFsJXOqGDSFHXEJqXgJCsJCgGQJqXgdQYJEgFMFNBgJFcqDVJwXUJVJFZJchIgJCCxOEJqXxOwXUJyDJBVRuscisciJBiJBieUtqXiJFDJkiFsJXQUGEZJcUJFsJXZtXIrXZDZJDrZJFNJDZJFstXvJFQqXvJFCJEsJXQJqkhkNGBbDJdTRbYJMEBlDwXUJMEFiJFcfXNJDRcNJWMTBLJXC",
    // 8-kana words
    "BraFUtHBFSJFdbNBLJXVJQoYJNEBSJBEJfHSJHwXUJCJdAZJMGjaFVJXEJPNJBlEJfFiJFpFbFEJqIJBVJCrIBdHiJhOPFChvJVJZJNJWxGFNIFLueIBQJqUHEJfUFstOZJDrlXEASJRlXVJXSFwVJNJWD",
    // 9-kana words
    "QJEJNNJDQJEJIBSFQJEJxegBQJEJfHEPSJBmXEJFSJCDEJqXLXNJFQqXIcQsFNJFIFEJqXUJgFsJXIJBUJEJfHNFvJxEqXNJnXUJFQqD",
    // 10-kana words
    "IJBEJqXZJ"
];
// Maps each character into its kana value (the index)
const mapping = "~~AzB~X~a~KN~Q~D~S~C~G~E~Y~p~L~I~O~eH~g~V~hxyumi~~U~~Z~~v~~s~~dkoblPjfnqwMcRTr~W~~~F~~~~~Jt";
let _wordlist = null;
function hex(word) {
    return (0, index_js_2.hexlify)((0, index_js_2.toUtf8Bytes)(word));
}
const KiYoKu = "0xe3818de38284e3818f";
const KyoKu = "0xe3818de38283e3818f";
function toString(data) {
    return (0, index_js_2.toUtf8String)(new Uint8Array(data));
}
function loadWords() {
    if (_wordlist !== null) {
        return _wordlist;
    }
    const wordlist = [];
    // Transforms for normalizing (sort is a not quite UTF-8)
    const transform = {};
    // Delete the diacritic marks
    transform[toString([227, 130, 154])] = false;
    transform[toString([227, 130, 153])] = false;
    // Some simple transforms that sort out most of the order
    transform[toString([227, 130, 133])] = toString([227, 130, 134]);
    transform[toString([227, 129, 163])] = toString([227, 129, 164]);
    transform[toString([227, 130, 131])] = toString([227, 130, 132]);
    transform[toString([227, 130, 135])] = toString([227, 130, 136]);
    // Normalize words using the transform
    function normalize(word) {
        let result = "";
        for (let i = 0; i < word.length; i++) {
            let kana = word[i];
            const target = transform[kana];
            if (target === false) {
                continue;
            }
            if (target) {
                kana = target;
            }
            result += kana;
        }
        return result;
    }
    // Sort how the Japanese list is sorted
    function sortJapanese(a, b) {
        a = normalize(a);
        b = normalize(b);
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
    // Load all the words
    for (let length = 3; length <= 9; length++) {
        const d = data[length - 3];
        for (let offset = 0; offset < d.length; offset += length) {
            const word = [];
            for (let i = 0; i < length; i++) {
                const k = mapping.indexOf(d[offset + i]);
                word.push(227);
                word.push((k & 0x40) ? 130 : 129);
                word.push((k & 0x3f) + 128);
            }
            wordlist.push(toString(word));
        }
    }
    wordlist.sort(sortJapanese);
    // For some reason kyoku and kiyoku are flipped in node (!!).
    // The order SHOULD be:
    //   - kyoku
    //   - kiyoku
    // This should ignore "if", but that doesn't work here??
    /* c8 ignore start */
    if (hex(wordlist[442]) === KiYoKu && hex(wordlist[443]) === KyoKu) {
        const tmp = wordlist[442];
        wordlist[442] = wordlist[443];
        wordlist[443] = tmp;
    }
    /* c8 ignore stop */
    // Verify the computed list matches the official list
    /* istanbul ignore if */
    const checksum = (0, index_js_1.id)(wordlist.join("\n") + "\n");
    /* c8 ignore start */
    if (checksum !== "0xcb36b09e6baa935787fd762ce65e80b0c6a8dabdfbc3a7f86ac0e2c4fd111600") {
        throw new Error("BIP39 Wordlist for ja (Japanese) FAILED");
    }
    /* c8 ignore stop */
    _wordlist = wordlist;
    return wordlist;
}
let wordlist = null;
/**
 *  The [[link-bip39-ja]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangJa extends wordlist_js_1.Wordlist {
    /**
     *  Creates a new instance of the Japanese language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langJa]] should suffice.
     *
     *  @_ignore:
     */
    constructor() { super("ja"); }
    getWord(index) {
        const words = loadWords();
        (0, index_js_2.assertArgument)(index >= 0 && index < words.length, `invalid word index: ${index}`, "index", index);
        return words[index];
    }
    getWordIndex(word) {
        return loadWords().indexOf(word);
    }
    split(phrase) {
        //logger.assertNormalize();
        return phrase.split(/(?:\u3000| )+/g);
    }
    join(words) {
        return words.join("\u3000");
    }
    /**
     *  Returns a singleton instance of a ``LangJa``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangJa();
        }
        return wordlist;
    }
}
exports.LangJa = LangJa;
//# sourceMappingURL=lang-ja.js.map
}, function(modId) { var map = {"../hash/index.js":1730085369217,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369287, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangKo = void 0;
const index_js_1 = require("../hash/index.js");
const index_js_2 = require("../utils/index.js");
const wordlist_js_1 = require("./wordlist.js");
const data = [
    "OYAa",
    "ATAZoATBl3ATCTrATCl8ATDloATGg3ATHT8ATJT8ATJl3ATLlvATLn4ATMT8ATMX8ATMboATMgoAToLbAToMTATrHgATvHnAT3AnAT3JbAT3MTAT8DbAT8JTAT8LmAT8MYAT8MbAT#LnAUHT8AUHZvAUJXrAUJX8AULnrAXJnvAXLUoAXLgvAXMn6AXRg3AXrMbAX3JTAX3QbAYLn3AZLgvAZrSUAZvAcAZ8AaAZ8AbAZ8AnAZ8HnAZ8LgAZ8MYAZ8MgAZ8OnAaAboAaDTrAaFTrAaJTrAaJboAaLVoAaMXvAaOl8AaSeoAbAUoAbAg8AbAl4AbGnrAbMT8AbMXrAbMn4AbQb8AbSV8AbvRlAb8AUAb8AnAb8HgAb8JTAb8NTAb8RbAcGboAcLnvAcMT8AcMX8AcSToAcrAaAcrFnAc8AbAc8MgAfGgrAfHboAfJnvAfLV8AfLkoAfMT8AfMnoAfQb8AfScrAfSgrAgAZ8AgFl3AgGX8AgHZvAgHgrAgJXoAgJX8AgJboAgLZoAgLn4AgOX8AgoATAgoAnAgoCUAgoJgAgoLXAgoMYAgoSeAgrDUAgrJTAhrFnAhrLjAhrQgAjAgoAjJnrAkMX8AkOnoAlCTvAlCV8AlClvAlFg4AlFl6AlFn3AloSnAlrAXAlrAfAlrFUAlrFbAlrGgAlrOXAlvKnAlvMTAl3AbAl3MnAnATrAnAcrAnCZ3AnCl8AnDg8AnFboAnFl3AnHX4AnHbrAnHgrAnIl3AnJgvAnLXoAnLX4AnLbrAnLgrAnLhrAnMXoAnMgrAnOn3AnSbrAnSeoAnvLnAn3OnCTGgvCTSlvCTvAUCTvKnCTvNTCT3CZCT3GUCT3MTCT8HnCUCZrCULf8CULnvCU3HnCU3JUCY6NUCbDb8CbFZoCbLnrCboOTCboScCbrFnCbvLnCb8AgCb8HgCb$LnCkLfoClBn3CloDUDTHT8DTLl3DTSU8DTrAaDTrLXDTrLjDTrOYDTrOgDTvFXDTvFnDT3HUDT3LfDUCT9DUDT4DUFVoDUFV8DUFkoDUGgrDUJnrDULl8DUMT8DUMXrDUMX4DUMg8DUOUoDUOgvDUOg8DUSToDUSZ8DbDXoDbDgoDbGT8DbJn3DbLg3DbLn4DbMXrDbMg8DbOToDboJXGTClvGTDT8GTFZrGTLVoGTLlvGTLl3GTMg8GTOTvGTSlrGToCUGTrDgGTrJYGTrScGTtLnGTvAnGTvQgGUCZrGUDTvGUFZoGUHXrGULnvGUMT8GUoMgGXoLnGXrMXGXrMnGXvFnGYLnvGZOnvGZvOnGZ8LaGZ8LmGbAl3GbDYvGbDlrGbHX3GbJl4GbLV8GbLn3GbMn4GboJTGboRfGbvFUGb3GUGb4JnGgDX3GgFl$GgJlrGgLX6GgLZoGgLf8GgOXoGgrAgGgrJXGgrMYGgrScGgvATGgvOYGnAgoGnJgvGnLZoGnLg3GnLnrGnQn8GnSbrGnrMgHTClvHTDToHTFT3HTQT8HToJTHToJgHTrDUHTrMnHTvFYHTvRfHT8MnHT8SUHUAZ8HUBb4HUDTvHUoMYHXFl6HXJX6HXQlrHXrAUHXrMnHXrSbHXvFYHXvKXHX3LjHX3MeHYvQlHZrScHZvDbHbAcrHbFT3HbFl3HbJT8HbLTrHbMT8HbMXrHbMbrHbQb8HbSX3HboDbHboJTHbrFUHbrHgHbrJTHb8JTHb8MnHb8QgHgAlrHgDT3HgGgrHgHgrHgJTrHgJT8HgLX@HgLnrHgMT8HgMX8HgMboHgOnrHgQToHgRg3HgoHgHgrCbHgrFnHgrLVHgvAcHgvAfHnAloHnCTrHnCnvHnGTrHnGZ8HnGnvHnJT8HnLf8HnLkvHnMg8HnRTrITvFUITvFnJTAXrJTCV8JTFT3JTFT8JTFn4JTGgvJTHT8JTJT8JTJXvJTJl3JTJnvJTLX4JTLf8JTLhvJTMT8JTMXrJTMnrJTObrJTQT8JTSlvJT8DUJT8FkJT8MTJT8OXJT8OgJT8QUJT8RfJUHZoJXFT4JXFlrJXGZ8JXGnrJXLV8JXLgvJXMXoJXMX3JXNboJXPlvJXoJTJXoLkJXrAXJXrHUJXrJgJXvJTJXvOnJX4KnJYAl3JYJT8JYLhvJYQToJYrQXJY6NUJbAl3JbCZrJbDloJbGT8JbGgrJbJXvJbJboJbLf8JbLhrJbLl3JbMnvJbRg8JbSZ8JboDbJbrCZJbrSUJb3KnJb8LnJfRn8JgAXrJgCZrJgDTrJgGZrJgGZ8JgHToJgJT8JgJXoJgJgvJgLX4JgLZ3JgLZ8JgLn4JgMgrJgMn4JgOgvJgPX6JgRnvJgSToJgoCZJgoJbJgoMYJgrJXJgrJgJgrLjJg6MTJlCn3JlGgvJlJl8Jl4AnJl8FnJl8HgJnAToJnATrJnAbvJnDUoJnGnrJnJXrJnJXvJnLhvJnLnrJnLnvJnMToJnMT8JnMXvJnMX3JnMg8JnMlrJnMn4JnOX8JnST4JnSX3JnoAgJnoAnJnoJTJnoObJnrAbJnrAkJnrHnJnrJTJnrJYJnrOYJnrScJnvCUJnvFaJnvJgJnvJnJnvOYJnvQUJnvRUJn3FnJn3JTKnFl3KnLT6LTDlvLTMnoLTOn3LTRl3LTSb4LTSlrLToAnLToJgLTrAULTrAcLTrCULTrHgLTrMgLT3JnLULnrLUMX8LUoJgLVATrLVDTrLVLb8LVoJgLV8MgLV8RTLXDg3LXFlrLXrCnLXrLXLX3GTLX4GgLX4OYLZAXrLZAcrLZAgrLZAhrLZDXyLZDlrLZFbrLZFl3LZJX6LZJX8LZLc8LZLnrLZSU8LZoJTLZoJnLZrAgLZrAnLZrJYLZrLULZrMgLZrSkLZvAnLZvGULZvJeLZvOTLZ3FZLZ4JXLZ8STLZ8ScLaAT3LaAl3LaHT8LaJTrLaJT8LaJXrLaJgvLaJl4LaLVoLaMXrLaMXvLaMX8LbClvLbFToLbHlrLbJn4LbLZ3LbLhvLbMXrLbMnoLbvSULcLnrLc8HnLc8MTLdrMnLeAgoLeOgvLeOn3LfAl3LfLnvLfMl3LfOX8Lf8AnLf8JXLf8LXLgJTrLgJXrLgJl8LgMX8LgRZrLhCToLhrAbLhrFULhrJXLhvJYLjHTrLjHX4LjJX8LjLhrLjSX3LjSZ4LkFX4LkGZ8LkGgvLkJTrLkMXoLkSToLkSU8LkSZ8LkoOYLl3FfLl3MgLmAZrLmCbrLmGgrLmHboLmJnoLmJn3LmLfoLmLhrLmSToLnAX6LnAb6LnCZ3LnCb3LnDTvLnDb8LnFl3LnGnrLnHZvLnHgvLnITvLnJT8LnJX8LnJlvLnLf8LnLg6LnLhvLnLnoLnMXrLnMg8LnQlvLnSbrLnrAgLnrAnLnrDbLnrFkLnrJdLnrMULnrOYLnrSTLnvAnLnvDULnvHgLnvOYLnvOnLn3GgLn4DULn4JTLn4JnMTAZoMTAloMTDb8MTFT8MTJnoMTJnrMTLZrMTLhrMTLkvMTMX8MTRTrMToATMTrDnMTrOnMT3JnMT4MnMT8FUMT8FaMT8FlMT8GTMT8GbMT8GnMT8HnMT8JTMT8JbMT8OTMUCl8MUJTrMUJU8MUMX8MURTrMUSToMXAX6MXAb6MXCZoMXFXrMXHXrMXLgvMXOgoMXrAUMXrAnMXrHgMXrJYMXrJnMXrMTMXrMgMXrOYMXrSZMXrSgMXvDUMXvOTMX3JgMX3OTMX4JnMX8DbMX8FnMX8HbMX8HgMX8HnMX8LbMX8MnMX8OnMYAb8MYGboMYHTvMYHX4MYLTrMYLnvMYMToMYOgvMYRg3MYSTrMbAToMbAXrMbAl3MbAn8MbGZ8MbJT8MbJXrMbMXvMbMX8MbMnoMbrMUMb8AfMb8FbMb8FkMcJXoMeLnrMgFl3MgGTvMgGXoMgGgrMgGnrMgHT8MgHZrMgJnoMgLnrMgLnvMgMT8MgQUoMgrHnMgvAnMg8HgMg8JYMg8LfMloJnMl8ATMl8AXMl8JYMnAToMnAT4MnAZ8MnAl3MnAl4MnCl8MnHT8MnHg8MnJnoMnLZoMnLhrMnMXoMnMX3MnMnrMnOgvMnrFbMnrFfMnrFnMnrNTMnvJXNTMl8OTCT3OTFV8OTFn3OTHZvOTJXrOTOl3OT3ATOT3JUOT3LZOT3LeOT3MbOT8ATOT8AbOT8AgOT8MbOUCXvOUMX3OXHXvOXLl3OXrMUOXvDbOX6NUOX8JbOYFZoOYLbrOYLkoOYMg8OYSX3ObHTrObHT4ObJgrObLhrObMX3ObOX8Ob8FnOeAlrOeJT8OeJXrOeJnrOeLToOeMb8OgJXoOgLXoOgMnrOgOXrOgOloOgoAgOgoJbOgoMYOgoSTOg8AbOjLX4OjMnoOjSV8OnLVoOnrAgOn3DUPXQlrPXvFXPbvFTPdAT3PlFn3PnvFbQTLn4QToAgQToMTQULV8QURg8QUoJnQXCXvQbFbrQb8AaQb8AcQb8FbQb8MYQb8ScQeAlrQeLhrQjAn3QlFXoQloJgQloSnRTLnvRTrGURTrJTRUJZrRUoJlRUrQnRZrLmRZrMnRZrSnRZ8ATRZ8JbRZ8ScRbMT8RbST3RfGZrRfMX8RfMgrRfSZrRnAbrRnGT8RnvJgRnvLfRnvMTRn8AaSTClvSTJgrSTOXrSTRg3STRnvSToAcSToAfSToAnSToHnSToLjSToMTSTrAaSTrEUST3BYST8AgST8LmSUAZvSUAgrSUDT4SUDT8SUGgvSUJXoSUJXvSULTrSU8JTSU8LjSV8AnSV8JgSXFToSXLf8SYvAnSZrDUSZrMUSZrMnSZ8HgSZ8JTSZ8JgSZ8MYSZ8QUSaQUoSbCT3SbHToSbQYvSbSl4SboJnSbvFbSb8HbSb8JgSb8OTScGZrScHgrScJTvScMT8ScSToScoHbScrMTScvAnSeAZrSeAcrSeHboSeJUoSeLhrSeMT8SeMXrSe6JgSgHTrSkJnoSkLnvSk8CUSlFl3SlrSnSl8GnSmAboSmGT8SmJU8",
    "ATLnDlATrAZoATrJX4ATrMT8ATrMX4ATrRTrATvDl8ATvJUoATvMl8AT3AToAT3MX8AT8CT3AT8DT8AT8HZrAT8HgoAUAgFnAUCTFnAXoMX8AXrAT8AXrGgvAXrJXvAXrOgoAXvLl3AZvAgoAZvFbrAZvJXoAZvJl8AZvJn3AZvMX8AZvSbrAZ8FZoAZ8LZ8AZ8MU8AZ8OTvAZ8SV8AZ8SX3AbAgFZAboJnoAbvGboAb8ATrAb8AZoAb8AgrAb8Al4Ab8Db8Ab8JnoAb8LX4Ab8LZrAb8LhrAb8MT8Ab8OUoAb8Qb8Ab8ST8AcrAUoAcrAc8AcrCZ3AcrFT3AcrFZrAcrJl4AcrJn3AcrMX3AcrOTvAc8AZ8Ac8MT8AfAcJXAgoFn4AgoGgvAgoGnrAgoLc8AgoMXoAgrLnrAkrSZ8AlFXCTAloHboAlrHbrAlrLhrAlrLkoAl3CZrAl3LUoAl3LZrAnrAl4AnrMT8An3HT4BT3IToBX4MnvBb!Ln$CTGXMnCToLZ4CTrHT8CT3JTrCT3RZrCT#GTvCU6GgvCU8Db8CU8GZrCU8HT8CboLl3CbrGgrCbrMU8Cb8DT3Cb8GnrCb8LX4Cb8MT8Cb8ObrCgrGgvCgrKX4Cl8FZoDTrAbvDTrDboDTrGT6DTrJgrDTrMX3DTrRZrDTrRg8DTvAVvDTvFZoDT3DT8DT3Ln3DT4HZrDT4MT8DT8AlrDT8MT8DUAkGbDUDbJnDYLnQlDbDUOYDbMTAnDbMXSnDboAT3DboFn4DboLnvDj6JTrGTCgFTGTGgFnGTJTMnGTLnPlGToJT8GTrCT3GTrLVoGTrLnvGTrMX3GTrMboGTvKl3GZClFnGZrDT3GZ8DTrGZ8FZ8GZ8MXvGZ8On8GZ8ST3GbCnQXGbMbFnGboFboGboJg3GboMXoGb3JTvGb3JboGb3Mn6Gb3Qb8GgDXLjGgMnAUGgrDloGgrHX4GgrSToGgvAXrGgvAZvGgvFbrGgvLl3GgvMnvGnDnLXGnrATrGnrMboGnuLl3HTATMnHTAgCnHTCTCTHTrGTvHTrHTvHTrJX8HTrLl8HTrMT8HTrMgoHTrOTrHTuOn3HTvAZrHTvDTvHTvGboHTvJU8HTvLl3HTvMXrHTvQb4HT4GT6HT4JT8HT4Jb#HT8Al3HT8GZrHT8GgrHT8HX4HT8Jb8HT8JnoHT8LTrHT8LgvHT8SToHT8SV8HUoJUoHUoJX8HUoLnrHXrLZoHXvAl3HX3LnrHX4FkvHX4LhrHX4MXoHX4OnoHZrAZ8HZrDb8HZrGZ8HZrJnrHZvGZ8HZvLnvHZ8JnvHZ8LhrHbCXJlHbMTAnHboJl4HbpLl3HbrJX8HbrLnrHbrMnvHbvRYrHgoSTrHgrFV8HgrGZ8HgrJXoHgrRnvHgvBb!HgvGTrHgvHX4HgvHn!HgvLTrHgvSU8HnDnLbHnFbJbHnvDn8Hn6GgvHn!BTvJTCTLnJTQgFnJTrAnvJTrLX4JTrOUoJTvFn3JTvLnrJTvNToJT3AgoJT3Jn4JT3LhvJT3ObrJT8AcrJT8Al3JT8JT8JT8JnoJT8LX4JT8LnrJT8MX3JT8Rg3JT8Sc8JUoBTvJU8AToJU8GZ8JU8GgvJU8JTrJU8JXrJU8JnrJU8LnvJU8ScvJXHnJlJXrGgvJXrJU8JXrLhrJXrMT8JXrMXrJXrQUoJXvCTvJXvGZ8JXvGgrJXvQT8JX8Ab8JX8DT8JX8GZ8JX8HZvJX8LnrJX8MT8JX8MXoJX8MnvJX8ST3JYGnCTJbAkGbJbCTAnJbLTAcJboDT3JboLb6JbrAnvJbrCn3JbrDl8JbrGboJbrIZoJbrJnvJbrMnvJbrQb4Jb8RZrJeAbAnJgJnFbJgScAnJgrATrJgvHZ8JgvMn4JlJlFbJlLiQXJlLjOnJlRbOlJlvNXoJlvRl3Jl4AcrJl8AUoJl8MnrJnFnMlJnHgGbJnoDT8JnoFV8JnoGgvJnoIT8JnoQToJnoRg3JnrCZ3JnrGgrJnrHTvJnrLf8JnrOX8JnvAT3JnvFZoJnvGT8JnvJl4JnvMT8JnvMX8JnvOXrJnvPX6JnvSX3JnvSZrJn3MT8Jn3MX8Jn3RTrLTATKnLTJnLTLTMXKnLTRTQlLToGb8LTrAZ8LTrCZ8LTrDb8LTrHT8LT3PX6LT4FZoLT$CTvLT$GgrLUvHX3LVoATrLVoAgoLVoJboLVoMX3LVoRg3LV8CZ3LV8FZoLV8GTvLXrDXoLXrFbrLXvAgvLXvFlrLXvLl3LXvRn6LX4Mb8LX8GT8LYCXMnLYrMnrLZoSTvLZrAZvLZrAloLZrFToLZrJXvLZrJboLZrJl4LZrLnrLZrMT8LZrOgvLZrRnvLZrST4LZvMX8LZvSlvLZ8AgoLZ8CT3LZ8JT8LZ8LV8LZ8LZoLZ8Lg8LZ8SV8LZ8SbrLZ$HT8LZ$Mn4La6CTvLbFbMnLbRYFTLbSnFZLboJT8LbrAT9LbrGb3LbrQb8LcrJX8LcrMXrLerHTvLerJbrLerNboLgrDb8LgrGZ8LgrHTrLgrMXrLgrSU8LgvJTrLgvLl3Lg6Ll3LhrLnrLhrMT8LhvAl4LiLnQXLkoAgrLkoJT8LkoJn4LlrSU8Ll3FZoLl3HTrLl3JX8Ll3JnoLl3LToLmLeFbLnDUFbLnLVAnLnrATrLnrAZoLnrAb8LnrAlrLnrGgvLnrJU8LnrLZrLnrLhrLnrMb8LnrOXrLnrSZ8LnvAb4LnvDTrLnvDl8LnvHTrLnvHbrLnvJT8LnvJU8LnvJbrLnvLhvLnvMX8LnvMb8LnvNnoLnvSU8Ln3Al3Ln4FZoLn4GT6Ln4JgvLn4LhrLn4MT8Ln4SToMToCZrMToJX8MToLX4MToLf8MToRg3MTrEloMTvGb6MT3BTrMT3Lb6MT8AcrMT8AgrMT8GZrMT8JnoMT8LnrMT8MX3MUOUAnMXAbFnMXoAloMXoJX8MXoLf8MXoLl8MXrAb8MXrDTvMXrGT8MXrGgrMXrHTrMXrLf8MXrMU8MXrOXvMXrQb8MXvGT8MXvHTrMXvLVoMX3AX3MX3Jn3MX3LhrMX3MX3MX4AlrMX4OboMX8GTvMX8GZrMX8GgrMX8JT8MX8JX8MX8LhrMX8MT8MYDUFbMYMgDbMbGnFfMbvLX4MbvLl3Mb8Mb8Mb8ST4MgGXCnMg8ATrMg8AgoMg8CZrMg8DTrMg8DboMg8HTrMg8JgrMg8LT8MloJXoMl8AhrMl8JT8MnLgAUMnoJXrMnoLX4MnoLhrMnoMT8MnrAl4MnrDb8MnrOTvMnrOgvMnrQb8MnrSU8MnvGgrMnvHZ8Mn3MToMn4DTrMn4LTrMn4Mg8NnBXAnOTFTFnOToAToOTrGgvOTrJX8OT3JXoOT6MTrOT8GgrOT8HTpOT8MToOUoHT8OUoJT8OUoLn3OXrAgoOXrDg8OXrMT8OXvSToOX6CTvOX8CZrOX8OgrOb6HgvOb8AToOb8MT8OcvLZ8OgvAlrOgvHTvOgvJTrOgvJnrOgvLZrOgvLn4OgvMT8OgvRTrOg8AZoOg8DbvOnrOXoOnvJn4OnvLhvOnvRTrOn3GgoOn3JnvOn6JbvOn8OTrPTGYFTPbBnFnPbGnDnPgDYQTPlrAnvPlrETvPlrLnvPlrMXvPlvFX4QTMTAnQTrJU8QYCnJlQYJlQlQbGTQbQb8JnrQb8LZoQb8LnvQb8MT8Qb8Ml8Qb8ST4QloAl4QloHZvQloJX8QloMn8QnJZOlRTrAZvRTrDTrRTvJn4RTvLhvRT4Jb8RZrAZrRZ8AkrRZ8JU8RZ8LV8RZ8LnvRbJlQXRg3GboRg3MnvRg8AZ8Rg8JboRg8Jl4RnLTCbRnvFl3RnvQb8SToAl4SToCZrSToFZoSToHXrSToJU8SToJgvSToJl4SToLhrSToMX3STrAlvSTrCT9STrCgrSTrGgrSTrHXrSTrHboSTrJnoSTrNboSTvLnrST4AZoST8Ab8ST8JT8SUoJn3SU6HZ#SU6JTvSU8Db8SU8HboSU8LgrSV8JT8SZrAcrSZrAl3SZrJT8SZrJnvSZrMT8SZvLUoSZ4FZoSZ8JnoSZ8RZrScoLnrScoMT8ScoMX8ScrAT4ScrAZ8ScrLZ8ScrLkvScvDb8ScvLf8ScvNToSgrFZrShvKnrSloHUoSloLnrSlrMXoSl8HgrSmrJUoSn3BX6",
    "ATFlOn3ATLgrDYAT4MTAnAT8LTMnAYJnRTrAbGgJnrAbLV8LnAbvNTAnAeFbLg3AgOYMXoAlQbFboAnDboAfAnJgoJTBToDgAnBUJbAl3BboDUAnCTDlvLnCTFTrSnCYoQTLnDTwAbAnDUDTrSnDUHgHgrDX8LXFnDbJXAcrETvLTLnGTFTQbrGTMnGToGT3DUFbGUJlPX3GbQg8LnGboJbFnGb3GgAYGgAg8ScGgMbAXrGgvAbAnGnJTLnvGnvATFgHTDT6ATHTrDlJnHYLnMn8HZrSbJTHZ8LTFnHbFTJUoHgSeMT8HgrLjAnHgvAbAnHlFUrDlHnDgvAnHnHTFT3HnQTGnrJTAaMXvJTGbCn3JTOgrAnJXvAXMnJbMg8SnJbMnRg3Jb8LTMnJnAl3OnJnGYrQlJnJlQY3LTDlCn3LTJjLg3LTLgvFXLTMg3GTLV8HUOgLXFZLg3LXNXrMnLX8QXFnLX9AlMYLYLXPXrLZAbJU8LZDUJU8LZMXrSnLZ$AgFnLaPXrDULbFYrMnLbMn8LXLboJgJgLeFbLg3LgLZrSnLgOYAgoLhrRnJlLkCTrSnLkOnLhrLnFX%AYLnFZoJXLnHTvJbLnLloAbMTATLf8MTHgJn3MTMXrAXMT3MTFnMUITvFnMXFX%AYMXMXvFbMXrFTDbMYAcMX3MbLf8SnMb8JbFnMgMXrMTMgvAXFnMgvGgCmMnAloSnMnFnJTrOXvMXSnOX8HTMnObJT8ScObLZFl3ObMXCZoPTLgrQXPUFnoQXPU3RXJlPX3RkQXPbrJXQlPlrJbFnQUAhrDbQXGnCXvQYLnHlvQbLfLnvRTOgvJbRXJYrQlRYLnrQlRbLnrQlRlFT8JlRlFnrQXSTClCn3STHTrAnSTLZQlrSTMnGTrSToHgGbSTrGTDnSTvGXCnST3HgFbSU3HXAXSbAnJn3SbFT8LnScLfLnv",
    "AT3JgJX8AT8FZoSnAT8JgFV8AT8LhrDbAZ8JT8DbAb8GgLhrAb8SkLnvAe8MT8SnAlMYJXLVAl3GYDTvAl3LfLnvBUDTvLl3CTOn3HTrCT3DUGgrCU8MT8AbCbFTrJUoCgrDb8MTDTLV8JX8DTLnLXQlDT8LZrSnDUQb8FZ8DUST4JnvDb8ScOUoDj6GbJl4GTLfCYMlGToAXvFnGboAXvLnGgAcrJn3GgvFnSToGnLf8JnvGn#HTDToHTLnFXJlHTvATFToHTvHTDToHTvMTAgoHT3STClvHT4AlFl6HT8HTDToHUoDgJTrHUoScMX3HbRZrMXoHboJg8LTHgDb8JTrHgMToLf8HgvLnLnoHnHn3HT4Hn6MgvAnJTJU8ScvJT3AaQT8JT8HTrAnJXrRg8AnJbAloMXoJbrATFToJbvMnoSnJgDb6GgvJgDb8MXoJgSX3JU8JguATFToJlPYLnQlJlQkDnLbJlQlFYJlJl8Lf8OTJnCTFnLbJnLTHXMnJnLXGXCnJnoFfRg3JnrMYRg3Jn3HgFl3KT8Dg8LnLTRlFnPTLTvPbLbvLVoSbrCZLXMY6HT3LXNU7DlrLXNXDTATLX8DX8LnLZDb8JU8LZMnoLhrLZSToJU8LZrLaLnrLZvJn3SnLZ8LhrSnLaJnoMT8LbFlrHTvLbrFTLnrLbvATLlvLb6OTFn3LcLnJZOlLeAT6Mn4LeJT3ObrLg6LXFlrLhrJg8LnLhvDlPX4LhvLfLnvLj6JTFT3LnFbrMXoLnQluCTvLnrQXCY6LnvLfLnvLnvMgLnvLnvSeLf8MTMbrJn3MT3JgST3MT8AnATrMT8LULnrMUMToCZrMUScvLf8MXoDT8SnMX6ATFToMX8AXMT8MX8FkMT8MX8HTrDUMX8ScoSnMYJT6CTvMgAcrMXoMg8SToAfMlvAXLg3MnFl3AnvOT3AnFl3OUoATHT8OU3RnLXrOXrOXrSnObPbvFn6Og8HgrSnOg8OX8DbPTvAgoJgPU3RYLnrPXrDnJZrPb8CTGgvPlrLTDlvPlvFUJnoQUvFXrQlQeMnoAl3QlrQlrSnRTFTrJUoSTDlLiLXSTFg6HT3STJgoMn4STrFTJTrSTrLZFl3ST4FnMXoSUrDlHUoScvHTvSnSfLkvMXo",
    "AUoAcrMXoAZ8HboAg8AbOg6ATFgAg8AloMXoAl3AT8JTrAl8MX8MXoCT3SToJU8Cl8Db8MXoDT8HgrATrDboOT8MXoGTOTrATMnGT8LhrAZ8GnvFnGnQXHToGgvAcrHTvAXvLl3HbrAZoMXoHgBlFXLg3HgMnFXrSnHgrSb8JUoHn6HT8LgvITvATrJUoJUoLZrRnvJU8HT8Jb8JXvFX8QT8JXvLToJTrJYrQnGnQXJgrJnoATrJnoJU8ScvJnvMnvMXoLTCTLgrJXLTJlRTvQlLbRnJlQYvLbrMb8LnvLbvFn3RnoLdCVSTGZrLeSTvGXCnLg3MnoLn3MToLlrETvMT8SToAl3MbrDU6GTvMb8LX4LhrPlrLXGXCnSToLf8Rg3STrDb8LTrSTvLTHXMnSb3RYLnMnSgOg6ATFg",
    "HUDlGnrQXrJTrHgLnrAcJYMb8DULc8LTvFgGnCk3Mg8JbAnLX4QYvFYHnMXrRUoJnGnvFnRlvFTJlQnoSTrBXHXrLYSUJgLfoMT8Se8DTrHbDb",
    "AbDl8SToJU8An3RbAb8ST8DUSTrGnrAgoLbFU6Db8LTrMg8AaHT8Jb8ObDl8SToJU8Pb3RlvFYoJl"
];
const codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
function getHangul(code) {
    if (code >= 40) {
        code = code + 168 - 40;
    }
    else if (code >= 19) {
        code = code + 97 - 19;
    }
    return (0, index_js_2.toUtf8String)(new Uint8Array([225, (code >> 6) + 132, (code & 0x3f) + 128]));
}
let _wordlist = null;
function loadWords() {
    if (_wordlist != null) {
        return _wordlist;
    }
    const wordlist = [];
    data.forEach((data, length) => {
        length += 4;
        for (let i = 0; i < data.length; i += length) {
            let word = "";
            for (let j = 0; j < length; j++) {
                word += getHangul(codes.indexOf(data[i + j]));
            }
            wordlist.push(word);
        }
    });
    wordlist.sort();
    // Verify the computed list matches the official list
    /* istanbul ignore if */
    const checksum = (0, index_js_1.id)(wordlist.join("\n") + "\n");
    /* c8 ignore start */
    if (checksum !== "0xf9eddeace9c5d3da9c93cf7d3cd38f6a13ed3affb933259ae865714e8a3ae71a") {
        throw new Error("BIP39 Wordlist for ko (Korean) FAILED");
    }
    /* c8 ignore stop */
    _wordlist = wordlist;
    return wordlist;
}
let wordlist = null;
/**
 *  The [[link-bip39-ko]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangKo extends wordlist_js_1.Wordlist {
    /**
     *  Creates a new instance of the Korean language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langKo]] should suffice.
     *
     *  @_ignore:
     */
    constructor() {
        super("ko");
    }
    getWord(index) {
        const words = loadWords();
        (0, index_js_2.assertArgument)(index >= 0 && index < words.length, `invalid word index: ${index}`, "index", index);
        return words[index];
    }
    getWordIndex(word) {
        return loadWords().indexOf(word);
    }
    /**
     *  Returns a singleton instance of a ``LangKo``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangKo();
        }
        return wordlist;
    }
}
exports.LangKo = LangKo;
//# sourceMappingURL=lang-ko.js.map
}, function(modId) { var map = {"../hash/index.js":1730085369217,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369289, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangIt = void 0;
const wordlist_owl_js_1 = require("./wordlist-owl.js");
const words = "0torea noica!iosorolotaleratelanena%oiadoencotivomai t ca%a0A]Bagl'Bin#E.Is(Oli!Rasi_Rog#0Cade!C[$Cus#E <Hil,I@QuaReRil>Roba+U 0Ag'Deb{DomeEgu#Eri!IpeOtt&Ul&1Fabi,Fe|Fis(F-n Oris`O(R~$0AveEn.E_,Ganc'I!It&OnismoR>*Rume Uzzo4AbardaA Bat)Ber#BoBumeCeCol>E|<FaGeb-Ian.IbiIm[ Lag#Leg)Lie_Lo@/Lusi_Me$Oge$Pa}Pest!Ta,=Ter$T%c'T)veUn$Veo*Z&0Alga`Ani+A!=B{Br#EbaEr~E^s+I]Mas(M[daMir&Mon{O!P'Pli&U, 0A}r@Ag-feAlis+Arch?At-CaCel/Co-D&D!aEl*Ge*Gol&Gus I`Neg&Nid#NoNunc'OnimoT%ipoZi1At>Ertu-OdePari!Pe^ Pogg'P)@Pun Ri,1Ab~AchideAgos+Ald~Anc'Atu-AzzoBit)Chiv'D{Eni,G[ Gi<Gu IaMon?NeseRed#RingaRos S[>SoTef%eZil*0Ciu|Col EpsiEtt>Fal I$O/Pir#P)Sagg'SeSolu Sur@TaT[u T%eT-|0Av>EismoOm>O$TesaTiv&Tor$Tr{Tua,0Sil'Str?Tis+To$moTun$0Anz#E!V[i!Vi(Volge!3Io<O ZimoZur):Be,C}$Ci$CoDessaDi/+Gn#I+L]<L@Le=L/+Lza$Mbi$Ndi!RaondaRba)R}R{$RlumeRoc]Sil>S(Tos+Ttu U,VaVosa3C]FfaLg'LvaNdaNe_,Nig$Nzi=ReRli=Ta3Bi+CiDo<Fi@GaLanc?MboNo]*O*goPedePol&Rban.R-S]|Ses S$n$Son.SturiZzar)2An@At+2Ll{Nif>R@S]Tan>T^$Zzo*2Acc'AdipoA`An}Avu-E.l/Eve|EzzaIgl?Il/n.Ind&Oc]*O@Onzi=Ul*U$2Bbo<CaDi$Ffo<IoLboO$R*<R-s}S(/S+:De|Du]La`)L]*LesseLib)LmoLor?MbusaMe-+M%?Mmi$Mo/Mpa,NapaNde/NeNi$No|N^=PacePel*P{*Pogi)Ppe)P-Psu/RapaceR}ssaR@Ris`Rova=R!|R li=Sacc'S}+Ser`SoS(<S.l*Sua,Tas+Te=T-meU Vil*3Dibi,D-+Fa*Leb!Llul&NaNo<N.simoRam~Rc&R RumeRvel*So?SpoTo2E/Ia)Ic}Iede!Ime-I=IrurgoI+r-0AoClismoFr&G$Lind)O|*R}R)siTr>T+di$UffoVet+Vi,2Ass>In~O)2C]Dar@D%eE!n.G$meLl&Lm#Lo!Lpo(L^v#LzaMaMe+M`n@Mo@Mpu.rMu<Nci(Ndur!Nfer`Ngel&NiugeN<s(Nosce!NsumoN^nuoNveg$Per P'<Pp?Pr~poRazzaRda+R%#Rn%eRol/RpoR!@Rs?R.seSm>S+n.Ttu-V#2A.!Avat+E#Ede!Emo(Esci+E+Ice I=,IsiIt>OceO=}Os++Uc?,Us}2Ci!Cu*Gi$Ll#Po/R#!R(!R_Sci$S de:DoI$L`+Meri$Nie/N$(Nz&T#Van^Vve)3Bu|C[n'Ci(Cli$Col*C! D%#Fin{FormeG$Leg&Lfi$Lir'L+M[zaNot#Nt)Pos{Rapa+Riv&RogaScri|Ser Sider'Sume!Tersi_Vo 3Amet)Cemb!Ed)Fe(Ffu(Geri!Gi+,Luv'Nam>N=nziPin P*`Po*Rad&ReRo|RupoSag'Sc! Sf&Sge*Spos S+nzaSu`$ToVa$Vel Vide!Vor#5B*<C[.Ga=,G`LceM#M[~Min&N@*NoRmi!TeT !Vu Zzi=2AgoUi@2Bb'Bit&Ca,NaOmoPl%eRatu):0A$0Ces(CoLissiO$m?0E-I]/I,I r?Uc&2Emon?LiOismoReg'4Abor#Argi!Egan.Enc#E|Ev&F>I}MoSaU(0An#B,`Es(I)O^_Oz'<Pir>U*0Dem>Du)Erg?FasiO.}Tr&Zi`1A^.I*goI(d'O},Pu!0U#!0Ar'BaBo(EdeEmi+Ige!Met>OeOsi_Ran.0Ago$AmeAnimeAudi!CaEmp'Erc{Ib{Ig[.Is.!I OfagoOrt#O(Pan(P!s(S[zaSoTe(Tim&Ton?T)(Ult&0Il>N>Rus]To0ClideoRopa0A(Id[zaIt#Olu Viva:Bbr~Cc[daChi)L]Migl?Na,Nfa-NgoN+s`ReRfal/Ri$(R`]Sc?S (Sul*T%&ToVo*(3Bb!Co/DeG#LpaLt)Mmi=Nde!Nome$Rm[ R)R^,Ssu-S^_T+U@3AbaDuc?FaGur#LoNanzaNest-Ni!O!S},S>Ume2A]<Am[]EboEm`Ori@U[.Uo)2B>Cacc?Co(Der#Gl'La+Lc*!Lgo!Nd[.Net>N?N+=Rb{Rchet+Res+Rm~R='RoR.zzaRz&Sf#S(2A}s(A=Assi$A.l*Eccet+E=+Es]IgoOlli$OndeUga,Ut+2Ci/+Cs?Gg[.Lmi<L_Man.Me|Mo(NeNz'<O]RboRgo<Ro!SoTi,:Bb?$FfeLa.oLli=LoppoMbe)M`Ranz?RboRofa$Rzo<S@|Sol'Str>T Ud'ZeboZzel/3CoLa^=L(Mel*Mm#NeN{!N='No^poRgo2Epar@Iacc'Isa0Al*LdaNep)Oc&Oiel*Or$OveR#Ro<T++Udiz'Ur#Us 2Obu*U^<1Omo0BbaLfM{Mmo<Nf'N=Ver$2Aci,A@Af>AmmoAndeAtt&A_(Az?E}EggeIfo<Ig'InzaOt+Uppo2Adag$A'An Ard&FoId&::0Ern#0O=0Ent>Ill'O*RaR>Roge$2Ie<Na)Nor#4A!Le(Log>Lude!0Bal*Bevu Boc]Bu Ma<Mer(Mol#Pac]Pe PiegoPor P)n+0Al&Arc&At^_Can C[d'Chi$Cisi_Clu(Cont)C)c'CuboDagi<D?Do,Ed{Fat^Fil&Fli|Gagg'Geg$G,seGor@G)s(Nes]O@!Oltr&Ond#Sa$Se|SiemeSonn?Suli=Tas#Te)To=]Tu{Umidi!Vali@VeceV{1Erbo,Not>O.siP~1IdeLandaOn>Rig#Ror&0Ol#O poTer>Titu Tr%e0Al?Er&:::Bb)Birin C}Cer#Cri`Cu=D@veGoMpoNcet+N.r=R@(RgaRingeSt-T[zaTi$TtugaVag=Vo)3Ga,Gge)MboN.zzaNzaO<P!Si_Ss#S T.-,VaVig#3Be)DoEv{L/Matu-Mit&Mpi@Ne&NguaQui@RaR~S}TeTig'V!a5CandaDeG~Mb&Nd-Nge_QuaceR[zoToT.r?5CeCid#Ma}Mi$(NgoPoPpo*SingaS(T :Cab)Cchi=Ce)Cin#Da`G>Gl?G<.G)Iol~LafedeLg-@Lin.(Lsa$L Lumo!NaNc?N@r/Ngi&Nifes N=)Nov-NsardaN^deNubr'PpaR#=Rci!Ret+RmoRsup'Sche-Ssa?S^$Te-s(Tr>/T <Tu)Zur}3And)C}n>Ce=.DesimoDit&GaLassaLisLod?NingeNoN(/Rcur'R[daR*Schi$SeSse!S *Tal*To@T.!3Agol&CaCel'Che,C)boDol*E,Gl'!La$Li.MosaNe-,NiNo!Ri$R^l*Sce/SsivaS Sur&TezzaTig&T-T.n.4Emon>0Del*Dif~Du*Ga$G'LeLos(Nas.)N]Ndi=Ne+r'Ni,No $N(<Nt#Nvi(RaRde!Rs%#St)Tiv#TosegaT V[zaVim[ Zzo5C}CosaFfaGhe|G='La|Li<l*L^p*Mm?N Ove!Ra,SaS]*S~Te_,To:BabboF+Nomet)Rci(R%eRr#Sce!Str&Tu-,Ut~Vigl'3Bu*saC)siGa^_Goz'Mme$Ofi+Re|R_Ssu$Ttu$Ut-,VeV)t>3Cch?NfaTi@5Bi,Ci_DoMeMi=Rd>R`,RvegeseSt-$T&Tiz?Ttur$Vel/5C,oL/Me)O_Tri!Vo/Z?,:Si0Bedi!BligoElis]L'O*So, 0Cas'<Ch'Cid[.Cor!!Cult&RaUl#0Ier$Or&1Fer+Fri!Fusc#0Ge|GiNu$4AndeseFa|I#IvaOg-m`T!0Agg'Bel>B-EgaIss'<0Do(E!IceNi_)O!_,Ta1Er#In'<Pos 1A]*AfoDi<Ecchi$Ef%eFa$Gan>Igi<Izzon.MaMegg'Na^_O*g'R[@Ribi,T[s?T~Za+Zo0A!Cur&MosiPeda,Pi.SaSid&Ta]*Te0I.ReTago$TimoTob!1A,EstI$Ipa)Oc{UnqueVi&3Io:Cche|CeCif>Del/D)<EseGaGi=Lazzi=Les&Lli@LoLudeN@)N<l*O*O=zzoPr~Rabo/Rcel/Re!Rgo*RiRl#Ro/R^!Rv[zaRz?,Ssi_St%}Tac}To*g?TtumeVo<3Cc#Dal&Do=,Gg'Lo(N&Nd%eNi(/Nnu Nomb-Ns&N /PePi+Rbe<R]r(R@n#Rfor&Rgame=R'@Rmes(R$Rp,s(Rsua(Rtug'Rva(S#!Sis+SoS^fe)Ta*T^<Tu/n.Zzo3Ace!An+At^$Cci$CozzaEgaEt-Ffe)G?`Gol'G)LaLife)L*/Lo+Mpan.Ne+N=No*Ogg?OmboRamideRet>Ri.RolisiTo<Zz>2AceboAn&As`A+$E=r'2ChezzaDe)(DismoEs?Ggi&L[+Ligo$Ll%eLmoni.Lpet+L(Lt)=Lve!M%eMo@)N.Po*(Rfi@Ro(Rpo-R!R++SaSi^_Sses(Stul#Tass'Te!2AnzoAssiAt~Eclu(Ed~Efis(Egi#Elie_Eme!E$t&Epar#Es[zaE.s Eval(I`IncipeIv#Ob,`Ocu-Odur!OfumoOge|OlungaOmessaO$meOpos+O)gaO.(OvaUd[.Ug=Ur{0Iche1Bbl>D~Gil#G$LceL{Lsan.Nt&PazzoPil/Ro:99Ad)Al]saAsiE!/O+:C]l D@pp'D~,Dun#Ff~GazzoG'<G$Mar)MingoMoNdag'N l&P#Pi=Pp!(Satu-Schi#S[.Sseg=St!l*TaVvedu 3A,Cepi!Cin Clu+Cond{Cupe)Dd{Dime!Gal#Gist)Go/G!s(Laz'<M&Mo N=Pl~Prime!Put&SaSid[.Spon(S+u)TeTi=Tor~T^f~Voc#3Assun Badi!Bel,B!zzoCar~C]Ceve!C%l#Cor@C!du D>*Dur!Fas&F,s(For`Fug'G&Gett#Ghel*Lass#Lev#Ma<!MbalzoMed'Morch'Nasci+N})NforzoN$_Nom#Nsav{N c]Nunc?Nv[i!Par#Petu Pie$Port&P!saPuli!Sa+Sch'ServaSibi,SoSpe|S )Sult#S_l Tar@Teg$Tm>T)_Un'<VaVer(Vinci+Vol Zo`5BaBot>Bus Cc?CoDagg'De!D{!G{Ll'Mant>Mpe!Nz'Sol&SpoTan.Ton@Tu/Vesc'5BizzoBr~GaLli$Mi<Mo)(O*PeSs&St>:B#Bbi&Bot#Go`Las(Ldatu-Lgem`Liv&Lmo<Lo<Lt&Lu L_Pe!Pi@Por{Race$R}smoR S((Telli.Ti-Tol*Tur$Va=V'Zi#0Adigl'AlzoAnc#Ar-At.!Av&End&Irci&Locc#Occi#Rin&Ruffo<Uff&0Ab)(Ad[zaA/Ambi&Anda*Apo/Ar(A.n&Av#El En>Ett)HedaHie=IarpaI[zaInde!IppoI)ppoI_*Ler&Odel/Olp{Ompar Onfor Opri!Or+Os(<OzzeseRibaRoll&Ru^n'Uder?Ul !Uo/U)Us&0Ebit&Ogan&0C}tu-Con@Da$Gg'/G=l#G!g#Gu{Lci#Let^_L/Lvagg'Mafo)Mbr&MeMin#Mp!N(N^!Pol Qu[zaRa+Rb#Re$R'Rp[.R-gl'Rvi!S^=To/T^`=0Ace*Ald&Am#Arzo(At%#E-IdaIl#IngeOc#Oder&OgoOl^!Orz#Ra|Rutt#Ugg{Um&U(0Abel*Arb#Onfi&Orb'Rass#Uar@1Bi*C]meEr-G/G$!L[z'L/baMbo*Mpat>Mul#Nfon?Ngo*Nist)NoN.siNu(idePar'S`S ,Tu#2It+Ogatu-Ove$0Arr{Emor#En^ E-l@IlzoOnt&Ott#Uss#0Elli!Erv#O@0BbalzoBr'C]r(C?,Da,Ffi|G$Ld#L[<Li@L/zzoLoLubi,Lv[.Mat>M`NdaNe|Nnife)Pi!Ppe(P-Rge!Rpas(Rri(R(R.gg'R_l#Spi)S+T^,0AdaAl/Arge!A /Av[ Azzo/EcieEdi!Eg<!E/tu-E-nzaEs(!Ett-,Ezz#IaIgo*(Ill#I$(I-,L[di@Or^_O(RangaRec&Ron#RuzzoUn^$0Uil*0Ad%&O l#1Abi,Ac]AffaAgn&Amp#Ant'Arnu Ase-Atu E*EppaErzoI,|I`IrpeIva,Izzo(On#Or>RappoReg#Ridu*Rozz&Ru|Ucc&UfoUp[@0B[t)C](Do!Gger{GoL+$On&PerboPpor Rgel#R)g#Ssur)Tu-0Ag&EdeseEgl'El&Enu Ez?IluppoIs+Izze-Ol+Uot&:Bac]Bul#Cci&Citur$LeLis`$Mpo<Nni$RaRdi_Rg#RiffaRp&R+rugaS Tt>Ver=Vo/+Zza3CaCn>Lefo$Me-r'MpoMu N@<Ne)Ns'<N+]*O!`RmeR-zzoRze|SiSser#St#T)T ?3F&Gel/Mb)N P>Pog-foRagg'RoTan'To*Tuban.Z'Zzo<5Cc&L,r&L Mbo/MoNfoNsil/Paz'Po*g?PpaRbaRn&R)<R -S}$Ssi!S+tu-Ta$2Aboc]AcheaAfi/Aged?Alc'Amon Ans{Apa$Ar!As*]Att#AveEcc?Emol'Espo*Ibu Iche]Ifogl'Il*InceaIoIs.zzaItur#Ivel/OmbaO$OppoO|/Ov&Ucc#2Batu-Ff#Lipa$Mul Nis?Rb&Rchi$TaTe/:0Ic#0Cel*Ci(!0I!I^_1FaF%'0Ua,4IsseTim#0A$I,Orismo0Ci<|Ge!Ghe!seI]r$If%#I($I+r'Te0Vo0Upa1Aga$G[zaLo0AnzaA C{Ig$*U-'0Ensi,IlizzoOp?:Can.Ccin#Gabon@Gli#LangaLgoL>L,t+Lo)(Lut&L_/Mpa+Ng&N{(NoN+gg'Nve-Po!Ra$Rc#R?n.S}3Det+DovaDu Ge+,I]*Lc)Li=Llu LoceN#Ndemm?N RaceRba,Rgog=Rif~RoRru}Rt~,Sc~Ssil*S+,Te-$Tri=Tus 3Andan.B-n.C[daChingoCi=nzaDim&Gil?G< Go!LeL/$MiniNc{!O/Pe-Rgo/Ro*goRu,n S](S'<SpoSsu Su-TaTel*T^`VandaVi@Zi&5CeGaLa^,Le!LpeRagi<5L}$::::Mpog=N=Pp#T.-Vor-3Fi)Lan.LoNze)Rbi$3Be|N]R]<T 5L/T>5Cche)Fo*LuPpa";
const checksum = "0x5c1362d88fd4cf614a96f3234941d29f7d37c08c5292fde03bf62c2db6ff7620";
let wordlist = null;
/**
 *  The [[link-bip39-it]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangIt extends wordlist_owl_js_1.WordlistOwl {
    /**
     *  Creates a new instance of the Italian language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langIt]] should suffice.
     *
     *  @_ignore:
     */
    constructor() { super("it", words, checksum); }
    /**
     *  Returns a singleton instance of a ``LangIt``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangIt();
        }
        return wordlist;
    }
}
exports.LangIt = LangIt;
//# sourceMappingURL=lang-it.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369291, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangPt = void 0;
const wordlist_owl_js_1 = require("./wordlist-owl.js");
const words = "0arad!ototealirertainrasoent hoandoaR#riareha!aroele'oronul0Aca%AixoAl A%rDuz'El]Er$IsmoO$ R<g(Revi Rig Rup$S*$Solu$Sur=Ut[0Ab#Alm Amp Anh A,Ei.El( En ErvoEss E$naHa.IdezImaI}#Irr Lam LiveOlhidaOmod Opl Ord Um~ Us?0Ap.EgaEnt_Ep$Equ Er-%EsivoEusI<%ItivoJetivoJun$M' Or Qu''UboV(,Vog#0R}ave0As.Er'EtivoIn?Iv` Li$Lu-%R}.0Ach Arr As&/Enci Iliz Io)It#O+R! Res%Rup U d Ul]2O`h Ud Us.1AmedaArmeAstr Av<caB(gueB*oCat+De@EcrimEgr@Er.FaceF*e%GumHeioI Ica%I- Inh Ivi Mof^Oc Pis%T( TitudeUc* Ug UnoUsivoVo0Aci A=rA[loAss BasBi-%EixaEniz I=Is$,Iz!eOl?On$ O_,Ost+P  Pli Pola0Ag+maAlis Arqu@A$m@DaimeElExoG~ Im JoOm&@Ot#Sio,T(i|Uid!eUnci Zol1Ag?Alp Anh#EgoEli=Ert^Es Eti%I$Lau,Lic^OioOn.Os)R-dizRov 0Uec(0AmeAn]A+C^D-%E@Ej Eni$Es)Gilo,GolaMaQuivoRai&Reba%Risc Rob>um S-&T(i&TigoVo[=0F&.Il#P' S?S* So&/Sun$Tr&0Ac#Adu+Al/A[f E End(Er_EuIng'Ir?IvoOl{oRac Revi=RizU&Um0Di$rM-.R>o+TismoT|@Tu 0Ali An%Ar@Ent&Es,I?Is Ul,1Ila1Ar E=Ei%Ulejo:B BosaC&]uCh `C@GagemI<oIl I}e)Ir_Ixis)J~ Le@LizaLsaN&Nd{aN/N'Nque%Ra$Rb#R}es>+c>~/Se#S)n%Ta)Te=rTidaTomTuc Unil]3B(IjoIr^IsebolLd!eLezaLgaLisc Ndi$Ng&aNz(RimbauRl*d>_Sou_XigaZ(_3CoCu=En&Foc&Furc G|naLhe%Mest[Mo$rOlog@OmboOsf(aPol Rr-$Scoi$Sne$SpoSsex$TolaZ _2Ind#OcoOque 2A$BagemC#CejoChec]Ico.L^LetimL]LoMb{oNdeNecoNi)Rb~h>d>e&R+c]V*oXe?2AncoAsaAvezaEuIgaIl/Inc OaOchu+Onze O$Uxo2C]DismoF LeRacoScaS$Z*a:B<aB`oBideBoBri$CauCet^C/r_CiqueDast_De#Fez&IaqueIp'aIxo%J#JuLafrioLc~ Ld{aLibr Lm<%Lo)M^Mbis)MisaMomilaMp<]Mufl Navi&Nc` Ne)NguruN/$Nive%NoaNs#N.Nu=Pac/P`aP* Po.Pric/Pt?PuzRacolRb}oRde&Rec>imb Rn{oRpe%R['>)zRv&/SacoScaSeb[S%loS~oT a)Tiv UleUs?U%l V&oV(na3BolaDil]G}]Lebr L~ Nou+N,N%ioRc Rr#R%'oRvejaTimV^2Aco)Al{aAm#Ap^ArmeAticeAveEfeEg^E'oEqueIco%If[In`oOc&/Ov(UmboU.Uva0CatrizCl}eD!eD['aEn%G<aM-$N$Nz><d>cui$Rurg@T 2A[zaE_Ic OneUbe2A=Ag'Ba@B($rBr C^El/Ent_E,Gum`oIb'IfaIo%L L{aLh(Lid'Lme@L}oLunaM<=Mb* M-.MitivaMov(MplexoMumNc]N=rNec.Nfu,Ng` Nhec(Njug Nsum'Nt+$Nvi%Op( P{oPi?PoQue%lRagemRdi&Rne)R}h>p|&R[ioR%joRuj>voSs-oS%laT}e%U_UveVilZ*]2A%+AvoEcheE=rEmeErEspoI^Im*&Io~oIseItic Os)UaUz{o2B<oEcaId#JoLat+Lm* Lp Ltu+Mpr'Nh#Pi=RativoRr&Rs R$Sp'S% T`o:MascoT 3Ba%rBi.BocheB~h C&queCim&CliveCo%C[.D&Dic#Duz'FesaFum G`oG+uGus.It#Ix La$rLeg#L*e L}gaM<daMit'Moli=Ntis)P-#Pil PoisP[ssaPur Riv>+m SafioSbo.Sc<,S-/Sfi#Sgas%Sigu&SlizeSmam SovaSpesaS)queSvi T&h T-$rT} Tri$UsaV(Vi=Vot#Z-a3Ag+maAle$Da)Fu,Gi.Lat#Lu-%M*u'Nast@Nh{oOceseRe$Sc[)Sf ceSp oSque%Ssip S)n%T?UrnoV(,Vi,rV~g Z(5Br?L|i=M?M*#NativoNz`>m-%Rs&SagemUr#U$r2EnagemIbleOg @2El EndeE$PloQues><%Vi=,:1Lod'O Olog@0Ific It&Uc#1Ei$Etiv 3E.1Ab| Eg(Ei$rEncoEv?Im* Ogi 0B goBol#Br~/Buti=EndaErg'Is,rPat@P-/P*#Polg P[goPurr Ul?0CaixeC-#Ch-%C}t_Deus Doss Faix Fei%FimGaj#G-/Glob Gom#G+x Gu@Jo La.Qu<$Raiz Rol#Rug SaioSe^S*oSop#T<$Te#Tid!eT|.Tr^T~/V(g Vi#Volv(XameX($Xof[Xu$1Id(me0Uip 0E$Gui=Ra)VaVil]0B<j B`$CamaColaCri)Cu)F*geFol F[g Fum#GrimaM&%P<$P`/PigaP}jaP[i)Pum Qu(daTacaT{aTic Tof#T[laTu=Vazi 0AnolIque)0F|i>opeu0Acu Ap| AsivoEntu&Id-%Olu'1Ag(oAl Am* A$Aus$Ces,Ci.Clam Ecu.EmploIb'Ig-%On( P<d'P`'P' Pl< Pos$P[s,P~s T(noT*$T+$:Bric B~o,Ce)Ci&DaDigaIxaL L)Mili Nd<goNf +N$cheRd#R`oR*h>of>p>tu+T@T|V|i)X*aZ-da3Ch#Ijo^I+n%L*oM**oNdaNoR>i#RrugemRv(S%j T&Ud&3ApoB_seC Ch{oGur#L{aL/LmeLtr RmezaSg^Ssu+TaV`aX?Xo2AcidezAm*goAn`aEch^O+Utu Uxo2C&C*/Foc GoGue%IceLg#Lhe$Rj Rmig>noR%ScoSsa2Aga)AldaAngoAscoA%rnoE'aEn%E.IezaI,Itu+On]Ustr U%'a2G'L<oLigemNd NgoNilR?Rio,Tebol:B i$B*e%DoIa$IolaIvo)LegaL/L*]Loc]Nh RagemRfoRg&oRimpoRoup>+faSodu$S$TaTil/Ve)Z`a3L#Le@LoM^M(Mi=N(o,NgivaNi&NomaN_Ologi>?Rm* S,S$r3Nas)Nc<aNg#Raf>*o2Aci&IcoseOb&Orio,2ElaIabaLfeLpe Rdu+Rje)R_S$,T{aV(n 2AcejoAdu&Afi%Al]AmpoAn^Atui$Ave$AxaEgoElh EveIloIs&/I.@Os,O%scoUd#Unhi=U)2AcheA+niAx*imEr[ I Inc/Is#LaLo,Ru:Bi.Rm}@S%V(3C.eRd Res@Si.3A$B(n D+.EnaNoPismoPnosePo%ca5JeLofo%MemNes$Nr#Rm}&Sped 5M|#:Te2E@O,2N|#RejaU<a4E,HaUdi=Um* Ustr 0AgemEd@$En,ErsivoIn-%It?Ort&Pac$Ped'Pl<%P|Pr-saPuneUniz 0Al?Ap$AtivoC-,Ch Cid'Clu'Col|Deci,D'e$Du$rEficazEr-%F<tilFes.F*i$Flam F|m&F+$rG('Ibi=Ici&ImigoJe.Oc-%O=_Ov?OxQuie$Scri$Se$Sist'Spe$rSt& S~$Tac$Tegr&Tim Toc#TrigaVa,rV(noVic$Voc 0Gur%2Ani<oOniz Re&Rit#0CaEn$Ol#Qu{o0Ali<o:N{oNg^N)R ac>dimR_SmimToV&iZida3Jum9An*]Elh^G?I>n&Rr Vem5BaDeuDocaIzLg?L/R#Ris)RoS)::B edaB|&C[C)n%Dril/G )GoaJeMb(M-.M* MpejoNchePid P,R<j>{>gu+S<]St_T(&Ti=V<daVou+Vr?X<%Z(3Ald!eB[G#G-d Gis)IgoIlo Itu+Mb[%MeNh?Ntil]OaSmaS%TivoT['oV VezaVi.3B(&Bi=D( G G{oMi.Mo{oMp?NdaNe N]gemQuidezS)gemSu+T|&V_XaX{a5C?Cu$rJis)MboNaNgeNt+RdeT#T(@Ucu+UsaUv 5ArCidezC_Ne)St[T?Va:CacoCe%Ch#CioD{aDr*]Gna)G[zaI|IsL<d_L]Lo%LucoMiloMo{oMu%N^Nc]Nda$NequimN/,Niv`aNobr NsaN%rNuse Pe#Qu* Rc?Resi>fimRgemR*/Rmi)Ro$RquiseR[coR%loRujoSco%Sm|+SsagemStig Tag&T(noT*&Tu.Xil 3D&]DidaDusaGaf}eIgaL<c@L/rMb_M|i&N*oNosNsagemNt&Rec(Rg~/S^Scl SmoSqui)St[T!eTeo_T+gemX(Xic<o3C_G&]Gr Lag[L- Lh M#N( N/caNist_N|@OloR<%RtiloStur 5Cid!eD(noD~ EdaErIn/I)Ldu+LezaL/L*e%LuscoN)n]Quec><goRcegoR=moR-aSaicoSque%S.daT`TimToTriz5DaI$La)Lh(L.Ndi&Ni=R&h>c/Sc~ SeuSic&:Ci}&D?JaMo_R*>r#Sc(TivaTu[zaV&]Veg Vio3Bl*aB~o,GativaGoci Gri$Rvo,TaUr&VascaVo{o3N N/TidezV` 5B[zaI%IvaMe M*&Rdes%R% T Tici TurnoV`oVil/Vo5Bl#DezM(&Pci&Tr'Vem:0Cec#Edec(JetivoRig#Scu_S%t+T(Tur 0Id-%Io,Orr(Ulis)Up#2Eg<%EnsivaEr-daIc*aUsc#0Iva4Ar@Eo,H Iv{a0B_Ele%Is,It'0D~#E_,Tem1Ci}&Er?On-%OrtunoOs$1ArBi.DemD*&F<a$GasmoG~/I-t&IgemIun=LaTo=xoV&/0Cil S^SoT-.0Imismo0S!@T}oTub_Vi=0El]Ul 1Id Ig- :Ca$Ci-%Co%Ctu D @Dr*/G GodeIn`Ir IsagemLav+Lest+Lhe)Li$Lm^Lpi.Nc^N`aNfle$NquecaN)n&PagaioP`^P'oRaf*>ci&Rd&RedeRtidaSmoSs#S%lTam T-%T* T_noUl^Us 3C~i D& Dest[D@t+D+G^I$r&IxeLeLic<oNcaNdur N{aN]scoNs?N%Rceb(Rfei$Rgun)Ri$Rmit'Rn>plexoRsi<>%nceRucaSc#SquisaS,aTisc 3AdaC#Ed!eGm-$Last+Lh#Lo.M-)Nc`NguimN]No%N.On{oPocaQue%R<h>esRue)Sc S$laT<gaVe%2An)Aque)At*aEbeuUmagemUvi&1Eu0DaE'aEtisaLeg^Lici Lu-%Lvil/M MbaNd( N.@P~o,R)Ssu'St&TeUp U,Vo 2A@Anc]A$AxeEceEd?Efei$Emi Ens Ep  Esil]E%x$Ev-'Ez Ima)IncesaIsmaIv#Oces,Odu$Ofe)Oibi=Oje$Ome%rOpag OsaO%$rOv?2Blic DimL Lm} Ls{aNh&N'PiloRezaX?:99Ad+Ant@Ar$AseEbr EdaEijoEn%Eri=Im}oInaIosque:B<^BiscoCh Ci} Di&I In]IoIvaJ^L#M&Ng(Nhu+P!u+P`PidezPosaQue%Rid!eS<%Scun/Sg Sp?S%'aSur Taz<aTo{a3AlezaAnim Av(Baix B`deBol C#C-%CheioCiboC|d Cru.Cu DeDim'D}daDuzidaEnvioF* Flet'Fog F[scoFugi G&@GimeG+In#I$rJei.LativoM?M-=M|,Nov#P oP`'Ple$Pol/P[saPudi Qu((S-]Sfri Sga.Sid'Solv(Spei$SsacaS)n%Sum'T&/T(T' Tom^T+.V` Vi,rVol)3Ac/CaGidezGo_,M NgueS^ScoS}/5B&oChe=D^DeioDov@E=rLe)M<oNc S#S{aS$TaT{oT*aT~ UcoUpaXo5B_Gi=Go,IvoMoPest[S,:B|Ci ColaCud'DioF'aGaGr^Ib_L^L{oLg#LivaLpic Lsic]L.Lv?Mb Mu+iN Nf}aNgueNid!ePa$Rd>g-$Rje)Tur Ud!eXof}eZ}&3C C~ DaD-$Di#Do,Du$rGm-$G[=Gun=IvaLe$LvagemM<&M-%N?N/rNsu&Nt#P #Rei>*g>+RvoTemb_T|3GiloLhue)Lic}eMetr@Mpat@M~ N&Nc(oNg~ NopseN$ni>-eRiTu#5B(<oB+C|_G_JaLdaLetr L%'oMbrioNa)Nd Neg Nh?NoP+noQue%Rr'R%ioSsegoTaqueT(r V#Z*/5Aviz BidaBm(,B,loBt+'Ca)Ces,CoDes%FixoG?G('Jei$Lfa$M'OrP(i|Plic Pos$Prim'Rd*>fis)Rp[s>[&Rt'Sp'oS%n$:B`aBle%Bu^C/G `aLh(LoLvezM</Mb|imMpaNg-%N$P Pioc>dioRef>j>+xaTuagemUr*oXativoXis)3Atr&C(Ci=Cl#Dio,IaIm Lef}eLh#Mp(oN-%N,rN.Rm&RnoRr-oSeSou+St#ToXtu+Xugo3A+G`aJoloMbr MidezNgi=N%'oRagemT~ 5Al]C]L( LiceM^Mil/N`Ntu+Pe%R>ci=RneioRqueRr!>$S.UcaUp{aX*a2Ab&/Acej Adu$rAfeg Aje$AmaAnc ApoAs{oAt?Av E*oEm(Epid EvoIagemIboIcicloId-%Ilog@Ind!eIploItur Iunf&Oc Ombe)OvaUnfoUque2B~ C<oDoLipaPiRboRm>quesaT` T|i&:7V 3Bigo0HaId!eIf|me3Olog@SoTigaUbu0A=InaUfru':C*aDi G o,I=,LaL-%Lid!eLo[sN)gemQu{oR<d>e)Rr(Sc~ Sil]S,u+Z Zio3A=D Ge.Ic~ L{oLhiceLu=Nce=rNdav&N( Nt[Rb&Rd!eRe?Rg}h>m`/RnizRs R%n%SpaSti=T|i&3Adu$AgemAj Atu+Br?D{aDr @ElaGaG-%Gi G| L ejoNcoNhe)NilOle)R!>tudeSi.S$Tr&V{oZ*/5A=rArG&L<%LeibolL)gemLumo,Nt!e5L$Vuz`a::D[zRope3QueRe.Rife3Ng ::Ng#Rp 3BuL?9Mb Olog@5Mbi=";
const checksum = "0x2219000926df7b50d8aa0a3d495826b988287df4657fbd100e6fe596c8f737ac";
let wordlist = null;
/**
 *  The [[link-bip39-pt]] for [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangPt extends wordlist_owl_js_1.WordlistOwl {
    /**
     *  Creates a new instance of the Portuguese language Wordlist.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langPt]] should suffice.
     *
     *  @_ignore:
     */
    constructor() { super("pt", words, checksum); }
    /**
     *  Returns a singleton instance of a ``LangPt``, creating it
     *  if this is the first time being called.
     */
    static wordlist() {
        if (wordlist == null) {
            wordlist = new LangPt();
        }
        return wordlist;
    }
}
exports.LangPt = LangPt;
//# sourceMappingURL=lang-pt.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1730085369293, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LangZh = void 0;
const index_js_1 = require("../hash/index.js");
const index_js_2 = require("../utils/index.js");
const wordlist_js_1 = require("./wordlist.js");
const data = "}aE#4A=Yv&co#4N#6G=cJ&SM#66|/Z#4t&kn~46#4K~4q%b9=IR#7l,mB#7W_X2*dl}Uo~7s}Uf&Iw#9c&cw~6O&H6&wx&IG%v5=IQ~8a&Pv#47$PR&50%Ko&QM&3l#5f,D9#4L|/H&tQ;v0~6n]nN<di,AM=W5%QO&ka&ua,hM^tm=zV=JA=wR&+X]7P&NB#4J#5L|/b[dA}tJ<Do&6m&u2[U1&Kb.HM&mC=w0&MW<rY,Hq#6M}QG,13&wP}Jp]Ow%ue&Kg<HP<D9~4k~9T&I2_c6$9T#9/[C5~7O~4a=cs&O7=KK=An&l9$6U$8A&uD&QI|/Y&bg}Ux&F2#6b}E2&JN&kW&kp=U/&bb=Xl<Cj}k+~5J#6L&5z&9i}b4&Fo,ho(X0_g3~4O$Fz&QE<HN=Ww]6/%GF-Vw=tj&/D&PN#9g=YO}cL&Of&PI~5I&Ip=vU=IW#9G;0o-wU}ss&QR<BT&R9=tk$PY_dh&Pq-yh]7T,nj.Xu=EP&76=cI&Fs*Xg}z7$Gb&+I=DF,AF=cA}rL#7j=Dz&3y<Aa$52=PQ}b0(iY$Fa}oL&xV#6U=ec=WZ,xh%RY<dp#9N&Fl&44=WH*A7=sh&TB&8P=07;u+&PK}uh}J5#72)V/=xC,AB$k0&f6;1E|+5=1B,3v]6n&wR%b+&xx]7f=Ol}fl;+D^wG]7E;nB;uh^Ir&l5=JL,nS=cf=g5;u6|/Q$Gc=MH%Hg#5d%M6^86=U+$Gz,l/,ir^5y&Ba&/F-IY&FI&be%IZ#77&PW_Nu$kE(Yf&NX]7Z,Jy&FJ(Xo&Nz#/d=y7&MX<Ag}Z+;nE]Dt(iG#4D=13&Pj~4c%v8&Zo%OL&/X#4W<HR&ie~6J_1O(Y2=y5=Ad*cv_eB#6k&PX:BU#7A;uk&Ft&Fx_dD=U2;vB=U5=4F}+O&GN.HH:9s=b0%NV(jO&IH=JT}Z9=VZ<Af,Kx^4m&uJ%c6,6r;9m#+L}cf%Kh&F3~4H=vP}bu,Hz|++,1w]nv}k6;uu$jw*Kl*WX&uM[x7&Fr[m7$NO&QN]hu=JN}nR^8g#/h(ps|KC;vd}xz=V0}p6&FD$G1#7K<bG_4p~8g&cf;u4=tl}+k%5/}fz;uw<cA=u1}gU}VM=LJ=eX&+L&Pr#4U}p2:nC,2K]7H:jF&9x}uX#9O=MB<fz~8X~5m&4D&kN&u5%E/(h7(ZF&VG<de(qM|/e-Wt=3x(a+,/R]f/&ND$Ro&nU}0g=KA%kH&NK$Ke<dS}cB&IX~5g$TN]6m=Uv,Is&Py=Ef%Kz#+/%bi&+A<F4$OG&4C&FL#9V<Zk=2I_eE&6c]nw&kq$HG}y+&A8$P3}OH=XP]70%IS(AJ_gH%GZ&tY&AZ=vb~6y&/r=VI=Wv<Zi=fl=xf&eL}c8}OL=MJ=g8$F7=YT}9u=0+^xC}JH&nL^N0~4T]K2,Cy%OC#6s;vG(AC^xe^cG&MF}Br#9P;wD-7h$O/&xA}Fn^PC]6i]7G&8V$Qs;vl(TB~73~4l<mW&6V=2y&uY&+3)aP}XF;LP&kx$wU=t7;uy<FN&lz)7E=Oo*Y+;wI}9q}le;J6&Ri&4t&Qr#8B=cb&vG=J5|Ql(h5<Yy~4+}QD,Lx=wn%K/&RK=dO&Pw,Q9=co%4u;9u}g0@6a^4I%b0=zo|/c&tX=dQ=OS#+b=yz_AB&wB&Pm=W9$HP_gR=62=AO=ti=hI,oA&jr&dH=tm&b6$P2(x8=zi;nG~7F;05]0n[Ix&3m}rg=Xp=cd&uz]7t;97=cN;vV<jf&FF&F1=6Q&Ik*Kk&P4,2z=fQ]7D&3u,H0=d/}Uw<ZN<7R}Kv;0f$H7,MD]7n$F0#88~9Z%da=by;+T#/u=VF&fO&kr^kf<AB]sU,I5$Ng&Pz;0i&QD&vM=Yl:BM;nJ_xJ]U7&Kf&30,3f|Z9*dC)je_jA&Q4&Kp$NH(Yz#6S&Id%Ib=KX,AD=KV%dP}tW&Pk^+E_Ni=cq,3R}VZ(Si=b+}rv;0j}rZ]uA,/w(Sx&Jv$w9&4d&wE,NJ$Gy=J/]Ls#7k<ZQ<Y/&uj]Ov$PM;v3,2F&+u:up=On&3e,Jv;90=J+&Qm]6q}bK#+d~8Y(h2]hA;99&AS=I/}qB&dQ}yJ-VM}Vl&ui,iB&G3|Dc]7d=eQ%dX%JC_1L~4d^NP;vJ&/1)ZI#7N]9X[bQ&PL=0L(UZ,Lm&kc&IR}n7(iR<AQ<dg=33=vN}ft}au]7I,Ba=x9=dR~6R&Tq=Xi,3d$Nr&Bc}DI&ku&vf]Dn,/F&iD,Ll&Nw=0y&I7=Ls=/A&tU=Qe}Ua&uk&+F=g4=gh=Vj#+1&Qn}Uy*44#5F,Pc&Rz*Xn=oh=5W;0n_Nf(iE<Y7=vr=Zu]oz#5Z%mI=kN=Bv_Jp(T2;vt_Ml<FS&uI=L/&6P]64$M7}86<bo%QX(SI%IY&VK=Al&Ux;vv;ut*E/%uh<ZE|O3,M2(yc]yu=Wk&tp:Ex}hr,Cl&WE)+Z=8U}I2_4Q,hA_si=iw=OM=tM=yZ%Ia=U7;wT}b+;uo=Za}yS!5x}HD}fb#5O_dA;Nv%uB(yB;01(Sf}Fk;v7}Pt#8v<mZ#7L,/r&Pl~4w&f5=Ph$Fw_LF&8m,bL=yJ&BH}p/*Jn}tU~5Q;wB(h6]Df]8p^+B;E4&Wc=d+;Ea&bw$8C&FN,DM=Yf}mP~5w=fT#6V=mC=Fi=AV}jB&AN}lW}aH#/D)dZ;hl;vE}/7,CJ;31&w8,hj%u9_Js=jJ&4M~8k=TN&eC}nL&uc-wi&lX}dj=Mv=e2#6u=cr$uq$6G]8W}Jb:nm=Yg<b3(UA;vX&6n&xF=KT,jC,De&R8&oY=Zv&oB]7/=Z2&Oa}bf,hh(4h^tZ&72&Nx;D2&xL~5h~40)ZG)h+=OJ&RA]Bv$yB=Oq=df,AQ%Jn}OJ;11,3z&Tl&tj;v+^Hv,Dh(id=s+]7N&N3)9Q~8f,S4=uW=w4&uX,LX&3d]CJ&yp&8x<b2_do&lP=y/<cy_dG=Oi=7R(VH(lt_1T,Iq_AA;12^6T%k6#8K[B1{oO<AU[Bt;1b$9S&Ps<8T=St{bY,jB(Zp&63&Uv$9V,PM]6v&Af}zW[bW_oq}sm}nB&Kq&gC&ff_eq_2m&5F&TI}rf}Gf;Zr_z9;ER&jk}iz_sn<BN~+n&vo=Vi%97|ZR=Wc,WE&6t]6z%85(ly#84=KY)6m_5/=aX,N3}Tm&he&6K]tR_B2-I3;u/&hU&lH<AP=iB&IA=XL;/5&Nh=wv<BH#79=vS=zl<AA=0X_RG}Bw&9p$NW,AX&kP_Lp&/Z(Tc]Mu}hs#6I}5B&cI<bq&H9#6m=K9}vH(Y1(Y0#4B&w6,/9&gG<bE,/O=zb}I4_l8<B/;wL%Qo<HO[Mq=XX}0v&BP&F4(mG}0i}nm,EC=9u{I3,xG&/9=JY*DK&hR)BX=EI=cx=b/{6k}yX%A+&wa}Xb=la;wi^lL;0t}jo&Qb=xg=XB}iO<qo{bR=NV&8f=a0&Jy;0v=uK)HK;vN#6h&jB(h/%ud&NI%wY.X7=Pt}Cu-uL&Gs_hl%mH,tm]78=Lb^Q0#7Y=1u<Bt&+Q=Co_RH,w3;1e}ux<aU;ui}U3&Q5%bt]63&UQ|0l&uL}O7&3o,AV&dm|Nj(Xt*5+(Uu&Hh(p7(UF=VR=Bp^Jl&Hd[ix)9/=Iq]C8<67]66}mB%6f}bb}JI]8T$HA}db=YM&pa=2J}tS&Y0=PS&y4=cX$6E,hX,XP&nR;04,FQ&l0&Vm_Dv#5Y~8Z=Bi%MA]6x=JO:+p,Az&9q,Hj~6/}SD=K1:EJ}nA;Qo#/E]9R,Ie&6X%W3]61&v4=xX_MC=0q;06(Xq=fs}IG}Dv=0l}o7$iZ;9v&LH&DP-7a&OY,SZ,Kz,Cv&dh=fx|Nh,F/~7q=XF&w+;9n&Gw;0h}Z7<7O&JK(S7&LS<AD<ac=wo<Dt&zw%4B=4v#8P;9o~6p*vV=Tm,Or&I6=1q}nY=P0=gq&Bl&Uu,Ch%yb}UY=zh}dh}rl(T4_xk(YA#8R*xH,IN}Jn]7V}C4&Ty}j3]7p=cL=3h&wW%Qv<Z3=f0&RI&+S(ic_zq}oN&/Y=z1;Td=LW=0e=OI(Vc,+b^ju(UL;0r:Za%8v=Rp=zw&58&73&wK}qX]6y&8E)a2}WR=wP^ur&nQ<cH}Re=Aq&wk}Q0&+q=PP,Gc|/d^k5,Fw]8Y}Pg]p3=ju=ed}r5_yf&Cs]7z$/G<Cm&Jp&54_1G_gP_Ll}JZ;0u]k8_7k(Sg]65{9i=LN&Sx&WK,iW&fD&Lk{9a}Em-9c#8N&io=sy]8d&nT&IK(lx#7/$lW(Td<s8~49,3o<7Y=MW(T+_Jr&Wd,iL}Ct=xh&5V;v4&8n%Kx=iF&l2_0B{B+,If(J0,Lv;u8=Kx-vB=HC&vS=Z6&fU&vE^xK;3D=4h=MR#45:Jw;0d}iw=LU}I5=I0]gB*im,K9}GU,1k_4U&Tt=Vs(iX&lU(TF#7y,ZO}oA&m5#5P}PN}Uz=hM<B1&FB<aG,e6~7T<tP(UQ_ZT=wu&F8)aQ]iN,1r_Lo&/g:CD}84{J1_Ki&Na&3n$jz&FE=dc;uv;va}in}ll=fv(h1&3h}fp=Cy}BM(+E~8m}lo%v7=hC(T6$cj=BQ=Bw(DR,2j=Ks,NS|F+;00=fU=70}Mb(YU;+G&m7&hr=Sk%Co]t+(X5_Jw}0r}gC(AS-IP&QK<Z2#8Q$WC]WX}T2&pG_Ka,HC=R4&/N;Z+;ch(C7,D4$3p_Mk&B2$8D=n9%Ky#5z(CT&QJ#7B]DC]gW}nf~5M;Iw#80}Tc_1F#4Z-aC}Hl=ph=fz,/3=aW}JM}nn;DG;vm}wn,4P}T3;wx&RG$u+}zK=0b;+J_Ek{re<aZ=AS}yY#5D]7q,Cp}xN=VP*2C}GZ}aG~+m_Cs=OY#6r]6g<GS}LC(UB=3A=Bo}Jy<c4}Is;1P<AG}Op<Z1}ld}nS=1Z,yM&95&98=CJ(4t:2L$Hk=Zo}Vc;+I}np&N1}9y=iv}CO*7p=jL)px]tb^zh&GS&Vl%v/;vR=14=zJ&49|/f]hF}WG;03=8P}o/&Gg&rp;DB,Kv}Ji&Pb;aA^ll(4j%yt}+K$Ht#4y&hY]7Y<F1,eN}bG(Uh%6Z]t5%G7;+F_RE;it}tL=LS&Da=Xx(S+(4f=8G=yI}cJ}WP=37=jS}pX}hd)fp<A8=Jt~+o$HJ=M6}iX=g9}CS=dv=Cj(mP%Kd,xq|+9&LD(4/=Xm&QP=Lc}LX&fL;+K=Op(lu=Qs.qC:+e&L+=Jj#8w;SL]7S(b+#4I=c1&nG_Lf&uH;+R)ZV<bV%B/,TE&0H&Jq&Ah%OF&Ss(p2,Wv&I3=Wl}Vq;1L&lJ#9b_1H=8r=b8=JH(SZ=hD=J2#7U,/U#/X~6P,FU<eL=jx,mG=hG=CE&PU=Se(qX&LY=X6=y4&tk&QQ&tf=4g&xI}W+&mZ=Dc#7w}Lg;DA;wQ_Kb(cJ=hR%yX&Yb,hw{bX_4X;EP;1W_2M}Uc=b5(YF,CM&Tp^OJ{DD]6s=vF=Yo~8q}XH}Fu%P5(SJ=Qt;MO]s8<F3&B3&8T(Ul-BS*dw&dR<87}/8]62$PZ]Lx<Au}9Q]7c=ja=KR,Go,Us&v6(qk}pG&G2=ev^GM%w4&H4]7F&dv]J6}Ew:9w=sj-ZL}Ym$+h(Ut(Um~4n=Xs(U7%eE=Qc_JR<CA#6t<Fv|/I,IS,EG<F2(Xy$/n<Fa(h9}+9_2o&N4#7X<Zq|+f_Dp=dt&na,Ca=NJ)jY=8C=YG=s6&Q+<DO}D3=xB&R1(lw;Qn<bF(Cu|/B}HV=SS&n7,10&u0]Dm%A6^4Q=WR(TD=Xo<GH,Rj(l8)bP&n/=LM&CF,F5&ml=PJ;0k=LG=tq,Rh,D6@4i=1p&+9=YC%er_Mh;nI;0q=Fw]80=xq=FM$Gv;v6&nc;wK%H2&Kj;vs,AA=YP,66}bI(qR~5U=6q~4b$Ni=K5.X3$So&Iu(p+]8G=Cf=RY(TS_O3(iH&57=fE=Dg_Do#9z#7H;FK{qd_2k%JR}en&gh_z8;Rx}9p<cN_Ne,DO;LN_7o~/p=NF=5Y}gN<ce<C1,QE]Wv=3u<BC}GK]yq}DY&u/_hj=II(pz&rC,jV&+Z}ut=NQ;Cg-SR_ZS,+o=u/;Oy_RK_QF(Fx&xP}Wr&TA,Uh&g1=yr{ax[VF$Pg(YB;Ox=Vy;+W(Sp}XV%dd&33(l/]l4#4Y}OE=6c=bw(A7&9t%wd&N/&mo,JH&Qe)fm=Ao}fu=tH";
const deltaData = "FAZDC6BALcLZCA+GBARCW8wNCcDDZ8LVFBOqqDUiou+M42TFAyERXFb7EjhP+vmBFpFrUpfDV2F7eB+eCltCHJFWLFCED+pWTojEIHFXc3aFn4F68zqjEuKidS1QBVPDEhE7NA4mhMF7oThD49ot3FgtzHFCK0acW1x8DH1EmLoIlrWFBLE+y5+NA3Cx65wJHTaEZVaK1mWAmPGxgYCdxwOjTDIt/faOEhTl1vqNsKtJCOhJWuio2g07KLZEQsFBUpNtwEByBgxFslFheFbiEPvi61msDvApxCzB6rBCzox7joYA5UdDc+Cb4FSgIabpXFAj3bjkmFAxCZE+mD/SFf/0ELecYCt3nLoxC6WEZf2tKDB4oZvrEmqFkKk7BwILA7gtYBpsTq//D4jD0F0wEB9pyQ1BD5Ba0oYHDI+sbDFhvrHXdDHfgFEIJLi5r8qercNFBgFLC4bo5ERJtamWBDFy73KCEb6M8VpmEt330ygCTK58EIIFkYgF84gtGA9Uyh3m68iVrFbWFbcbqiCYHZ9J1jeRPbL8yswhMiDbhEhdNoSwFbZrLT740ABEqgCkO8J1BLd1VhKKR4sD1yUo0z+FF59Mvg71CFbyEhbHSFBKEIKyoQNgQppq9T0KAqePu0ZFGrXOHdKJqkoTFhYvpDNyuuznrN84thJbsCoO6Cu6Xlvntvy0QYuAExQEYtTUBf3CoCqwgGFZ4u1HJFzDVwEy3cjcpV4QvsPaBC3rCGyCF23o4K3pp2gberGgFEJEHo4nHICtyKH2ZqyxhN05KBBJIQlKh/Oujv/DH32VrlqFdIFC7Fz9Ct4kaqFME0UETLprnN9kfy+kFmtQBB0+5CFu0N9Ij8l/VvJDh2oq3hT6EzjTHKFN7ZjZwoTsAZ4Exsko6Fpa6WC+sduz8jyrLpegTv2h1EBeYpLpm2czQW0KoCcS0bCVXCmuWJDBjN1nQNLdF58SFJ0h7i3pC3oEOKy/FjBklL70XvBEEIWp2yZ04xObzAWDDJG7f+DbqBEA7LyiR95j7MDVdDViz2RE5vWlBMv5e4+VfhP3aXNPhvLSynb9O2x4uFBV+3jqu6d5pCG28/sETByvmu/+IJ0L3wb4rj9DNOLBF6XPIODr4L19U9RRofAG6Nxydi8Bki8BhGJbBAJKzbJxkZSlF9Q2Cu8oKqggB9hBArwLLqEBWEtFowy8XK8bEyw9snT+BeyFk1ZCSrdmgfEwFePTgCjELBEnIbjaDDPJm36rG9pztcEzT8dGk23SBhXBB1H4z+OWze0ooFzz8pDBYFvp9j9tvFByf9y4EFdVnz026CGR5qMr7fxMHN8UUdlyJAzlTBDRC28k+L4FB8078ljyD91tUj1ocnTs8vdEf7znbzm+GIjEZnoZE5rnLL700Xc7yHfz05nWxy03vBB9YGHYOWxgMQGBCR24CVYNE1hpfKxN0zKnfJDmmMgMmBWqNbjfSyFCBWSCGCgR8yFXiHyEj+VtD1FB3FpC1zI0kFbzifiKTLm9yq5zFmur+q8FHqjoOBWsBPiDbnCC2ErunV6cJ6TygXFYHYp7MKN9RUlSIS8/xBAGYLzeqUnBF4QbsTuUkUqGs6CaiDWKWjQK9EJkjpkTmNCPYXL";
const _wordlist = {
    zh_cn: null,
    zh_tw: null
};
const Checks = {
    zh_cn: "0x17bcc4d8547e5a7135e365d1ab443aaae95e76d8230c2782c67305d4f21497a1",
    zh_tw: "0x51e720e90c7b87bec1d70eb6e74a21a449bd3ec9c020b01d3a40ed991b60ce5d"
};
const codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const style = "~!@#$%^&*_-=[]{}|;:,.()<>?";
function loadWords(locale) {
    if (_wordlist[locale] != null) {
        return _wordlist[locale];
    }
    const wordlist = [];
    let deltaOffset = 0;
    for (let i = 0; i < 2048; i++) {
        const s = style.indexOf(data[i * 3]);
        const bytes = [
            228 + (s >> 2),
            128 + codes.indexOf(data[i * 3 + 1]),
            128 + codes.indexOf(data[i * 3 + 2]),
        ];
        if (locale === "zh_tw") {
            const common = s % 4;
            for (let i = common; i < 3; i++) {
                bytes[i] = codes.indexOf(deltaData[deltaOffset++]) + ((i == 0) ? 228 : 128);
            }
        }
        wordlist.push((0, index_js_2.toUtf8String)(new Uint8Array(bytes)));
    }
    // Verify the computed list matches the official list
    const checksum = (0, index_js_1.id)(wordlist.join("\n") + "\n");
    /* c8 ignore start */
    if (checksum !== Checks[locale]) {
        throw new Error(`BIP39 Wordlist for ${locale} (Chinese) FAILED`);
    }
    /* c8 ignore stop */
    _wordlist[locale] = wordlist;
    return wordlist;
}
const wordlists = {};
/**
 *  The [[link-bip39-zh_cn]] and [[link-bip39-zh_tw]] for
 *  [mnemonic phrases](link-bip-39).
 *
 *  @_docloc: api/wordlists
 */
class LangZh extends wordlist_js_1.Wordlist {
    /**
     *  Creates a new instance of the Chinese language Wordlist for
     *  the %%dialect%%, either ``"cn"`` or ``"tw"`` for simplified
     *  or traditional, respectively.
     *
     *  This should be unnecessary most of the time as the exported
     *  [[langZhCn]] and [[langZhTw]] should suffice.
     *
     *  @_ignore:
     */
    constructor(dialect) { super("zh_" + dialect); }
    getWord(index) {
        const words = loadWords(this.locale);
        (0, index_js_2.assertArgument)(index >= 0 && index < words.length, `invalid word index: ${index}`, "index", index);
        return words[index];
    }
    getWordIndex(word) {
        return loadWords(this.locale).indexOf(word);
    }
    split(phrase) {
        phrase = phrase.replace(/(?:\u3000| )+/g, "");
        return phrase.split("");
    }
    /**
     *  Returns a singleton instance of a ``LangZh`` for %%dialect%%,
     *  creating it if this is the first time being called.
     *
     *  Use the %%dialect%% ``"cn"`` or ``"tw"`` for simplified or
     *  traditional, respectively.
     */
    static wordlist(dialect) {
        if (wordlists[dialect] == null) {
            wordlists[dialect] = new LangZh(dialect);
        }
        return wordlists[dialect];
    }
}
exports.LangZh = LangZh;
//# sourceMappingURL=lang-zh.js.map
}, function(modId) { var map = {"../hash/index.js":1730085369217,"../utils/index.js":1730085369174}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1730085369168);
})()
//miniprogram-npm-outsideDeps=["tslib","./abi-coder.js","./fragments.js","./interface.js","./typed.js","./events.js","./fetch.js","./fixednumber.js","./signing-key.js","./signature.js","@noble/hashes/sha3","@noble/hashes/ripemd160","@noble/hashes/scrypt","./contract.js","./factory.js","./wrappers.js","./typed-data.js","@adraffy/ens-normalize","./transaction.js","./abstract-provider.js","./abstract-signer.js","./ens-resolver.js","./network.js","./signer-noncemanager.js","./plugins-network.js","./provider.js","./provider-fallback.js","./provider-jsonrpc.js","./provider-browser.js","./provider-alchemy.js","./provider-ankr.js","./provider-chainstack.js","./provider-etherscan.js","./provider-infura.js","./provider-pocket.js","./provider-quicknode.js","./provider-ipcsocket.js","./provider-socket.js","./provider-websocket.js","./base-wallet.js","./hdwallet.js","./mnemonic.js","./wallet.js","aes-js","./wordlist.js","./wordlist-owl.js","./wordlist-owla.js"]
//# sourceMappingURL=index.js.map