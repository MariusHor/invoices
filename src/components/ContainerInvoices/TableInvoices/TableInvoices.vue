<script setup>
import { ref } from 'vue'
import { TABLE_HEADINGS, DEFAULT_CURRENCY } from '@/helpers'

defineProps({
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
            <td width="150" v-if="key === 'total'">{{ DEFAULT_CURRENCY }} {{ invoice[key] }}</td>
            <td width="150" v-if="key === 'client'">
              {{ invoice[key].firstName }} {{ invoice[key].lastName }}
            </td>
            <td width="150" v-else-if="key !== 'notes' && key !== 'total'">
              {{ invoice[key] }}
            </td>
          </template>
        </tr>
        <tr v-if="invoiceToExpandId === invoice.id">
          <td colspan="6">
            <span>Note</span>
            <p>{{ invoice['notes'] }}</p>
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
