import { GET_DATA } from "./constant";
import { userState } from "./state";

const mutations = {
  [GET_DATA]: (state: userState, payload: number) => {
    console.log("mutation执行成功");
    state.count = payload;
  },
};

export default mutations;
