<script setup>
import { ref } from 'vue'
import { ModalDeleteInvoice } from '@/components'
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
  <ModalDeleteInvoice @close-modal="showModal = false" :showModal="showModal" :id="id" />
</template>

<style scoped lang="sass">
.invoice__actions
    gap: 1rem
</style>
