<script setup lang="ts">
import type { Product } from '@/shared/api'
import { Button } from '@/shared/ui/components'

import styles from './styles.module.css'

const { product } = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()
</script>

<template>
  <div :class="styles.card">
    <img :class="styles.cardImage" :src="product.link" alt="Product Image" />
    <h1 :class="styles.cardTitle">{{ product.name }}</h1>
    <p :class="styles.cardDescription">{{ product.description }}</p>
    <div :class="styles.cardFooter">
      <div :class="styles.cardPrice">{{ product.price.toLocaleString('ru-RU') }} ₽</div>
      <Button title="Купить" @click="emit('add-to-cart', product)" />
    </div>
  </div>
</template>
