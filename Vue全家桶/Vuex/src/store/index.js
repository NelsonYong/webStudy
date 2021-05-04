import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import stumod from './modules/stumod'
import teamod from './modules/teamod'


//安装插件
Vue.use(Vuex)


const state={
  counter: 10,
  students: [{
      name: 'aaa',
      age: '21'
    },
    {
      name: 'bbb',
      age: '12'
    },
    {
      name: 'ccc',
      age: '22'
    },
    {
      name: 'ddd',
      age: '31'
    },
  ],

  info: {
    name: 'yangjie',
    age: 18,
    height: '170',
    weight: '130'
  }
}

const store = new Vuex.Store({

  state: state,
  mutations:mutations,

  actions: actions,
  //类似于计算属性
  getters: getters,
  modules: {
    stumod: stumod,
    teamod: teamod
  }
})





export default store