import { providers, Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSignerOrProvider: Signer | providers.Provider): any;
export declare type TestnetSdk = ReturnType<typeof getTestnetSdk>;
export declare function getTestnetSdk(defaultSignerOrProvider: Signer | providers.Provider): {
    CrowdfundingNFT: types.testnet.CrowdfundingNFT;
    USDT: types.testnet.USDT;
    DAI: types.testnet.DAI;
    WrappedETH: types.testnet.WrappedETH;
    USDC: types.testnet.USDC;
};
export declare type MainnetSdk = ReturnType<typeof getMainnetSdk>;
export declare function getMainnetSdk(defaultSignerOrProvider: Signer | providers.Provider): {
    CrowdfundingNFT: types.mainnet.CrowdfundingNFT;
    USDT: types.mainnet.USDT;
    DAI: types.mainnet.DAI;
    WrappedETH: types.mainnet.WrappedETH;
    USDC: types.mainnet.USDC;
};
