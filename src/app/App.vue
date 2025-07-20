<script setup lang="ts">
import { RouterView } from 'vue-router'

import { AppSidebar } from '@/widgets/appSidebar'

import styles from './styles.module.css'
</script>

<template>
  <div :class="styles.container">
    <AppSidebar />
    <RouterView />
  </div>
</template>
