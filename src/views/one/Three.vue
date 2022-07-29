
<template>
  <div>第一层，第二步</div>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
    <div>
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </div>
  </transition>
  </router-view>
</template>
