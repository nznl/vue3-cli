<!--
 * @Author: WuGuang
 * @Date: 2022-07-27 16:37:42
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->
<template>
  1-1
  <button @click="removeRoute">去除路由</button>
</template>

<script setup>
  import router from '/src/router/index'
  function removeRoute() {
    router.removeRoute('3')
  }
</script>
