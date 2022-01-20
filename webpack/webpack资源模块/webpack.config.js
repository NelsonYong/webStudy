const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[hash:8][ext]",
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "webpack server",
      filename: "app.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        // 优先级更高
        generator: {
          filename: "images/[hash:16][ext]",
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        // type: "asset",根据资源大小。默认8kb选择是resource还是inline
        test: /\.jpg/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024,
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
};
