import Axios from "axios";

//axiox模块封装
// export default function request(config) {

//   // const instace = Axios.create({

//   //   baseURL: 'http://123.207.32.32:8000',
//   //   timeout: 5000
//   // })

//   // instace(config.baseconfig).then(res => {
//   //   //函数回调
//   //   config.success(res)
//   // }).catch(err => {
//   //   config.fail(err)
//   // })

//   return new Promise((resolve, reject) => {
//     const instace = Axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instace(config).then(res => {
//       resolve(res)
//     }).catch(() => {
//       reject('error')
//     })
//   })



// }

export function request(config) {

  const instance=Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout:5000
  })

  
  //拦截器
  //全局拦截器
  // Axios.interceptors

  //实例拦截器
  
  
  //本来就是promise对象
  return instance(config)


}


// //
// export function request() {


//   function test(aaa,bbb){
//     aaa()
//   }

//   test(function(){},function(){})

// }