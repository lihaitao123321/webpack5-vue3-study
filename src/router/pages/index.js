import errors from './errors';
const routes = [
  ...errors,
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue')
  },
]
export default routes