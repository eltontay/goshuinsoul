import { getCookies } from 'cookies-next';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: process.env.HASURA_INTEGRATION_HOST,
  changeOrigin: true,
  pathRewrite: {
    '^/api/hasura-integration': `/${process.env.API_KEY}/v1/graphql`,
  },
  xfwd: true,
  headers: {
    'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
  },
  onProxyReq: (proxyReq, req) => {
    const cookies = getCookies({ req });
    proxyReq.setHeader('x-hasura-user-id', cookies['x-hasura-user-id'] ?? 'anonymous');
    proxyReq.setHeader('x-hasura-role', cookies['x-hasura-role'] ?? 'user');
  },
});

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: false, // hide warning message
  },
};
