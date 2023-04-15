/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios.get(
    `https://geolocation-db.com/json/${process.env['NEXT_PUBLIC_GEO_LOCATION']}`
  );
  await response;
  try {
    res.json(response.data);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
