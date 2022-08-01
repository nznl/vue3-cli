/*
 * @Author: WuGuang
 * @Date: 2022-07-27 16:57:31
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */

export const route = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/1',
    component: () => import('../views/one/index.vue'),
    meta: {
      title: '1'
    },
    children: [
      {
        path: '/11',
        component: () => import('../views/one/One.vue'),
        meta: {
          title: '1-1'
        }
      },
      {
        path: '/12',
        component: () => import('../views/one/Two.vue'),
        meta: {
          title: '1-2'
        },
        beforeEnter: (to, from) => {
          // ...
          document.title = 'beforeEnter'
        }
      },
      {
        path: '/13',
        component: () => import('../views/one/Three.vue'),
        meta: {
          title: 1-3
        },
        children: [
          {
            path: '/131',
            component: () => import('../views/one/ThreeOne.vue'),
            meta: {
              title: '1-3-1'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/2',
    component: () => import('../views/two/One.vue'),
    meta: {
      title: '2'
    }
  }
]
