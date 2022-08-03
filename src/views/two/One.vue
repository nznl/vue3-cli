<!--
 * @Author: WuGuang
 * @Date: 2022-07-27 16:45:28
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->

<template>
  <div v-if="isShowName">第二层</div>
  123
  <el-input v-model="inputVal" @input="debounce(inputEvent($event), 1000)"></el-input>
  <input type="text" id="input" v-focus/>
  <button @click="$utils.addNumer">click</button>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted,  } from 'vue'
import { useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router'
let obj = {
  _val: 1,
  get val() {
    return this._val++
  }
}
const $route = useRoute();
const $router = useRouter();
const isShowName = ref(true);
console.log(isShowName, 'isShowName')
console.log($route.hash)
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

onBeforeRouteUpdate((to, from) => {
  console.log(to, '-----123');
})
onMounted(() => {
  console.log(456, '---')
    // document.querySelector('#input').oninput = debounce(inputEvent(e), 500)
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

const arr = [4,3,2,];
const arr_1 = [5,6,8]
arr.forEach(item => {
  try {
      arr_1.forEach(item_1 => {
    if (item_1 === 6) {
      return
    }
     console.log(item_1);
  })
  if (item === 3) {
    throw Error('终止')
  }
  console.log(item)
  } catch {

  }
})
console.log('=======')

function test() {
for(let i in arr) {
  arr_1.forEach(item_1 => {
    if (item_1 === 6) {
      return
    }
    console.log(item_1);
  })
  if (arr[i] === 3) {
    return
  }
  console.log(arr[i])
}
}
test()
async function testshow() {
  // const result = await $router.push('/3');
  // console.log(result, 'result');
  // isShowName.value = false;
}
</script>
