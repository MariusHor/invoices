<script setup>
import { Icon } from '@iconify/vue'

import { DropdownGeneric } from './_UI'
import { SORTING_OPTIONS } from '@/utils'
import { useDropdownOption } from '@/composables'

const { currentOption, commitOption } = useDropdownOption(
  'invoices/setCurrentSortingOption',
  'currentSortingOption'
)
</script>

<template>
  <DropdownGeneric
    :isStatic="true"
    :options="SORTING_OPTIONS"
    :currentSelectedOption="currentOption"
    @setCurrentSelectedOption="commitOption"
  >
    <template #staticContent>
      <Icon icon="basil:sort-outline" width="28" />
      <span>{{ currentOption }}</span>
    </template>
  </DropdownGeneric>
</template>
