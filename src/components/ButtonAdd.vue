<script setup>
import { Icon } from '@iconify/vue'
import { ButtonIcon } from './_UI'

defineProps({
  variant: {
    type: String,
    default: 'dark'
  },
  isLink: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['handleClick'])
</script>

<template>
  <ButtonIcon
    :text="'Adauga'"
    :variant="variant"
    :isLink="isLink"
    :to="'/create'"
    :disabled="disabled"
    @handleClick="emit('handleClick')"
  >
    <template #start>
      <Icon icon="octicon:plus-16" width="24" />
    </template>
  </ButtonIcon>
</template>
