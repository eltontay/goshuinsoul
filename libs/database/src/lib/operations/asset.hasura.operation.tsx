import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type GetAssetQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAssetQuery = { __typename: 'query_root', assets: Array<{ __typename: 'assets', assetName: string, assetValue: number, assetType: string, availableSupply: number, tokenized: boolean, couponRate: string | null, maturity: string | null, currency: string | null, assetId: string | null }> };


export const GetAssetDocument = /*#__PURE__*/ gql`
    query getAsset {
  assets {
    assetName
    assetValue
    assetType
    availableSupply
    tokenized
    couponRate
    maturity
    currency
    assetId
  }
}
    `;

/**
 * __useGetAssetQuery__
 *
 * To run a query within a React component, call `useGetAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssetQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssetQuery(baseOptions?: Apollo.QueryHookOptions<GetAssetQuery, GetAssetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAssetQuery, GetAssetQueryVariables>(GetAssetDocument, options);
      }
export function useGetAssetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAssetQuery, GetAssetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAssetQuery, GetAssetQueryVariables>(GetAssetDocument, options);
        }
export type GetAssetQueryHookResult = ReturnType<typeof useGetAssetQuery>;
export type GetAssetLazyQueryHookResult = ReturnType<typeof useGetAssetLazyQuery>;
export type GetAssetQueryResult = Apollo.QueryResult<GetAssetQuery, GetAssetQueryVariables>;
export function refetchGetAssetQuery(variables?: GetAssetQueryVariables) {
      return { query: GetAssetDocument, variables: variables }
    }