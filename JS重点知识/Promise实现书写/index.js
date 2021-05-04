// 首先我们得先理解Promise工作的机制，其实Promise就是一个构造函数
// 它的内部有三个状态：

// pending
// resolved
// rejected
// 而想改变这三个状态必须要通过resolve()或者reject()这两个方法，resolve（）可以将pending转换为resolved，rejected（）可以将pending转换为rejected。并且将得到的数值存储在内部的data里面。并且这状态一旦转换是不可逆的。

// Promsie的原型对象含有then，catch这两个方法

// then这个方法可以接受两个参数，一个成功的回调，一个失败的回调。也就是onResolved和onRejected
// catch这个方法只可以接受一个参数，失败的回调，也就是onRejected
// 并且then这个方法，是返回一个新的promise对象，它里面的执行方法也是异步的
// 触发then的时候，也会有三个可能，一个是状态为resolved时，一个是状态为rejected时，一个是状态为pending时
// Promise的结果根据执行的结果返回
(function () {
  //定义三种状态
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';

  function MyPromise(multi) {
    //初始化状态
    this.status = PENDING;
    //初始化值
    this.data = undefined;
    //初始化回调函数
    this.callbacks = [];
    //定义内部方法  resolve / reject 方法
    resolve = () => {}

    reject = () => {}

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

    MyPromise.resolve = function (value) {

    }

    MyPromise.reject = function (error) {

    }

    //原型绑定then ,catch方法    写出类似于   xxx().then
    MyPromise.prototype.then = () => {}
    MyPromise.prototype.catch = () => {}


    multi(resolve, reject);



  }

})()