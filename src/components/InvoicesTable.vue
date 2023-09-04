<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { TABLE_HEADINGS, MAX_INV_PER_PAGE } from '@/helpers'
import { PaginationControls } from './_UI'

const store = useStore()

const invoiceToExpandId = ref(null)
const currentPage = ref(0)

const invoices = computed(() => store.state.invoices.items)
const startIndex = computed(() => currentPage.value * MAX_INV_PER_PAGE)
const endIndex = computed(() => startIndex.value + MAX_INV_PER_PAGE)
const hasNextPage = computed(() => endIndex.value < invoices.value.length)
const currentPageInvoices = computed(() =>
  store.getters['invoices/getCurrentPageInvoices'](startIndex, endIndex)
)

function toggleExpandInvoice(id) {
  invoiceToExpandId.value = invoiceToExpandId.value === id ? null : id
}
</script>

<template>
  <div class="table-wrapper flex-column">
    <table aria-label="Table of invoices">
      <thead>
        <tr>
          <th width="80"></th>
          <th scope="col" v-for="heading in TABLE_HEADINGS" :key="heading" width="150">
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="invoice in currentPageInvoices" :key="invoice.id">
          <tr>
            <td>
              <button @click="() => toggleExpandInvoice(invoice.id)">
                <img src="/select-arrow.svg" alt="" width="16" height="16" />
              </button>
            </td>
            <template v-for="key in Object.keys(invoice)" :key="key">
              <td v-if="key !== 'description'" width="150">
                {{ key === 'total' ? '$' : '' }} {{ invoice[key] }}
              </td>
            </template>
          </tr>
          <tr v-if="invoiceToExpandId === invoice.id">
            <td colspan="6">
              <span>Detalii</span>
              <p>{{ invoice['description'] }}</p>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <PaginationControls
      :currentPage="currentPage"
      :hasNextPage="hasNextPage"
      @increasePageCount="currentPage += 1"
      @decreasePageCount="currentPage -= 1"
    />
  </div>
</template>

<style scoped lang="sass">
.table-wrapper
  width: fit-content
  height: 100%
  justify-content: space-between

table
  text-align: center
  border-spacing: 0

thead
  background: var(--clr-black)
  color: var(--clr-white)

td, th
  padding: 1rem 0

th
  font-weight: bold

td
  vertical-align: middle
  button
    display: grid
    place-items: center
    margin: 0 auto
</style>
