<!--  -->
<template>
  <div></div>
</template>

<script>
import { createWebSocket } from '@/utils/ws.js';
export default {
  data () {
    return {
    };
  },

  mounted() {
    this.initWsSocket();
  },

  methods: {
    initWsSocket(){
      createWebSocket();
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>