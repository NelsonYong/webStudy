const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 合并css代码
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//压缩css代码
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another.module.js",
  },
  output: {
    // 取key的名字，index,another
    filename: "[name].bundle.js",
    // 一定是绝对路径
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "images/[hash:8][ext]",
  },
  //development
  mode: "development",
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

      {
        test: /\.toml$/,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
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
