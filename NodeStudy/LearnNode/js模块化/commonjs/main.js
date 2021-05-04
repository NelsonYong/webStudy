//主路口
//将bar.js的export导出的对象，是将指针给了bar-->只是指针地址（浅拷贝）


// const {name,age,sayHello }=require('./bar')
// console.log(name);//yangjie
// console.log(age);
// sayHello("Wang")
const bar = require('./bar')

console.log(bar.name);
setTimeout(() => {
  console.log(bar.name);//嘻嘻哈哈
  bar.name = "牛逼"
}, 2000);
