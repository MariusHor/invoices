<script setup>
import { AppLayout } from '@/layouts'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { PaginationControls } from '@/components/_UI'
import TableInvoices from './TableInvoices/TableInvoices.vue'
import { MAX_INV_PER_PAGE } from '@/helpers'
import TableActions from './TableActions/TableActions.vue'
import InvoicesFallback from './InvoicesFallback/InvoicesFallback.vue'

const store = useStore()
const currentPage = ref(0)

const invoices = computed(() => store.state.invoices.items)
const startIndex = computed(() => currentPage.value * MAX_INV_PER_PAGE)
const endIndex = computed(() => startIndex.value + MAX_INV_PER_PAGE)
const hasNextPage = computed(() => endIndex.value < invoices.value.length)
const currentPageInvoices = computed(() =>
  store.getters['invoices/getCurrentPageInvoices'](startIndex, endIndex)
)
</script>

<template>
  <AppLayout :headerText="'Facturi'" :hasNavigateBackBtn="false">
    <template #content>
      <template v-if="currentPageInvoices.length">
        <TableActions />
        <div class="table-wrapper flex-column">
          <div class="overflow-x-auto">
            <TableInvoices :current-page-invoices="currentPageInvoices" />
          </div>
          <PaginationControls
            :currentPage="currentPage"
            :hasNextPage="hasNextPage"
            @increasePageCount="currentPage += 1"
            @decreasePageCount="currentPage -= 1"
          />
        </div>
      </template>
      <InvoicesFallback v-else />
    </template>
  </AppLayout>
</template>

<style scoped lang="sass">
.table-wrapper
  flex: 1
  justify-content: space-between
  gap: 1rem
  @media screen and (min-width: 640px)
    gap: 2rem

  @media screen and (min-width: 768px)
    gap: 3rem

.overflow-x-auto
  overflow-x: auto
</style>
