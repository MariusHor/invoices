<script setup>
import { FormInvoice } from '@/components'
import { AppLayout } from '@/layouts'
</script>

<template>
  <AppLayout :headerText="'Factura noua'">
    <template #content>
      <FormInvoice />
    </template>
  </AppLayout>
</template>
