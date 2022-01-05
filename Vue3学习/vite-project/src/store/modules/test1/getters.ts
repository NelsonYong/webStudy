import { userState } from "./state";

const moduleGetters = {
  test1: ({ count }: userState): number => {
    return count;
  },
};

export default moduleGetters;
