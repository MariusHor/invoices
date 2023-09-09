<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { FormInvoice } from '@/components'
import { AppLayout } from '@/layouts'

const store = useStore()
const route = useRoute()

const invoice = computed(() => {
  console.log(route.params.id)
  return store.getters['invoices/getInvoice'](route.params.id)
})
console.log('EDIT')
</script>

<template>
  <AppLayout :headerText="`Editare #${invoice.id}`" :shouldDisplayModal="true">
    <template #content>
      <FormInvoice
        :isEditing="true"
        :form-values="invoice"
        :wasDraft="invoice.status === 'Draft'"
      />
    </template>
  </AppLayout>
</template>
