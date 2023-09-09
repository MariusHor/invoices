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
  <div class="invoice__actions flex-column">
    <ButtonIcon
      :text="'Editeaza'"
      :variant="'light-md'"
      :width="'full'"
      @handleClick="$router.push({ path: `/${id}/edit` })"
    />
    <ButtonIcon
      :text="'Sterge'"
      :variant="'dark-md'"
      :width="'full'"
      @handleClick="showModal = true"
    />
  </div>
  <ModalConfirmation
    :isActive="showModal"
    @close-modal="showModal = false"
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
  </ModalConfirmation>
</template>

<style scoped lang="sass">
.invoice__actions
    gap: 1rem
</style>
