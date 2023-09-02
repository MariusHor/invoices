<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { SelectDropdown } from './UI'
import { SORTING_OPTIONS } from '@/helpers'

const store = useStore()

const currentSortingOption = computed(() => store.state.invoices.currentSortingOption)

function commitSortingOption(option) {
  store.commit('invoices/setCurrentSortingOption', option)
}
</script>

<template>
  <SelectDropdown
    :options="SORTING_OPTIONS"
    :currentSelectedOption="currentSortingOption"
    @setCurrentSelectedOption="commitSortingOption"
  />
</template>
