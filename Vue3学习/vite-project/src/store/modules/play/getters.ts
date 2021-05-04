import { userState } from "./state";

const moduleGetters = {
  play: ({ count }: userState): number => {
    return count;
  },
};

export default moduleGetters;
