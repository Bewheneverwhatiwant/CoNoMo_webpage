// src/setupProxy.js

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware('/api', {
//             target: 'https://solved.ac',
//             changeOrigin: true,
//         }),
//     );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://solved.ac',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
            logLevel: 'debug'
        })
    );
};
