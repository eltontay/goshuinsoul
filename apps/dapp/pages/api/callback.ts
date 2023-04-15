import { NextApiRequest, NextApiResponse } from 'next';
import { auth, resolver, loaders } from '@iden3/js-iden3-auth';
import getRawBody from 'raw-body';

const authRequest = {
  id: '7f38a193-0918-4a48-9fac-36adfdb8b542',
  thid: '7f38a193-0918-4a48-9fac-36adfdb8b542',
  from: 'did:polygonid:polygon:mumbai:2qL3R9yihUZUPyNxqa23pmEnV5g4MHmMxAa8TTKqiK',
  typ: 'application/iden3comm-plain-json',
  type: 'https://iden3-communication.io/authorization/1.0/request',
  body: {
    reason: 'test flow',
    message: '',
    callbackUrl: 'https://goshuin-soul.vercel.app/api/callback?sessionId=1',
    scope: [
      {
        id: 1,
        circuitId: 'credentialAtomicQuerySigV2',
        query: {
          allowedIssuers: ['*'],
          type: 'KYCCountryOfResidenceCredential',
          context:
            'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v4.jsonld',
          credentialSubject: {
            countryCode: {
              $ne: 840,
            },
          },
        },
      },
    ],
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ status: true });
  // Get session ID from request
  // const sessionId = req.query.sessionId;

  // get JWZ token params from the post request
  // const raw = await getRawBody(req);
  // console.log('console raw', raw);
  // const tokenStr = raw.toString().trim();

  // const ethURL = 'https://rpc.ankr.com/polygon_mumbai';
  // const contractAddress = '0x134B1BE34911E39A8397ec6289782989729807a4';
  // const keyDIR = './keys';

  // const ethStateResolver = new resolver.EthStateResolver(
  //   ethURL,
  //   contractAddress
  // );

  // const resolvers = {
  //   ['polygon:mumbai']: ethStateResolver,
  // };

  // // fetch authRequest from sessionID
  // // const authRequest = requestMap.get(`${sessionId}`);

  // // Locate the directory that contains circuit's verification keys
  // const verificationKeyloader = new loaders.FSKeyLoader(keyDIR);
  // const sLoader = new loaders.UniversalSchemaLoader('ipfs.io');

  // // EXECUTE VERIFICATION
  // const verifier = new auth.Verifier(verificationKeyloader, sLoader, resolvers);

  // // const opts = {
  // //   AcceptedStateTransitionDelay: 5 * 60 * 1000, // 5 minute
  // // };

  // const authResponse = await verifier.fullVerify(tokenStr, authRequest);

  // return res
  //   .status(200)
  //   .send('user with ID: ' + authResponse.from + ' Succesfully authenticated');
}
