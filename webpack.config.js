var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'js/cluedo-assistant.js'
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'templates/index.ejs'
      }
    ),
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: './src/css',
        to: 'css'
      }
    ])
  ]
};
