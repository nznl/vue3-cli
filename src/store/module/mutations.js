/*
 * @Author: WuGuang
 * @Date: 2022-08-03 09:00:45
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
export default {
  addModuleA(state, payload) {
    console.log(1223)
    state.countA += payload.count
  }
}
