const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000"
    })
  );
};

// Don't need to import this anywhere, cra will look for it automatically
// What it does is if anyone tries to visit /auth/google, automatically redirect to locahost:5000