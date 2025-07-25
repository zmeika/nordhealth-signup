# Nordhealth Signup Page

## Task

Create a client-side only rendered Nuxt 3 application that allows people to sign up for a product. The form should contain fields for email and password, which should be required and show an error if no value is entered. The password field should have a way to make the password visible. The user should be able to choose to receive occasional product updates and announcements. Once signed up, they should be presented with a success page.

## Room for growth
- Got warning: Found 4 elements with non-unique id #input. Looks like id attribute is not passed through <nord-input> and <nord-checkbox> components.
- As <nord-checkbox> uses native checked attribute, it doesn't work with v-model. The workaround is to create a wrapper component.
