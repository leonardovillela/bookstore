var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'js'),
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
        include: path.resolve(PATHS.app)
      }
    ]
  },

  devServer: {
    hot: true,
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
