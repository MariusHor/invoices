<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { SORTING_OPTIONS } from '@/helpers'
import { DROPDOWN_STATES } from '../helpers'

const target = ref(null)
const currentSortingValue = ref(SORTING_OPTIONS[0])
const currentDropdownState = ref(DROPDOWN_STATES[0])

const selectIconClass = computed(() => `select__icon--${currentDropdownState.value}`)

function handleSortingOption(option) {
  currentSortingValue.value = option
  currentDropdownState.value = DROPDOWN_STATES[0]
}

function handleCurrentState() {
  currentDropdownState.value =
    currentDropdownState.value === DROPDOWN_STATES[0] ? DROPDOWN_STATES[1] : DROPDOWN_STATES[0]
}

onClickOutside(target, () => (currentDropdownState.value = DROPDOWN_STATES[0]))
</script>

<template>
  <div ref="target">
    <button class="select" @click="handleCurrentState">
      {{ currentSortingValue }}
      <img
        src="/select-arrow.svg"
        width="16"
        height="16"
        alt=""
        class="select__icon"
        :class="selectIconClass"
      />
    </button>
    <ul v-if="currentDropdownState === DROPDOWN_STATES[1]" class="select__list">
      <li
        v-for="option in SORTING_OPTIONS"
        :key="option"
        :class="{ active: option === currentSortingValue }"
      >
        <button @click="handleSortingOption(option)">
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
.active
    background: var(--clr-light-grey)
.select
    position: relative
    background: transparent
    border: 1px solid var(--clr-light-grey)
    border-radius: 4px
    width: 100%
    max-width: 160px
    padding: 0.5rem 1rem
    display: flex
    justify-content: space-between
    font-weight: bold

    &__icon
      &--open
        transform: rotate(180deg)

    &__list
      margin-top: 0.5rem
      position: absolute
      border: 1px solid var(--clr-light-grey)
      border-radius: 4px
      width: 100%
      max-width: 160px

      li:not(:last-child)
        border-bottom: solid 1px var(--clr-light-grey)

      button
        width: 100%
        padding: 0.5rem 0
</style>
