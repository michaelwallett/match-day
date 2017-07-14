'use strict';

var webpack = require('webpack');

var configuration = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {

    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]

  },

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ]
};

module.exports = configuration;
