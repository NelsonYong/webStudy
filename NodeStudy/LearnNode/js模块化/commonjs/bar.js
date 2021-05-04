//一个模块
const name = "yangjie"
const age = 18

let msg = "hello node"

function sayHello(name) {
  console.log("Hello " + name);
}

//引用赋值*
const obj = {
  naem:"小明",
  age:20
}

//只是地址引用
const info = obj

obj.name="小红"

console.log(info.name);//小红


//export默认指向的是空对象{}

setTimeout(() => {
  exports.name="嘻嘻嘻哈哈"
}, 1000);

setTimeout(() => {
  console.log( exports.name);//牛逼
}, 3000);
exports.name=name
exports.age = age
exports.sayHello = sayHello



//module实例导出
//导出的的模块，与exports一直，指向同一个对象
//module.exports=exports 实际上还是同一个module.exports


//实际上是新的实例，和exports就不会有任何联系
// module.exports = {
//   name,
//   age,
//   sayHello: function sayHello(name) {
//     console.log("Hello " + name);
//   }
// }


