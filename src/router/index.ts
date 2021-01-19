import { createRouter, createWebHashHistory } from "vue-router";
const Index = () => import("../views/Index.vue");
const Second = () => import("../views/Second.vue");

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/second",
      name: "second",
      component: Second,
    },
  ],
});

export default router;
