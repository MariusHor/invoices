<script setup>
import { ref } from 'vue'
import InvoiceActions from '../InvoiceActions/InvoiceActions.vue'
import { INVOICES_TABLE_HEADINGS } from '@/helpers'

const { currentPageInvoices } = defineProps({
  currentPageInvoices: Array
})

const invoiceToExpandId = ref(null)

function toggleExpandInvoice(id) {
  invoiceToExpandId.value = invoiceToExpandId.value === id ? null : id
}
</script>

<template>
  <table aria-label="Table of invoices">
    <thead>
      <tr>
        <th width="80"></th>
        <th scope="col" v-for="heading in INVOICES_TABLE_HEADINGS" :key="heading" width="150">
          <div>
            {{ heading }}
          </div>
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
            <td width="150" v-if="key !== 'description'">
              <div :class="key === 'total' ? 'cell-total' : ''">
                {{ invoice[key] }}
              </div>
            </td>
          </template>
          <td class="invoice-actions">
            <div>
              <InvoiceActions :id="invoice.id" />
            </div>
          </td>
        </tr>
        <tr v-if="invoiceToExpandId === invoice.id">
          <td colspan="7">
            <div>
              <span>Descriere</span>
              <p>{{ invoice['description'] }}</p>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped lang="sass">
table
  text-align: center
  border-spacing: 0

thead
  background: var(--clr-black)
  color: var(--clr-white)

td, th
  padding: 1rem
  border-bottom: solid 1px var(--clr-light-grey)

td:not(:last-child), th:not(:last-child)
  border-right: solid 1px var(--clr-light-grey)

th
  border-top: solid 1px var(--clr-light-grey)

th
  font-weight: bold

td
  vertical-align: middle
  button
    display: grid
    place-items: center
    margin: 0 auto

.invoice-actions
  div
    display: flex
    gap: 0.25rem

.cell-total
  min-width: 85px
</style>
