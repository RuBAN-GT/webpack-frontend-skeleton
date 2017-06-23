const webpack           = require('webpack');
const path              = require('path');
const HandlebarsPlugin  = require('handlebars-webpack-plugin')

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      vendor: path.resolve(__dirname, '../vendor/')
    }
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.resolve(__dirname, '../app/pages/*.hbs'),
      output: path.resolve(__dirname, '../public/[name].html'),
      data: require(path.resolve(__dirname, '../app/data.json')),
      partials: [path.resolve(__dirname, '../app/partials/*/*.hbs')],
      helpers: {
        nameOfHbsHelper: Function.prototype,
        projectHelpers: path.resolve(__dirname, '../app/helpers/*.helper.js')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|otf|ttf|svg)$/,
        exclude: [path.resolve(__dirname, '../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/assets/',
            outputPath: 'fonts/',
            useRelativePath: false
          }
        }
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        exclude: [path.resolve(__dirname, '../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/assets/',
            outputPath: 'images/',
            useRelativePath: false
          }
        }
      },
      {
        test: /.*/,
        include: [path.resolve(__dirname, '../app/assets')],
        use: {
          loader: 'file-loader',
          options: {
            context: path.resolve(__dirname, '../app/assets'),
            name: '[path]/[name].[ext]'
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: false
          }
        }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
