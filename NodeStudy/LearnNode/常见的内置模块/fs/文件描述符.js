const fs = require('fs');

fs.open("./aaa.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }

  // 通过描述符去获取文件的信息
  //可通过文件描述符操作文件
  fs.fstat(fd, (err, info) => {
    console.log(info);
  })
})

