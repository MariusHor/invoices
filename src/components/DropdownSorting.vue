<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { DropdownGeneric } from './_UI'
import { SORTING_OPTIONS } from '@/helpers'

const store = useStore()

const currentSortingOption = computed(() => store.state.invoices.currentSortingOption)

function commitSortingOption(option) {
  store.commit('invoices/setCurrentSortingOption', option)
}
</script>

<template>
  <DropdownGeneric
    :options="SORTING_OPTIONS"
    :currentSelectedOption="currentSortingOption"
    @setCurrentSelectedOption="commitSortingOption"
  />
</template>
