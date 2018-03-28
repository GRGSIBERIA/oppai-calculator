module.exports = {
  entry: './src/renderer/index.ts',
  output: {
      filename: './renderer/index.js'
  },
  resolve: {
      extensions: ['.webpack.js', '.ts', '.js', '.css'],
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      }
  },
  target: 'electron',
  module: {
      rules: [
          { test: /\.ts$/, loader: 'ts-loader', options:{appendTsSuffixTo: [/\.vue$/]} },
          { test: /\.vue$/, loader: 'vue-loader' },
          { test: /\.(pug|jade)$/, loader: ["raw-loader", "pug-html-loader"] },
          { test: /\.css$/, loader: ["style-loader", "css-loader"] }
      ]
  }
}