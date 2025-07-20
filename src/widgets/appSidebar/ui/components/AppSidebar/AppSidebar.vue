<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { NAVIGATION_ITEMS } from '../../../lib'
import styles from './styles.module.css'

defineProps<{
  quantity?: number
  onLogout?: () => void
}>()

const emit = defineEmits<{
  (e: 'logout'): void
}>()

const route = useRoute()
const path = computed(() => route.path)

const handleLogout = () => {
  emit('logout')
}
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.logo">
      <RouterLink to="/">Мои инструменты</RouterLink>
    </div>

    <div :class="styles.items">
      <RouterLink
        v-for="item in NAVIGATION_ITEMS"
        :key="item.key"
        :to="item.path"
        :class="[styles.item, path === item.path ? styles.active : '']"
      >
        <div v-if="item.key === 'CART'" :class="styles.cartItem">
          {{ item.label }}
          <div v-show="!!quantity" :class="styles.quantity" :key="quantity">{{ quantity }}</div>
        </div>
        <span v-else>{{ item.label }}</span>
      </RouterLink>
    </div>

    <div :class="styles.logout">
      <RouterLink
        :class="[styles.item]"
        to="/login"
        title="Выйти"
        variant="danger"
        @click="handleLogout"
      >
        Выйти
      </RouterLink>
    </div>
  </div>
</template>
