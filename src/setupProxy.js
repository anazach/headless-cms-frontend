const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "wpreact/",
    createProxyMiddleware({
      target: "http://localhost/",
      changeOrigin: true,
    })
  );
};