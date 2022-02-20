import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


const app = createApp(App);

router.beforeEach((to, from) => {
    console.log(to);
    console.log(from);
    console.log("needAuth:" + to.meta.needAuth);
    return true;
  })

app.use(router);

app.mount("#app");
