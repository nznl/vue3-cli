/*
 * @Author: WuGuang
 * @Date: 2022-08-03 15:23:06
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
import { h } from 'vue'
import demo from './demo.vue'
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    message: {
      type: String,
      default: 'message'
    }
  },

  render() {
    const test = (h) => {
      if (this.items.length) {
       return h('ul', null, this.items.map(item => h('li', {
        onClickOnce: $event => console.log($event.target.innerText)
       }, item)))
      } else {
        return h('p', { style: { color: 'red'}}, 'props为空数组')
      }
    }
    return h(
      demo,
      null,
      {
        default: () => test(h),
        footer: this.$slots.footer
      }
    )
  },
}
