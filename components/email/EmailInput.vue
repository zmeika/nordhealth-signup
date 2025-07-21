<script setup lang="ts">
import '@nordhealth/components/lib/Input'
</script>

<template>
  <nord-input
    expand
    required
    :error="''"
    value=""
    label="Email"
    placeholder="mail@example.com"
  />
</template>
