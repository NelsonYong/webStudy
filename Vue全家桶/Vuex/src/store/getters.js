
export default{

  pow(state) {
    return Math.pow(state.counter, 2)
  },

  getstu(state) {
    return state.students.filter(s => s.age <= 30)
  },
  getstulenth(state, getters) {
    return getters.getstu.length;
  },

  getstuage(state) {
    return age => {
      return state.students.filter(s => s.age <= age)
    }
  }
}