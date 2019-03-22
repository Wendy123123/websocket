<template>
  <div class="about">
    <div id="mess"></div>
    <h1>
      <input type="text"/>
    </h1>
  </div>
</template>
<script>

export default {
  data() {
    return {
      aboutdata: [],
    }
  },
  mounted(){
    //this.getDataList();
    this.getWsSocket();
  },
  methods:{
    getWsSocket(){
      var mess = document.getElementById("mess");
      if(window.WebSocket){
        var ws = new WebSocket('ws://192.168.1.2:8001');

        ws.onopen = function(e){
            console.log("连接服务器成功");
            ws.send("我是客户机");
        }
        ws.onclose = function(e){
            console.log("服务器关闭");
        }
        ws.onerror = function(){
            console.log("连接出错");
        }

        ws.onmessage = function(e){
            var time = new Date();
            mess.innerHTML+=time+"的消息："+e.data+"<br>"
        }
      }
    },
    getDataList(){
      this.$http.get("/api/dataList").then(res => {
        this.aboutdata = res.data.Data;
      })
    },

    deleteData(id){
      this.$http.post("/api/deleteData", { id })
      .then(res => {
        this.aboutdata = res.data.Data;
      })
    }
  }
}
</script>

