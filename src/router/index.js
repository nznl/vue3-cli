/*
 * @Descripttion:
 * @version:
 * @Author: WuGuang
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

export default router
