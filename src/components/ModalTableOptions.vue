<script setup>
import DropdownSorting from './DropdownSorting.vue'
import DropdownCurrency from './DropdownCurrency.vue'
import { ModalGeneric } from './_UI'

defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})

defineEmits(['close-modal'])
</script>

<template>
  <ModalGeneric :isActive="showModal" :show-footer="false" @close-modal="$emit('close-modal')">
    <template #body>
      <DropdownSorting :optClass="'max-w-10'" />
      <DropdownCurrency :optClass="'max-w-10'" />
    </template>
  </ModalGeneric>
</template>
