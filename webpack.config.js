var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vue-i18n$': 'vue-i18n/dist/vue-i18n.common.js'
    }
  }
}