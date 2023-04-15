import { buffer } from 'micro';
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import {
  insertTransaction,
  updateSqsMessageId,
} from '@goshuinsoul/database';
import { enqueueTx } from '@goshuinsoul/database';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});
console.log('console webhook secret', process.env.STRIPE_WEBHOOK_SECRET!);
const webhookSecret: string =
  process.env.STRIPE_WEBHOOK_SECRET! ||
  'whsec_1bb35096c52db06e1889e996c9e9d1f736c99032d94364efdf963a3ad59dde67';

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD', 'GET'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        webhookSecret
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      // On error, log and return the error message.
      if (err! instanceof Error) console.log(err);
      console.log(`❌ Error message: ${errorMessage}`);
      res.status(400).send(`Webhook Error: ${errorMessage}`);
      return;
    }

    // Successfully constructed event.
    console.log('✅ Success:', event.id);

    // Cast event data to Stripe object.
    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
      );
    } else if (event.type === 'checkout.session.completed') {
      const sessionCompleted = event.data.object as any;
      console.log('console session completed: ', sessionCompleted.metadata);

      // Add transaction record
      await insertTransaction(sessionCompleted.metadata);

      // Add blockchain tx message to the SQS
      const message = await enqueueTx(sessionCompleted.metadata);
      console.log('console message: ', message?.[0].MessageId);

      // Update sqs message id in the transaction table
      await updateSqsMessageId(
        sessionCompleted.metadata.paymentGatewayId,
        message?.[0].MessageId
      );
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default cors(webhookHandler as any);
