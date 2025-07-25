# Nordhealth Signup Page

## Task

Create a client-side only rendered Nuxt 3 application that allows people to sign up for a product. The form should contain fields for email and password, which should be required and show an error if no value is entered. The password field should have a way to make the password visible. The user should be able to choose to receive occasional product updates and announcements. Once signed up, they should be presented with a success page.

## Details

- Fields are validated using zod library on blur and before form submit.
- Store is added because user info is usually something needed across whole application, so it's better to keep it in one place. I use this data on success page. 
- Use __existing@example.com__ to get "already existing" error.

## Room for growth

- Got warning: Found 4 elements with non-unique id #input. Looks like id attribute is not passed through `<nord-input>` and `<nord-checkbox>` components.
- There is small issue with `<nord-input>` with button and error. When empty string (which is a falsy value) is passed as an error, custom button border is red while input border has default color. I explicitly set error to undefined as a workaround, but I believe fixes should be done inside component.
- As `<nord-checkbox>` uses native checked attribute, it doesn't work with v-model. Possible workaround is to create a wrapper component.
- Add a component that shows password strength, as well as validation rules for password.
- Add error.vue to customize error pages like 404
- Add unit and e2e tests
