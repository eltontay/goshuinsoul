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
import Router from 'next/router';

library.add(faSpinner, fa2);

interface IToken {
  txHash: string[];
  amount: string;
  status: string[];
  created: number;
}

const Page: NextPageWithLayout = () => {
  const [redirectSeconds, setRedirectSeconds] = useState<number>(10);
  const amount = Router.query.amount;
  const count = Router.query.count;
  useEffect(() => {
    if (redirectSeconds == 0) {
      Router.push(
        {
          pathname: '/Payment',
          query: { amount: amount, count: count },
        },
        '/'
      );
      return;
    }

    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);

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
            <h4>
              Get the zk proof verification by scanning from PolygonId app
            </h4>

            <div className="row space-top">
              <div className="col-md-6">
                <div className="nft-img">
                  <img src="qrcode.png" alt="" />
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
