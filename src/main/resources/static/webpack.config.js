var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'js', 'components'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: path.join(PATHS.app, 'app.jsx'),
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: /js/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
