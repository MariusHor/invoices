<script setup>
import { Form } from 'vee-validate'

import { FormField, FormTextarea, DatePicker } from '@/components/_UI'
import DropdownInvoiceState from './DropdownInvoiceState/DropdownInvoiceState.vue'
import FormInvoiceItems from './FormInvoiceItems/FormInvoiceItems.vue'
import FormSection from './FormSection/FormSection.vue'
import FormActions from './FormActions/FormActions.vue'
import { invoiceValidationSchema } from '@/schemas'
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
          <FormInvoiceItems />
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
            <DropdownInvoiceState />
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
</style>
