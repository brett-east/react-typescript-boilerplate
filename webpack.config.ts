import HtmlWebpackPlugin = require('html-webpack-plugin');
import path = require('path');

module.exports = {
  mode: 'production',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
