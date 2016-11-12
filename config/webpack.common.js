var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var helpers = require('./helpers');
var precss = require('precss');

// multiple extract instances
// var extractCSS = new ExtractTextPlugin('theme/**/[name].css');
// var extractSCSS = new ExtractTextPlugin('theme/**/[name].scss');

module.exports = {
  entry: {
    polyfills: './app/polyfills.ts',
    vendor: './app/vendor.ts',
    app: './app/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      // {
      //   test: /\.css$/,
      //   //include: helpers.root('theme', 'app'),
      //   // exclude: /node_modules/,
      //   loader: extractCSS.extract('style', 'css?sourceMap')
      // },
      // {
      //   test: /\.scss$/i,
      //   loader: extractSCSS.extract('','css!postcss!sass?sourceMap')
      // },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // Order of these entry points is important!
      // Common chunks are removed from left and deposited right
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  postcss: () => [autoprefixer, precss],
  tslint: {
    configuration: require(helpers.root('tslint.json'))
  }
};
