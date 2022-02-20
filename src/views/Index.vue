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
    <div class="demo">
      我是一个DIV
      <span class="test">test</span>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="less" scoped>
@color: red;
.demo {
  background-color: antiquewhite;
  .test {
  color: @color;
}
}

</style>
