// Just mocks
export default defineEventHandler(async (event) => {
  // Disabling eslint error for mock purposes
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { email, password, terms, subscription } = await readBody(event)

  if (email === 'existing@example.com') {
    throw createError({
      statusCode: 400,
      message: 'Email already registered',
    })
  }

  return {
    user: {
      email,
      terms,
      subscription,
    },
  }
})
