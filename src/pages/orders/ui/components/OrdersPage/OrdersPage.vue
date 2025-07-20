<script setup lang="ts">
import type { TOrder } from '@/shared/api'
import { PageTemplate, EmptyPlug } from '@/shared/ui/components'

defineProps<{
  orders: TOrder[]
}>()
</script>

<template>
  <PageTemplate>
    <EmptyPlug title="Страница не доступна" description="Этот раздел находится в разработке." />
  </PageTemplate>
</template>
