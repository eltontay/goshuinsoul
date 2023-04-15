/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=${req.query.amount}&symbol=EUR&convert=${req.query.crypto}`,
    {
      method: 'get',
      headers: {
        'X-CMC_PRO_API_KEY': '898ff9ac-2621-45ce-b02e-30dc5bc6700d', //process.env['COINMARKETCAP_API_KEY'] as string,
        'Content-Type': 'application/json',
      },
    }
  ).then((response) => {
    return response.json();
  });
  await response;
  try {
    res.json(response.data);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};
