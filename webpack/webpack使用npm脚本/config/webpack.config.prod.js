const path = require("path");

//压缩css代码
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

// 压缩js代码
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    // 取key的名字，index,another//
    filename: "scripts/[name].[contenthash].js",
    publicPath: "http://localhost:8080/",
  },
  //development
  mode: "production",

  optimization: {
    // 生产环境中才可以使用
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin(),
    ],
  },
  // 生产环境去掉提示
  performance: {
    hints: false,
  },
};
