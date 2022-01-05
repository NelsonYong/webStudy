import { createStore } from "vuex";
import modules from "./modules";
import { userState } from "./modules/test2/state";

type State = {
  user: userState;
};

const store = createStore<State>({
  modules,
});

export { State };
export default store;
