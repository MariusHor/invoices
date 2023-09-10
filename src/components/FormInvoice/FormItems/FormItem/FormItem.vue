<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { FormField, FormFieldCurrency } from '@/components/_UI'
import DropdownForm from '../../DropdownForm/DropdownForm.vue'
import { INVOICE_UNITS_OPTIONS } from '@/helpers'

const store = useStore()

const { fields, id } = defineProps({
  id: Number,
  name: String,
  fields: Array
})

defineEmits(['removeItem'])

const currency = computed(() => store.state.invoices.formCurrency)
const options = ref({ currency, autoDecimalDigits: true })
const itemTotal = computed(() =>
  typeof fields[id].value.price === 'number'
    ? fields[id].value.price * fields[id].value.quantity
    : 0
)
</script>

<template>
  <div class="fields">
    <FormField :id="`title_${id}`" :name="`${name}.title`" :placeholder="'Articol'" />
    <DropdownForm :name="`${name}.unit`" :options="INVOICE_UNITS_OPTIONS" />
    <FormFieldCurrency
      :id="`price_${id}`"
      :name="`${name}.price`"
      :placeholder="'Pret unitar'"
      :options="options"
    />
    <div class="col-wrapper">
      <FormField :id="`quantity_${id}`" :name="`${name}.quantity`" :type="'number'" :min="1" />
    </div>
    <span class="item__col"
      >{{ $store.state.invoices.formCurrency }} {{ itemTotal.toFixed(2) }}</span
    >
  </div>
  <button @click="$emit('removeItem')" :disabled="fields.length === 1" class="button item__col">
    <span>Sterge</span>
    <Icon icon="mdi:bin" width="24" />
  </button>
</template>

<style scoped lang="sass">
.fields
  display: flex
  flex-direction: column
  gap: 1rem
  width: 100%
  @media screen and (min-width: 840px)
    flex-direction: row
.button
  margin: 0 auto
  width: fit-content
  max-width: 200px
  border: solid 1px var(--clr-light-grey)
  border-radius: 5px
  padding: 0.5rem 1rem
  background: var(--clr-black)
  color: white
  order: 1
  gap: 0.5rem
  &:disabled
    opacity: 0.3
  @media screen and (min-width: 840px)
      order: initial

.item__col
  height: 42px
  display: flex
  align-items: center
  justify-content: center

.col-wrapper
  width: 100%
  max-width: 70px
</style>
