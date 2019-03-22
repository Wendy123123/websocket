const ws = require("nodejs-websocket")
 
const server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
      console.log("Received "+str)
      conn.sendText("服务端推送消息到客户机！"+str)
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8011)