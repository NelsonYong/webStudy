
const stumod = {
  state: {
    mes: [{
        name: '马云',
        age: 35
      },
      {
        name: '刘程强',
        age: 35
      }
    ]
  },
  getters: {

    fullname(state,getters,rootState){
      //rootState拿到我们的根state

    }
  },
  mutations: {},
  actions: {

    updata(context){
      //这里的context指的上下文对象是stumod
    }
  },
  modules: {}

}

export default stumod