/*
 * @Author: WuGuang
 * @Date: 2022-07-27 15:40:12
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import { useElementComponents } from './plugins/element.js'
import { setDirectives } from './directives/index'
import * as utils from './utils/index'
const app = createApp(App);
setDirectives(app);
app.use(store).use(router).use(useElementComponents).mount('#app');
app.config.globalProperties.$utils = utils;
