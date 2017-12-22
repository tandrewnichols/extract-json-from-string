var webpack = require('webpack');
var package = require('package');

module.exports = {
  entry: [
    require.resolve(package.main)
  ],
  output: {
    path: __dirname,
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /lib.*\.js$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
