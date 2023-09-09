<script setup>
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
  <ModalGeneric
    :isActive="showModal"
    @close-modal="$emit('close-modal')"
    @confirm-action="$router.back()"
  >
    <template #body>
      <p>Toate modificarile vor fi pierdute</p>
    </template>
  </ModalGeneric>
</template>
