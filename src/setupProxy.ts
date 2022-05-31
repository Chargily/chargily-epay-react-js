const { createProxyMiddleware } = require('http-proxy-middleware');
 
const EPAY_CHARGILY_URL: string = "http://epay.chargily.com.dz";

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware('/baseURL', {
      target: EPAY_CHARGILY_URL, 
      changeOrigin: true,
      pathRewrite: {
        "^/baseURL": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}