# GoshuinSoul

ETH Tokyo 2023 project submission : https://ethglobal.com/showcase/goshuinsoul-xm0r6

Smart Contracts and Subgraphs : https://github.com/eltontay/goshuinsoul_sc

Deployed Soul-bound token address : 0x2B8a1f96CBe44Ccc38E70E1D50D0DF5a97895e26

## About

GoshuinSoul is a self-sovereign, shrine-gating and soul-bound token issuer that is powered by Polygon ID on SettleMint's Polygon Mumbai TestNet network. GoshuinSoul uses the EIP-5192 standard which is the minimal soul-bound nft standard as visiting shrines is a sacred tradition and should not be traded. GoshuinSoul also uses Polygon ID to issue off-chain KYC claims to users to mint their soul-bound tokens with ZK proofs that they have visited the shrines or temples. This not only improves security and privacy but it also promotes Japanese cultures by supporting the local communities around these Japanese shrines through the injection of utilities to the Soul-bound tokens issued. Under the hood, GoshuinSoul uses SettleMint for the deployment of Polygon Mumbai TestNet, EIP-5192 smart contract, Subgraphs by the Graph Protocol, Hasura for the creation of GraphQL API to Postgres Database and Private Key creation.

## How it is made

Sponsor technologies :

Polygon - Polygon ID and Polygon Mumbai TestNet
Deployed Polygon Issuer Node on AWS cloud with Docker connecting to SettleMint's Mumbai TestNet RPC endpoint. This allows GoshuinSoul to explore customisable KYC process and the creation of ZK proofs.

Deployed an EIP-5192 smart contract on the Polygon Mumbai TestNet to create an app specific chain that is focused on the Japanese culture, preventing high activity and ensuring dedicated throughput with better performance.

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
Customisable and unique Goushuin token

## How it works

1. Download the Polygon ID App and register an account
   - App Store : https://apps.apple.com/us/app/polygon-id/id1629870183
   - Google Play Store : https://play.google.com/store/apps/details?id=com.polygonid.wallet&hl=en&gl=US&pli=1
2. Off-Chain KYC Verification process at the Shrine/Temple
   - E.g. Checking of passport for issuing date and expiry date passport stamp
3. Shrine/Temple issues a credential claim in a form of a QR Code
4. User logs into GoushinSoul web app, opens Polygon ID app and scans QR Code
5. User gets navigated to a payment page that provides user an option to pay either via fiat or crypto for a digital GoshuinSoul stamp
