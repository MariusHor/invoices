<script setup>
import { Icon } from '@iconify/vue'

import { FormField } from '@/components/_UI'
import DropdownItemUnits from '../DropdownItemUnits/DropdownItemUnits.vue'

defineProps({
  items: Array
})

defineEmits(['removeItem'])
</script>

<template>
  <li class="item">
    <button @click="$emit('removeItem')" :disabled="items.length === 1">
      <Icon icon="mdi:bin" width="24" />
    </button>
    <FormField :name="'item'" :label="'Articol'" />
    <div class="item__unit flex-column">
      <label>Unitate</label>
      <DropdownItemUnits />
    </div>
    <FormField :name="'unit-price'" :label="'Pret unitar'" />
    <FormField :name="'quantity'" :label="'Cantitate'" />
    <div class="item__total-price flex-column">
      <label>Total</label>
      <span>$0.00</span>
    </div>
  </li>
</template>

<style scoped lang="sass">
.item
  display: flex
  gap: 1rem

  &__unit
    min-width: 78px

  &__total-price
    span
      height: 42px
      display: flex
      justify-content: center
      align-items: center
</style>
