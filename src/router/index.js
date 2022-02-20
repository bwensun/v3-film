import Home from "@/components/Home";
import About from "@/components/About";
import User from "@/components/User";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: { needAuth: false },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { needAuth: false },
  },
  {
    path: "/user/:id",
    component: User,  
    name: "user",
    meta: { needAuth: false },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
