import { createRouter, createWebHistory } from 'vue-router'

import { navigation } from '@/shared/lib'

import { useAppStore } from './model'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: navigation.LOGIN.path,
      component: () => import('@/pages/LoginPage'),
      meta: { replace: true },
    },
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
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useAppStore()

  const isAuth = !!store.username

  if (to.meta.requiresAuth && !isAuth) {
    next({ path: navigation.LOGIN.path })
  } else {
    next()
  }
})
export default router