const webpack = require('webpack')

const config = require('./webpack.base.config.js')
config.devtool = 'source-map'
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  mangle: true,
  comments: false,
  compress: {
    warnings: false
  }
}))
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}))

module.exports = config
