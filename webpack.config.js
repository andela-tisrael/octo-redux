import webpack from 'webpack';
import path from 'path';

const config = {
  debug: true,
  devtool: 'eval-source-map',
  noInfo: false,
  entry: [
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    'webpack-hot-middleware/client?path=http://localhost:' + 3000 + '/__webpack_hmr',
    path.resolve(__dirname, 'client/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/client_dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, include: path.join(__dirname, 'client'), loaders: ['babel'] },
      { test: /\.js$/, include: path.join(__dirname, 'client'), loaders: ['babel'] }
    ]
  }
};
export default config;
