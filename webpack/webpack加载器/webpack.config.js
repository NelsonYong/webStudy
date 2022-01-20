const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 合并css代码
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//压缩css代码
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // 一定是绝对路径
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[hash:8][ext]",
  },
  //development
  mode: "production",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "webpack server",
      filename: "app.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[hash].css",
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
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    // 生产环境中才可以使用
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      new CssMinimizerWebpackPlugin(),
    ],
  },
};
