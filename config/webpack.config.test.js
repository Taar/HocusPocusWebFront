var path = require('path'),
    fs = require('fs')

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

var appDirectory = fs.realpathSync(process.cwd())
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

var appSrc = resolveApp('src'),
    nodeModules = resolveApp('node_modules/'),
    appHtml = resolveApp('public/index.html'),
    publicPath = resolveApp('public/')

module.exports = {
  entry: [
    require.resolve('./polyfills'),
    path.join(__dirname, 'webpack.test.bootstrap.js')
  ],
  output: {
    path: resolveApp('build'),
    filename: 'test.js'
  },
  resolve: {
    modules: [nodeModules],
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: appSrc
      },
      {
        test: /\.(js)$/,
        include: appSrc,
        use: ['babel-loader'],
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: appSrc,
        query: {
          plugins: [ ['transform-es2015-for-of', { loose: true }] ],
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin('test'),
  ],
  watch: true,
  devtool: 'cheap-eval-source-map',
  node: {
    fs: 'empty'
  }
}
