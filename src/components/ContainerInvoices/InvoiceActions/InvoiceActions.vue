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
  <ButtonIcon :text="'Vezi'" :variant="'light-sm'" :isLink="true" :to="`/${id}`" />
  <ButtonIcon :text="'Editeaza'" :variant="'light-sm'" :isLink="true" :to="`/${id}/edit`" />
  <ButtonIcon
    :text="'Sterge'"
    :variant="'light-sm'"
    @handleClick="() => $store.commit('invoices/removeInvoice', id)"
  />
</template>
