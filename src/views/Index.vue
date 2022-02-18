<template>
  <div>
    <h1>首页</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <button @click="linkHome()">link-home</button>
    <button @click="linkHome2()">link-home2</button>
  </div>
</template>

<script>

export default {
  name: "Index",
  data() {},
  methods: {

    linkHome: function () {
      console.log("linkHome: 手动路由跳转");
      this.$router.push("/home");
    },
    linkHome2: () => {
      console.log("linkHome: 手动路由跳转2");
      console.log("this:%o", this);
      
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

<style scoped></style>
