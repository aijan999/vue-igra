import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login"; 
import Secure from "@/components/Secure";
import GameBoard from "@/components/GameBoard";
import Stats from "@/components/Stats";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      props: true,
    },
    {
      path: "/secure",
      name: "secure",
      component: Secure,
      props: true,
    },
    {
      path: "/game-board",
      name: "game-board",
      component: GameBoard,
      props: true,
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
      props: true,
    }
  ],
});
