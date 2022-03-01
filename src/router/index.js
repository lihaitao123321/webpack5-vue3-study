import { createRouter, createWebHashHistory } from 'vue-router'
import pages from './pages'
import views from './views'
const routes = [
  ...pages,
  ...views,
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]
//默认history,改用hash
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router