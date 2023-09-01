<script setup>
const tableHeadings = ['Id', 'Client', 'Data', 'Total', 'Status']
const invoices = [
  {
    id: 35426,
    client: 'Alexander Jones',
    date: '25.10.2022',
    total: 250,
    status: 'done'
  },
  {
    id: 54932,
    client: 'David Milner',
    date: '02.04.2023',
    total: 220,
    status: 'pending'
  }
]
</script>

<template>
  <table aria-label="Table of invoices">
    <thead>
      <tr>
        <th
          scope="col"
          v-for="(heading, index) in tableHeadings"
          :key="heading"
          :colspan="index === 0 || index === tableHeadings.length - 1 ? 2 : 1"
          width="100"
        >
          {{ heading }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="invoice in invoices" :key="invoice.id">
        <td></td>
        <td v-for="item in Object.values(invoice)" :key="item" width="100">
          {{ item }}
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="sass">
table
  text-align: center

th
  font-weight: bold
</style>
