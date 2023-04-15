import { Contract } from 'ethers';
import testnet_CrowdfundingNFT_abi from '../../../eth-sdk/abis/testnet/CrowdfundingNFT.json';
import testnet_USDT_abi from '../../../eth-sdk/abis/testnet/USDT.json';
import testnet_DAI_abi from '../../../eth-sdk/abis/testnet/DAI.json';
import testnet_WrappedETH_abi from '../../../eth-sdk/abis/testnet/WrappedETH.json';
import testnet_USDC_abi from '../../../eth-sdk/abis/testnet/USDC.json';
export function getContract(address, abi, defaultSignerOrProvider) {
  return new Contract(address, abi, defaultSignerOrProvider);
}
export function getTestnetSdk(defaultSignerOrProvider) {
  return {
    CrowdfundingNFT: getContract(
      '0x73F5608d9a1Fdbfb1A7e74f770116227b7457F38',
      testnet_CrowdfundingNFT_abi,
      defaultSignerOrProvider
    ),
    USDT: getContract(
      '0xAcb862c6C8aEBFC575C96CF390439f2052E6fDc1',
      testnet_USDT_abi,
      defaultSignerOrProvider
    ),
    DAI: getContract(
      '0x474D70Ae48FC967aFbF3D8CCD0E5221EdE95C6Ed',
      testnet_DAI_abi,
      defaultSignerOrProvider
    ),
    WrappedETH: getContract(
      '0x4fa66B9706261A2F15B768445746438AB8Dd703B',
      testnet_WrappedETH_abi,
      defaultSignerOrProvider
    ),
    USDC: getContract(
      '0x18Fb2DbebAda49D46F3DFc298224AC9e3DaDAA78',
      testnet_USDC_abi,
      defaultSignerOrProvider
    ),
  };
}
