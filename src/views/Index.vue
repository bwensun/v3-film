<template>
  <div>
    <h1>首页</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <button @click="linkHome()">link-home</button>
    <button @click="linkHome2()">link-about</button>
    <h1 class="less_demo">LESS</h1>
    <h1 class="text-rose-900">WINDICSS</h1>
    <div class="bg-gray-500 demo">
      我是一个DIV
      <span class="test">test</span>
    </div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
    <img src="/img/git.png" alt="" />
    <img src="@/assets/git.png" alt="" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",

  data() {},
  methods: {
    linkHome: function () {
      console.log("linkHome: 手动路由跳转");
      this.$router.push("/");
    },
    linkHome2: function () {
      console.log("linkHome: 手动路由跳转2");
      this.$router.push({ name: "about" });
    },
  },
  // setup(props) {
  //   console.log(props);
  //   const router = useRouter();
  //   const route = useRoute();
  //   return {
  //     router,
  //     route,
  //   }; // 这里返回的任何内容都可以用于组件的其余部分
  // },
  created() {
    axios.get("https://v1.hitokoto.cn/").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style lang="less" scoped>
@color: red;
.demo {
  .test {
    color: @color;
  }
}
</style>
