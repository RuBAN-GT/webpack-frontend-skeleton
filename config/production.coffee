webpack           = require('webpack')
path              = require('path')
ExtractTextPlugin = require('extract-text-webpack-plugin')
UglifyJSPlugin    = require('uglifyjs-webpack-plugin')
HandlebarsPlugin  = require('handlebars-webpack-plugin')

module.exports =
  devtool: 'nosources-source-map'

  plugins: [
    new webpack.HotModuleReplacementPlugin()
    new UglifyJSPlugin(
      sourceMap: true
    )
  ]
