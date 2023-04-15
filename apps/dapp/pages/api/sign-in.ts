import { NextApiRequest, NextApiResponse } from 'next';
import { auth, resolver, loaders } from '@iden3/js-iden3-auth';
import getRawBody from 'raw-body';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Audience is verifier id
  const hostUrl = 'https://goshuin-soul.vercel.app';
  const sessionId = 1;
  const callbackURL = '/api/callback';
  const audience =
    'did:polygonid:polygon:mumbai:2qL3R9yihUZUPyNxqa23pmEnV5g4MHmMxAa8TTKqiK';

  const uri = `${hostUrl}${callbackURL}?sessionId=${sessionId}`;

  // Generate request for basic authentication
  const request = auth.createAuthorizationRequest('test flow', audience, uri);

  request.id = '7f38a193-0918-4a48-9fac-36adfdb8b542';
  request.thid = '7f38a193-0918-4a48-9fac-36adfdb8b542';

  // Add request for a specific proof
  const proofRequest = {
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
  };
  const scope = request.body.scope ?? [];
  request.body.scope = [...scope, proofRequest];

  console.log('console request', request);

  // // Store auth request in map associated with session ID
  // requestMap.set(`${sessionId}`, request);

  return res.status(200).send(request);
}
