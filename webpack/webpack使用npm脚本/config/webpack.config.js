// 配置代码合并

const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.config.common");
const devConfig = require("./webpack.config.dev");
const proConfig = require("./webpack.config.prod");

module.exports = (env) => {
  switch (true) {
    case env.production:
      return merge(commonConfig, proConfig);

    case env.development:
      return merge(commonConfig, devConfig);
    default:
      console.log("merge 错误");
      break;
  }
};
