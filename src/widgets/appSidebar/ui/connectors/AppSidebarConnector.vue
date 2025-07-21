<script setup lang="ts">
import { useAppStore } from '@/app/model/store/appStore'

import { AppSidebar } from '../components'

const store = useAppStore()

const logout = () => {
  store.clearStore()
}
</script>

<template>
  <AppSidebar :quantity="store.cartQuantity" @logout="logout" />
</template>
