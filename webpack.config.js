const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '*']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  }
};