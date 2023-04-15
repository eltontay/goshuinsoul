import { Navbar } from '@goshuinsoul/components';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { useAuth, useContract, useLocation } from '@goshuinsoul/providers';
import {
  useClaimTokenMutation,
  useGetClaimedTokenAmountsQuery,
} from '@goshuinsoul/database';
import * as ethers from 'ethers';
import { toast } from 'react-hot-toast';

const Page: NextPageWithLayout = () => {
  const [payment, setPayment] = useState<string>();
  const { location } = useLocation();
  const { user, provider } = useAuth();
  const [claimToken] = useClaimTokenMutation();
  const [exRate, setRate] = useState<number>(0);
  const [disable, setDisable] = useState(false);
  console.log(
    'console envs',
    process.env.NEXT_PUBLIC_CLEOPATRA_SC_ADDRESS,
    process.env.NEXT_PUBLIC_EMPIRE_SC_ADDRESS,
    process.env.NEXT_PUBLIC_NFT_TYPE
  );

  console.log(location)

  const contractAddress =
    process.env.NEXT_PUBLIC_NFT_TYPE === 'cleopatra'
      ? process.env.NEXT_PUBLIC_CLEOPATRA_SC_ADDRESS
      : process.env.NEXT_PUBLIC_EMPIRE_SC_ADDRESS;

  const { data } = useGetClaimedTokenAmountsQuery({
    variables: {
      nftType: 'empire',
      tokenId: 1,
      user_address: user?.user_address,
    },
    fetchPolicy: 'network-only',
  });
  const { sdk } = useContract();
  const option = ['MATIC', 'USDC', 'USDT', 'DAI', 'WETH'];
  const amount = Router.query.amount;
  const count = Router.query.count;


  useEffect(() => {
    const convert = async () => {
      return await axios.get(`/api/convert`, {
        params: {
          crypto: `${payment}`,
          amount: `${amount}`,
        },
      });
    };
    convert().then((response) => {
      setRate(response?.data[0]?.quote[`${payment}`]?.price);
    });
  }, [payment]);

  const handleFiat = async () => {
    const tx = await axios.post('/api/checkout_sessions', {
      nftType: 'empire',
      txType: 'mint',
      contractAddress: contractAddress,
      tokenId: '1',
      recipientAddress: user?.user_address,
      amounts: count,
      paymentType: 'stripe',
    });
    Router.push(tx.data.url);
  };

  const handleCrypto = async () => {
    let tx = undefined;
    if (payment === 'USDC') {
      console.log('console inside USDC');
      try {
        const allowance =  await sdk?.USDC.allowance(
          user.user_address,
          contractAddress
        );

        const usdcAmount = Number(exRate) * Number(count) * 10 ** 6;
        console.log('console usdcAmount', await sdk);

        if (Number(allowance) < usdcAmount) {
          console.log('console in chaeck', usdcAmount);
          const approveTx = async () => {
            await sdk?.USDC.provider.waitForTransaction(
              await (
                await sdk?.USDC.approve(
                  contractAddress,
                  ethers.constants.MaxUint256
                )
              )?.hash
            );
          };
          await toast.promise(approveTx(), {
            loading: 'Approving...',
            success: 'Approved',
            error: 'ERC token approval failed',
          });
        }

        await sdk?.USDC.provider.waitForTransaction(
          tx = await (
            await sdk?.CrowdfundingNFT.mintWithToken(
              Number(count),
              process.env.NEXT_PUBLIC_USDC_ADDRESS
            )
          )?.hash
        );
        console.log('console tx mintwithtoken completed', tx?.hash);
      } catch (e) {
        console.error(e)
        throw new Error(e);
      }
    }

    if (payment === 'USDT') {
      try {
        const allowance = await sdk?.USDT.allowance(
          user.user_address,
          contractAddress
        );
        console.log(Number(allowance), Number(exRate), Number(count));

        const usdtAmount = Number(exRate) * Number(count) * 10 ** 6;
        console.log('console usdtAmount', usdtAmount);

        if (Number(allowance) < usdtAmount) {
          const approveTx = async () => {
            await sdk?.USDT.provider.waitForTransaction(
              await (
                await sdk.USDT.approve(
                  contractAddress,
                  ethers.constants.MaxUint256
                )
              )?.hash
            );
          };
          await toast.promise(approveTx(), {
            loading: 'Approving...',
            success: 'Approved',
            error: 'ERC token approval failed',
          });
        }

        await sdk.USDT.provider.waitForTransaction(
          tx = await (
            await sdk?.CrowdfundingNFT.mintWithToken(
              Number(count),
              process.env.NEXT_PUBLIC_USDT_ADDRESS
            )
          )?.hash
        );
        console.log('console tx mintwithtoken completed', tx);
      } catch (e) {
        throw new Error(e);
      }
    }

    if (payment === 'DAI') {
      try {
        const allowance =  await sdk?.DAI.allowance(
          user.user_address,
          contractAddress
        );

        console.log(Number(allowance));

        const daiAmount = Number(exRate) * Number(count) * 10 ** 18;

        if (Number(allowance) < daiAmount) {
          const approveTx = async () => {
            await sdk?.DAI.provider.waitForTransaction(
              await (
                await sdk.DAI.approve(
                  contractAddress,
                  ethers.constants.MaxUint256
                )
              )?.hash
            );
          };
          await toast.promise(approveTx(), {
            loading: 'Approving...',
            success: 'Approved',
            error: 'ERC token approval failed',
          });
        }
        await sdk.DAI.provider.waitForTransaction(
          tx = await (
            await sdk?.CrowdfundingNFT.mintWithToken(
              Number(count),
              process.env.NEXT_PUBLIC_DAI_ADDRESS
            )
          )?.hash
        );
        console.log('console tx mintwithtoken completed', tx);
      } catch (e) {
        throw new Error(e);
      }
    }

    if (payment === 'WETH') {
      try {
        const allowance =  await sdk?.WrappedETH.allowance(
          user.user_address,
          contractAddress
        );

        console.log(Number(allowance));

        const wethAmount = Number(exRate) * Number(count) * 10 ** 18;

        if (Number(allowance) < wethAmount) {
          const approveTx = async () => {
            await sdk?.WrappedETH.provider.waitForTransaction(
              await (
                await sdk.WrappedETH.approve(
                  contractAddress,
                  ethers.constants.MaxUint256
                )
              )?.hash
            );
          };
          await toast.promise(approveTx(), {
            loading: 'Approving...',
            success: 'Approved',
            error: 'ERC token approval failed',
          });
        }

        await sdk.WrappedETH.provider.waitForTransaction(
          tx = await (
            await sdk?.CrowdfundingNFT.mintWithToken(
              Number(count),
              process.env.NEXT_PUBLIC_WETH_ADDRESS
            )
          )?.hash
        );
        console.log('console tx mintwithtoken completed');
      } catch (e) {
        throw new Error(e);
      }
    }

    if (payment === 'MATIC') {
      try {
        console.log('console exRate', exRate);
        const maticAmount = Number(exRate) * Number(count);
        // console.log('consoel matic',exRate.toFixed(2), typeof exRate,ethers, ethers?.utils.parseEther(exRate.toString()));
        console.log('console matic amoint', maticAmount);
        console.log(1111,ethers?.utils.parseEther(maticAmount.toString()));
        sdk.CrowdfundingNFT.provider.waitForTransaction(
          (tx = await (
            await sdk?.CrowdfundingNFT.mintWithToken(
              Number(count),
              '0x0000000000000000000000000000000000000000',
              { value: ethers?.utils.parseEther(maticAmount.toString()) }
            )
          )?.hash)
        );

        console.log('console tx mintwithtoken completed');
      } catch (e) {
        throw new Error(e);
      }
    }
    if (tx) {
      await claimToken({
        variables: {
          objects: {
            user_address: user.user_address,
            amounts: data?.claimed_tokens[0]?.amounts
              ? data?.claimed_tokens[0]?.amounts + Number(count)
              : Number(count),
            nft_type: 'empire',
            token_id: 1,
            contract_address: contractAddress,
            transactions: {
              data: {
                amounts: Number(count),
                contract_address: contractAddress,
                status: 'completed',
                tx_hash: String(tx),
                payment_type: 'crypto',
                payment_gateway_id: '',
                crypto_type: payment,
                sqs_message_id: '',
              } as any,
            } as any,
          } as any,
        },
      });
    } else {
      throw new Error();
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrap">
        <div className="container">
          <div className="backBtn mb-10">
            <Link href="/" passHref>
              Back
            </Link>
          </div>
        </div>
        <div className="register-area">
        {location?.country_name == 'United States'?
        <div className="register-contain">
        <h2>You are not allowed to purchase this NFT</h2>
        </div>
        :
          <div className="register-contain">
            <h1>Payment</h1>

            <div className="payment-info">
              <div
                className={
                  payment === 'Stripe'
                    ? 'payment-row bg-highlight'
                    : 'payment-row'
                }
              >
                <h2>Fiat</h2>
                <ul className="payment-links">
                  <li>
                    <button
                      className={`${payment == 'Stripe' ? 'btn-payment2' : 'btn-payment2'
                        }`}
                      onClick={() => setPayment('Stripe')}
                    >
                      <img src="visa.png" alt="" />
                    </button>
                  </li>
                  <li>
                    <button
                      className={`${payment == 'Stripe' ? 'btn-payment2' : 'btn-payment2'
                        }`}
                      onClick={() => setPayment('Stripe')}
                    >
                      <img src="master-card.png" alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              {provider?.connection?.url === 'metamask' && (
                <div
                  className={
                    payment && payment !== 'Stripe'
                      ? 'payment-row bg-highlight'
                      : 'payment-row'
                  }
                >
                  <h2>Crypto</h2>
                  <ul className="list-payment">
                    {option.map((v, i) => (
                      <li key={i}>
                        <div className="payment-icons">
                          <button
                            className={`${payment == v ? 'btn-payment1' : 'btn-payment'
                              }`}
                            onClick={() => setPayment(String(v))}
                          >
                            {v}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="col-md-12">
              <button
                disabled={disable}
                className="submitBtn"
                onClick={() => {
                  setDisable(true);
                  if (payment == 'Stripe') {
                    toast.promise(handleFiat(), {
                      loading: 'Transaction in process...',
                      success: (data) => {
                        setDisable(false);
                        return '';
                      },
                      error: (err) => {
                        setDisable(false);
                        return 'Cannot complete transaction';
                      },
                    });
                  } else {
                    toast.promise(handleCrypto(), {
                      loading: 'Transaction in process...',
                      success: (data) => {
                        Router.push('/MyNft');
                        return 'Transaction Completed';
                      },
                      error: (err) => {
                        setDisable(false);
                        return 'Cannot compelete transaction';
                      },
                    });
                  }
                }}
              >
                Pay {exRate ? `${exRate.toFixed(2)} ${payment}` : `€${amount}`}
              </button>
            </div>
          </div>
}
        </div>
      </div>
    </>
  );
};
export default Page;
