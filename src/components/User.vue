<template>
  <div>
      <h1>User</h1>
      <span>{{ $route.params.id }}</span>
      <button @click="printRouter">printRouter</button>
  </div>
</template>

<script>

export default {
  name: 'User',
  data(){
      return {

      }
  },
  method: {
      printRouter: function(){
          console.log(this.$route.params.id);
      }
  },
  setup(props) {
    const logProps = () => {
      console.log(props);
    }
    return {
      logProps
    }
  }
};
</script>

<style scoped>

</style>