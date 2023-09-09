<script setup>
import { ref } from 'vue'
import { ButtonIcon } from '@/components/_UI'
import { ModalNavigateBack } from '@/components/'

defineProps({
  isEditing: {
    type: Boolean,
    default: false
  }
})

const showModal = ref(false)
</script>

<template>
  <div class="form__actions flex-column">
    <div>
      <ButtonIcon v-if="!isEditing" :text="'Draft'" :variant="'light-md'" :width="'full'" />
      <ButtonIcon
        :text="'Renunta'"
        :variant="'light-md'"
        :width="'full'"
        @handleClick="() => (showModal = true)"
      />
    </div>
    <ButtonIcon :text="'Salveaza'" :variant="'dark-md'" :width="'full'" :type="'submit'" />
  </div>
  <ModalNavigateBack :show-modal="showModal" @close-modal="showModal = false" />
</template>

<style scoped lang="sass">
.form__actions
    gap: 1rem

    div
        display: flex
        gap: 1rem
</style>
