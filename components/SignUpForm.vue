<script setup lang="ts">
import EmailInput from '@/components/email/EmailInput.vue'
import PasswordInput from '@/components/password/PasswordInput.vue'
import { useUserStore } from '@/stores/user'
import '@nordhealth/components/lib/Stack'
import '@nordhealth/components/lib/Banner'
import '@nordhealth/components/lib/Button'
import '@nordhealth/components/lib/Card'
import '@nordhealth/components/lib/Checkbox'

const terms = useTemplateRef<HTMLInputElement>('terms')
const subscription = useTemplateRef<HTMLInputElement>('subscription')

const { signup } = useUserStore()
const router = useRouter()
const serverError = ref('')

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
  // TODO: verify

  try {
    const result = await signup({ ...form.value })

    if (result.success) {
      router.push('/success')
    }
    else {
      serverError.value = result.error
    }
  }
  catch {
    serverError.value = 'An unexpected error occurred'
  }
}
</script>

<template>
  <nord-stack class="form-container">
    <Transition>
      <nord-banner v-if="!!serverError" class="form-banner" shadow variant="danger">
        {{ serverError }}
      </nord-banner>
    </Transition>
    <nord-card padding="l">
      <h1 slot="header">
        Create an account
      </h1>
      <form @submit.prevent="handleSubmit">
        <nord-stack>
          <EmailInput v-model="form.email" />
          <PasswordInput v-model="form.password" />

          <nord-checkbox
            id="terms" ref="terms" label="I accept terms of service" required error=""
            @change="() => { form.terms = !!terms?.checked }"
          />
          <nord-checkbox
            id="subscription" ref="subscription"
            label="Opt in to receive occasional product updates and announcements"
            @change="() => { form.subscription = !!subscription?.checked }"
          />

          <nord-button type="submit" expand variant="primary">
            Sign Up
          </nord-button>
        </nord-stack>
      </form>
    </nord-card>
  </nord-stack>
</template>

<style>
.form-container {
  max-inline-size: 340px;
  margin: var(--n-space-xl) auto;
}
.form-banner {
  transform: translateY(0);
  transform-origin: center top;
}

.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
