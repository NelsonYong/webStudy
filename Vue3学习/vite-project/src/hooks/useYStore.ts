import { useStore } from "vuex";
import { State } from "../store";
import { Getters } from "../store/utils";
import type { Commit, Dispatch } from "vuex/types";

type UseYState = {
  state: State;
  getters: Getters;
  dispatch: Dispatch;
  commit: Commit;
};

const useYStore = (): UseYState => {
  const { state, getters, dispatch, commit }: UseYState = useStore<State>();
  return { state, getters, dispatch, commit };
};

export default useYStore;
