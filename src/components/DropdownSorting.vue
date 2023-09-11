<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Icon } from '@iconify/vue'

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
    :isStatic="true"
    :options="SORTING_OPTIONS"
    :currentSelectedOption="currentSortingOption"
    @setCurrentSelectedOption="commitSortingOption"
  >
    <template #staticContent>
      <div class="content">
        <Icon icon="basil:sort-outline" width="28" />
        <span>{{ currentSortingOption }}</span>
      </div>
    </template>
  </DropdownGeneric>
</template>
