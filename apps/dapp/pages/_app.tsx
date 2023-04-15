import App, { AppContext, AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useApollo } from '../hooks/use-apollo';
import { Toaster } from 'react-hot-toast';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import router from 'next/router';
import {
  ContractProvider,
  LocationProvider,
  Web3AuthProvider,
} from '@goshuinsoul/providers';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const { client } = useApollo(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  if (!client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <Web3AuthProvider>
        <ContractProvider>
          <LocationProvider>
            <Head>
              <title>Goshuin SBT</title>
            </Head>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  wordBreak: 'break-all',
                },
              }}
            />

            <Component {...pageProps} />
          </LocationProvider>
        </ContractProvider>
      </Web3AuthProvider>
    </ApolloProvider>
  );
}

export default CustomApp;
