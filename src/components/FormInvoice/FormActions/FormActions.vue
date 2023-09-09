<script setup>
import { ref } from 'vue'
import { ButtonIcon, ModalGeneric } from '@/components/_UI'
import { ModalNavigateBack } from '@/components/'

defineProps({
  isEditing: {
    type: Boolean,
    default: false
  }
})

defineEmits(['save-draft'])

const showNavigateBackModal = ref(false)
const showDraftModal = ref(false)
</script>

<template>
  <div class="form__actions flex-column">
    <div>
      <ButtonIcon
        v-if="!isEditing"
        :text="'Draft'"
        :variant="'light-md'"
        :width="'full'"
        @handleClick="showDraftModal = true"
      />
      <ButtonIcon
        :text="'Renunta'"
        :variant="'light-md'"
        :width="'full'"
        @handleClick="() => (showNavigateBackModal = true)"
      />
    </div>
    <ButtonIcon :text="'Salveaza'" :variant="'dark-md'" :width="'full'" :type="'submit'" />
  </div>
  <ModalNavigateBack
    :show-modal="showNavigateBackModal"
    @close-modal="showNavigateBackModal = false"
  />
  <ModalGeneric
    :isActive="showDraftModal"
    @close-modal="showDraftModal = false"
    @confirm-action="$emit('save-draft')"
  >
    <template #body>
      <p>Salveaza factura ca draft?</p>
    </template>
  </ModalGeneric>
</template>

<style scoped lang="sass">
.form__actions
    gap: 1rem

    div
        display: flex
        gap: 1rem
</style>
