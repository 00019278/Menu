import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('../views/About/index.vue')
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import('../views/Settings/index.vue')
    },
    {
      name: 'basket',
      path: '/basket',
      component: () => import('../views/Basket/index.vue')
    }
  ]
})

export default router
