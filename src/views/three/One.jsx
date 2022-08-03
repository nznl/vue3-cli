/*
 * @Author: WuGuang
 * @Date: 2022-08-01 13:58:38
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */


import { withModifiers, defineComponent, ref } from "vue";
import './one.less'
import demo from '../four/demo.vue'
export default defineComponent({
  setup() {
    const count = ref(0);
    const lists = ref([
      1, 2, 3, 4
    ])
    const inc = () => {
      count.value++;
    };

    return () => (
      <div>
        <div onClick={withModifiers(inc, ["self"])}>{count.value}</div>,
        <ul className="test">
          {
            lists.value.map(item => <li>{item}</li>)
          }
        </ul>,
        <demo></demo>,
        <input type="text" v-model={count.value} />
      </div>

    );
  },
});

