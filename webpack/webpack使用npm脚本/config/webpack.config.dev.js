module.exports = {
  output: {
    // 取key的名字，index,another
    filename: "scripts/[name].js",
  },
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
  },
};
