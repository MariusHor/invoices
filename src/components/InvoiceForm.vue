<script setup>
import { ref } from 'vue'
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'
import { FormField, IconButton, SelectDropdown } from './UI'
import { INVOICE_STATE_OPTIONS } from '@/helpers'

const currentInvoiceState = ref(INVOICE_STATE_OPTIONS[0])

const schema = Yup.object().shape({
  firstName: Yup.string().required('Prenumele este obligatoriu'),
  lastName: Yup.string().required('Numele este obligatoriu'),
  email: Yup.string().email().required('Emailul este obligatoriu'),
  id: Yup.string().required('Id-ul este obligatoriu'),
  notes: Yup.string()
})
</script>

<template>
  <Form :validation-schema="schema" class="form" @submit="() => console.log('submitted')">
    <div class="form__client-details">
      <h2>Detalii client</h2>
      <div class="grid-group">
        <FormField :name="'firstName'" :label="'Prenume'" />
        <FormField :name="'lastName'" :label="'Nume'" />
      </div>
      <FormField :name="'email'" :label="'Email'" :type="'email'" />
    </div>
    <div class="form__invoice-details flex-column">
      <div>
        <h2>Detalii factura</h2>
        <div class="grid-group">
          <FormField :name="'id'" :label="'Id'" :placeholder="'Ex: #VI2452'" />
          <FormField :name="'data'" :label="'Data'" />
        </div>
        <div class="form__invoice-notes flex-column">
          <Field v-slot="{ field }" name="notes">
            <label for="notes">Note</label>
            <textarea
              v-bind="field"
              id="notes"
              placeholder="Lasa o notita despre factura..."
            ></textarea>
          </Field>
        </div>
        <div class="form__invoice-status flex-column">
          <label>Status</label>
          <SelectDropdown
            :options="INVOICE_STATE_OPTIONS"
            :current-selected-option="currentInvoiceState"
            @setCurrentSelectedOption="(option) => (currentInvoiceState = option)"
          />
        </div>
      </div>
      <div class="form__actions flex-column">
        <div>
          <IconButton :text="'Draft'" :variant="'light'" :width="'full'" />
          <IconButton
            :text="'Renunta'"
            :variant="'light'"
            :width="'full'"
            @handleClick="$router.back()"
          />
        </div>
        <IconButton :text="'Salveaza'" :variant="'dark'" :width="'full'" :type="'submit'" />
      </div>
    </div>
  </Form>
</template>

<style scoped lang="sass">
textarea
    border-radius: 5px
    border: 2px solid transparent
    padding: 0.875rem
    outline: none
    width: 100%
    height: 10rem
    background-color: var(--clr-light-grey)

label
    margin-bottom: 4px

.grid-group
    display: flex
    gap: 1rem

.form
    display: grid
    grid-template-columns: 3fr 2fr
    gap: 2rem
    height: 100%
    max-height: 35rem

    &__invoice-details
        justify-content: space-between

    &__invoice-status
        max-width: 142px

    &__invoice-notes
        margin-bottom: 20px

    &__actions
        gap: 1rem

        div
            display: flex
            gap: 1rem
</style>
