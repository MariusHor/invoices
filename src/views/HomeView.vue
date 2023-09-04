<script setup>
import { InvoicesTable, SelectSorting, ButtonAdd } from '@/components'
import { AppLayout } from '@/layouts'
</script>

<template>
  <AppLayout :headerText="'Facturi'" :hasNavigateBackBtn="false">
    <template #content>
      <div class="section-actions">
        <SelectSorting :optClass="'max-w-10'" />
        <ButtonAdd :variant="'dark'" />
      </div>
      <InvoicesTable />
    </template>
  </AppLayout>
</template>

<style scoped lang="sass">
.section-actions
  display: flex
  justify-content: space-between
  align-items: center
</style>
