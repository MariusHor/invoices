<script setup>
import { AppLayout } from '@/layouts'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { PaginationControls } from '@/components/_UI'
import { ButtonAdd } from '@/components'
import TableInvoices from './TableInvoices/TableInvoices.vue'
import { MAX_INV_PER_PAGE } from '@/helpers'
import TableActions from './TableActions/TableActions.vue'

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
      <TableActions
        :has-invoices="currentPageInvoices.length > 0"
        v-if="currentPageInvoices.length"
      />
      <div class="table-wrapper flex-column" v-if="currentPageInvoices.length">
        <div class="overflow-y-auto">
          <TableInvoices :current-page-invoices="currentPageInvoices" />
        </div>
        <PaginationControls
          :currentPage="currentPage"
          :hasNextPage="hasNextPage"
          @increasePageCount="currentPage += 1"
          @decreasePageCount="currentPage -= 1"
        />
      </div>
      <div v-if="!currentPageInvoices.length" class="fallback flex-column">
        <h2>Momentan nu exista facturi salvate</h2>
        <ButtonAdd :text="'Adauga'" :variant="'dark-md'" :hideTextOnSmRes="false" />
      </div>
    </template>
  </AppLayout>
</template>

<style scoped lang="sass">
.fallback
  margin: 0 auto
  justify-content: center
  align-items: center
  gap: 1rem
  flex: 1
  text-align: center
.table-wrapper
  flex: 1
  justify-content: space-between
  gap: 1rem
  @media screen and (min-width: 640px)
    gap: 2rem

  @media screen and (min-width: 768px)
    gap: 3rem

.overflow-y-auto
  overflow-x: auto
</style>
