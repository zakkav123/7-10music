<template>
  <div>
    <van-nav-bar :title="title" />

    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "首页",
    };
  },
  watch: {
    $route(newv) {
      console.log(newv);
      this.title = newv.meta.title;
    },
  },
};
</script>

<style>
</style>