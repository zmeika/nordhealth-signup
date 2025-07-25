<script setup lang="ts">
import '@nordhealth/components/lib/Input'

const email = defineModel <string> ({ required: true })
</script>

<template>
  <nord-input
    id="email"
    v-model="email"
    expand
    required
    label="Email"
    placeholder="mail@example.com"
  />
</template>
