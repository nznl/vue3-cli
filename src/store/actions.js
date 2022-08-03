/*
 * @Author: WuGuang
 * @Date: 2022-08-01 15:20:42
 * @Description: vuex -- actions
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
import * as types from './mutation-type'
export default {
  increment: (context, payload) => {
    console.log(context, 'context');
    context.commit(types.HANDLE_COUNT, payload)
  }
}
