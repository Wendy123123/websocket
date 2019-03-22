import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import WsSocket1 from "./views/WsSocket1.vue"
import WsSocket2 from "./views/WsSocket2.vue"
import WsSocket3 from "./views/WsSocket3.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/addData",
      name: "addData",
      component: () =>
        import("./components/editorData.vue")
    },
    {
      path: "/editorData/:editorkey",
      name: "editorData",
      component: () =>
        import("./components/editorData.vue")
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/wssocket1",
      name: "wssocket1",
      component:WsSocket1
    },
    {
      path: "/wssocket2",
      name: "wssocket2",
      component:WsSocket2
    },
    {
      path: "/wssocket3",
      name: "wssocket3",
      component:WsSocket3
    }
  ]
});
