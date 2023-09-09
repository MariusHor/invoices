<script setup>
import { ref } from 'vue'
import { ButtonIcon } from '@/components/_UI'
import { ModalConfirmation } from '@/components'

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
  <ModalConfirmation
    :isActive="showModal"
    @close-modal="showModal = false"
    @confirm-action="$router.back()"
  >
    <template #body>
      <p>Toate modificarile vor fi pierdute</p>
    </template>
  </ModalConfirmation>
</template>

<style scoped lang="sass">
.form__actions
    gap: 1rem

    div
        display: flex
        gap: 1rem
</style>
