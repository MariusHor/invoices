<script setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
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
  handlesCurrency: {
    type: Boolean,
    default: false
  },
  handlesDate: {
    type: Boolean,
    default: false
  },
  errorMessageProp: String
})

const name = toRef(props, 'name')

const {
  value: formValue,
  errorMessage,
  handleChange
} = useField(name, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div class="field" :class="{ 'has-error': !!errorMessage }">
    <label class="field__label" :for="id">{{ label }}</label>
    <input
      v-if="!handlesCurrency && !handlesDate"
      class="field__input"
      :name="name"
      :id="id"
      :type="type"
      :value="formValue"
      :placeholder="placeholder"
      @input="handleChange"
    />
    <slot v-if="handlesCurrency" name="currencyInput"></slot>
    <slot v-if="handlesDate" name="dateInput"></slot>
    <p class="field__error-message" v-show="errorMessageProp || errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="sass">
.field
  position: relative
  margin-bottom: 1.25rem
  width: 100%

  &__error-message
        position: absolute
        bottom: -1.5rem
        left: 0
        margin: 0
        font-size: 14px

  &__input
        border-radius: 5px
        border: 2px solid transparent
        padding: 0 0.875rem
        outline: none
        background-color: var(--clr-light-grey)
        height: 42px
        width: 100%

        &:focus
            border-color: var(--clr-dark-grey)

  &__label
    display: block
    margin-bottom: 4px
    width: 100%
</style>
