<script setup>
import { Form } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { FormField, DatePicker } from '@/components/_UI'
import FormItems from './FormItems/FormItems.vue'
import FormSection from './FormSection/FormSection.vue'
import FormActions from './FormActions/FormActions.vue'
import DropdownForm from './DropdownForm/DropdownForm.vue'
import { INVOICE_STATUS_OPTIONS, FORM_INITIAL_DATA, INVOICE_CURRENCY_OPTIONS } from '@/helpers'
import { invoiceValidationSchema } from '@/schemas'

const { isEditing, formValues } = defineProps({
  formValues: {
    type: Object,
    default: FORM_INITIAL_DATA
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const store = useStore()

function submitForm(values) {
  if (!isEditing) {
    store.commit('invoices/addInvoice', values)
  }

  if (isEditing) {
    store.commit('invoices/editInvoice', { values, id: formValues.id })
  }

  router.push({ path: '/' })
}
</script>

<template>
  <Form
    :validation-schema="invoiceValidationSchema"
    :initial-values="formValues"
    class="form"
    @submit="submitForm"
  >
    <div class="form__left-pane">
      <FormSection :header-text="'Detalii client'">
        <template #colGroup>
          <FormField :name="'client.firstName'" :label="'Prenume'" id="firstName" />
          <FormField :name="'client.lastName'" :label="'Nume'" id="lastName" />
        </template>
        <template #end>
          <div class="col-group">
            <FormField :name="'client.email'" :label="'Email'" :type="'email'" id="email" />
            <FormField :name="'client.phone'" :label="'Telefon'" :type="'phone'" id="phone" />
          </div>
        </template>
      </FormSection>
      <FormSection :header-text="'Articole'" :has-col-group="false">
        <template #end>
          <FormItems />
        </template>
      </FormSection>
    </div>
    <div class="form__right-pane flex-column">
      <FormSection :header-text="'Detalii factura'">
        <template #colGroup>
          <DropdownForm
            :label="'Status'"
            :name="'status'"
            :initial-value="INVOICE_STATUS_OPTIONS[0]"
            :options="INVOICE_STATUS_OPTIONS"
          />
          <DropdownForm
            :label="'Moneda'"
            :name="'currency'"
            :initial-value="$store.state.invoices.formCurrency"
            :options="INVOICE_CURRENCY_OPTIONS"
            :change-callback="(value) => $store.commit('invoices/setFormCurrency', value)"
          />
        </template>
        <template #end>
          <DatePicker />
          <FormField
            :is-text-area="true"
            :name="'description'"
            :id="'description'"
            :label="'Descriere'"
          />
        </template>
      </FormSection>
      <FormActions :is-editing="isEditing" />
    </div>
  </Form>
</template>

<style scoped lang="sass">
.form
    display: grid
    grid-template-columns: 5fr 2fr
    gap: 2rem
    height: 100%
    max-height: 37.25rem

    &__left-pane
        gap: 1rem
        display: grid
        grid-template-rows: 1fr 2fr

    &__right-pane
        justify-content: space-between
</style>
