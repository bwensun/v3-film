import Home from "@/components/Home";
import About from "@/components/About";
import {createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
];

 const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
