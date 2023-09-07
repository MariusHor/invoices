<script setup>
import { Form } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { FormField, FormTextarea, DatePicker } from '@/components/_UI'
import FormItems from './FormItems/FormItems.vue'
import FormSection from './FormSection/FormSection.vue'
import FormActions from './FormActions/FormActions.vue'
import { invoiceValidationSchema } from '@/schemas'
import { INVOICE_STATUS_OPTIONS, FORM_INITIAL_DATA } from '@/helpers'
import DropdownForm from './DropdownForm/DropdownForm.vue'

const { isEditing } = defineProps({
  initialValues: {
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
    router.push({ path: '/' })
  }

  if (isEditing) {
    console.log(values)
    // store.commit('invoices/editInvoice', values)
  }
}
</script>

<template>
  <Form
    :validation-schema="invoiceValidationSchema"
    :initial-values="FORM_INITIAL_DATA"
    class="form"
    @submit="submitForm"
  >
    <div class="form__left-pane flex-column">
      <FormSection :header-text="'Detalii client'">
        <template #colGroup>
          <FormField :name="'client.firstName'" :label="'Prenume'" id="firstName" />
          <FormField :name="'client.lastName'" :label="'Nume'" id="lastName" />
        </template>
        <template #end>
          <FormField :name="'client.email'" :label="'Email'" :type="'email'" id="email" />
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
          <FormField :name="'id'" :label="'Id'" id="invoiceId" />
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
            <DropdownForm
              :name="'status'"
              :initial-value="INVOICE_STATUS_OPTIONS[0]"
              :options="INVOICE_STATUS_OPTIONS"
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
</style>
