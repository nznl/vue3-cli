<!--
 * @Author: WuGuang
 * @Date: 2022-08-01 14:25:00
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->
<template>
  此处是第三层
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <div>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>
