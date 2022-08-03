<!--
 * @Author: WuGuang
 * @Date: 2022-08-01 15:24:22
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->
<template>
  3-2
  <input type="text" v-model="inputComputed">
  {{name}}{{store.state.app.countA}}
  <button @click="store.commit('addModuleA', {count: 9 })">Click</button>
  <ul>
    <li v-for="item in store.getters.todoLists('c')" ::key="item">
      {{item}}
    </li>
  </ul>
</template>

<script setup>
  import { ref, reactive, toRefs , computed } from 'vue';
  import { useStore } from 'vuex'
  const store = useStore(); // 组合式api
  const test = reactive({
    name: '123'
  })
  const { name } = toRefs(test);
  const inputComputed = computed({
    get() {
      return name.value
    },
    set(val) {
      name.value = val;
    }
  })
</script>
