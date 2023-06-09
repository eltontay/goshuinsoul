import React from 'react';
import { NextPageWithLayout } from './_app';
import Router from 'next/router';
import { useAuth } from '@goshuinsoul/providers';
import { Navbar } from '@goshuinsoul/components';

const Page: NextPageWithLayout = () => {
  const { user, login } = useAuth();

  const [count, setCount] = React.useState<number>(1);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const amount = 500 * count;

  return (
    <>
      <div className="wrap">
        <div className="nft-box-wrap">
          <div className="box-main">
            <div className="nft-img">
              <a href="">
                <img src="stamp.png" alt="" />
              </a>
            </div>
            <div className="detail-nft">
              <div className="nft-heading p-2">
                <h2>Goshuin Soul NFT</h2>
                <div className="nft-artist">
                  <div className="nft-artist-img">
                    <img src="temple.jpeg" alt="" />
                  </div>
                  <div className="nft-artist-detail">
                    <label htmlFor="">Temple</label>
                    <span>zojo-ji</span>
                  </div>
                </div>
              </div>
              <div className="action-area p-2">
                <div className="action-price">
                  <ul className="price-bar">
                    <li>
                      <button
                        className="graybtn"
                        onClick={() => {
                          dec();
                        }}
                      >
                        -
                      </button>
                    </li>
                    <li>
                      <div className="result">{count}</div>
                    </li>
                    <li>
                      <button
                        className="graybtn"
                        onClick={() => {
                          inc();
                        }}
                      >
                        +
                      </button>
                    </li>
                  </ul>
                  <div className="price-info">¥{amount}</div>
                </div>
                <div className="btn-action">
                  <button
                    className="rounded-pill addtocart"
                    onClick={() => {
                      if (!user) {
                        login();
                      } else {
                        Router.push(
                          {
                            pathname: '/zkProof',
                            query: { amount: amount, count: count },
                          },
                          '/'
                        );
                      }
                    }}
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
