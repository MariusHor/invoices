<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { FormField, FormFieldCurrency, ButtonIcon } from '@/components/_UI'
import DropdownForm from '../../DropdownForm/DropdownForm.vue'
import { INVOICE_UNITS_OPTIONS } from '@/utils'

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
  <ButtonIcon
    :text="'Sterge'"
    :variant="'dark-md'"
    @handle-click="$emit('removeItem')"
    :disabled="fields.length === 1"
  >
    <template #start>
      <Icon icon="mdi:bin" width="24" />
    </template>
  </ButtonIcon>
</template>

<style scoped lang="sass">
.fields
  display: flex
  flex-direction: column
  gap: 1rem
  width: 100%
  @media screen and (min-width: 840px)
    flex-direction: row

.item__col
  height: 42px
  display: flex
  align-items: center
  justify-content: center

.col-wrapper
  width: 100%
  max-width: 70px
</style>
