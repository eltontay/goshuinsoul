import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type ClaimTokenMutationVariables = Types.Exact<{
  objects?: Types.InputMaybe<Array<Types.Claimed_Tokens_Insert_Input> | Types.Claimed_Tokens_Insert_Input>;
}>;


export type ClaimTokenMutation = { __typename: 'mutation_root', insert_claimed_tokens: { __typename: 'claimed_tokens_mutation_response', affected_rows: number } | null };

export type GetClaimedTokenAmountsQueryVariables = Types.Exact<{
  nftType: Types.InputMaybe<Types.Scalars['String']>;
  tokenId: Types.InputMaybe<Types.Scalars['numeric']>;
  user_address: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetClaimedTokenAmountsQuery = { __typename: 'query_root', claimed_tokens: Array<{ __typename: 'claimed_tokens', amounts: number }> };

export type GetClaimedTokenQueryVariables = Types.Exact<{
  user_address: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetClaimedTokenQuery = { __typename: 'query_root', claimed_tokens: Array<{ __typename: 'claimed_tokens', amounts: number, transactions: Array<{ __typename: 'transactions', tx_hash: string | null, status: string, created_at: string }> }> };


export const ClaimTokenDocument = /*#__PURE__*/ gql`
    mutation claimToken($objects: [claimed_tokens_insert_input!] = {token: {data: {}}, transactions: {data: {}}}) {
  insert_claimed_tokens(
    objects: $objects
    on_conflict: {constraint: claimed_tokens_pkey, update_columns: amounts}
  ) {
    affected_rows
  }
}
    `;
export type ClaimTokenMutationFn = Apollo.MutationFunction<ClaimTokenMutation, ClaimTokenMutationVariables>;

/**
 * __useClaimTokenMutation__
 *
 * To run a mutation, you first call `useClaimTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimTokenMutation, { data, loading, error }] = useClaimTokenMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useClaimTokenMutation(baseOptions?: Apollo.MutationHookOptions<ClaimTokenMutation, ClaimTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClaimTokenMutation, ClaimTokenMutationVariables>(ClaimTokenDocument, options);
      }
export type ClaimTokenMutationHookResult = ReturnType<typeof useClaimTokenMutation>;
export type ClaimTokenMutationResult = Apollo.MutationResult<ClaimTokenMutation>;
export type ClaimTokenMutationOptions = Apollo.BaseMutationOptions<ClaimTokenMutation, ClaimTokenMutationVariables>;
export const GetClaimedTokenAmountsDocument = /*#__PURE__*/ gql`
    query getClaimedTokenAmounts($nftType: String, $tokenId: numeric, $user_address: String) {
  claimed_tokens(
    where: {nft_type: {_eq: $nftType}, token_id: {_eq: $tokenId}, user_address: {_eq: $user_address}}
  ) {
    amounts
  }
}
    `;

/**
 * __useGetClaimedTokenAmountsQuery__
 *
 * To run a query within a React component, call `useGetClaimedTokenAmountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClaimedTokenAmountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClaimedTokenAmountsQuery({
 *   variables: {
 *      nftType: // value for 'nftType'
 *      tokenId: // value for 'tokenId'
 *      user_address: // value for 'user_address'
 *   },
 * });
 */
export function useGetClaimedTokenAmountsQuery(baseOptions?: Apollo.QueryHookOptions<GetClaimedTokenAmountsQuery, GetClaimedTokenAmountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClaimedTokenAmountsQuery, GetClaimedTokenAmountsQueryVariables>(GetClaimedTokenAmountsDocument, options);
      }
export function useGetClaimedTokenAmountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClaimedTokenAmountsQuery, GetClaimedTokenAmountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClaimedTokenAmountsQuery, GetClaimedTokenAmountsQueryVariables>(GetClaimedTokenAmountsDocument, options);
        }
export type GetClaimedTokenAmountsQueryHookResult = ReturnType<typeof useGetClaimedTokenAmountsQuery>;
export type GetClaimedTokenAmountsLazyQueryHookResult = ReturnType<typeof useGetClaimedTokenAmountsLazyQuery>;
export type GetClaimedTokenAmountsQueryResult = Apollo.QueryResult<GetClaimedTokenAmountsQuery, GetClaimedTokenAmountsQueryVariables>;
export function refetchGetClaimedTokenAmountsQuery(variables?: GetClaimedTokenAmountsQueryVariables) {
      return { query: GetClaimedTokenAmountsDocument, variables: variables }
    }
export const GetClaimedTokenDocument = /*#__PURE__*/ gql`
    query getClaimedToken($user_address: String) {
  claimed_tokens(where: {user_address: {_eq: $user_address}}) {
    amounts
    transactions {
      tx_hash
      status
      created_at
    }
  }
}
    `;

/**
 * __useGetClaimedTokenQuery__
 *
 * To run a query within a React component, call `useGetClaimedTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClaimedTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClaimedTokenQuery({
 *   variables: {
 *      user_address: // value for 'user_address'
 *   },
 * });
 */
export function useGetClaimedTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetClaimedTokenQuery, GetClaimedTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClaimedTokenQuery, GetClaimedTokenQueryVariables>(GetClaimedTokenDocument, options);
      }
export function useGetClaimedTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClaimedTokenQuery, GetClaimedTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClaimedTokenQuery, GetClaimedTokenQueryVariables>(GetClaimedTokenDocument, options);
        }
export type GetClaimedTokenQueryHookResult = ReturnType<typeof useGetClaimedTokenQuery>;
export type GetClaimedTokenLazyQueryHookResult = ReturnType<typeof useGetClaimedTokenLazyQuery>;
export type GetClaimedTokenQueryResult = Apollo.QueryResult<GetClaimedTokenQuery, GetClaimedTokenQueryVariables>;
export function refetchGetClaimedTokenQuery(variables?: GetClaimedTokenQueryVariables) {
      return { query: GetClaimedTokenDocument, variables: variables }
    }