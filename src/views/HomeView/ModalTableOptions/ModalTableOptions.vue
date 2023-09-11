<script setup>
import { DropdownSorting, DropdownCurrency } from '@/components'
import { ModalGeneric } from '@/components/_UI'
import MaxInvSelect from '../MaxInvSelect/MaxInvSelect.vue'

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
      <DropdownSorting :optClass="'max-w-13'" />
      <DropdownCurrency :optClass="'max-w-9'" />
      <MaxInvSelect :max-inv-per-page="$store.state.invoices.maxInvPerPage" />
    </template>
  </ModalGeneric>
</template>
