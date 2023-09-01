<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

const selectOptions = ['Cele mai noi', 'Cele mai vechi', 'Suma mai mare', 'Suma mai mica']
const selectStates = ['closed', 'open']

const target = ref(null)
const selectedValue = ref(selectOptions[0])
const currentSelectState = ref(selectStates[0])

const selectIconClass = computed(() => `select__icon--${currentSelectState.value}`)

function handleSelectOption(option) {
  selectedValue.value = option
  currentSelectState.value = selectStates[0]
}

function handleCurrentState() {
  currentSelectState.value =
    currentSelectState.value === selectStates[0] ? selectStates[1] : selectStates[0]
}

onClickOutside(target, () => (currentSelectState.value = selectStates[0]))
</script>

<template>
  <div ref="target">
    <button class="select" @click="handleCurrentState">
      {{ selectedValue }}
      <img
        src="/select-arrow.svg"
        width="16"
        height="16"
        alt=""
        class="select__icon"
        :class="selectIconClass"
      />
    </button>
    <ul v-if="currentSelectState === selectStates[1]" class="select__list">
      <li
        v-for="option in selectOptions"
        :key="option"
        :class="{ active: option === selectedValue }"
      >
        <button @click="handleSelectOption(option)">
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
