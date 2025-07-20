<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAppStore } from '@/app/model'
import { navigation } from '@/shared/lib'
import { Button, PageTemplate } from '@/shared/ui/components'

import styles from './styles.module.css'

const store = useAppStore()
const router = useRouter()

const login = ref('')
const password = ref('')
const isLoading = ref(false)
const hasAttemptedSubmit = ref(false)

const handleSubmit = async () => {
  hasAttemptedSubmit.value = true

  if (!login.value || !password.value) return

  isLoading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    store.setCredentials({
      login: login.value,
      password: password.value,
    })

    router.push(navigation.PRODUCTS.path)
  } catch (error) {
    console.error('Ошибка входа:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <PageTemplate>
    <div :class="styles.container">
      <div :class="styles.form">
        <h1 :class="styles.title">
          {{ store.username ? 'Выйти из аккаунта' : 'Войти в аккаунт' }}
        </h1>

        <div v-if="!store.username" :class="styles.inputs">
          <div :class="styles.inputGroup">
            <input
              v-model="login"
              type="text"
              required
              placeholder="Логин"
              :class="[styles.input, hasAttemptedSubmit && !login && styles.inputError]"
              :disabled="isLoading"
            />
            <div v-if="hasAttemptedSubmit && !login" :class="styles.errorText">
              Поле "Логин" обязательно для заполнения
            </div>
          </div>
          <div :class="styles.inputGroup">
            <input
              v-model="password"
              type="password"
              required
              placeholder="Пароль"
              :class="[styles.input, hasAttemptedSubmit && !password && styles.inputError]"
              :disabled="isLoading"
            />
            <div v-if="hasAttemptedSubmit && !password" :class="styles.errorText">
              Поле "Пароль" обязательно для заполнения
            </div>
          </div>

          <Button
            title="Войти"
            variant="primary"
            :isLoading="isLoading"
            @click="handleSubmit"
            :class="styles.submitButton"
          />
        </div>
      </div>
    </div>
  </PageTemplate>
</template>
