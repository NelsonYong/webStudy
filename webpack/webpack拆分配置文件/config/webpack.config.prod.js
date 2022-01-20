const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 合并css代码
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//压缩css代码
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

// 压缩js代码
const TerserPlugin = require("terser-webpack-plugin");

const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

module.exports = {
  entry: {
    // 共享，防止重复
    //方法一
    // index: {
    //   import: "./src/index.js",
    //   dependOn: "shared1",
    // },
    // another: {
    //   import: "./src/another.module.js",
    //   dependOn: "shared1",
    // },

    // shared1: "lodash",

    // 方法二 ,使用webpack内置插件
    index: "./src/index.js",
    another: "./src/another.module.js",

    // 方法三、结合动态导入
  },
  output: {
    // 取key的名字，index,another//
    filename: "scripts/[name].[contenthash].js",
    // 一定是绝对路径
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    assetModuleFilename: "images/[hash:16][ext]",
    publicPath: "http://localhost:8080/",
  },
  //development
  mode: "production",
  experiments: {
    topLevelAwait: true,
  },
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
  optimization: {
    // 生产环境中才可以使用
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin(),
    ],
    splitChunks: {
      // 缓存第三方库
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
