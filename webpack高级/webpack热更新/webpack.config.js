const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    clean: true,
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    hot: true,
    liveReload: false,
  },
};
