<script setup>
import { Field } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true
  },
  label: String,
  placeholder: String
})
</script>

<template>
  <Field v-slot="{ field }" :name="name">
    <label v-if="label" :for="name">{{ label }}</label>
    <textarea v-bind="field" :id="name" :placeholder="placeholder"></textarea>
  </Field>
</template>

<style scoped lang="sass">
textarea
    border-radius: 5px
    border: 2px solid transparent
    padding: 0.875rem
    outline: none
    width: 100%
    height: 10rem
    background-color: var(--clr-light-grey)
</style>
