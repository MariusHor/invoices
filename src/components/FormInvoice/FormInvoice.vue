<script setup>
import { ref, computed } from 'vue'
import { Form } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { FormField, DatePicker } from '@/components/_UI'
import FormItems from './FormItems/FormItems.vue'
import { SectionLayout } from '@/components'
import FormActions from './FormActions/FormActions.vue'
import DropdownForm from './DropdownForm/DropdownForm.vue'
import { INVOICE_STATUS_OPTIONS, FORM_INITIAL_DATA, INVOICE_CURRENCY_OPTIONS } from '@/helpers'
import { invoiceValidationSchema } from '@/schemas'

const { isEditing, formValues, wasDraft } = defineProps({
  formValues: {
    type: Object,
    default: FORM_INITIAL_DATA
  },
  isEditing: {
    type: Boolean,
    default: false
  },
  wasDraft: {
    type: Boolean,
    default: false
  }
})

const isDraft = ref(false)
const schema = computed(() => (isDraft.value ? {} : invoiceValidationSchema))

const router = useRouter()
const store = useStore()

function formSubmitHandler(values) {
  if (isDraft.value) {
    store.commit('invoices/addInvoice', { ...values, status: 'Draft' })
  }

  if (!isEditing && !isDraft.value) {
    store.commit('invoices/addInvoice', values)
  }

  if (isEditing && !isDraft.value) {
    store.commit('invoices/editInvoice', { values, id: formValues.id, wasDraft })
  }

  router.push({ path: '/' })
}
</script>

<template>
  <Form
    class="form"
    @submit="
      (values) => {
        isDraft = false
        formSubmitHandler(values)
      }
    "
    :validation-schema="schema"
    :initial-values="formValues"
    v-slot="{ handleSubmit }"
  >
    <div class="form__left-pane">
      <SectionLayout :header-text="'Detalii client'" :hasColGroup="true">
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
      </SectionLayout>
      <SectionLayout :header-text="'Articole'">
        <template #end>
          <FormItems />
        </template>
      </SectionLayout>
    </div>
    <div class="form__right-pane flex-column">
      <SectionLayout :header-text="'Detalii factura'" :hasColGroup="true">
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
          <DatePicker :dateValue="formValues.date" />
          <FormField
            :is-text-area="true"
            :name="'description'"
            :id="'description'"
            :label="'Descriere'"
          />
        </template>
      </SectionLayout>
      <FormActions
        :is-editing="isEditing"
        @save-draft="
          () => {
            isDraft = true
            handleSubmit((values) => formSubmitHandler(values))
          }
        "
      />
    </div>
  </Form>
</template>

<style scoped lang="sass">
.form
    display: flex
    flex-direction: column
    gap: 2rem
    height: 100%
    max-width: 450px
    width: 100%
    margin: 0 auto
    @media screen and (min-width: 840px)
      display: grid
      grid-template-columns: 5fr 2fr
      max-width: none

    &__left-pane
        gap: 1rem
        display: grid
        @media screen and (min-width: 840px)
          grid-template-rows: 1fr 2fr

    &__right-pane
        justify-content: space-between
</style>
