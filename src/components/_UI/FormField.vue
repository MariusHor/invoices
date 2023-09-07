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
  placeholder: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  handlesCurrency: {
    type: Boolean,
    default: false
  },
  handlesDate: {
    type: Boolean,
    default: false
  },
  isTextArea: {
    type: Boolean,
    default: false
  },
  min: Number,
  label: String,
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
      v-if="!handlesCurrency && !handlesDate && !isTextArea"
      class="field__input"
      :name="name"
      :id="id"
      :type="type"
      :value="formValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :min="min"
      @input="handleChange"
    />
    <textarea
      v-if="isTextArea"
      :id="name"
      :placeholder="placeholder"
      @input="handleChange"
    ></textarea>
    <slot v-if="handlesCurrency" name="currencyInput"></slot>
    <slot v-if="handlesDate" name="dateInput"></slot>
    <p class="field__error-message" v-show="errorMessageProp || errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="sass">
textarea
  position: relative
  border-radius: 5px
  border: 2px solid transparent
  padding: 0.875rem
  outline: none
  width: 100%
  height: 10rem
  background-color: var(--clr-light-grey)

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
    width: 100%
</style>
