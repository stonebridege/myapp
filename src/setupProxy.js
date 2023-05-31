const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', //1.地址中重复的路径，例如http://api.example.com/api/listXX
        createProxyMiddleware({
            target: 'http://api.example.com',
            changeOrigin: true,
        })
    );
};