const glob = require('glob'),
  path = require('path'),
  webpack =  require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  webpackConfig = require('./webpack.config.base'),
  helpers = require('./helpers'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/prod.env');

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed',
            sourceMap: false,
            sourceMapContents: false
          }
        }
      ],
      fallback: 'style-loader'
    })
  }, {
    test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
  }
];

webpackConfig.output.filename = "[name].[hash].js";

webpackConfig.plugins = [...webpackConfig.plugins,
  extractSass,
  new webpack.optimize.UglifyJsPlugin({
    include: /\.js$/,
    mangle: { keep_fnames: false, screw_ie8: true },
    compress: { keep_fnames: false, screw_ie8: true, warnings: false },
    sourceMap: false,
    removeComments: true,
    beautify: false
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/index.html'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new DefinePlugin({
    'process.env': env
  }),
];

module.exports = webpackConfig;