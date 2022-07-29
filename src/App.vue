<!--
 * @Descripttion:
 * @version:
 * @Author: WuGuang
-->
<template>
  <nav>
    <router-link to="/1">1</router-link> |
    <router-link to="/11">1-1</router-link>｜
    <router-link to="/12">1-2</router-link>｜
    <router-link to="/13">1-3</router-link>｜
    <router-link to="/131">1-3-1</router-link>｜
    <router-link to="/2">2</router-link>｜
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
