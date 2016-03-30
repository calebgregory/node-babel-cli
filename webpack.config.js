const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './www/index.jsx',
  output: {
    path: __dirname + '/dist/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/www/index.html',
      filename: 'index.html',
      inject: false
    })
  ]
}
