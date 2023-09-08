<script setup>
import { ref } from 'vue'
import { ButtonIcon } from '@/components/_UI'
import { TABLE_HEADINGS } from '@/helpers'

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
            <td width="150" v-if="key !== 'description'">
              {{ invoice[key] }}
            </td>
          </template>
          <td class="invoice-actions">
            <ButtonIcon :text="'View'" :variant="'light-sm'" />
            <ButtonIcon :text="'Edit'" :variant="'light-sm'" />
            <ButtonIcon
              :text="'Delete'"
              :variant="'light-sm'"
              @handleClick="() => $store.commit('invoices/removeInvoice', invoice.id)"
            />
          </td>
        </tr>
        <tr v-if="invoiceToExpandId === invoice.id">
          <td colspan="6">
            <span>Descriere</span>
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

.invoice-actions
  display: flex
  gap: 0.25rem
</style>
