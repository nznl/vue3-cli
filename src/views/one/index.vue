<!--
 * @Author: WuGuang
 * @Date: 2022-07-27 16:22:34
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->

<template>
  <div>第一层</div>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
    <div>
      <keep-alive>
          <component :is="Component"></component>
      </keep-alive>
      </div>
    </transition>

  </router-view>
</template>

<script setup>

</script>
