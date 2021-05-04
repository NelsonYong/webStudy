export const createState = () => {
  const state = {
    loading: true,
  };
  return state;
};

export type userState = ReturnType<typeof createState>;
