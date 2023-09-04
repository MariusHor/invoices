<script setup>
import { ref } from 'vue'

import { DropdownGeneric } from '@/components/_UI'
import { INVOICE_STATE_OPTIONS } from '@/helpers'

const currentInvoiceState = ref(INVOICE_STATE_OPTIONS[0])
</script>

<template>
  <DropdownGeneric
    :opt-class="'max-w-9'"
    :options="INVOICE_STATE_OPTIONS"
    :current-selected-option="currentInvoiceState"
    @setCurrentSelectedOption="(option) => (currentInvoiceState = option)"
  />
</template>
