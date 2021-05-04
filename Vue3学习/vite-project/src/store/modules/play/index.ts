import actions from "./action";
import mutations from "./mutation";
import getters from "./getters";
import { createState } from "./state";

const state = createState();

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
