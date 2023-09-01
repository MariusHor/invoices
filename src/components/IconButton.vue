<script setup>
import { computed } from 'vue'
const { text, variant } = defineProps({
  text: String,
  variant: String
})

const variantClass = computed(() => `button--${variant}`)
</script>

<template>
  <button class="button" :class="variantClass">
    <slot name="start"></slot>
    {{ text }}
    <slot name="end"></slot>
  </button>
</template>

<style scoped lang="sass">
.button
    border-radius: 3px
    padding: 0.5rem 1rem
    display: flex
    align-items: center

    &--light
        border: solid 1px var(--clr-light-grey)
        background: none

    &--dark
        border: solid 1px var(--clr-black)
        background: var(--clr-black)
        color: white
</style>
