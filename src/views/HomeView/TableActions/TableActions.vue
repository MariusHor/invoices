<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useMediaQuery } from '@vueuse/core'

import { ButtonAdd, DropdownSorting, DropdownCurrency } from '@/components'
import { ButtonIcon } from '@/components/_UI'
import ModalTableOptions from '../ModalTableOptions/ModalTableOptions.vue'

const isSmallScreen = useMediaQuery('(max-width: 640px)')
const showOptionsModal = ref(false)
</script>

<template>
  <div class="table-actions">
    <div class="table-actions__left">
      <template v-if="!isSmallScreen">
        <DropdownSorting :optClass="'max-w-10'" />
        <DropdownCurrency :optClass="'max-w-10'" />
      </template>
      <template v-if="isSmallScreen">
        <ButtonIcon :hideTextOnSmRes="true" @handleClick="showOptionsModal = true">
          <template #start>
            <Icon icon="iconamoon:options" width="24" />
          </template>
        </ButtonIcon>
        <ModalTableOptions @close-modal="showOptionsModal = false" :show-modal="showOptionsModal" />
      </template>
    </div>
    <ButtonAdd :variant="'dark-md'" />
  </div>
</template>

<style scoped lang="sass">
.table-actions
  display: flex
  justify-content: space-between
  align-items: center

  &__left
    display: flex
    gap: 0.5rem
</style>
