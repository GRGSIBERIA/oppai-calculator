var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/renderer/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  mode: "development",
  target: "electron",
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', options:{appendTsSuffixTo: [/\.vue$/]} },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.(pug|jade)$/, loader: ["raw-loader", "pug-html-loader"] },
      { test: /\.css$/, loader: ["style-loader", "css-loader"] }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: ["node_modules"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}