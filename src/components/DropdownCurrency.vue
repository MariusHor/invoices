<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { DropdownGeneric } from './_UI'
import { INVOICE_CURRENCY_OPTIONS } from '@/helpers'

const store = useStore()

const currentCurrencyOption = computed(() => store.state.invoices.activeCurrency)

function commitSortingOption(option) {
  store.commit('invoices/setActiveCurrency', option)
}
</script>

<template>
  <DropdownGeneric
    :options="INVOICE_CURRENCY_OPTIONS"
    :currentSelectedOption="currentCurrencyOption"
    @setCurrentSelectedOption="commitSortingOption"
  />
</template>
