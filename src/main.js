import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'windi.css';
import axios from 'axios';
import VueAxios from 'vue-axios';


const app = createApp(App);

router.beforeEach((to, from) => {
    console.log(to);
    console.log(from);
    console.log("needAuth:" + to.meta.needAuth);
    return true;
  })

app.use(router);
// 配置vue插件
app.use(ElementPlus)
app.use(VueAxios, axios)

app.mount("#app");
