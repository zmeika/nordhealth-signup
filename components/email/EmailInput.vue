<script setup lang="ts">
import '@nordhealth/components/lib/Input'

const email = defineModel <string> ({ required: true })
</script>

<template>
  <nord-input
    v-model="email"
    expand
    required
    error=""
    label="Email"
    placeholder="mail@example.com"
  />
</template>
