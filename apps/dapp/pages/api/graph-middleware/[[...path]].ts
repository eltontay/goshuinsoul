import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: process.env.GRAPH_MIDDLEWARE_HOST,
  changeOrigin: true,
  pathRewrite: {
    '^/api/graph-middleware': `/${process.env.API_KEY}/${process.env.GRAPH_MIDDLEWARE_PATH}`,
  },
  xfwd: true,
});

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true, // hide warning message
  },
};
