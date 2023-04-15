import { defineConfig } from '@dethcrypto/eth-sdk';

export default defineConfig({
  outputPath: './libs/blockchain',
  rpc: {
    testnet:
      'https://testnet-d214.settlemint.com/bpaas-41D1F9e07A4817CC91a14d4e7F2E101DAfc5E8F5',
  },
  contracts: {
    testnet: {
      CrowdfundingNFT: '0x73F5608d9a1Fdbfb1A7e74f770116227b7457F38',
      USDT: '0xAcb862c6C8aEBFC575C96CF390439f2052E6fDc1',
      DAI: '0x474D70Ae48FC967aFbF3D8CCD0E5221EdE95C6Ed',
      WrappedETH: '0x4fa66B9706261A2F15B768445746438AB8Dd703B',
      USDC: '0x18Fb2DbebAda49D46F3DFc298224AC9e3DaDAA78',
    },
  },
});
