<script setup lang="ts">
import { type TCartPosition } from '@/entities/cart'

import styles from './styles.module.css'
import { Button } from '@/shared/ui/components'

const { product } = defineProps<{
  product: TCartPosition
}>()

const emit = defineEmits<{
  (e: 'increase:quantity', product: TCartPosition): void
  (e: 'decrease:quantity', product: TCartPosition): void
  (e: 'remove:product', product: TCartPosition): void
}>()
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.image">
      <img :src="product.product.link" :alt="product.product.name" />
    </div>
    <div :class="styles.content">
      <div :class="styles.info">
        <h2 :class="styles.name">{{ product.product.name }}</h2>
        <p :class="styles.price">
          {{ product.product.price.toLocaleString() }}&nbsp;₽&nbsp;/&nbsp;шт
        </p>
      </div>

      <div :class="styles.controls">
        <div :class="styles.quantity">
          <Button variant="danger" title="Удалить" @click="emit('remove:product', product)" />
          <div :class="styles.summary">
            <p :class="styles.summaryPrice">
              {{ (product.product.price * product.quantity).toLocaleString() }}&nbsp;₽
            </p>
          </div>
          <div :class="styles.quantityButtons">
            <Button
              :disabled="product.quantity === 1"
              :variant="product.quantity === 1 ? 'disabled' : 'secondary'"
              title="–"
              @click="emit('decrease:quantity', product)"
            />
            <p :class="styles.quantityValue">{{ product.quantity }}</p>
            <Button
              :disabled="product.quantity === 10"
              :variant="product.quantity === 10 ? 'disabled' : 'secondary'"
              title="+"
              @click="emit('increase:quantity', product)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
