/*
 * @Author: WuGuang
 * @Date: 2022-08-01 15:20:29
 * @Description: vuex -- getters
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
export default {
  todoLists: ({lists}) => id => {
    return lists.filter(list => list === id)
  }
}
