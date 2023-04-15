import {
  ApolloCache,
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { hasuraPossibleTypes } from '@eth-tokyo/database';
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';
import merge from 'deepmerge';
import isDeepEqual from 'fast-deep-equal/react';
import { GetServerSidePropsResult, GetStaticPropsResult } from 'next';
import { useEffect, useState } from 'react';
import { useEffectOnce, usePrevious } from 'react-use';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
export const PERSISTOR_CACHE_KEY = 'zamzam-apollo-cache';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createCache() {
  return new InMemoryCache({
    typePolicies: {},
    possibleTypes: hasuraPossibleTypes,
  });
}

/**
 * Configure an ApolloClient instance for Server Side Rendering (SSR) or for browser Client Side Rendering (CSR)
 */
function createApolloClient(cache?: ApolloCache<NormalizedCacheObject>) {
  const hasuraIntegrationLink = createHttpLink({ uri: `/api/hasura-integration` });
  const graphMiddlewareLink = createHttpLink({ uri: '/api/graph-middleware' });

  const link = split(
    (operation) => operation.getContext().clientName === 'hasura',
    hasuraIntegrationLink,
    graphMiddlewareLink
  );

  const graphMiddlewareWebSocketLink = new WebSocketLink({
    uri: '/api/graph-middleware',
    options: {
      reconnect: true,
      lazy: true,
    },
  });
  const hasuraIntegrationWebSocketLink = new WebSocketLink({
    uri: '/api/hasura-integration',
    options: {
      reconnect: true,
      lazy: true,
    },
  });
  const wsLink = split(
    (operation) => operation.getContext().clientName === 'hasura',
    hasuraIntegrationWebSocketLink,
    graphMiddlewareWebSocketLink
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    link
  );

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // ApolloClient for CSR
  // Use this link for clientside GraphQL Queries and Mutations

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([
      errorLink,
      new RetryLink({
        delay: {
          initial: 300,
          max: Infinity,
          jitter: true,
        },
        attempts: {
          max: 5,
          retryIf: (error, _operation) => !!error,
        },
      }),
      splitLink,
    ]),
    cache: cache || createCache(),
  });
}

function mergeCache(cache1: NormalizedCacheObject, cache2: NormalizedCacheObject) {
  return merge(cache1, cache2, {
    // Combine arrays using object equality (like in sets)
    arrayMerge: (destinationArray, sourceArray) => [
      ...sourceArray,
      ...destinationArray.filter((d) => sourceArray.every((s) => !isDeepEqual(d, s))),
    ],
  });
}

export function initializeApollo(cache?: ApolloCache<NormalizedCacheObject>): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(cache);

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState<
  P extends GetServerSidePropsResult<Record<string, unknown>> | GetStaticPropsResult<Record<string, unknown>>
>(client: ApolloClient<NormalizedCacheObject>, pageProps: P, existingCache?: NormalizedCacheObject): P {
  if (pageProps && 'props' in pageProps) {
    const props = pageProps.props;

    if (existingCache) {
      props[APOLLO_STATE_PROP_NAME] = mergeCache(client.cache.extract(), existingCache);
    } else {
      props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }
  }

  return pageProps;
}

function mergeAndRestoreCache(client: ApolloClient<NormalizedCacheObject>, state: NormalizedCacheObject | undefined) {
  if (!state) return;

  // Get existing cache, loaded during client side data fetching
  const existingCache = client.extract();
  // Merge the existing cache into data passed from getStaticProps/getServerSideProps
  const data = mergeCache(state, existingCache);
  // Restore the cache with the merged data
  client.cache.restore(data);
}

export function useApollo(pageProps: Record<string, unknown>): {
  client: ApolloClient<NormalizedCacheObject> | undefined;
  cachePersistor: CachePersistor<NormalizedCacheObject> | undefined;
} {
  const state = pageProps[APOLLO_STATE_PROP_NAME] as NormalizedCacheObject | undefined;
  const previousState = usePrevious(state);

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [cachePersistor, setCachePersistor] = useState<CachePersistor<NormalizedCacheObject>>();

  useEffectOnce(() => {
    async function init() {
      const cache = createCache();

      const cachePersistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        debug: process.env.NODE_ENV === 'development',
        key: PERSISTOR_CACHE_KEY,
      });

      // Restore client side persisted data before letting the application to
      // run any queries
      await cachePersistor.restore();

      const client = initializeApollo(cache);

      mergeAndRestoreCache(client, state);

      // Trigger persist to persist data from SSR
      cachePersistor.persist();

      setCachePersistor(cachePersistor);
      setClient(client);
    }

    init();
  });

  useEffect(() => {
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here during page transitions
    if (client && state && previousState && !isDeepEqual(state, previousState)) {
      mergeAndRestoreCache(client, state);

      if (cachePersistor) {
        // Trigger persist to persist data from SSR
        cachePersistor.persist();
      }
    }
  }, [state, previousState, client, cachePersistor]);

  return { client, cachePersistor };
}
