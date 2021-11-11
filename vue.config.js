const SentryPlugin = require("@sentry/webpack-plugin");
module.exports = {
  // publicPath: "./"  // 如果是在本地测试打包文件的话 可以开启，部署到服务器要关闭,
  outputDir: "./dist",
  productionSourceMap: true,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new SentryPlugin({
          include: "./dist",
          release: process.env.VUE_APP_RELEASE_VERSION,
          configFile: "sentry.properties",
          ignore: ["node_modules", "webpack.config.js"]
        })
      );
    }
  }
};
