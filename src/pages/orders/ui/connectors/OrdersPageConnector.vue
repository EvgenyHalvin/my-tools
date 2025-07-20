<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { mockApi, type TOrder } from '@/shared/api'

import { OrdersPage } from '../components'

const orders = ref<TOrder[]>([])

onMounted(async () => {
  orders.value = await mockApi.getOrders()
})
</script>

<template>
  <OrdersPage :orders="orders" />
</template>
