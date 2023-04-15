import React, { useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@goshuinsoul/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useAuth } from '@goshuinsoul/providers';
import { NextPageWithLayout } from './_app';
library.add(faEnvelope, faPhone, faLocationDot);

const Page: NextPageWithLayout = () => {
  const { user, login } = useAuth();
  useEffect(() => {
    if (!user) {
      login();
    }
  });
  return (
    <>
      <Navbar />
      <div className="wrap">
        <div className="container">
          <div className="backBtn mb-10">
            <Link href="/home" passHref>
              Back
            </Link>
          </div>
        </div>
        <div className="nft-area">
          <div className="nft-contain">
            <h1>My Profile</h1>
            <div className="row space-top">
              <div className="col-md-3">
                <div className="nft-profile-img">
                  <img src="stamp.png" alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <ul className="profile-info">
                  <li>
                    <h2>
                      {user?.first_name} {user?.last_name}
                    </h2>
                  </li>
                  <li>
                    <label>
                      <FontAwesomeIcon icon="envelope" />
                    </label>
                    <span>{user?.email}</span>
                  </li>
                  <li>
                    <label>
                      <FontAwesomeIcon icon="phone" />{' '}
                    </label>
                    <span>{user?.mobile}</span>
                  </li>
                  <li>
                    <label>
                      <FontAwesomeIcon icon="location-dot" />{' '}
                    </label>
                    <span>
                      {user?.city},{user?.country}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
