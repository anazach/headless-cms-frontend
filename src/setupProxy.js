const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/wordpress",
    createProxyMiddleware({
      target: "http://localhost:8888",
      changeOrigin: true,
    })
  );
  app.use(
    ["/", "/wpreact", "/raiseit"],
    createProxyMiddleware({
      target: "http://localhost",
      changeOrigin: true,
    })
  );
};
