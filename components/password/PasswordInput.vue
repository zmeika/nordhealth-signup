<script setup lang="ts">
import { computed, ref } from 'vue'
import '@nordhealth/components/lib/Input'
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Icon'

import '@nordhealth/components/lib/Tooltip'

const password = defineModel<string>({ required: true })

const isPasswordVisible = ref(false)
const passwordType = computed(() => isPasswordVisible.value ? 'text' : 'password')
function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

// when empty string is passed as an error, custom button border is red while input border has default color
const error = ref('')
</script>

<template>
  <div>
    <nord-input
      id="password"
      v-model="password"
      expand
      required
      label="Password"
      :type="passwordType"
      :error="error"
    >
      <nord-button
        slot="end"
        aria-describedby="password-tooltip"
        square
        @click="togglePasswordVisibility"
      >
        <nord-icon name="interface-edit-on" />
        <nord-icon name="interface-edit-off" />
      </nord-button>
    </nord-input>
    <nord-tooltip id="password-tooltip">
      Show / hide password
    </nord-tooltip>
  </div>
</template>

<style scoped>
[type="password"] nord-icon[name="interface-edit-off"],
[type="text"] nord-icon[name="interface-edit-on"] {
  display: none;
}
</style>
