const routes = [
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "error-views" */'@/pages/errors/404.vue')
  },
  {
    path: '/502',
    name: '502',
    component: () => import(/* webpackChunkName: "error-views" */'@/pages/errors/502.vue')
  },
  {
    path: '/505',
    name: '505',
    component: () => import(/* webpackChunkName: "error-views" */'@/pages/errors/505.vue')
  },
]
export default routes