<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Icon } from '@iconify/vue'

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
    :isStatic="true"
    :options="INVOICE_CURRENCY_OPTIONS"
    :currentSelectedOption="currentCurrencyOption"
    @setCurrentSelectedOption="commitSortingOption"
  >
    <template #staticContent>
      <div class="content">
        <Icon icon="bi:currency-exchange" width="28" />
        <span>{{ currentCurrencyOption }}</span>
      </div>
    </template>
  </DropdownGeneric>
</template>

<style lang="sass">
.content
  display: flex
  justify-content: center
  align-items: center
  gap: 1rem
</style>
