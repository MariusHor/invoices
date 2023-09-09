<script setup>
import { ref } from 'vue'
import { ModalConfirmation } from '@/components'
import { ButtonIcon } from '@/components/_UI'

defineProps({
  id: {
    type: String,
    required: true
  }
})

const showModal = ref(false)
</script>

<template>
  <ButtonIcon :text="'Vezi'" :variant="'light-sm'" :isLink="true" :to="`/${id}`" />
  <ButtonIcon :text="'Editeaza'" :variant="'light-sm'" :isLink="true" :to="`/${id}/edit`" />
  <ButtonIcon :text="'Sterge'" :variant="'light-sm'" @handleClick="showModal = true" />
  <ModalConfirmation
    :isActive="showModal"
    @close-modal="showModal = false"
    @confirm-action="$store.commit('invoices/removeInvoice', id)"
  >
    <template #body>
      <p>Factura va fi stearsa</p>
    </template>
  </ModalConfirmation>
</template>
