import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// //全局配置进行网络请求
// Axios.defaults.baseURL='http://123.207.32.32:8000'
// Axios.defaults.timeout=5000



// Axios({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res)
// })

// //发送两个请求，并且两个请求完成后执行xxx

// Axios.all([Axios({

//   url: '/home/multidata'
// }), Axios({

//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(res => {
//   console.log(res)
// })




// //解构
// const names=['fdf','dsd','dsd']

// const [name1,name2,name3]=names



//创建axios实例  每个实例都有自己独立的配置
// const instance=Axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// const instance1=Axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:2000
// })

// instance({
//   url: '/home/multidata'
//   }).then(res=>{
//     console.log(res)
//   })


//request模块的封装

import {request} from './network/request'

//第一种传参

// new Promise((resolve, reject) => {
//   request({
//     url: '/home/multidata'
//   }, res => {
//     resolve(res)
//   }, err => {
//     reject('error')
//   })

// }).then(res => {
//   console.log(res)

// }).catch(err => {
//   console.log(err)
// })


//第二种传参

// request({
//   baseconfig: {
//     url: '/home/multidata'
//   },
//   success: function (res) {

//     console.log(res)
//   },
//   fail: function (err) {
//     console.log('error')

//   }
// })


//3.第三种返回值方式

// request({
//   url: '/home/multidata'
// }).then(res=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })

//第四种返回值

request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res)
}).catch(()=>{
  console.log('error')
})