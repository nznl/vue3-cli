<!--
 * @Author: WuGuang
 * @Date: 2022-07-27 17:16:56
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->
<template>
  此处是首页
</template>

<script setup>
import router from '../router/index'
router.addRoute({
  path: '/3',
  name: '3',
  component: () => import('./three/One.vue')
})
</script>
