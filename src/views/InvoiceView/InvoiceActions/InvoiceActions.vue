<script setup>
import { ButtonIcon } from '@/components/_UI'

defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="invoice__actions flex-column">
    <ButtonIcon
      :text="'Editeaza'"
      :variant="'light-md'"
      :width="'full'"
      @handleClick="
        () => {
          $router.push({ path: `/${id}/edit` })
        }
      "
    />
    <ButtonIcon
      :text="'Sterge'"
      :variant="'dark-md'"
      :width="'full'"
      @handleClick="
        () => {
          $store.commit('invoices/removeInvoice', id)
          $router.push({ path: '/' })
        }
      "
    />
  </div>
</template>

<style scoped lang="sass">
.invoice__actions
    gap: 1rem
</style>
