<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { getDataList } from '@/service/api';

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted(){
    getDataList().then(res => {})
  }
};
</script>
