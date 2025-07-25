<script setup lang="ts">
import { computed } from 'vue'
import * as z from 'zod'
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
const serverError = ref('')

interface SignUpForm {
  email: string
  password: string
  terms: boolean
  subscription: boolean
}

const fieldSchemas = {
  email: z.email({
    error: iss => iss.input === '' ? 'This field is required.' : 'Please, enter valid email address.',
  }),
  password: z.string().min(8, { error: iss => iss.input === '' ? 'This field is required.' : 'Too short!' }).max(30, { error: 'Too long!' }),
  terms: z.literal(true, { error: 'This field is required' }),
  subscription: z.boolean().optional(),
}

const form = ref<SignUpForm>({
  email: '',
  password: '',
  terms: false,
  subscription: false,
})

const formErrors = ref<Record<keyof SignUpForm, string>>({
  email: '',
  password: '',
  terms: '',
  subscription: '',
})

function validateInput(inputName: keyof SignUpForm) {
  const result = fieldSchemas[inputName].safeParse(form.value[inputName])

  if (!result.success) {
    formErrors.value[inputName] = result.error.issues[0].message
  }
}

function resetError(inputName: keyof SignUpForm) {
  formErrors.value[inputName] = ''
}

const isFormValid = computed(() => {
  return !!form.value.email && !Object.keys(formErrors.value).some(field => formErrors.value[field as keyof SignUpForm] !== '')
})

async function handleSubmit() {
  Object.keys(form.value).forEach(field => validateInput(field as keyof SignUpForm))

  if (!isFormValid.value)
    return

  try {
    const result = await signup({ ...form.value })

    if (result.success) {
      navigateTo('/success')
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
          <EmailInput
            v-model="form.email" :error="formErrors.email" @input="resetError('email')"
            @blur="validateInput('email')"
          />
          <PasswordInput
            v-model="form.password" :error="formErrors.password || undefined" @input="resetError('password')"
            @blur="validateInput('password')"
          />

          <nord-checkbox
            id="terms" ref="terms" label="I accept terms of service" required :error="formErrors.terms"
            @change="() => { resetError('terms'); form.terms = !!terms?.checked; console.log(form.terms); validateInput('terms'); }"
          />

          <nord-checkbox
            id="subscription" ref="subscription"
            label="Opt in to receive occasional product updates and announcements" :error="formErrors.subscription"
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

<style scoped>
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
