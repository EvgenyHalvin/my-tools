<script setup lang="ts">
import { ProductCard } from '@/entities/product'
import type { Product } from '@/shared/api'

import styles from './styles.module.css'

const { products } = defineProps<{
  products: Product[]
}>()

const emit = defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()
</script>

<template>
  <div :class="styles.container">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="emit('add-to-cart', product)"
    />
  </div>
</template>
