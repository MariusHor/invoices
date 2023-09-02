<script setup>
import InvoicesTable from '@/components/InvoicesTable.vue'
import SelectSorting from '@/components/SelectSorting.vue'
import { IconButton } from '@/components/UI'
import { Icon } from '@iconify/vue'
</script>

<template>
  <h1 class="section-header">Facturi</h1>
  <div class="section-content">
    <div class="section-actions">
      <SelectSorting />
      <IconButton :text="'Adauga'" variant="dark">
        <template #start>
          <Icon icon="octicon:plus-16" width="24" />
        </template>
      </IconButton>
    </div>
    <InvoicesTable />
  </div>
</template>

<style scoped lang="sass">
.section-header
  margin-bottom: 4rem

.section-content
  display: flex
  flex-direction: column
  gap: 1.575rem
  height: 100%
.section-actions
  display: flex
  justify-content: space-between
  align-items: center
</style>
