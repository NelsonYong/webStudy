const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    clean: true,
  },
  devServer: {
    hot: true,
    // static: path.resolve(__dirname, "./dist"),
    // // gzip压缩
    // compress: true,
    // port: 3000,
    // headers: {
    //   "X-Access-Token": "aaaa",
    // },
    // historyApiFallback: true,
    // host: "0.0.0.0",
  },
  mode: "development",
  //"默认为eval"
  // source-map
  // hidden-source-map去掉source-map注释，已经不能锁定行数了
  // inline-source-map 生成base64的注释
  // eval-source-map 每个模块都采用eval
  // cheap-source-map不包含loader的source-map
  // cheap-module-source-map 推荐使用，可以包含loader解析过的行数定位
  // devtool: "cheap-module-source-map",
  plugins: [new HtmlWebpackPlugin()],
};
