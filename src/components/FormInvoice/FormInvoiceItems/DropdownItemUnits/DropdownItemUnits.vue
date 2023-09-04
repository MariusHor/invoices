<script setup>
import { ref } from 'vue'

import { DropdownGeneric } from '@/components/_UI'
import { INVOICE_UNITS } from '@/helpers'

const currentItemUnit = ref(INVOICE_UNITS[0])
</script>

<template>
  <DropdownGeneric
    :opt-class="'max-w-9'"
    :options="INVOICE_UNITS"
    :current-selected-option="currentItemUnit"
    @setCurrentSelectedOption="(option) => (currentItemUnit = option)"
  />
</template>
