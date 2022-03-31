<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './views/Home'
export default {
  name: 'App',
  components: {
    Home,
    Header
  },
  mounted(){
    // 通知 Vuex 发请求，获取数据，存储于仓库当中
    // this.$store.dispatch("getbannerlist");
    // this.$store.dispatch("getproducelist");
  },
}
</script>

<style>
#app {
  background-color: rgb(5, 16, 27);
  min-height: 100vh;
}
</style>
