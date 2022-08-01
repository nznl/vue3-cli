/*
 * @Author: WuGuang
 * @Date: 2022-07-27 15:40:12
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */

import { createRouter, createWebHistory } from 'vue-router'
import { route } from './route'
const routes = [
  ...route
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 全局前置守卫
router.beforeEach((to, from) => {
  console.log(to, 'each');
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // if (to.path === '/131') {
  //   return {
  //     path: '/2',
  //     query: {
  //       name: 'redirect'
  //     },
  //     hash: '#123'
  //   }
  // }
})

// router.beforeResolve((to, from) => {
//   console.log(to, 'resolve')
// })
// router.afterEach((to, from) => {
//   console.log(to, 'after')
// })
router.scrollBehavior  = (to, from, savedPosition) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ top: 0, left: 0 })
    }, 500);
  });
}
export default router
