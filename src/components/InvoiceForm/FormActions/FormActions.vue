<script setup>
import { useRouter } from 'vue-router'
import { IconButton } from './UI'

const router = useRouter()

function handleInvoiceDiscard() {
  // SHOW MODAL THAT ASKS IF USER REALLY WANTS TO DISCARD THE CURRENT INVOICE FORM
  router.back()
}
</script>

<template>
  <div class="form__actions flex-column">
    <div>
      <IconButton :text="'Draft'" :variant="'light'" :width="'full'" />
      <IconButton
        :text="'Renunta'"
        :variant="'light'"
        :width="'full'"
        @handleClick="handleInvoiceDiscard"
      />
    </div>
    <IconButton :text="'Salveaza'" :variant="'dark'" :width="'full'" :type="'submit'" />
  </div>
</template>
