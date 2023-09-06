<script setup>
import { watch, onMounted } from 'vue'
import { useCurrencyInput } from 'vue-currency-input'
import { useField } from 'vee-validate'
import FormField from './FormField.vue'

const { name, options } = defineProps({
  value: {
    type: String,
    default: undefined
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  },
  options: Object
})

const { formattedValue, numberValue, inputRef, setValue } = useCurrencyInput(options)
const { errorMessage, handleChange, value } = useField(name)

onMounted(() => {
  setTimeout(() => {
    if (value.value && typeof value.value === 'number') {
      setValue(value.value)
    }
  }, 300)
})

watch(numberValue, (newValue) => {
  console.log(newValue)
  handleChange(newValue)
})
</script>

<template>
  <FormField
    :name="name"
    :id="id"
    :label="label"
    :errorMessageProp="errorMessage"
    :handlesCurrency="true"
  >
    <template #currencyInput>
      <input
        class="field__input"
        :name="name"
        :id="id"
        :value="formattedValue"
        :placeholder="placeholder"
        @input="handleChange"
        ref="inputRef"
      />
    </template>
  </FormField>
</template>
