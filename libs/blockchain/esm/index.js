import { Contract } from 'ethers';
import testnet_CrowdfundingNFT_abi from '../../../eth-sdk/abis/testnet/CrowdfundingNFT.json';
import testnet_USDT_abi from '../../../eth-sdk/abis/testnet/USDT.json';
import testnet_DAI_abi from '../../../eth-sdk/abis/testnet/DAI.json';
import testnet_WrappedETH_abi from '../../../eth-sdk/abis/testnet/WrappedETH.json';
import testnet_USDC_abi from '../../../eth-sdk/abis/testnet/USDC.json';
import mainnet_CrowdfundingNFT_abi from '../../../eth-sdk/abis/mainnet/CrowdfundingNFT.json';
import mainnet_USDT_abi from '../../../eth-sdk/abis/mainnet/USDT.json';
import mainnet_DAI_abi from '../../../eth-sdk/abis/mainnet/DAI.json';
import mainnet_WrappedETH_abi from '../../../eth-sdk/abis/mainnet/WrappedETH.json';
import mainnet_USDC_abi from '../../../eth-sdk/abis/mainnet/USDC.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getTestnetSdk(defaultSignerOrProvider) {
    return {
        "CrowdfundingNFT": getContract('0x73F5608d9a1Fdbfb1A7e74f770116227b7457F38', testnet_CrowdfundingNFT_abi, defaultSignerOrProvider),
        "USDT": getContract('0xAcb862c6C8aEBFC575C96CF390439f2052E6fDc1', testnet_USDT_abi, defaultSignerOrProvider),
        "DAI": getContract('0x474D70Ae48FC967aFbF3D8CCD0E5221EdE95C6Ed', testnet_DAI_abi, defaultSignerOrProvider),
        "WrappedETH": getContract('0x4fa66B9706261A2F15B768445746438AB8Dd703B', testnet_WrappedETH_abi, defaultSignerOrProvider),
        "USDC": getContract('0x18Fb2DbebAda49D46F3DFc298224AC9e3DaDAA78', testnet_USDC_abi, defaultSignerOrProvider),
    };
}
export function getMainnetSdk(defaultSignerOrProvider) {
    return {
        "CrowdfundingNFT": getContract('0xBfcce0F4F2A26DA568B0fBCAe4a7E733dd3d86e4', mainnet_CrowdfundingNFT_abi, defaultSignerOrProvider),
        "USDT": getContract('0xc2132D05D31c914a87C6611C10748AEb04B58e8F', mainnet_USDT_abi, defaultSignerOrProvider),
        "DAI": getContract('0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', mainnet_DAI_abi, defaultSignerOrProvider),
        "WrappedETH": getContract('0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', mainnet_WrappedETH_abi, defaultSignerOrProvider),
        "USDC": getContract('0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', mainnet_USDC_abi, defaultSignerOrProvider),
    };
}
