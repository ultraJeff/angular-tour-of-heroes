var webpack = require('webpack');
//var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var autoprefixer = require('autoprefixer');
var helpers = require('./helpers');

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
    // preLoaders: [
    //   {
    //     test: /\.ts$/,
    //     exclude: /node_modules/,
    //     loader: 'tslint'
    //   }
    // ],
    loaders: [
      // {
      //   test: /.json$/,
      //   loaders: [
      //     'json'
      //   ]
      // },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      // {
      //   test: /\.(css|scss)$/,
      //   loaders: [
      //     'style',
      //     'css',
      //     'sass',
      //     'postcss'
      //   ]
      // },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          ['awesome-typescript-loader', 'angular2-template-loader']
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
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
      // Should use this for multiple entry points, not just app
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
  // postcss: () => [autoprefixer],
  // debug: true,
  // devtool: 'source-map',
  // output: {
  //   path: 'dist'
  //   filename: '[name].js'
  // },
  // ts: {
  //   configFileName: 'tsconfig.json'
  // },
  // tslint: {
  //   configuration: require('../tslint.json')
  // }
};
