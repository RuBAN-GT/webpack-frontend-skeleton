webpack           = require('webpack')
path              = require('path')
ExtractTextPlugin = require('extract-text-webpack-plugin')
HandlebarsPlugin  = require('handlebars-webpack-plugin')

module.exports =
  entry:
    app: path.join(__dirname, '../app/app.js')
    vendor: path.join(__dirname, '../app/vendor.js')

  output:
    filename: 'js/[name].js'
    path: path.resolve(__dirname, '../public/assets')
    publicPath: '/assets/'

  resolve: alias: vendor: path.resolve(__dirname, '../vendor/')

  plugins: [
    new webpack.optimize.CommonsChunkPlugin
      name: 'vendor'
      children: true

    new ExtractTextPlugin('css/app.css')

    new HandlebarsPlugin

      entry: path.resolve(__dirname, '../app/pages/*.hbs')
      output: path.resolve(__dirname, '../public/[name].html')
      data: require(path.resolve(__dirname, '../app/data.json'))
      partials: [
        path.resolve(__dirname, '../app/partials/*/*.hbs')
      ]
      helpers:
        nameOfHbsHelper: Function.prototype
        projectHelpers: path.resolve(__dirname, '../app/helpers/*.helper.js')

    new webpack.LoaderOptionsPlugin
      options: postcss: [ require('autoprefixer') ]
  ]

  module: rules: [
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
      use: ExtractTextPlugin.extract
        use: ['css-loader', 'postcss-loader']
    }
    {
      test: /\.(sass|scss)$/
      use: ExtractTextPlugin.extract
        use: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
    }
    {
      test: /\.coffee$/
      use:
        loader: 'coffee-loader'
        options: sourceMap: true
    }
    {
      enforce: 'pre'
      test: /\.js$/
      exclude: /node_modules/,
      use:
        loader: 'eslint-loader'
        options:
          failOnWarning: false
          failOnError: false
    }
    {
      test: /\.js$/
      exclude: /node_modules/,
      use:
        loader: 'babel-loader'
        options: presets: [ 'es2015', 'env' ]
    }
  ]
