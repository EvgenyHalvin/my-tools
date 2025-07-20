<script setup lang="ts">
import styles from './styles.module.css'
</script>

<template>
  <div :class="styles.container">
    <slot />
  </div>
</template>