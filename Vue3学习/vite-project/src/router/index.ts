import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("../components/HelloWorld.vue");
// const User = () => import("../components/UserInfo");

// import Home from "../components/HelloWorld.vue";
// import User from "../components/UserInfo";

const routes: Array<RouteRecordRaw> = [
  { path: "/home", component: Home },
  // { path: "/user", component: User },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
