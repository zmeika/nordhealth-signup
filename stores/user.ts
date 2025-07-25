import { defineStore } from 'pinia'

interface UserInfo {
  email: string
  terms: boolean
  subscription: boolean
}

interface UserFormData extends UserInfo {
  password: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<UserInfo | null>(null)

  const signup = async (formData: UserFormData) => {
    try {
      const response = await $fetch<{ user: UserInfo }>('/api/signup', {
        method: 'POST',
        body: formData,
      })

      user.value = response.user

      return { success: true }
    }
    catch (error: any) {
      return {
        success: false,
        error: error.data?.message || 'Signup failed',
      }
    }
  }

  return { user, signup }
})
