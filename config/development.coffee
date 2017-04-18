webpack           = require('webpack')
path              = require('path')
ExtractTextPlugin = require('extract-text-webpack-plugin')
UglifyJSPlugin    = require('uglifyjs-webpack-plugin')
HandlebarsPlugin  = require('handlebars-webpack-plugin')

module.exports =
  devtool: 'eval-source-map'

  devServer:
    contentBase: path.resolve(__dirname, '../public')
    port: 3333
    watchContentBase: true
    hot: false

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
