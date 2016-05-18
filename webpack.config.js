var path = require('path');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src', 'main', 'resources', 'static', 'js'),
  build: path.join(__dirname, 'src', 'main', 'resources', 'static')
};

module.exports = {
  debug: true,
  devtool: 'inline-source-map',

  entry: path.join(PATHS.app, 'app.jsx'),
  output: {
    path: path.join(PATHS.build, 'dist'),
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
