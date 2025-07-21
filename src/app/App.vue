<script setup lang="ts">
import { RouterView } from 'vue-router'

import { AppSidebar } from '@/widgets/appSidebar'

import { useAppStore } from './model'

import styles from './styles.module.css'

const store = useAppStore()
</script>

<template>
  <div :class="styles.container">
    <AppSidebar v-show="store.username" />
    <RouterView />
  </div>
</template>
