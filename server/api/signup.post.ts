// Just mocks
export default defineEventHandler(async (event) => {
  const { email, terms, subscription } = await readBody(event)

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
