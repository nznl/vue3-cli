<!--
 * @Author: WuGuang
 * @Date: 2022-08-01 15:33:12
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
-->

<template>
  第四阶
  {{count}}
  <input type="text" v-model="namecomputed">
  {{name}}
  <button @click="addCount">ADD count</button>{{$store.state.app.countA}}
  <ul>
    <li v-for="item in todoListsA('wu')" :key="new Date()">{{item}}</li>
  </ul>
  <button @click="clickab">click module a</button>
  <one-demo :level="4">Render
    <template #footer>
      此处child p
    </template>
  </one-demo>
  <section>============</section>
  <two-demo :items="[1,2]">
    <template #footer>
    footer
    </template>
  </two-demo>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import OneDemo from './OneDemo.js'
import TwoDemo from './TwoDemo.js'
export default {
  components: {
    'one-demo': OneDemo,
    'two-demo': TwoDemo
  },
  data() {
    return {
      name: '123'
    }
  },
  computed: {
    ...mapState({
      count: 'count'
    }),
    ...mapGetters(['todoLists', 'todoListsA']),
    namecomputed: {
      get() {
        return this.name
      },
      set(val) {
        this.name = val
      }
    }
  },
  mounted() {
    console.log(Array.from({ length: 20 }))
  },
  methods: {
    ...mapMutations({
      addModuleA: 'addModuleA'
    }),
    addCount() {
      console.log(1);
      // this.$store.state.count++
      // this.$store.commit({
      //   type: 'HANDLE_COUNT',
      //   amount: 20
      // })
      this.$store.dispatch('increment', {
        amount: 30
      })
    },
    clickab() {
      // this.addModuleA({count: 6})
      this.$store.dispatch('actionmodule')
    }
  },

}
</script>
