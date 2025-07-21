<script setup lang="ts">
import { useRouter } from 'vue-router'

import { navigation } from '@/shared/lib'
import { EmptyPlug, PageTemplate } from '@/shared/ui/components'

const router = useRouter()

const navigateTo = (path: string) => {
  router.replace(path)
}
</script>

<template>
  <PageTemplate>
    <EmptyPlug
      title="Страница не найдена"
      :redirect="{
        to: navigation.PRODUCTS.path,
        text: 'На главную',
        onRedirect: () => navigateTo(navigation.PRODUCTS.path),
      }"
    />
  </PageTemplate>
</template>
