//导入nodejs-websocket包
const ws = require('nodejs-websocket')

const PORT = 3000;

//储存所有终端的连接
var clients = []
let index = 0

//创建一个serve
//处理用户请求

//每次有用户连接，函数就会执行，给当前用户创建connect对象
const serve = ws.createServer(connect => {

  //存储用户的信息
  index = index + 1
  const info = {
    name: '用户' + index,
    connect: connect
  }
  clients.push(info);
  console.log("用户" + index + "连接上来了")



  //用户发送的数据
  connect.on('text', data => {
    console.log("接收到用户"+index+"的数据", data)
    clients.map(v => {
      v.connect.send(`<h1>${data}</h1>`)
    })

  })


  connect.on('error', () => {
    console.log("连接异常")
  })

  connect.on('close', () => {
    const arr = clients.filter(v => {
      return v.connect == connect
    })
    console.log(arr[0].name + "已断开连接")
    clients = clients.filter(v => {
      return v.connect != connect
    })
  })

})

function broadcast(msg){
  
}


serve.listen(PORT, () => {
  console.log("webSocket连接成功")
})