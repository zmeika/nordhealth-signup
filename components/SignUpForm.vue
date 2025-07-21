<script setup lang="ts">
import '@nordhealth/components/lib/Stack'
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Card'
import '@nordhealth/components/lib/Checkbox'
import EmailInput from '@/components/email/EmailInput.vue'
import PasswordInput from '~/components/password/PasswordInput.vue'
</script>

<template>
  <nord-card
    padding="l"
    class="form-container"
  >
    <h1 slot="header">
      Create an account
    </h1>
    <form action="#">
      <nord-stack>
        <EmailInput />
        <PasswordInput />

        <nord-checkbox
          label="I accept terms of service"
          required
          value="Value"
        />
        <nord-checkbox
          label="Opt in to receive occasional product updates and announcements"
          value="Value"
        />

        <nord-button
          type="submit"
          expand
          variant="primary"
        >
          Sign Up
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>
</template>

<style>
.form-container {
  max-inline-size: 340px;
  margin: var(--n-space-xl) auto;
}
</style>
