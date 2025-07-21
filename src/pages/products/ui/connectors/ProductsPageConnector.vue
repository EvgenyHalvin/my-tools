<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useAppStore } from '@/app/model'
import { mockApi, type Product } from '@/shared/api'
import { PageTemplate } from '@/shared/ui/components'

import { ProductsGrid } from '../components'

const products = ref<Product[]>([])

onMounted(async () => {
  products.value = await mockApi.getProducts()
})

const store = useAppStore()

const handleCardClick = (product: Product) => {
  console.log(product)
}
</script>

<template>
  <PageTemplate>
    <ProductsGrid :products="products" @add-to-cart="store.addToCart" @card-click="handleCardClick" />
  </PageTemplate>
</template>
