const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
