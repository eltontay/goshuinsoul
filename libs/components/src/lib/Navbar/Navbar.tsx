import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { navbarItems } from './Navbar.utils';
import { useAuth } from 'libs/providers/src';
import { faSpinner, fa2 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MetaMaskInpageProvider } from '@metamask/providers';


library.add(faSpinner, fa2);


declare var window: any

export function Navbar(props: any) {
  const router = useRouter();
  const { login, logout, user, web3Auth, isLoading ,provider} = useAuth();
  const [isLogged, setIsLogged] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const [isMpen, setShow] = useState(false);
  const [copy, setcopy] = useState('Copy');
  const toggleMenu1 = () => setShow(!isMpen);
  const [address, setaddress] = useState<string>('');
  const ethereum = window.ethereum as MetaMaskInpageProvider;

  async function getAccount() {
    const accounts = await ethereum.enable();
    const account = accounts[0];
    // do something with new account here
    if(user){
    logout()
    }
  }

  ethereum.on('accountsChanged', function (accounts) {
    getAccount();
  })

  return (
    <>
      {/* Modal Start */}
      {/* Modal end */}
      <div className="main">
        {!isLogged && (
          <div className="container-fluid navbar p-4">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2 logo">
                  <Link href="/" passHref>
                    <img src="/logo.png" alt="NFT Logo" />{' '}
                  </Link>
                </div>
                <div className="col-md-6">
                  <ul className="navlnks flex">
                    <li>
                      <Link href="/MarketPlace" passHref>
                        <span>Marketplace</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/AboutUs" passHref>
                        <span>About us</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/HowItWorks" passHref>
                        <span>How it works?</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/FaqList" passHref>
                        <span>FAQs</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 text-right">
                  {!user &&
                    (isLoading ? (
                      <FontAwesomeIcon icon="spinner"></FontAwesomeIcon>
                    ) : (
                      <div className="before-login">
                        <button
                          type="submit"
                          className="rounded-pill btn-blue "
                          onClick={() => login()}
                        >
                          Login
                        </button>
                      </div>
                    ))}
                  {user && (
                    <>
                      <div className="after-login">
                        <ul className="nav-login">
                          <li>
                            <div
                              className="icon1 wallet-icon"
                              onClick={()=>{toggleMenu1(); setOpen(false)}}
                            >
                              <img src="icon-wallet.svg" alt="" />
                            </div>
                            {isMpen && (
                              <div className="submenu-wrap">
                                <div
                                  className="close-btn"
                                  onClick={toggleMenu1}
                                >
                                  X
                                </div>
                                <div className="wallet-info">
                                  <h2>Wallet</h2>
                                  <ul className="wallet-area">
                                    <li>
                                      <label htmlFor="">Public Address:</label>
                                      <span>{user.user_address}</span>
                                    </li>
                                    {provider?.connection?.url === 'metamask' ? '' :

                                    <li>
                                      <label htmlFor="">
                                        This is your private key (Click to copy)
                                      </label>
                                      <p>
                                        xxxxxxxxxxxxxxxxxxx{' '}
                                        <span
                                          className="copyicon"
                                          onClick={async () => {
                                            navigator.clipboard.writeText(
                                              `${await web3Auth?.provider?.request(
                                                { method: 'eth_private_key' }
                                              )}`
                                            );
                                            setcopy('Copied');
                                          }}
                                        >
                                          {copy}
                                        </span>
                                      </p>
                                    </li>
}
                                  </ul>
                                  <div className="warning-text">
                                    Warning: Never disclose this key. Anyone
                                    with your private keys can steal any assets
                                    held in your account.
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <div
                              className="icon1 drop-opt"
                              onClick={()=>{toggleMenu();setShow(false)}}
                            >
                              <img src="icon-user.svg" alt="" />
                            </div>
                            {isOpen && (
                              <ul className="submenu">
                                <li>
                                  <Link href="/myProfile">Profile</Link>
                                </li>
                                <li>
                                  <Link href="/MyNft">My NFT</Link>
                                </li>
                                <li>
                                  <Link href="javascript:void(0)">
                                    <span onClick={() => logout()}>Logout</span>
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {showMobileMenu && (
          <div className="mobile-menu">
            <div className="mobile-icons text-center mt-12">
              {user && <p className="mb-3">{user?.user_address}</p>}
              {user && (
                <a
                  href="javascript:void(0)"
                  onClick={() => logout()}
                  className="logout-div py-2 px-2 font-medium text-white  rounded  transition duration-300"
                >
                  <Image
                    className="logout"
                    src="/logout.png"
                    alt="Notification"
                    width={20}
                    height={20}
                  />
                </a>
              )}
            </div>
          </div>
        )}

        {isLogged && (
          <div className="flex items-center nav-box text-md md:text-xl space-x-1 md:space-x-2 logo-mobile">
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="Cococola Logo"
                width={169}
                height={99}
              />{' '}
            </Link>

            {navbarItems.map((navItem) => {
              return (
                <Link href={navItem.href} passHref key={navItem.label}>
                  className=
                  {`md:px-2 hover-blue text-[#fF0000] text-right collection-link object-right ${isNavItemActive(navItem.href, navItem.activeOnUrls, router)
                      ? 'underline decoration-blue-500 underline-offset-4 '
                      : ''
                    }`}
                  {navItem.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

function isNavItemActive(
  navItemUrl: string,
  activeOnUrls: string[],
  router: NextRouter
) {
  const currentPath = router.pathname;

  const isOnHomePage = currentPath === '/';
  if (navItemUrl === '/') return isOnHomePage;

  activeOnUrls = [...activeOnUrls, navItemUrl];
  for (const url of activeOnUrls) {
    if (currentPath.includes(url.toLowerCase())) return true;
  }
  return false;
}
