//引入websocket模块
var WebSocketServer = require('../node_modules/websocket').server;

//引入http模块
var http = require('http')
var serve = http.createServer()
serve.listen(3000, function () {
  console.log("服务器搭建成功")
})
//储存所有终端的连接

var clients=[]

//创建websocket服务对象
const socket = new WebSocketServer({
  httpServer: serve
});

//监听连接
socket.on('request', (WebSocketRequest) => {
  //当前连接回话
  var connect =WebSocketRequest.accept(null,'accepted-origin')

  //把连接添加到终端
  clients.push(connect)

  // //定时向客户端发送
  // setInterval(() => {
  //   connect.sendUTF('hi'+new Date())
  // }, 1000);

  //当连接断开
  connect.on('close',()=>{
    console.log("客户都断开连接")
    
    //获取断开的连接
    var index= clients.indexOf(connect);

    clients.splice(index,1)

  })

  //监听客户端发信息
  connect.on('message',msg=>{
    if(msg.type=='utf8'){
      //给每一个连接发送数据
      clients.forEach(item=>{
        item.sendUTF(msg.utf8Data)
      })
      // //发送数据
      // connect.sendUTF(msg.utf8Data)
    }
  })
})