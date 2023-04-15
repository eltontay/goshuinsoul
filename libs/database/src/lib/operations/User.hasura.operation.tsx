import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type UserFieldsFragment = { __typename: 'users', user_address: string, city: string, country: string, dob: string, email: string, first_name: string, last_name: string, mobile: string };

export type GetUsersQueryVariables = Types.Exact<{
  limit: Types.InputMaybe<Types.Scalars['Int']>;
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetUsersQuery = { __typename: 'query_root', users: Array<(
    { __typename: 'users' }
    & UserFieldsFragment
  )>, users_aggregate: { __typename: 'users_aggregate', aggregate: { __typename: 'users_aggregate_fields', count: number } | null } };

export type UpsertWeb3UserMutationVariables = Types.Exact<{
  blockchainAddress: Types.Scalars['String'];
}>;


export type UpsertWeb3UserMutation = { __typename: 'mutation_root', insert_users_one: (
    { __typename: 'users' }
    & UserFieldsFragment
  ) | null };

export type GetUserQueryVariables = Types.Exact<{
  blockchainAddress: Types.Scalars['String'];
}>;


export type GetUserQuery = { __typename: 'query_root', users: Array<(
    { __typename: 'users' }
    & UserFieldsFragment
  )> };

export type UpdateUserTokenMutationVariables = Types.Exact<{
  blockchainAddress: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateUserTokenMutation = { __typename: 'mutation_root', update_users: { __typename: 'users_mutation_response', affected_rows: number } | null };

export type CreateUserMutationVariables = Types.Exact<{
  objects?: Types.InputMaybe<Array<Types.Users_Insert_Input> | Types.Users_Insert_Input>;
}>;


export type CreateUserMutation = { __typename: 'mutation_root', insert_users: { __typename: 'users_mutation_response', returning: Array<(
      { __typename: 'users' }
      & UserFieldsFragment
    )> } | null };

export const UserFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment UserFields on users {
  user_address
  city
  country
  dob
  email
  first_name
  last_name
  mobile
  user_address
}
    `;
export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers($limit: Int, $offset: Int) {
  users(limit: $limit, offset: $offset) {
    ...UserFields
  }
  users_aggregate {
    aggregate {
      count
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }
export const UpsertWeb3UserDocument = /*#__PURE__*/ gql`
    mutation UpsertWeb3User($blockchainAddress: String!) {
  insert_users_one(
    object: {user_address: $blockchainAddress}
    on_conflict: {constraint: users_pkey}
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpsertWeb3UserMutationFn = Apollo.MutationFunction<UpsertWeb3UserMutation, UpsertWeb3UserMutationVariables>;

/**
 * __useUpsertWeb3UserMutation__
 *
 * To run a mutation, you first call `useUpsertWeb3UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertWeb3UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertWeb3UserMutation, { data, loading, error }] = useUpsertWeb3UserMutation({
 *   variables: {
 *      blockchainAddress: // value for 'blockchainAddress'
 *   },
 * });
 */
export function useUpsertWeb3UserMutation(baseOptions?: Apollo.MutationHookOptions<UpsertWeb3UserMutation, UpsertWeb3UserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertWeb3UserMutation, UpsertWeb3UserMutationVariables>(UpsertWeb3UserDocument, options);
      }
export type UpsertWeb3UserMutationHookResult = ReturnType<typeof useUpsertWeb3UserMutation>;
export type UpsertWeb3UserMutationResult = Apollo.MutationResult<UpsertWeb3UserMutation>;
export type UpsertWeb3UserMutationOptions = Apollo.BaseMutationOptions<UpsertWeb3UserMutation, UpsertWeb3UserMutationVariables>;
export const GetUserDocument = /*#__PURE__*/ gql`
    query GetUser($blockchainAddress: String!) {
  users(where: {user_address: {_eq: $blockchainAddress}}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      blockchainAddress: // value for 'blockchainAddress'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }
export const UpdateUserTokenDocument = /*#__PURE__*/ gql`
    mutation updateUserToken($blockchainAddress: String) {
  update_users(where: {user_address: {_eq: $blockchainAddress}}) {
    affected_rows
  }
}
    `;
export type UpdateUserTokenMutationFn = Apollo.MutationFunction<UpdateUserTokenMutation, UpdateUserTokenMutationVariables>;

/**
 * __useUpdateUserTokenMutation__
 *
 * To run a mutation, you first call `useUpdateUserTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserTokenMutation, { data, loading, error }] = useUpdateUserTokenMutation({
 *   variables: {
 *      blockchainAddress: // value for 'blockchainAddress'
 *   },
 * });
 */
export function useUpdateUserTokenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserTokenMutation, UpdateUserTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserTokenMutation, UpdateUserTokenMutationVariables>(UpdateUserTokenDocument, options);
      }
export type UpdateUserTokenMutationHookResult = ReturnType<typeof useUpdateUserTokenMutation>;
export type UpdateUserTokenMutationResult = Apollo.MutationResult<UpdateUserTokenMutation>;
export type UpdateUserTokenMutationOptions = Apollo.BaseMutationOptions<UpdateUserTokenMutation, UpdateUserTokenMutationVariables>;
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation createUser($objects: [users_insert_input!] = {}) {
  insert_users(objects: $objects) {
    returning {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;