<script setup>
import { useField } from 'vee-validate'

import { DropdownGeneric } from '@/components/_UI'

const { name, initialValue, options } = defineProps({
  name: {
    type: String,
    required: true
  },
  label: String,
  initialValue: String,
  options: Array,
  changeCallback: Function
})

const { handleChange, value } = useField(name, undefined, {
  initialValue: initialValue
})
</script>

<template>
  <div class="flex-column dropdown-wrapper">
    <label v-if="label">{{ label }}</label>
    <DropdownGeneric
      :name="name"
      :options="options"
      :current-selected-option="value"
      @setCurrentSelectedOption="
        (value) => {
          if (changeCallback) changeCallback(value)
          handleChange(value)
        }
      "
    />
  </div>
</template>

<style scoped lang="sass">
.dropdown-wrapper
  margin-bottom: 1.25rem
  width: 100%
</style>
