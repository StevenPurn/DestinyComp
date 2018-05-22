const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: [
    './src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
};
