let ws;
let timer;
let lockReconnect = false;//避免重复连接
const wsUrl = "ws://localhost:8001";

const init = () => {
  ws.onclose =  () => {
    console.log('链接关闭');
    reconnect(wsUrl);
  };
  ws.onerror = () => {
    console.log('发生异常了');
    reconnect(wsUrl);
  };
  ws.onopen = () => {
    //心跳检测重置
    heartCheck.start();
  };
  ws.onmessage = (event) => {
    //拿到任何消息都说明当前连接是正常的
    console.log('接收到消息');
    heartCheck.start();
  }
}

const reconnect = (url) => {
  if(lockReconnect) {
    return;
  };
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  timer && clearTimeout(timer);
  timer = setTimeout(function () {
    createWebSocket(url);
    lockReconnect = false;
  }, 4000);
}

//心跳检测
const heartCheck = {
  timeout: 2000,
  timeoutObj: null,
  serverTimeoutObj: null,
  start: function(){
    console.log('start');
    let _this = this;
    this.timeoutObj && clearTimeout(this.timeoutObj);
    this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
    this.timeoutObj = setTimeout(function(){
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      console.log('55555');
      ws.send("123456789");
      _this.serverTimeoutObj = setTimeout(function() {
        console.log(111);
        console.log(ws);
        ws.close();
        // createWebSocket();
      }, _this.timeout);

    }, this.timeout)
  }
}

export const createWebSocket = () => {
  try {
    ws = new WebSocket(wsUrl);
    init();
  } catch(e) {
    console.log('catch');
    reconnect(wsUrl);
  }
}

// createWebSocket(wsUrl);