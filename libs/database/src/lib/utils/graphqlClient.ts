/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { GraphQLClient } from 'graphql-request';
import {
  InsertTransactionLogDocument,
  UpdateSqsMessageIdDocument,
} from '@eth-tokyo/database';

interface TransactionInsert {
  nftType: 'empire' | 'cleopatra';
  txType: 'mint';
  contractAddress: string;
  tokenId: number;
  recipientAddress: string;
  amounts: number;
  paymentType: 'stripe' | 'crypto';
  paymentGatewayId: string;
  status: 'pending' | 'completed' | 'failed';
}

function getGraphqlClient() {
  const hasuraEndpoint = `${process.env.HASURA_INTEGRATION_HOST}/${process.env.BPAAS_API_KEY}/v1/graphql`;
  const headers = {
    'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
    'x-hasura-role': 'admin',
  };

  // Creating a new GraphQL client to send requests
  const client = new GraphQLClient(hasuraEndpoint, { headers: headers });
  return client;
}

export const insertTransaction = async (
  transactionInsertParams: TransactionInsert
) => {
  const {
    tokenId,
    contractAddress,
    amounts,
    recipientAddress,
    nftType,
    paymentType,
    paymentGatewayId,
    status,
  } = transactionInsertParams;
  const gqlClient = await getGraphqlClient();
  const { token_url: token } = await gqlClient.request({
    document: InsertTransactionLogDocument,
    variables: {
      insertParams: {
        token_id: tokenId,
        contract_address: contractAddress,
        amounts,
        buyer_address: recipientAddress,
        nft_type: nftType,
        payment_type: paymentType,
        payment_gateway_id: paymentGatewayId,
        status,
      },
    },
  });

  return token;
};

export const updateSqsMessageId = async (
  paymentGatewayId: string,
  sqsMessageId: string
) => {
  const gqlClient = await getGraphqlClient();
  const { token_url: token } = await gqlClient.request({
    document: UpdateSqsMessageIdDocument,
    variables: {
      paymentGatewayId,
      sqsMessageId,
    },
  });

  return token;
};
