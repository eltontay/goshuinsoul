import { Web3Provider } from '@ethersproject/providers';
import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  CustomChainConfig,
  UserInfo,
  WALLET_ADAPTERS,
} from '@web3auth/base';
import type { Web3Auth } from '@web3auth/web3auth';
import {
  GetUserQuery,
  UserFieldsFragment,
  useGetUserQuery,
  useUpsertWeb3UserMutation,
} from '@goshuinsoul/database';
import { useRouter } from 'next/router';
import { Web3Auth as web3 } from '@web3auth/web3auth';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useStorage } from 'libs/components/src';

export interface IProfile extends UserInfo {
  id?: string;
  firstname?: string;
  lastname?: string;
  avatar?: string;
  role?: string;
  status?: boolean;
  isOnboarded?: boolean;
  wallet_id?: string;
}

export interface IWeb3AuthContext {
  provider?: Web3Provider;
  web3Auth?: Web3Auth;
  isLoading: boolean;
  user: GetUserQuery['users'][number] | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  setSession: (user: UserFieldsFragment) => Promise<void>;
}

export const Web3AuthContext = createContext<IWeb3AuthContext>({
  provider: undefined,
  web3Auth: undefined,
  isLoading: false,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: async () => {},
  setSession: async (user: UserFieldsFragment) => {},
});

export interface IOpenLoginStore {
  email: string;
}

// Boolean that returns true if we are client-side

export function useAuth() {
  const context = useContext(Web3AuthContext);
  if (!context) {
    throw new Error(
      'You must use Web3AuthContext in order to consume this context'
    );
  }
  return context;
}

interface IWeb3AuthProps {
  children?: React.ReactNode;
}

