<script setup>
import { FormInvoice } from '@/components'
import { AppLayout } from '@/layouts'
import { useInvoice } from '@/composables'

const { invoice } = useInvoice()
</script>

<template>
  <AppLayout :headerText="`Editare #${invoice.id}`" :shouldDisplayModal="true">
    <template #content>
      <FormInvoice
        :isEditing="true"
        :form-values="invoice"
        :wasDraft="invoice.status === 'Draft'"
      />
    </template>
  </AppLayout>
</template>
