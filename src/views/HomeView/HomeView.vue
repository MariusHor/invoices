<script setup>
import { AppLayout } from '@/layouts'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useMediaQuery } from '@vueuse/core'

import { PaginationControls } from '@/components/_UI'
import TableInvoices from './TableInvoices/TableInvoices.vue'
import TableActions from './TableActions/TableActions.vue'
import InvoicesFallback from './InvoicesFallback/InvoicesFallback.vue'
import MaxInvSelect from './MaxInvSelect/MaxInvSelect.vue'

const store = useStore()
const currentPage = ref(0)

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const maxInvPerPage = computed(() => store.state.invoices.maxInvPerPage)
const invoices = computed(() => store.state.invoices.items)
const startIndex = computed(() => currentPage.value * maxInvPerPage.value)
const endIndex = computed(() => startIndex.value + maxInvPerPage.value)
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
        <div class="section-wrapper flex-column">
          <div class="table-wrapper overflow-x-auto">
            <TableInvoices :current-page-invoices="currentPageInvoices" />
          </div>
          <div class="table-controls">
            <PaginationControls
              :currentPage="currentPage"
              :hasNextPage="hasNextPage"
              @increasePageCount="currentPage += 1"
              @decreasePageCount="currentPage -= 1"
            />
            <MaxInvSelect
              :max-inv-per-page="maxInvPerPage"
              v-if="!isSmallScreen"
              :list-variant="'reversed'"
            />
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
