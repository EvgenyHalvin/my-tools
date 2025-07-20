import { createRouter, createWebHistory } from 'vue-router'

import { navigation } from '@/shared/lib'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: navigation.LOGIN.path,
    //   component: () => import('@/pages/LoginPage'),
    //   meta: { replace: true },
    // },
    {
      path: '/',
      redirect: '/products',
      meta: { requiresAuth: true },
    },
    {
      path: navigation.PRODUCTS.path,
      component: () => import('@/pages/products'),
      meta: { requiresAuth: true },
    },
    {
      path: navigation.ORDERS.path,
      component: () => import('@/pages/orders'),
      meta: { requiresAuth: true },
    },
    {
      path: navigation.PROFILE.path,
      component: () => import('@/pages/profile'),
      meta: { requiresAuth: true },
    },
    {
      path: navigation.CART.path,
      component: () => import('@/pages/cart'),
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/NotFoundPage'),
      meta: { replace: true },
    },
  ],
})

export default router