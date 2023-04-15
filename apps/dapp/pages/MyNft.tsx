import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@goshuinsoul/components';
import { NextPageWithLayout } from './_app';
import { useGetClaimedTokenQuery } from '@goshuinsoul/database';
import { useAuth } from '@goshuinsoul/providers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa2, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import moment from 'moment';
library.add(faSpinner, fa2);

interface IToken {
  txHash: string[];
  amount: string;
  status: string[];
  created: number;
}

const Page: NextPageWithLayout = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<Array<IToken>>([]);
  const { data, loading } = useGetClaimedTokenQuery({
    variables: {
      user_address: user?.user_address,
    },
    fetchPolicy: 'network-only',
    pollInterval: 1000,
  });
  useEffect(() => {
    const userData = [];
    data?.claimed_tokens.map((v) => {
      const obj = {
        txHash: v.transactions.map((n) => n.tx_hash),
        amount: v.amounts,
        status: v.transactions.map((n) => n.status),
        created: v.transactions.map((n) => new Date(n.created_at).getTime()),
      };
      userData.push(obj);
    });
    setUserData([...userData]);
  }, [data?.claimed_tokens]);
  console.log('user', userData);

  const sortedArray = userData.sort((a, b) => a.created - b.created);
  console.log('sortArray', sortedArray);

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
        <div className="nft-area">
          <div className="nft-contain">
            <h1>My Goshuins</h1>
            {userData[0]?.amount ? (
              <div className="row space-top">
                <div className="col-md-6">
                  <div className="nft-img">
                    <img src="stamp.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="status-info">
                    <label>Collected</label>
                  </div>
                  <div className="nft-artist">
                    <div className="nft-artist-img">
                      <img src="temple.jpeg" alt="" />
                    </div>
                    <div className="nft-artist-detail">
                      <label htmlFor="">Temple</label>
                      <span>zojo-ji</span>
                    </div>
                  </div>
                  <div className="artwork-heading">GoshuinSoul NFT</div>
                  <ul className="amount-collection">
                    <li>
                      <label htmlFor="">Item Price:</label>
                      <span>¥500</span>
                    </li>
                    <li>
                      <label htmlFor="">Total Quantity:</label>
                      <span>{userData[0]?.amount}</span>
                    </li>
                    <li>
                      <label htmlFor="">Total Amount:</label>
                      <span>¥{500 * Number(userData[0]?.amount)}</span>
                    </li>
                  </ul>
                  <div className="transhash">
                    <label htmlFor="">Transaction Hash:</label>
                    <ul className="list-trans">
                      {userData[0]?.txHash.map((v, i) => (
                        <li key={i}>
                          &bull;{' '}
                          <Link href={`https://mumbai.polygonscan.com/tx/${v}`}>
                            {v?.slice(0, 8)}
                            {v ? '....' : ''}
                            {v?.slice(v?.length - 8, v?.length)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="total-amount">
                    <label htmlFor="">Total Amount</label>
                    <span>€{35 * Number(userData[0]?.amount)}</span>
                  </div> */}
                </div>
              </div>
            ) : !data ? (
              <FontAwesomeIcon icon="spinner"></FontAwesomeIcon>
            ) : (
              <div className="nft-msg">
                Your purchased NFT will appear here after blockchain
                confirmation
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
