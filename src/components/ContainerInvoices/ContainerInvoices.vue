<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { MAX_INV_PER_PAGE } from '@/helpers'
import { ButtonAdd } from '@/components'
import { PaginationControls } from '@/components/_UI'
import TableInvoices from './TableInvoices/TableInvoices.vue'
import DropdownSorting from './DropdownSorting/DropdownSorting.vue'

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
  <div class="table-actions">
    <DropdownSorting :optClass="'max-w-10'" />
    <ButtonAdd :variant="'dark'" />
  </div>
  <div class="table-wrapper flex-column">
    <TableInvoices :current-page-invoices="currentPageInvoices" />
    <PaginationControls
      :currentPage="currentPage"
      :hasNextPage="hasNextPage"
      @increasePageCount="currentPage += 1"
      @decreasePageCount="currentPage -= 1"
    />
  </div>
</template>

<style scoped lang="sass">
.table-actions
  display: flex
  justify-content: space-between
  align-items: center

.table-wrapper
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
