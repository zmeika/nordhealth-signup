<script setup lang="ts">
import '@nordhealth/components/lib/Input'
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Icon'
import '@nordhealth/components/lib/Tooltip'

import { ref, computed } from 'vue'

const isPasswordVisible = ref(false)
const passwordType = computed(() => isPasswordVisible.value ? 'text' : 'password')
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

// when empty string is passed as an error, custom button border is red while input border has default color
const error = ref('')
</script>

<template>
  <div>
    <nord-input
      expand
      required
      label="Password"
      value="Secret password 123"
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
