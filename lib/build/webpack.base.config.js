const webpack = require('webpack')
const path = require('path')

const loaders = {
  css: {
    loader: 'css-loader',
    options: {
      minimize: true
    }
  }
}

const config = {
  resolve: {
    modules: [
      path.resolve('.'),
      'node_modules'
    ],
    extensions: ['.js', '.vue', '/'],
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  entry: {
    'vue-options': ['./src']
  },
  output: {
    path: path.resolve('../dist/lib/dist'),
    filename: 'vue-options.js',
    publicPath: './',
    library: 'VUE_OPTIONS',
    libraryTarget: 'umd'
  },
  externals: {
    'vue': 'Vue'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: [
            'vue-style-loader',
            loaders.css
          ],
          scss: [
            'vue-style-loader',
            loaders.css,
            'sass-loader'
          ]
        },
        postcss: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          })
        ]
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        loaders.css,
        'sass-loader'
      ]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]'
        }
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/images/[name].[ext]'
        }
      }
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Vue': 'vue'
    })
  ]
}

module.exports = config
