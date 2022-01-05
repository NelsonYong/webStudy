export const createState = () => {
  const state = {
    count: 1,
  };
  return state;
};

export type userState = ReturnType<typeof createState>;
