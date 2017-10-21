const path = require('path');
const helpers = require('./helpers')

let config = {
  entry: {
    'bundle': helpers.root('/src/main.ts')
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: helpers.root('dist')
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.vue',
    ],
    alias: {
      '@components': helpers.root('src/components/components/index.ts'),
      '@src': helpers.root('src'),
      '@icons': helpers.root('src/assets/icons'),
      '@images': helpers.root('src/assets/images'),
      '@fonts': helpers.root('src/fonts'),    
      '@views': helpers.root('src/components/views/index.ts'),
      '@utils': helpers.root('src/utils/index.ts'),
      '@types': helpers.root('src/typings/index.ts'),
      '@store': helpers.root('src/store/index.ts'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                  resources: helpers.root('src/styles/variables.scss'),
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
      }
    ]
  },
  plugins: [

  ],
  devtool: 'source-map'
};

module.exports = config;
