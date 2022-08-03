


import { h } from 'vue'
 export default {
  props: {
    level: {
      type: Number,
      require: true
    }
  },
  render() {
    const clickhandle = () => {
      console.log(123)
    }
    return h(
      'h' + this.level, //标签名
      {
        id: 'test',
        onclick: this.clickhandle // 点击事件
      }, // prop 或 attribute
      [
        this.$slots.default(),
        h('p', {class: 'p', 'data-id': 123, style: {cursor: 'pointer'}}, this.$slots.footer()),
        // h('h1', 'A headline'),
        // h('h1', 'A headline'),
        new Array(3).fill(1).map(item => h('h1', 'A headline')),
      ]
    )
  },
  methods: {
    clickhandle() {
      console.log('hh')
    }
  },
 }

