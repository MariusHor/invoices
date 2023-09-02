<script setup>
import { InvoiceForm } from '@/components'
import { AppLayout } from '@/layouts'
</script>

<template>
  <AppLayout :headerText="'Factura noua'">
    <template #content>
      <InvoiceForm />
    </template>
  </AppLayout>
</template>

<style scoped lang="sass"></style>
