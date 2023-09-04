<script setup>
import { useRouter } from 'vue-router'
import { ButtonIcon } from '@/components/_UI'

const router = useRouter()

function handleInvoiceDiscard() {
  // SHOW MODAL THAT ASKS IF USER REALLY WANTS TO DISCARD THE CURRENT INVOICE FORM
  router.back()
}
</script>

<template>
  <div class="form__actions flex-column">
    <div>
      <ButtonIcon :text="'Draft'" :variant="'light'" :width="'full'" />
      <ButtonIcon
        :text="'Renunta'"
        :variant="'light'"
        :width="'full'"
        @handleClick="handleInvoiceDiscard"
      />
    </div>
    <ButtonIcon :text="'Salveaza'" :variant="'dark'" :width="'full'" :type="'submit'" />
  </div>
</template>

<style scoped lang="sass">
.form__actions
    gap: 1rem

    div
        display: flex
        gap: 1rem
</style>
