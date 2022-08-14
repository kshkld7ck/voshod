const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://souzmultpark.ru:4433/',
            changeOrigin: true,
        })
    );
};