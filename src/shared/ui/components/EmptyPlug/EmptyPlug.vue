<script setup lang="ts">
import { Button } from '@/shared/ui/components'

import styles from './styles.module.css'

const { title, description } = defineProps<{
  title: string
  description?: string
  redirect?: {
    to: string
    text: string
    onRedirect?: () => void
  }
}>()
</script>

<template>
  <div :class="styles.container">
    <h1 :class="styles.title">{{ title }}</h1>
    <p v-show="description" :class="styles.description">{{ description }}</p>
    <Button
      v-show="redirect"
      :class="styles.button"
      :to="redirect?.to"
      :title="redirect?.text ?? ''"
      @click="redirect?.onRedirect"
    />
  </div>
</template>
