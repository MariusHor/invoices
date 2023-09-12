<script setup>
import { DropdownGeneric } from '@/components/_UI'
import { INVOICE_PER_PAGE_OPTIONS } from '@/helpers'

defineProps({
  maxInvPerPage: Number,
  listVariant: String
})
</script>

<template>
  <div class="max-inv-select flex-row">
    <h3>Facturi pe pagina</h3>
    <div class="max-inv-select__wrapper">
      <DropdownGeneric
        :list-variant="listVariant"
        :options="INVOICE_PER_PAGE_OPTIONS"
        :currentSelectedOption="maxInvPerPage"
        @setCurrentSelectedOption="(option) => $store.commit('invoices/setMaxInvPerPage', option)"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
.max-inv-select
  justify-content: center
  align-items: center
  gap: 1rem
  @media screen and (min-width: 640px)
    justify-content: end
  &__wrapper
    max-width: 75px
</style>
