/*
 * @Author: WuGuang
 * @Date: 2022-08-01 15:21:11
 * @Description: vuex -- mutations
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
import * as types from './mutation-type'
export default {
  [types.HANDLE_COUNT](state, payload) {
    state.count += payload.amount;
  }
}
