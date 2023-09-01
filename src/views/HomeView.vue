<script setup>
import InvoicesTable from '@/components/InvoicesTable.vue'
import IconButton from '@/components/IconButton.vue'
import SelectDropdown from '@/components/SelectDropdown.vue'
</script>

<template>
  <h1>Facturi</h1>
  <div>
    <IconButton :text="'Adauga'" variant="dark" />
  </div>
  <div>
    <SelectDropdown />
  </div>
  <InvoicesTable />
</template>

<style scoped lang="sass">
main
  min-height: 100vh
  display: grid
  place-items: center
</style>
