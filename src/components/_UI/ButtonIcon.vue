<script setup>
import { computed } from 'vue'
const { text, variant, isLink, to, width, type } = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'light-md'
  },
  width: {
    type: String,
    default: 'fit'
  },
  isLink: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  to: String
})

const emit = defineEmits(['handleClick'])

const variantClass = computed(() => `button--${variant} ${width}`)
</script>

<template>
  <button
    v-if="!isLink"
    class="button"
    :class="variantClass"
    :type="type"
    :disabled="disabled"
    @click="emit('handleClick')"
  >
    <slot name="start"></slot>
    <span>{{ text }}</span>
    <slot name="end"></slot>
  </button>
  <router-link v-if="isLink" class="button" :class="variantClass" :to="to">
    <slot name="start"></slot>
    {{ text }}
    <slot name="end"></slot>
  </router-link>
</template>

<style scoped lang="sass">
.button
    border-radius: 3px
    display: flex
    align-items: center
    gap: 0.5rem
    justify-content: center

    &--light-md, &--dark-md
        padding: 0.5rem 1rem

    &--light-sm, &--dark-sm
        padding: 0.25rem 0.875rem

    &--light-sm, &--light-md
        border: solid 1px var(--clr-light-grey)
        background: none

    &--dark-sm, &--dark-md
        border: solid 1px var(--clr-black)
        background: var(--clr-black)
        color: white

    &.fit
      width: fit-content

    &.full
      width: 100%
</style>
