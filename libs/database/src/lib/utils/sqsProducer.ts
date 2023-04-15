import { Producer } from 'sqs-producer';
import { SQSClient } from '@aws-sdk/client-sqs';
import { v4 as uuidv4 } from 'uuid';

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
console.log(
  'console sqs details',
  process.env.NEXT_AWS_SQS_URL,
  process.env.NEXT_AWS_SQS_REGION,
  process.env.NEXT_AWS_ACCESS_KEY,
  process.env.NEXT_AWS_SECRET_ACCESS_KEY
);

export const enqueueTx = async (message: TransactionInsert) => {
  try {
    const producer = Producer.create({
      queueUrl: process.env.NEXT_AWS_SQS_URL || '',
      region: process.env.NEXT_AWS_SQS_REGION || 'us-east-1',
      sqs: new SQSClient({
        region: process.env.AWS_REGION || 'us-east-1',
        credentials: {
          accessKeyId: process.env.NEXT_AWS_ACCESS_KEY || '',
          secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY || '',
        },
      }),
    });

    const res = await producer.send([
      {
        id: uuidv4(),
        body: JSON.stringify({ ...message, timestamp: Date.now() }),
        groupId: message.nftType,
      },
    ]);
    console.log('console res', res);

    return res;
  } catch (err) {
    console.log('console enqueue error', err);
    throw new Error('Failed to enqueue msg in SQS');
  }
};
