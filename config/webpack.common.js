var webpack = require('webpack');
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
      // {
      //   // Load sass files from the theme folder only then convert to css and bundle them
      //   test: /\.scss$/,
      //   include: helpers.root('theme'),
      //   loader: ExtractTextPlugin.extract('style', 'css?postcss!sass')
      // },
      // {
      //   // Load sass files from within the application folder then convert to a string, then css and include in the javascript module
      //   test: /\.scss$/,
      //   include: helpers.root('app'),
      //   loader: 'raw!postcss!sass'
      // },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   loader: 'raw'
      // }
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
