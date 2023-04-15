import type * as Types from '../../graphql.graph.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBalanceQueryVariables = Types.Exact<{
  account: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetBalanceQuery = { __typename: 'Query', erc1155Balances: Array<{ __typename: 'ERC1155Balance', valueExact: string, token: { __typename: 'ERC1155Token', identifier: string, totalSupply: { __typename: 'ERC1155Balance', id: string }, transfers: Array<{ __typename: 'ERC1155Transfer', transaction: { __typename: 'Transaction', id: string } }> } }> };

export type GetTransactionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTransactionQuery = { __typename: 'Query', transactions: Array<{ __typename: 'Transaction', blockNumber: string, id: string, timestamp: string, events: Array<{ __typename: 'ERC1155Transfer', valueExact: string, from: { __typename: 'Account', id: string } | null, to: { __typename: 'Account', id: string } | null, token: { __typename: 'ERC1155Token', identifier: string } }> }> };

export type GetToken1155QueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetToken1155Query = { __typename: 'Query', erc1155Tokens: Array<{ __typename: 'ERC1155Token', identifier: string, balances: Array<{ __typename: 'ERC1155Balance', valueExact: string, account: { __typename: 'Account', id: string } | null }> }> };

export type GetTokenBalanceQueryVariables = Types.Exact<{
  identifier: Types.InputMaybe<Types.Scalars['BigInt']>;
}>;


export type GetTokenBalanceQuery = { __typename: 'Query', accounts: Array<{ __typename: 'Account', id: string, ERC1155balances: Array<{ __typename: 'ERC1155Balance', valueExact: string, token: { __typename: 'ERC1155Token', identifier: string } }> }> };


export const GetBalanceDocument = /*#__PURE__*/ gql`
    query getBalance($account: String) {
  erc1155Balances(where: {account: $account}) {
    valueExact
    token {
      identifier
      totalSupply {
        id
      }
      transfers {
        transaction {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetBalanceQuery__
 *
 * To run a query within a React component, call `useGetBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalanceQuery({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useGetBalanceQuery(baseOptions?: Apollo.QueryHookOptions<GetBalanceQuery, GetBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBalanceQuery, GetBalanceQueryVariables>(GetBalanceDocument, options);
      }
export function useGetBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBalanceQuery, GetBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBalanceQuery, GetBalanceQueryVariables>(GetBalanceDocument, options);
        }
export type GetBalanceQueryHookResult = ReturnType<typeof useGetBalanceQuery>;
export type GetBalanceLazyQueryHookResult = ReturnType<typeof useGetBalanceLazyQuery>;
export type GetBalanceQueryResult = Apollo.QueryResult<GetBalanceQuery, GetBalanceQueryVariables>;
export function refetchGetBalanceQuery(variables?: GetBalanceQueryVariables) {
      return { query: GetBalanceDocument, variables: variables }
    }
export const GetTransactionDocument = /*#__PURE__*/ gql`
    query getTransaction {
  transactions {
    blockNumber
    events {
      ... on ERC1155Transfer {
        from {
          id
        }
        to {
          id
        }
        valueExact
        token {
          identifier
        }
      }
    }
    id
    timestamp
  }
}
    `;

/**
 * __useGetTransactionQuery__
 *
 * To run a query within a React component, call `useGetTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransactionQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
      }
export function useGetTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
        }
export type GetTransactionQueryHookResult = ReturnType<typeof useGetTransactionQuery>;
export type GetTransactionLazyQueryHookResult = ReturnType<typeof useGetTransactionLazyQuery>;
export type GetTransactionQueryResult = Apollo.QueryResult<GetTransactionQuery, GetTransactionQueryVariables>;
export function refetchGetTransactionQuery(variables?: GetTransactionQueryVariables) {
      return { query: GetTransactionDocument, variables: variables }
    }
export const GetToken1155Document = /*#__PURE__*/ gql`
    query getToken1155 {
  erc1155Tokens {
    identifier
    balances {
      valueExact
      account {
        id
      }
    }
  }
}
    `;

/**
 * __useGetToken1155Query__
 *
 * To run a query within a React component, call `useGetToken1155Query` and pass it any options that fit your needs.
 * When your component renders, `useGetToken1155Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetToken1155Query({
 *   variables: {
 *   },
 * });
 */
export function useGetToken1155Query(baseOptions?: Apollo.QueryHookOptions<GetToken1155Query, GetToken1155QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetToken1155Query, GetToken1155QueryVariables>(GetToken1155Document, options);
      }
export function useGetToken1155LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetToken1155Query, GetToken1155QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetToken1155Query, GetToken1155QueryVariables>(GetToken1155Document, options);
        }
export type GetToken1155QueryHookResult = ReturnType<typeof useGetToken1155Query>;
export type GetToken1155LazyQueryHookResult = ReturnType<typeof useGetToken1155LazyQuery>;
export type GetToken1155QueryResult = Apollo.QueryResult<GetToken1155Query, GetToken1155QueryVariables>;
export function refetchGetToken1155Query(variables?: GetToken1155QueryVariables) {
      return { query: GetToken1155Document, variables: variables }
    }
export const GetTokenBalanceDocument = /*#__PURE__*/ gql`
    query getTokenBalance($identifier: BigInt) {
  accounts {
    id
    ERC1155balances {
      token {
        identifier
      }
      valueExact
    }
  }
}
    `;

/**
 * __useGetTokenBalanceQuery__
 *
 * To run a query within a React component, call `useGetTokenBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenBalanceQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useGetTokenBalanceQuery(baseOptions?: Apollo.QueryHookOptions<GetTokenBalanceQuery, GetTokenBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenBalanceQuery, GetTokenBalanceQueryVariables>(GetTokenBalanceDocument, options);
      }
export function useGetTokenBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenBalanceQuery, GetTokenBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenBalanceQuery, GetTokenBalanceQueryVariables>(GetTokenBalanceDocument, options);
        }
export type GetTokenBalanceQueryHookResult = ReturnType<typeof useGetTokenBalanceQuery>;
export type GetTokenBalanceLazyQueryHookResult = ReturnType<typeof useGetTokenBalanceLazyQuery>;
export type GetTokenBalanceQueryResult = Apollo.QueryResult<GetTokenBalanceQuery, GetTokenBalanceQueryVariables>;
export function refetchGetTokenBalanceQuery(variables?: GetTokenBalanceQueryVariables) {
      return { query: GetTokenBalanceDocument, variables: variables }
    }