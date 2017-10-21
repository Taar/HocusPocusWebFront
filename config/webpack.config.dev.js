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
    resolveApp('src/index.js')
  ],
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
    new webpack.DefinePlugin('development'),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: ''
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: appHtml
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  context: __dirname,
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: 'static/js/bundle.js'
  },
  devServer: {
    stats: { colors: true },
    contentBase: publicPath,
    publicPath: '/',
    historyApiFallback: true,
    port: 3001,
    hot: true,
    quiet: false,
    compress: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  devtool: 'cheap-eval-source-map',
  node: {
    fs: 'empty'
  }
}
