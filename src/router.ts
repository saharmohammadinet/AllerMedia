import Home from "./view/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/:author",
      component: () => import("./view/Detail.vue"),
    },
    {
      path: "/about",
      component: () => import("./view/About.vue"),
    },
  ],
});
