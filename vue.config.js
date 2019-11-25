const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const configEnv = process.env.CONFIG_ENV;

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        feConfig: path.resolve('.', './src/feConfig/' + (configEnv || 'development'))
      })
    ]
  }
};