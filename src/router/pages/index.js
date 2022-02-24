import errors from './errors';
const routes = [
  ...errors,
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '*',
    redirect: '/404',
    component: () => import('@/pages/404.vue')
  },
]
export default routes