# GoshuinSoul

ETH Tokyo 2023 project submission : https://ethglobal.com/showcase/goshuinsoul-xm0r6

Smart Contracts and Subgraphs : https://github.com/eltontay/goshuinsoul_sc

## About

GoshuinSoul is a self-sovereign, shrine-gating and soul-bound nft issuer that is powered by Polygon ID on SettleMint's Polygon Supernet network. GoshuinSoul uses the EIP-5192 standard which is the minimal soul-bound nft standard as visiting shrines is a sacred tradition and should not be traded. GoshuinSoul also uses Polygon ID to promote sovereignty by allowing users to mint nft with ZK proofs that they have visited the shrines. This not only improves security and privacy but it also promotes Japanese cultures by supporting the local communities around these Japanese shrines through the injection of utilities to the Soul-bound tokens issued. Under the hood, GoshuinSoul uses SettleMint for the deployment of Polygon Supernet, EIP-5192 smart contract, Subgraphs by the Graph Protocol, Hasura for the creation of GraphQL API to Postgres Database and Private Key creation.

## How it's made

Sponsor technologies :

Polygon - Polygon ID and Polygon Supernet
Deployed Polygon Issuer Node on AWS cloud with Docker connecting to SettleMint's Mumbai Testnet RPC endpoint. This allows GoshuinSoul to explore customisable KYC process and the creation of ZK proofs.

Deployed an EIP-5192 smart contract on the Polygon Supernet to create an app specific chain that is focused on the Japanese culture, preventing high activity and ensuring dedicated throughput with better performance.

The Graph
Creation of subgraphs from the Graph protocol to have real-time fast on-chain queries

Others

Web3Auth to provide a seamless and familiar login feature for both web2 and web3 users
Stripe integration to provide fiat payment options if users are not willing to pay with crypto
Integrated DAI, USDC, USDT and WrappedETH crypto payment options for users willing to pay with crypto
Pipeline

Geolocation QR code which ensures that users who are within close proximity to the location are able to scan the QR code
DAOs for local communities around Shrines/Temples
Utilities injected into Soul-bound token holders such as free Mochi!

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve dapp` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
