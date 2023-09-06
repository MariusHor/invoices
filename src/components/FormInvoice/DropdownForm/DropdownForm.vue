<script setup>
import { useField } from 'vee-validate'

import { DropdownGeneric } from '@/components/_UI'

const { name, initialValue, options } = defineProps({
  name: {
    type: String,
    required: true
  },
  initialValue: String,
  options: Array
})

const { handleChange, value } = useField(name, undefined, {
  initialValue: initialValue
})
</script>

<template>
  <DropdownGeneric
    :name="name"
    :opt-class="'max-w-9'"
    :options="options"
    :current-selected-option="value"
    @setCurrentSelectedOption="handleChange"
  />
</template>
