<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { DROPDOWN_STATES } from '@/helpers'

const { options, currentSelectedOption } = defineProps({
  options: Array,
  currentSelectedOption: String
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
  <div ref="target">
    <button class="select" @click="handleCurrentState">
      {{ currentSelectedOption }}
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
.active
    background: var(--clr-light-grey)
.select
    position: relative
    background: transparent
    border: 1px solid var(--clr-light-grey)
    border-radius: 4px
    width: 10rem
    max-width: 160px
    height: 42px
    padding: 0 1rem
    display: flex
    justify-content: space-between
    align-items: center
    font-weight: bold

    &__icon
      &--open
        transform: rotate(180deg)

    &__list
      background: var(--clr-white)
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
        height: 42px
</style>
