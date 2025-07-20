<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { useAppStore } from '@/app/model/store'
import type { TCartPosition } from '@/entities/cart'
import { navigation } from '@/shared/lib'

import { CartPage } from '../components'

const store = useAppStore()
const router = useRouter()

const isCartEmpty = computed(() => Object.keys(store.cart).length === 0)
const cartPositions = computed(() => Object.values(store.cart))

const updateQuantity = ({ product }: TCartPosition, operation: 'increase' | 'decrease') => {
  if (operation === 'increase') {
    store.addToCart(product)
  } else {
    store.decreaseProductQuantity(product)
  }
}

const removeProduct = ({ product }: TCartPosition) => {
  store.removeFromCart(product)
}

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <CartPage
    :positions="cartPositions"
    :isCartEmpty="isCartEmpty"
    @increase:quantity="(product) => updateQuantity(product, 'increase')"
    @decrease:quantity="(product) => updateQuantity(product, 'decrease')"
    @remove:product="removeProduct"
    @clear:cart="store.clearCart"
    @redirect:products="navigateTo(navigation.PRODUCTS.path)"
  />
</template>
