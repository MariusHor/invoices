<script setup>
import { AppLayout } from '@/layouts'

import { usePagination, useSmallScreen } from '@/composables'
import { PaginationControls } from '@/components/_UI'
import TableInvoices from './TableInvoices/TableInvoices.vue'
import TableActions from './TableActions/TableActions.vue'
import InvoicesFallback from './InvoicesFallback/InvoicesFallback.vue'
import MaxInvSelect from './MaxInvSelect/MaxInvSelect.vue'

const { isSmallScreen } = useSmallScreen()
const { pageHasInvoices } = usePagination()
</script>

<template>
  <AppLayout :headerText="'Facturi'" :hasNavigateBackBtn="false">
    <template #content>
      <template v-if="pageHasInvoices">
        <TableActions />
        <div class="section-wrapper flex-column">
          <div class="table-wrapper overflow-x-auto">
            <TableInvoices />
          </div>
          <div class="table-controls">
            <PaginationControls />
            <MaxInvSelect v-if="!isSmallScreen" :list-variant="'reversed'" />
          </div>
        </div>
      </template>
      <InvoicesFallback v-else />
    </template>
  </AppLayout>
</template>

<style scoped lang="sass">
.table-controls
  @media screen and (min-width: 640px)
    display: grid
    grid-template-columns: repeat(3, 1fr)

.section-wrapper
  flex: 1
  justify-content: space-between
  gap: 1rem
  @media screen and (min-width: 640px)
    gap: 2rem

  @media screen and (min-width: 768px)
    gap: 3rem

.table-wrapper
  border-left: solid 1px var(--clr-light-grey)
  border-right: solid 1px var(--clr-light-grey)
.overflow-x-auto
  overflow-x: auto
</style>
