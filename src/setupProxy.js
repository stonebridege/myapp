const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/ajax', //1.地址中重复的路径，例如http://api.example.com/api/listXX
        createProxyMiddleware({
            target: 'https://i.maoyan.com',
            changeOrigin: true,
        })
    );
};