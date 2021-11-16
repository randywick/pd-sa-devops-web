const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path');

const config = {
  entry: [
    './src/index.js',
    'react-hot-loader/patch',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }
      ]
    }),
    new webpack.EnvironmentPlugin({
      DYNAMIC_NAME: 'VALUE NOT SET'
    })
  ],
  devServer: {
    'static': {
      directory: './public'
    }
  }
};

module.exports = config;
