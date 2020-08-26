module.exports = {
    lintOnSave:false,
    devServer: {
        port: '8008',
        // host: 'localhost',
        open: false,//配置自动启动浏览器
        proxy: {
            '/api': {
                target: "http://192.168.19.60:8080",
                changeOrigin: true,
                pathRewrite: {// 本地环境放开
                    "^/api": "",
                }
            }
        }
    }
}