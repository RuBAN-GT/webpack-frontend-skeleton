const webpack        = require('webpack');
const path           = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../app/app.js'),
  devtool: 'nosources-source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
