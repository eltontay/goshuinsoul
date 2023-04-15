"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainnetSdk = exports.getTestnetSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const CrowdfundingNFT_json_1 = __importDefault(require("../../../eth-sdk/abis/testnet/CrowdfundingNFT.json"));
const USDT_json_1 = __importDefault(require("../../../eth-sdk/abis/testnet/USDT.json"));
const DAI_json_1 = __importDefault(require("../../../eth-sdk/abis/testnet/DAI.json"));
const WrappedETH_json_1 = __importDefault(require("../../../eth-sdk/abis/testnet/WrappedETH.json"));
const USDC_json_1 = __importDefault(require("../../../eth-sdk/abis/testnet/USDC.json"));
const CrowdfundingNFT_json_2 = __importDefault(require("../../../eth-sdk/abis/mainnet/CrowdfundingNFT.json"));
const USDT_json_2 = __importDefault(require("../../../eth-sdk/abis/mainnet/USDT.json"));
const DAI_json_2 = __importDefault(require("../../../eth-sdk/abis/mainnet/DAI.json"));
const WrappedETH_json_2 = __importDefault(require("../../../eth-sdk/abis/mainnet/WrappedETH.json"));
const USDC_json_2 = __importDefault(require("../../../eth-sdk/abis/mainnet/USDC.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getTestnetSdk(defaultSignerOrProvider) {
    return {
        "CrowdfundingNFT": getContract('0x73F5608d9a1Fdbfb1A7e74f770116227b7457F38', CrowdfundingNFT_json_1.default, defaultSignerOrProvider),
        "USDT": getContract('0xAcb862c6C8aEBFC575C96CF390439f2052E6fDc1', USDT_json_1.default, defaultSignerOrProvider),
        "DAI": getContract('0x474D70Ae48FC967aFbF3D8CCD0E5221EdE95C6Ed', DAI_json_1.default, defaultSignerOrProvider),
        "WrappedETH": getContract('0x4fa66B9706261A2F15B768445746438AB8Dd703B', WrappedETH_json_1.default, defaultSignerOrProvider),
        "USDC": getContract('0x18Fb2DbebAda49D46F3DFc298224AC9e3DaDAA78', USDC_json_1.default, defaultSignerOrProvider),
    };
}
exports.getTestnetSdk = getTestnetSdk;
function getMainnetSdk(defaultSignerOrProvider) {
    return {
        "CrowdfundingNFT": getContract('0xBfcce0F4F2A26DA568B0fBCAe4a7E733dd3d86e4', CrowdfundingNFT_json_2.default, defaultSignerOrProvider),
        "USDT": getContract('0xc2132D05D31c914a87C6611C10748AEb04B58e8F', USDT_json_2.default, defaultSignerOrProvider),
        "DAI": getContract('0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', DAI_json_2.default, defaultSignerOrProvider),
        "WrappedETH": getContract('0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', WrappedETH_json_2.default, defaultSignerOrProvider),
        "USDC": getContract('0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', USDC_json_2.default, defaultSignerOrProvider),
    };
}
exports.getMainnetSdk = getMainnetSdk;
