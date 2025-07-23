<script setup lang="ts">
import EmailInput from '@/components/email/EmailInput.vue'
import PasswordInput from '~/components/password/PasswordInput.vue'
import '@nordhealth/components/lib/Stack'
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Card'
import '@nordhealth/components/lib/Checkbox'

const terms = useTemplateRef<HTMLInputElement>('terms')
const subscription = useTemplateRef<HTMLInputElement>('subscription')

interface SignUpForm {
  email: string
  password: string
  terms: boolean
  subscription: boolean
}

const form = ref<SignUpForm>({
  email: '',
  password: '',
  terms: false,
  subscription: false,
})

async function handleSubmit() {
  console.log(form)
}
</script>

<template>
  <nord-card
    padding="l"
    class="form-container"
  >
    <h1 slot="header">
      Create an account
    </h1>
    <form @submit.prevent="handleSubmit">
      <nord-stack>
        <EmailInput v-model="form.email" />
        <PasswordInput v-model="form.password" />

        <nord-checkbox
          ref="terms"
          label="I accept terms of service"
          required
          error=""
          @change="() => { form.terms = !!terms?.checked }"
        />
        <nord-checkbox
          ref="subscription"
          label="Opt in to receive occasional product updates and announcements"
          @change="() => { form.subscription = !!subscription?.checked }"
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
