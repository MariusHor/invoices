<script setup>
import { useRouter } from 'vue-router'
import { ButtonIcon } from '@/components/_UI'

defineProps({
  isEditing: {
    type: Boolean,
    default: false
  }
})
const router = useRouter()

function handleInvoiceDiscard() {
  // SHOW MODAL THAT ASKS IF USER REALLY WANTS TO DISCARD THE CURRENT INVOICE FORM
  router.back()
}
</script>

<template>
  <div class="form__actions flex-column">
    <div>
      <ButtonIcon v-if="!isEditing" :text="'Draft'" :variant="'light-md'" :width="'full'" />
      <ButtonIcon
        :text="'Renunta'"
        :variant="'light-md'"
        :width="'full'"
        @handleClick="handleInvoiceDiscard"
      />
    </div>
    <ButtonIcon
      :text="isEditing ? 'Editeaza' : 'Salveaza'"
      :variant="'dark-md'"
      :width="'full'"
      :type="'submit'"
    />
  </div>
</template>

<style scoped lang="sass">
.form__actions
    gap: 1rem

    div
        display: flex
        gap: 1rem
</style>
