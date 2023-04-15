import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {"context":{"clientName":"hasura"}} as const;
export type InsertTransactionLogMutationVariables = Types.Exact<{
  insertParams: Types.Transactions_Insert_Input;
}>;


export type InsertTransactionLogMutation = { __typename: 'mutation_root', insert_transactions_one: { __typename: 'transactions', uuid: string } | null };

export type UpdateSqsMessageIdMutationVariables = Types.Exact<{
  paymentGatewayId: Types.InputMaybe<Types.Scalars['String']>;
  sqsMessageId: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateSqsMessageIdMutation = { __typename: 'mutation_root', update_transactions: { __typename: 'transactions_mutation_response', affected_rows: number } | null };


export const InsertTransactionLogDocument = /*#__PURE__*/ gql`
    mutation insertTransactionLog($insertParams: transactions_insert_input!) {
  insert_transactions_one(object: $insertParams) {
    uuid
  }
}
    `;
export type InsertTransactionLogMutationFn = Apollo.MutationFunction<InsertTransactionLogMutation, InsertTransactionLogMutationVariables>;

/**
 * __useInsertTransactionLogMutation__
 *
 * To run a mutation, you first call `useInsertTransactionLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionLogMutation, { data, loading, error }] = useInsertTransactionLogMutation({
 *   variables: {
 *      insertParams: // value for 'insertParams'
 *   },
 * });
 */
export function useInsertTransactionLogMutation(baseOptions?: Apollo.MutationHookOptions<InsertTransactionLogMutation, InsertTransactionLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTransactionLogMutation, InsertTransactionLogMutationVariables>(InsertTransactionLogDocument, options);
      }
export type InsertTransactionLogMutationHookResult = ReturnType<typeof useInsertTransactionLogMutation>;
export type InsertTransactionLogMutationResult = Apollo.MutationResult<InsertTransactionLogMutation>;
export type InsertTransactionLogMutationOptions = Apollo.BaseMutationOptions<InsertTransactionLogMutation, InsertTransactionLogMutationVariables>;
export const UpdateSqsMessageIdDocument = /*#__PURE__*/ gql`
    mutation updateSqsMessageId($paymentGatewayId: String, $sqsMessageId: String) {
  update_transactions(
    where: {payment_gateway_id: {_eq: $paymentGatewayId}}
    _set: {sqs_message_id: $sqsMessageId}
  ) {
    affected_rows
  }
}
    `;
export type UpdateSqsMessageIdMutationFn = Apollo.MutationFunction<UpdateSqsMessageIdMutation, UpdateSqsMessageIdMutationVariables>;

/**
 * __useUpdateSqsMessageIdMutation__
 *
 * To run a mutation, you first call `useUpdateSqsMessageIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSqsMessageIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSqsMessageIdMutation, { data, loading, error }] = useUpdateSqsMessageIdMutation({
 *   variables: {
 *      paymentGatewayId: // value for 'paymentGatewayId'
 *      sqsMessageId: // value for 'sqsMessageId'
 *   },
 * });
 */
export function useUpdateSqsMessageIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSqsMessageIdMutation, UpdateSqsMessageIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSqsMessageIdMutation, UpdateSqsMessageIdMutationVariables>(UpdateSqsMessageIdDocument, options);
      }
export type UpdateSqsMessageIdMutationHookResult = ReturnType<typeof useUpdateSqsMessageIdMutation>;
export type UpdateSqsMessageIdMutationResult = Apollo.MutationResult<UpdateSqsMessageIdMutation>;
export type UpdateSqsMessageIdMutationOptions = Apollo.BaseMutationOptions<UpdateSqsMessageIdMutation, UpdateSqsMessageIdMutationVariables>;