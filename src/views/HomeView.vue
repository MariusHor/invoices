<script setup>
import { InvoicesTable, SelectSorting, IconButton } from '@/components'
import { AppLayout } from '@/layouts'
import { Icon } from '@iconify/vue'
</script>

<template>
  <AppLayout :headerText="'Facturi'">
    <template #content>
      <div class="section-actions">
        <SelectSorting />
        <IconButton :text="'Adauga'" variant="dark" :isLink="true" :to="'/invoices/create'">
          <template #start>
            <Icon icon="octicon:plus-16" width="24" />
          </template>
        </IconButton>
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
