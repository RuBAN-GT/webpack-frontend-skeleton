const fs = require('fs');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

var pages = []
fs.readdirSync(path.resolve(__dirname, '../app/pages')).forEach(file => {
  pages.push(new HtmlWebpackPlugin({
    template: path.join(__dirname, '../app/pages/' + file),
    inject: 'body',
    alwaysWriteToDisk: true,
    filename: path.join('../' + file)
  }))
})

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: '/assets/'
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../app/assets/'),
      stylesheets: path.resolve(__dirname, '../app/stylesheets/'),
      vendor: path.resolve(__dirname, '../vendor/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist/assets'], {
      root: path.resolve(__dirname, '../')
    }),
    ...pages,
    new HtmlWebpackHarddiskPlugin()
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
