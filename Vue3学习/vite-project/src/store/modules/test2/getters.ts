import { userState } from "./state";

const moduleGetters = {
  isLogin: ({ loading }: userState): string => {
    if (loading) {
      return "登录成功";
    }
    return "登录失败";
  },
};

export default moduleGetters;