export const Web3AuthProvider = ({ children }: IWeb3AuthProps) => {
  const router = useRouter();
  const web3AuthRef = useRef<Web3Auth | undefined>();
  const providerRef = useRef<Web3Provider | undefined>();
  const { setItem } = useStorage();
  const [isLoading, setIsLoading] = useState(true);
  const [blockchainAddress, setBlockchainAddress] = useState<
    string | undefined
  >();

  console.log('console blockchainAddress', blockchainAddress);

  const { data: userData, refetch } = useGetUserQuery({
    variables: {
      blockchainAddress: blockchainAddress ?? '',
    },
    skip: !blockchainAddress,
    fetchPolicy: 'network-only',
  });
  const userInfo = useRef<Partial<UserInfo>>();

  useEffect(() => {
    setIsLoading(true);

    const subscribeAuthEvents = async (web3auth: Web3Auth) => {
      web3auth.on(ADAPTER_EVENTS.CONNECTED, async () => {
        if (web3auth.provider) {
          const provider = new Web3Provider(web3auth.provider);
          //setProvider(provider);
          providerRef.current = provider;
          userInfo.current = await web3auth?.getUserInfo();
          const address = (await provider.listAccounts())[0];
          setBlockchainAddress(address);
        }
      });
      web3auth.on(ADAPTER_EVENTS.CONNECTED, () => {
        //console.log("console connected");
      });

      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        setBlockchainAddress(undefined);
      });

      web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error('some error or user has cancelled login request', error);
      });
    };

    async function init() {
      try {
        const { OpenloginAdapter } = await import(
          '@web3auth/openlogin-adapter'
        );
        const clientId =
          'BKMEx0P9Z_IFJYLTeZiAsRHeOnxfv3xLm4lSiij1TEgpXfUI2Vzuf74lX1Fw4-4vmchfRGi5hkj4eSO36JD0yFs';
        const web3AuthInstance = new web3({
          chainConfig:
            process.env['NEXT_PUBLIC_BLOCKCHAIN_NETWORK'] === 'mainnet'
              ? ({
                  displayName: 'Polygon Mainnet',
                  chainNamespace: CHAIN_NAMESPACES.EIP155,
                  chainId: '0x89',
                  rpcTarget: `https://polygon-rpc.com`,
                  blockExplorer: 'https://polygonscan.com/',
                  ticker: 'MATIC',
                  tickerName: 'MATIC Token',
                } as CustomChainConfig)
              : ({
                  displayName: 'Polygon Testnet',
                  chainNamespace: CHAIN_NAMESPACES.EIP155,
                  chainId: '0x13881',
                  rpcTarget: `https://testnet-d214.settlemint.com/bpaas-41D1F9e07A4817CC91a14d4e7F2E101DAfc5E8F5`,
                  blockExplorer: 'https://mumbai.polygonscan.com/',
                  ticker: 'MATIC',
                  tickerName: 'MATIC Token',
                } as CustomChainConfig),
          clientId,
          uiConfig: {
            theme: 'light',
            loginMethodsOrder: ['google'],
            appLogo: 'https://web3auth.io/images/w3a-L-Favicon-1.svg', // Your App Logo Here
          },
        });

        const adapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: 'none',
          },
          adapterSettings: {
            network:
              process.env['NEXT_PUBLIC_BLOCKCHAIN_NETWORK'] === 'mainnet'
                ? 'mainnet'
                : 'testnet',
            clientId,
            uxMode: 'popup',
            whiteLabel: {
              name: 'Goshuinsoul',
            },
          },
        });
        web3AuthInstance.configureAdapter(adapter);
        subscribeAuthEvents(web3AuthInstance);
        web3AuthRef.current = web3AuthInstance;
        await web3AuthInstance.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: {
              label: 'openlogin',
              loginMethods: {
                reddit: {
                  name: 'reddit',
                  showOnModal: false,
                },
                discord: {
                  name: 'discord',
                  showOnModal: false,
                },
                twitch: {
                  name: 'twitch',
                  showOnModal: false,
                },
                line: {
                  name: 'line',
                  showOnModal: false,
                },
                github: {
                  name: 'github',
                  showOnModal: false,
                },
                kakao: {
                  name: 'kakao',
                  showOnModal: false,
                },
                linkedin: {
                  name: 'linkedin',
                  showOnModal: false,
                },
                weibo: {
                  name: 'weibo',
                  showOnModal: false,
                },
                wechat: {
                  name: 'wechat',
                  showOnModal: false,
                },
                twitter: {
                  name: 'twitter',
                  showOnModal: false,
                },
                email_passwordless: {
                  name: 'email_passwordless',
                  showOnModal: false,
                },
              },
            },
          },
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  // useEffect(() => {
  //   async function setSessionCookies(cookies: Record<string, string>) {
  //     await fetch("/api/session", {
  //       method: "POST",
  //       body: JSON.stringify(cookies),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   }

  //   if ((userData?.users ?? []).length > 0) {
  //     // logout();
  //     setSessionCookies({
  //       "x-hasura-user-id": userData?.users[0].blockchainAddress ?? "",
  //       "x-hasura-role": userData?.users[0].isAdmin ? "admin" : "user",
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userData?.users]);
  async function setSessionCookies(cookies: Record<string, string>) {
    await fetch('/api/session', {
      method: 'POST',
      body: JSON.stringify(cookies),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  async function setSession(user: UserFieldsFragment) {
    if (user) {
      // logout();
      setSessionCookies({
        'x-hasura-user-id': user.user_address ?? '',
      });
      refetch();
    }
  }

  useEffect(() => {
    console.log('USER FETCHED', userData?.users);
    if (userData?.users !== undefined && (userData?.users ?? []).length > 0) {
      setSession(userData?.users[0]);
      if (router.pathname === '/register') {
        router.push('/');
      }
    }

    if (userData?.users !== undefined && (userData?.users ?? []).length <= 0) {
      if (blockchainAddress) {
        let parts = userInfo.current?.name?.split(' ');
        let firstName = parts?.shift();
        let lastName = parts?.join(' ');

        console.log('User Info', userInfo.current);
        setItem('public_key', blockchainAddress || '');
        setItem('first_name', firstName || '');
        setItem('last_name', lastName || '');
        setItem('email', userInfo.current?.email || '');

        router.push('/register');
      }
    }
  }, [userData?.users]);

  const login = async () => {
    if (!web3AuthRef.current) {
      return;
    }
    await web3AuthRef.current.connect();
  };

  const logout = async () => {
    if (!web3AuthRef.current) {
      return;
    }
    await web3AuthRef.current?.logout();
    setBlockchainAddress(undefined);
    router.push('/');
  };

  const contextProvider = {
    provider: providerRef.current,
    web3Auth: web3AuthRef.current,
    user: useMemo(
      () => userData?.users?.find((user: any) => user) ?? null,
      [userData?.users]
    ),
    isLoading,
    login,
    logout,
    setSession,
  };

  return (
    <Web3AuthContext.Provider value={contextProvider}>
      {children}
    </Web3AuthContext.Provider>
  );
};
