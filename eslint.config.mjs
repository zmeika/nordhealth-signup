// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    'no-console': 'warn',
  },
})
