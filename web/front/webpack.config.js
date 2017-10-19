const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: [
    'main.ts', 'styles/main.scss'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: [
      '.d.ts', '.ts', '.js', '.vue', '.json', '.scss'
    ],
    modules: [
      'src', 'node_modules'
    ],
    alias: {
      '@components': path.resolve('src/components/components/index.ts'),
      '@src': path.resolve('src'),
      '@icons': path.resolve('src/assets/icons'),
      '@images': path.resolve('src/assets/images'),      
      '@views': path.resolve('src/components/views/index.ts'),
      '@utils': path.resolve('src/utils/index.ts'),
      '@types': path.resolve('src/typings/index.ts'),
      '@store': path.resolve('src/store/index.ts'),
    }
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/, /build/, /__test__/],
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, 'src/styles/variables.scss'),
                  esModule: true
                }
              }],
              ts: 'ts-loader',
            }
          }
        }
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?', 'postcss-loader', 'sass-loader']
      }, {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?name=[name].[ext]'
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?limit=2000&name=src/assets/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style-loader', 'css-loader!postcss-loader!sass-loader'),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: './index.html', //relative to root of the application
      
  })
    // new PrerenderSpaPlugin(
    //   // Absolute path to compiled SPA
    //   path.join(__dirname, '../dist'),
    //   // List of routes to prerender
    //   [ '/', '/about', '/contact' ]
    // )
  ],
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};