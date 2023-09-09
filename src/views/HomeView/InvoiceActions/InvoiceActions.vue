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
  <ButtonIcon :text="'Vezi'" :variant="'light-sm'" :isLink="true" :to="`/${id}`" />
  <ButtonIcon :text="'Editeaza'" :variant="'light-sm'" :isLink="true" :to="`/${id}/edit`" />
  <ButtonIcon :text="'Sterge'" :variant="'light-sm'" @handleClick="showModal = true" />
  <ModalDeleteInvoice @close-modal="showModal = false" :showModal="showModal" :id="id" />
</template>
