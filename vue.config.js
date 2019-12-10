const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const configEnv = process.env.CONFIG_ENV;

module.exports = {
  devServer: {
    host: 'devfudaojs.haofenshu.com',
    port: 8080,
    open: true,
    proxy: {
      '/v1': {
        target: 'http://testhfsfd-teacher.haofenshu.com',
        changeOrigin: true
      }
    },
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        feConfig: path.resolve('.', './src/feConfig/' + (configEnv || 'development'))
      })
    ]
  }
};