<script setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

import { FormField } from '@/components/_UI'
import FormFieldCurrency from '../../../_UI/FormFieldCurrency.vue'
import DropdownForm from '../../DropdownForm/DropdownForm.vue'
import { INVOICE_UNITS_OPTIONS, DEFAULT_CURRENCY } from '@/helpers'

const { fields, id } = defineProps({
  id: Number,
  name: String,
  fields: Array
})

defineEmits(['removeItem'])

const itemTotal = computed(() => fields[id].value.price * fields[id].value.quantity ?? 0)
</script>

<template>
  <li class="item">
    <button @click="$emit('removeItem')" :disabled="fields.length === 1">
      <Icon icon="mdi:bin" width="24" />
    </button>
    <FormField :id="`description_${id}`" :name="`${name}.description`" :label="'Articol'" />
    <div class="item__unit flex-column">
      <label>Unitate</label>
      <DropdownForm :name="`${name}.unit`" :options="INVOICE_UNITS_OPTIONS" />
    </div>
    <FormFieldCurrency
      :id="`price_${id}`"
      :name="`${name}.price`"
      :label="'Pret unitar'"
      :options="{ currency: 'USD' }"
    />
    <FormField
      :id="`quantity_${id}`"
      :name="`${name}.quantity`"
      :label="'Cantitate'"
      :type="'number'"
    />
    <div class="item__total-price flex-column">
      <label>Total</label>
      <span>{{ DEFAULT_CURRENCY }}{{ itemTotal }}</span>
    </div>
  </li>
</template>

<style scoped lang="sass">
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
