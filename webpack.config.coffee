webpack           = require('webpack')
path              = require('path')
ExtractTextPlugin = require('extract-text-webpack-plugin')
HandlebarsPlugin  = require('handlebars-webpack-plugin')

module.exports =
  entry: './app/index.js'

  output:
    filename: 'js/app.js'
    path: path.resolve(__dirname, 'public/assets')
    publicPath: '/assets/'

  resolve: alias:
    vendor: path.resolve(__dirname, 'vendor/')

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/app.css')
    new HandlebarsPlugin({
      entry: path.resolve(__dirname, 'app/pages/*.hbs')
      output: path.resolve(__dirname, 'public/[name].html')
      data: require('./app/data.json')
      partials: [
        path.resolve(__dirname, 'app/partials/*/*.hbs')
      ]
      helpers:
        nameOfHbsHelper: Function.prototype
        projectHelpers: path.resolve(__dirname, 'app/helpers/*.helper.js')
    })
  ]

  devtool: 'inline-source-map'

  devServer:
    contentBase: path.resolve(__dirname, 'public')
    port: 3333
    watchContentBase: true
    hot: false

  module:
    rules: [
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/
        use:
          loader: 'file-loader'
          query:
            publicPath: '/assets/'
            outputPath: 'fonts/'
            useRelativePath: false
      }
      {
        test: /\.(png|jpg|gif)$/
        use:
          loader: 'file-loader'
          query:
            publicPath: '/assets/'
            outputPath: 'images/'
            useRelativePath: false
      }
      {
        test: /\.css$/
        use: ExtractTextPlugin.extract(use: 'css-loader')
      }
      {
        test: /\.(sass|scss)$/
        use: ExtractTextPlugin.extract(use: [ 'css-loader', 'sass-loader' ])
      }
      {
        test: /\.coffee$/
        use:
          loader: 'coffee-loader'
          options: sourceMap: true
      }
      {
        test: /\.js$/
        exclude: /(node_modules|bower_components)/,
        use:
          loader: 'babel-loader'
          options: presets: [ 'env' ]
      }
    ]
