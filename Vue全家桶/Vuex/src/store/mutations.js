import Vue from 'vue'

export default {
  add(state) {
    state.counter++
  },

  reduce(state) {
    state.counter--
  },

  add_(state, count) {
    //state.counter=state.counter+count.count
    state.counter = state.counter + count
  },

  add_stumes(state, mes) {
    console.log('dfdsf')
    state.students.push(mes)
  },

  updata_info(state) {
    //该方法不能做到响应式
    // state.info['address']='jdksjdk'
    //该方法添加才能做到响应式
    Vue.set(state.info, 'address', 'kdjsidji')

    //修改才能做到响应式，因为会将初始化的数据加入到响应式系统中
    state.info.age = 15


  }


}