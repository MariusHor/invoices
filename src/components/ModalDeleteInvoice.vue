<script setup>
import { ModalGeneric } from './_UI'

defineProps({
  showModal: {
    type: Boolean,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

defineEmits(['close-modal'])
</script>

<template>
  <ModalGeneric
    :isActive="showModal"
    @close-modal="$emit('close-modal')"
    @confirm-action="
      () => {
        $store.commit('invoices/removeInvoice', id)
        $router.push({ path: '/' })
      }
    "
  >
    <template #body>
      <p>Factura va fi stearsa</p>
    </template>
  </ModalGeneric>
</template>
