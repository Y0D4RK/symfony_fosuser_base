webpackConfig = require('./webpack.config.base'),
  helpers = require('./helpers'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env');
const path = require('path');

webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  }, {
    test: /\.(jpe?g|png|ttf|eot|svg|ico|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
  }
];

webpackConfig.plugins = [...webpackConfig.plugins,
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/index.html'),
    filename: 'index.html'
  }),
  new DefinePlugin({
    'process.env': env
  })
];

module.exports = webpackConfig;