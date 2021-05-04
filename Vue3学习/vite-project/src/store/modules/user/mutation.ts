import { GET_DATA } from "./constant";
import { userState } from "./state";

const mutations = {
  [GET_DATA]: (state: userState, payload: boolean) => {
    console.log("mutation执行成功");
    state.loading = payload;
  },
};

export default mutations;
