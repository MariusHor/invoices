<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { ButtonIcon } from './_UI'
import { ModalNavigateBack } from './'

defineProps({
  shouldDisplayModal: {
    type: Boolean,
    default: false
  }
})

const showModal = ref(false)
</script>

<template>
  <ButtonIcon
    @handleClick="shouldDisplayModal ? (showModal = true) : $router.back()"
    :text="'Inapoi'"
  >
    <template #start>
      <Icon icon="formkit:arrowleft" width="24" />
    </template>
  </ButtonIcon>
  <ModalNavigateBack :show-modal="showModal" @close-modal="showModal = false" />
</template>
