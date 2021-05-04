//定义一个Promise的类
class MyPromise {
  constructor(executor) {
    this.state = 'pending' //状态值
    this.value = undefined //成功的返回值
    this.reason = undefined //失败的返回值

    // 成功
    let resolve = (value) => {
      if (this.state == 'pending') {
        this.state = 'fullFilled'
        this.value = value
      }
    }
    // 失败
    let reject = (reason) => {
      if (this.state == 'pending') {
        this.state = 'rejected'
        this.reason = reason
      }
    }
    try {
      // 执行函数，将两者作为函数传递给构造函数
      executor(resolve, reject)
    } catch (err) {
      // 失败则直接执行reject函数
      reject(err)
    }
  }


  then(onFullFilled, onRejected) {
    // 状态为fulfuilled，执行onFullFilled，传入成功的值
    if (this.state == 'fullFilled') {
      onFullFilled(this.value)
    }
    // 状态为rejected，执行onRejected，传入失败的值
    if (this.state == 'rejected') {
      onRejected(this.reason)
    }
  }

}


const p = new MyPromise((resolve, reject) => {
   resolve('success')   // 走了成功就不会走失败了
  // throw new Error('失败') // 失败了就走resolve
  reject('failed') // 走了失败就不会走成功
})
p.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

// const p = new Mypromise((resolve, reject) => {
//   setTimeout(function() {
//       resolve('success')
//   }, 1000)
// })
// p.then((res) => {
//   console.log(res)
// }, (err) => {
//   console.log(err)
// })