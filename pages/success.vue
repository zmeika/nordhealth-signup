<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

// Redirect if the user lands here without signing up
if (!user.value) {
  await navigateTo('/signup', { replace: true })
}
</script>

<template>
  <div v-if="user" class="n-typeset n-padding-l">
    <h1 slot="header">
      Success
    </h1>
    <p v-if="user.subscription">
      You have subscribed to receive occasional product updates and announcements to
      {{ user.email }}
    </p>
    <p v-else>
      You haven't subscribed to receive occasional product updates and announcements. We won't bother you.
    </p>
  </div>
</template>
