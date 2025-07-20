<script setup lang="ts">
import styles from './styles.module.css'

const {
  title,
  variant = 'primary',
  isLoading = false,
} = defineProps<{
  title: string
  variant?: 'primary' | 'secondary' | 'danger' | 'disabled'
  isLoading?: boolean
}>()
</script>

<template>
  <button
    :class="[styles.button, styles[variant], isLoading && styles.loading]"
    :disabled="isLoading"
  >
    <div v-if="isLoading" :class="styles.spinner"></div>
    <span v-else>{{ title }}</span>
  </button>
</template>
