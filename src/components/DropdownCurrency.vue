<script setup>
import { Icon } from '@iconify/vue'

import { DropdownGeneric } from './_UI'
import { INVOICE_CURRENCY_OPTIONS } from '@/utils'
import { useDropdownOption } from '@/composables'

const { currentOption, commitOption } = useDropdownOption(
  'invoices/setActiveCurrency',
  'activeCurrency'
)
</script>

<template>
  <DropdownGeneric
    :isStatic="true"
    :options="INVOICE_CURRENCY_OPTIONS"
    :currentSelectedOption="currentOption"
    @setCurrentSelectedOption="commitOption"
  >
    <template #staticContent>
      <Icon icon="bi:currency-exchange" width="28" />
      <span>{{ currentOption }}</span>
    </template>
  </DropdownGeneric>
</template>
