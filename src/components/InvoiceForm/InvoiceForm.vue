<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { Icon } from '@iconify/vue'

import { FormField, FormTextarea, SelectDropdown } from '@/components/_UI'
import FormActions from './FormActions/FormActions.vue'
import DatePicker from '../DatePicker.vue'
import ButtonAdd from '../ButtonAdd.vue'
import { INVOICE_STATE_OPTIONS, INVOICE_UNITS } from '@/helpers'
import { invoiceValidationSchema } from '@/schemas'
import FormSection from './FormSection/FormSection.vue'

const items = ref(Array.from({ length: 1 }))
const currentInvoiceState = ref(INVOICE_STATE_OPTIONS[0])
</script>

<template>
  <Form
    :validation-schema="invoiceValidationSchema"
    class="form"
    @submit="() => console.log('submitted')"
  >
    <div class="form__left-pane flex-column">
      <FormSection :header-text="'Detalii client'">
        <template #colGroup>
          <FormField :name="'firstName'" :label="'Prenume'" />
          <FormField :name="'lastName'" :label="'Nume'" />
        </template>
        <template #end>
          <FormField :name="'email'" :label="'Email'" :type="'email'" />
        </template>
      </FormSection>
      <FormSection :header-text="'Articole'" :has-col-group="false">
        <template #end>
          <ul>
            <li v-for="(item, index) in items" :key="index" class="item">
              <button @click="items.pop()" :disabled="items.length === 1">
                <Icon icon="mdi:bin" width="24" />
              </button>
              <FormField :name="'item'" :label="'Articol'" />
              <div class="item__unit flex-column">
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
              <div class="item__total-price flex-column">
                <label>Total</label>
                <span>$0.00</span>
              </div>
            </li>
          </ul>
          <ButtonAdd
            :isLink="false"
            @handleClick="() => items.push(null)"
            :variant="'light'"
            :disabled="items.length === 3"
          />
        </template>
      </FormSection>
    </div>
    <div class="form__right-pane flex-column">
      <FormSection :header-text="'Detalii factura'">
        <template #colGroup>
          <FormField :name="'id'" :label="'Id'" :placeholder="'Ex: #VI2452'" />
          <DatePicker />
        </template>
        <template #end>
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
        </template>
      </FormSection>
      <FormActions />
    </div>
  </Form>
</template>

<style scoped lang="sass">
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

.item
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
