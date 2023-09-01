<script setup>
import { ref } from 'vue'
import { TABLE_HEADINGS, invoicesData } from '@/helpers'

const invoiceToExpandId = ref(null)

function toggleExpandInvoice(id) {
  invoiceToExpandId.value = invoiceToExpandId.value === id ? null : id
}
</script>

<template>
  <table aria-label="Table of invoices">
    <thead>
      <tr>
        <th></th>
        <th scope="col" v-for="heading in TABLE_HEADINGS" :key="heading" width="160">
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="invoice in invoicesData" :key="invoice.id">
        <tr>
          <td>
            <button @click="() => toggleExpandInvoice(invoice.id)">
              <img src="/select-arrow.svg" alt="" width="16" height="16" />
            </button>
          </td>
          <td v-for="key in Object.keys(invoice)" :key="key" width="160">
            <template v-if="key !== 'description'">
              {{ key === 'total' ? '$' : '' }} {{ invoice[key] }}
            </template>
          </td>
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
