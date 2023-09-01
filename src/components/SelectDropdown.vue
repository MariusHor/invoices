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
      <li v-for="option in selectOptions" :key="option">
        <button @click="() => handleSelectOption(option)">{{ option }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass"></style>
