const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const HarddiskPlugin = require('html-webpack-harddisk-plugin')

var pages = []
fs.readdirSync(path.resolve(__dirname, '../app/pages')).forEach(file => {
  pages.push(
    new HtmlPlugin({
      template: path.join(__dirname, '../app/pages/' + file),
      inject: 'body',
      alwaysWriteToDisk: true,
      filename: path.join('../' + file.split('.')[0] + '.html')
    })
  )
})

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../app/assets/'),
      helpers: path.resolve(__dirname, '../app/helpers/'),
      partials: path.resolve(__dirname, '../app/partials/'),
      stylesheets: path.resolve(__dirname, '../app/stylesheets/'),
      vendor: path.resolve(__dirname, '../vendor/')
    }
  },
  plugins: [
    new CleanPlugin(['dist/assets'], {
      root: path.resolve(__dirname, '../')
    }),
    ...pages,
    new HarddiskPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(woff(2)?|eot|otf|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
        test: /\.(png|jpg(eg)?|gif|ico)$/,
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
        test: /\.(hbs|.handlebars)$/,
        loader: 'handlebars-loader'
      },
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: true
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
}
