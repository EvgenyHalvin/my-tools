import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { TCartPosition } from '@/entities/cart'
import type { Product } from '@/shared/api'

export type TAppStore = {
  credentials: TCredentials | null
  cart: Record<string, TCartPosition>
}

export type TCredentials = {
  login: string
  password: string
}

export const useAppStore = defineStore('app', () => {
  const credentials = ref<TCredentials | null>(null)
  const cart = ref<Record<string, TCartPosition>>({})

  const cartQuantity = computed(() => Object.values(cart.value).reduce<number>((acc, next) => acc + next.quantity, 0))
  const username = computed(() => credentials.value?.login || '')

  const setCredentials = (values: TCredentials) => { credentials.value = values }
  const clearCredentials = () => { credentials.value = null }

  const addToCart = (product: Product) => {
    if (cart.value[product.id]) {
      cart.value[product.id].quantity++
    } else {
      cart.value[product.id] = { product, quantity: 1 }
    }
  }

  const removeFromCart = (product: Product) => {
    delete cart.value[product.id]
  }

  const decreaseProductQuantity = (product: Product) => {
    if (cart.value[product.id] && cart.value[product.id].quantity > 1) {
      cart.value[product.id].quantity--
    } else {
      removeFromCart(product)
    }
  }

  const clearCart = () => { cart.value = {} }

  return {
    cart,
    cartQuantity,
    username,
    setCredentials,
    clearCredentials,
    addToCart,
    decreaseProductQuantity,
    removeFromCart,
    clearCart,
  }
})