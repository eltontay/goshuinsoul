/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { removeCookies, setCookies } from 'cookies-next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  removeCookies('x-hasura-user-id', { req, res });
  setCookies('x-hasura-user-id', req.body['x-hasura-user-id'], {
    req,
    res,
    maxAge: 86400,
    path: '/',
    httpOnly: true,
  });

  try {
    res.json(req.body);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
