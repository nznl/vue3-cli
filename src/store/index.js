/*
 * @Author: WuGuang
 * @Date: 2022-07-27 15:40:12
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
import { createStore, createLogger } from 'vuex'
import VuexPersistence from 'vuex-persist'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { app } from './module/index'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default createStore({
  modules: {
    app
  },
  state,
  getters,
  actions,
  mutations,
  plugins: [vuexLocal.plugin]
})
