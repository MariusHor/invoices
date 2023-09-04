<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { Icon } from '@iconify/vue'

import { FormField, FormTextarea, SelectDropdown } from './UI'
import FormActions from './FormActions/FormActions.vue'
import DatePicker from './DatePicker.vue'
import ButtonAdd from './ButtonAdd.vue'
import { INVOICE_STATE_OPTIONS, INVOICE_UNITS } from '@/helpers'
import { invoiceValidationSchema } from '@/schemas'

const articles = ref(Array.from({ length: 1 }))
const currentInvoiceState = ref(INVOICE_STATE_OPTIONS[0])
</script>

<template>
  <Form
    :validation-schema="invoiceValidationSchema"
    class="form"
    @submit="() => console.log('submitted')"
  >
    <div class="form__left-pane flex-column">
      <div>
        <h2>Detalii client</h2>
        <div class="grid-group">
          <FormField :name="'firstName'" :label="'Prenume'" />
          <FormField :name="'lastName'" :label="'Nume'" />
        </div>
        <FormField :name="'email'" :label="'Email'" :type="'email'" />
      </div>
      <div>
        <h2>Articole</h2>
        <ul>
          <li v-for="(article, index) in articles" :key="index" class="article">
            <button @click="articles.pop()" :disabled="articles.length === 1">
              <Icon icon="mdi:bin" width="24" />
            </button>
            <FormField :name="'article'" :label="'Articol'" />
            <div class="article__unit flex-column">
              <label>Unitate</label>
              <SelectDropdown
                :opt-class="'max-w-9'"
                :options="INVOICE_UNITS"
                :current-selected-option="INVOICE_UNITS[0]"
                @setCurrentSelectedOption="(option) => (currentInvoiceState = option)"
              />
            </div>
            <FormField :name="'unit-price'" :label="'Pret unitar'" />
            <FormField :name="'quantity'" :label="'Cantitate'" />
            <div class="article__total-price flex-column">
              <label>Total</label>
              <span>$0.00</span>
            </div>
          </li>
        </ul>
        <ButtonAdd
          :isLink="false"
          @handleClick="() => articles.push(null)"
          :variant="'light'"
          :disabled="articles.length === 3"
        />
      </div>
    </div>
    <div class="form__right-pane flex-column">
      <div>
        <h2>Detalii factura</h2>
        <div class="grid-group">
          <FormField :name="'id'" :label="'Id'" :placeholder="'Ex: #VI2452'" />
          <DatePicker />
        </div>
        <div class="form__invoice-notes flex-column">
          <FormTextarea
            :name="'notes'"
            :label="'Note'"
            :placeholder="'Lasa o notita despre factura...'"
          />
        </div>
        <div class="form__invoice-status flex-column">
          <label>Status</label>
          <SelectDropdown
            :opt-class="'max-w-9'"
            :options="INVOICE_STATE_OPTIONS"
            :current-selected-option="currentInvoiceState"
            @setCurrentSelectedOption="(option) => (currentInvoiceState = option)"
          />
        </div>
      </div>
      <FormActions />
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
    max-height: 37.25rem

    &__left-pane
        gap: 2rem

    &__right-pane
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

.article
  display: flex
  gap: 1rem

  &__unit
    min-width: 78px

  &__total-price
    span
      height: 42px
      display: flex
      justify-content: center
      align-items: center
</style>
