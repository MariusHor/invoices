<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { AppLayout } from '@/layouts'

const store = useStore()
const route = useRoute()

const invoice = computed(() => store.getters['invoices/getInvoice'](route.params.id))
</script>

<template>
  <AppLayout :headerText="`Factura #${invoice.id}`">
    <template #content> INVOICE VIEW </template>
  </AppLayout>
</template>
