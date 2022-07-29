<!--
 * @Author: WuGuang
 * @Date: 2022-07-27 16:45:28
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->

<template>
  第二层
  <el-input v-model="inputVal" @input="debounce(inputEvent($event), 1000)"></el-input>
  <input type="text" id="input" v-focus/>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue'
let obj = {
  _val: 1,
  get val() {
    return this._val++
  }
}
const inputVal = ref(null);
console.log(obj.val === 1 && obj.val === 2 && obj.val === 3);
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay)
  }
}

function inputEvent(e) {
  console.log(e)
}

const vFocus = {
  mounted(el, binding) {
    el.focus();
    el.addEventListener('input', (e) => {
      console.log(e, '')
    })
  },
} // setup模式，默认v开头的驼峰为构件指令

onMounted(() => {
    document.querySelector('#input').oninput = debounce(inputEvent(e), 500)
})

async function thrrol(fn, delay) {
  let preTime = Date.now();
  return function () {
    const that = this;
    let nowTime = Date .now();
    if (nowTime - preTime >= delay) {
      fn.apply(that, arguments);
      preTime = nowTime();
    }
  }
}

</script>
