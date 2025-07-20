<script setup lang="ts">
import { type TCartPosition, CartProductCard } from '@/entities/cart'
import { navigation } from '@/shared/lib'
import { Button, EmptyPlug, PageTemplate } from '@/shared/ui/components'

import styles from './styles.module.css'

type Props = {
  isCartEmpty: boolean
  positions: TCartPosition[]
}

const { positions } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'increase:quantity', product: TCartPosition): void
  (e: 'decrease:quantity', product: TCartPosition): void
  (e: 'remove:product', product: TCartPosition): void
  (e: 'clear:cart'): void
  (e: 'redirect:products'): void
}>()
</script>

<template>
  <PageTemplate v-if="isCartEmpty">
    <EmptyPlug
      title="Корзина пуста"
      description="Добавьте товары в корзину, чтобы оформить заказ."
      :redirect="{
        to: navigation.PRODUCTS.path,
        text: 'На страницу товаров',
        onRedirect: () => emit('redirect:products'),
      }"
    />
  </PageTemplate>
  <PageTemplate v-else>
    <div :class="styles.container">
      <div :class="styles.cartHeader">
        <h1 :class="styles.title">Корзина</h1>
        <Button
          v-show="!isCartEmpty"
          variant="secondary"
          title="Очистить корзину"
          @click="emit('clear:cart')"
        />
        <Button v-show="!isCartEmpty" variant="primary" title="Оформить заказ" />
      </div>
      <h2 :class="styles.subtitle">Ваши товары:</h2>
      <CartProductCard
        v-for="position in positions"
        :key="position.product.id"
        :product="position"
        @increase:quantity="emit('increase:quantity', $event)"
        @decrease:quantity="emit('decrease:quantity', $event)"
        @remove:product="emit('remove:product', $event)"
      />
    </div>
  </PageTemplate>
</template>
