<script setup>
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import { FormField, IconButton } from './UI'

const schema = Yup.object().shape({
  firstName: Yup.string().required('Prenumele este obligatoriu'),
  lastName: Yup.string().required('Numele este obligatoriu'),
  email: Yup.string().email().required('Emailul este obligatoriu')
})
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit" class="form">
    <div>
      <h2>Detalii client</h2>
      <div class="form__client-name">
        <FormField :name="'firstName'" :label="'Prenume'" />
        <FormField :name="'lastName'" :label="'Nume'" />
      </div>
      <FormField :name="'email'" :label="'Email'" :type="'email'" />
    </div>
    <div>
      <IconButton :text="'Salveaza'" :variant="'dark'" />
    </div>
  </Form>
</template>

<style scoped lang="sass">
.form
    display: grid
    grid-template-columns: 3fr 2fr
    &__client-name
        display: flex
        gap: 1rem
</style>
