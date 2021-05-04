import { ActionContext } from "vuex";
import { GET_DATA } from "./constant";
import { userState } from "./state";

export default {
  [GET_DATA](
    { commit }: ActionContext<userState, unknown>,
    payload: boolean
  ): void {
    console.log("action成功执行！");
    setTimeout(() => {
      commit(GET_DATA, payload);
    }, 3000);
  },
};
