<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { DROPDOWN_STATES } from '@/helpers'

const { options, currentSelectedOption } = defineProps({
  name: String,
  options: Array,
  currentSelectedOption: String,
  optClass: String,
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['setCurrentSelectedOption'])

const target = ref(null)
const currentDropdownState = ref(DROPDOWN_STATES[0])

const selectIconClass = computed(() => `select__icon--${currentDropdownState.value}`)

function selectCurrentValue(option) {
  emit('setCurrentSelectedOption', option)
  currentDropdownState.value = DROPDOWN_STATES[0]
}

function handleCurrentState() {
  currentDropdownState.value =
    currentDropdownState.value === DROPDOWN_STATES[0] ? DROPDOWN_STATES[1] : DROPDOWN_STATES[0]
}

onClickOutside(target, () => (currentDropdownState.value = DROPDOWN_STATES[0]))
</script>

<template>
  <div ref="target" class="select" :class="optClass">
    <input
      readonly
      class="select__input"
      @click="handleCurrentState"
      :value="currentSelectedOption"
      :name="name"
      :disabled="disabled"
    />
    <img
      src="/select-arrow.svg"
      width="16"
      height="16"
      alt=""
      class="select__icon"
      :class="selectIconClass"
    />
    <ul v-if="currentDropdownState === DROPDOWN_STATES[1]" class="select__list">
      <li
        v-for="option in options"
        :key="option"
        :class="{ active: option === currentSelectedOption }"
      >
        <button @click="selectCurrentValue(option)">
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
.select
  width: 100%
  height: fit-content
  position: relative
  &__input
      position: relative
      background: transparent
      border: 1px solid var(--clr-light-grey)
      border-radius: 4px
      width: 100%
      height: 42px
      padding: 0 1rem
      display: flex
      justify-content: space-between
      align-items: center
      font-weight: bold
      cursor: pointer
      caret-color: transparent

  &__icon
    position: absolute
    top: 50%
    translate: 0 -50%
    right: 1rem
    pointer-events: none

    &--open
      transform: rotate(180deg)

  &__list
    background: var(--clr-white)
    margin-top: 0.5rem
    position: absolute
    border: 1px solid var(--clr-light-grey)
    border-radius: 4px
    width: 100%
    z-index: 1

    li:not(:last-child)
      border-bottom: solid 1px var(--clr-light-grey)

    button
      width: 100%
      height: 42px
</style>
