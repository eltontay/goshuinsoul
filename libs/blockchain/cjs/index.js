'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getTestnetSdk = exports.getContract = void 0;
const ethers_1 = require('ethers');
const CrowdfundingNFT_json_1 = __importDefault(
  require('../../../eth-sdk/abis/testnet/CrowdfundingNFT.json')
);
const USDT_json_1 = __importDefault(
  require('../../../eth-sdk/abis/testnet/USDT.json')
);
const DAI_json_1 = __importDefault(
  require('../../../eth-sdk/abis/testnet/DAI.json')
);
const WrappedETH_json_1 = __importDefault(
  require('../../../eth-sdk/abis/testnet/WrappedETH.json')
);
const USDC_json_1 = __importDefault(
  require('../../../eth-sdk/abis/testnet/USDC.json')
);

function getContract(address, abi, defaultSignerOrProvider) {
  return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
exports.getContract = getContract;
function getTestnetSdk(defaultSignerOrProvider) {
  return {
    CrowdfundingNFT: getContract(
      '0x73F5608d9a1Fdbfb1A7e74f770116227b7457F38',
      CrowdfundingNFT_json_1.default,
      defaultSignerOrProvider
    ),
    USDT: getContract(
      '0xAcb862c6C8aEBFC575C96CF390439f2052E6fDc1',
      USDT_json_1.default,
      defaultSignerOrProvider
    ),
    DAI: getContract(
      '0x474D70Ae48FC967aFbF3D8CCD0E5221EdE95C6Ed',
      DAI_json_1.default,
      defaultSignerOrProvider
    ),
    WrappedETH: getContract(
      '0x4fa66B9706261A2F15B768445746438AB8Dd703B',
      WrappedETH_json_1.default,
      defaultSignerOrProvider
    ),
    USDC: getContract(
      '0x18Fb2DbebAda49D46F3DFc298224AC9e3DaDAA78',
      USDC_json_1.default,
      defaultSignerOrProvider
    ),
  };
}
exports.getTestnetSdk = getTestnetSdk;
