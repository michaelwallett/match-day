'use strict';

var webpack = require('webpack');
var config = require('config');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

var configuration = {
  devtool: 'source-map',

  entry: {
    app: [ path.join(__dirname, 'src/routes/home/components/main.jsx') ],
    vendor: [
      'react'
    ]
  },

  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/dist/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {

    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]

  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${config.env}"` }),

    new AssetsPlugin({
      path: path.join(__dirname, 'build')
    }),

    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

if (config.env === 'development') {
  configuration.devtool = 'eval';
  configuration.entry.app.unshift('webpack-hot-middleware/client');
  configuration.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = configuration;
