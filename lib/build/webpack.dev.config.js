const config = require('./webpack.base.config.js')
config.devtool = 'cheap-module-eval-source-map'

module.exports = config
