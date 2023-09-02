<script setup>
import { computed } from 'vue'
const { text, variant, isLink, to } = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'light'
  },
  isLink: {
    type: Boolean,
    default: false
  },
  to: String
})

const variantClass = computed(() => `button--${variant}`)
</script>

<template>
  <button v-if="!isLink" class="button" :class="variantClass">
    <slot name="start"></slot>
    {{ text }}
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
    padding: 0.5rem 1rem
    display: flex
    align-items: center
    gap: 0.5rem

    &--light
        border: solid 1px var(--clr-light-grey)
        background: none

    &--dark
        border: solid 1px var(--clr-black)
        background: var(--clr-black)
        color: white
</style>
