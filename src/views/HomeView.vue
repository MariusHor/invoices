<script setup>
import { ContainerInvoices } from '@/components'
import { AppLayout } from '@/layouts'
</script>

<template>
  <AppLayout :headerText="'Facturi'" :hasNavigateBackBtn="false">
    <template #content>
      <ContainerInvoices />
    </template>
  </AppLayout>
</template>
