import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../hooks/use-apollo";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const { client } = useApollo(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  if (!client) {
    return null;
  }
  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>Welcome to lexus!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </>
  );
}

export default CustomApp;
