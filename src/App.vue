<!--
 * @Author: WuGuang
 * @Date: 2022-07-27 15:40:12
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->
<template>
  <nav>
    <router-link to="/1">1</router-link> |
    <router-link to="/11">1-1</router-link>｜
    <router-link to="/12">1-2</router-link>｜
    <router-link to="/13">1-3</router-link>｜
    <router-link to="/131">1-3-1</router-link>｜
    <router-link to="/2">2</router-link>｜
    <router-link to="/3">3</router-link>|
    <router-link to="/3/1">3-1</router-link>|
    <router-link to="/3/2">3-2</router-link>|
    <router-link to="/4">4</router-link>
  </nav>
  <router-view/>
</template>

<script setup>
  import router from './router/index'
  const routes = [{
    name: '3', path: '/3', component: () => import('./views/three/index.vue'),
    children: [
      {
        path: '1',
        name: '3-1',
        component: () => import('./views/three/One.jsx')
      },
      {
        path: '2',
        name: '3-2',
        component: () => import('./views/three/two.vue')
      }
    ]
  },
  {
    path: '/4',
    name: '4',
    component: () => import('./views/four/index.vue')
  }]
  routes.forEach(route => {
    router.addRoute(route);
  })
</script>
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
