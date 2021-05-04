const fs = require('fs');

//读取文件信息
const filePath = './aaa.txt'

//1.同步读取文件状态
// const info = fs.readFile(filePath,{encoding:'utf-8',flag:'r'},(err,data)=>{
//   console.log(data);
// })

//同步，会阻塞后续代码
// const info = fs.statSync(filePath);
// console.log("后续需要执行的代码");
// console.log(info);

// 2.方式二: 异步操作
// fs.stat(filePath, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
//   console.log(info.isFile());
//   console.log(info.isDirectory());
// });
// console.log("后续需要执行的代码");


// 3.方式三: Promise
fs.promises.stat(filepath).then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
});

console.log("后续需要执行的代码");