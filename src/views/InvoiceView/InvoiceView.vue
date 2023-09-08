<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { AppLayout } from '@/layouts'
import { InvoiceTotal, SectionLayout } from '@/components'
import InvoiceActions from './InvoiceActions/InvoiceActions.vue'
import InvoiceItemTable from './InvoiceItemTable/InvoiceItemTable.vue'
import InvoiceDetails from './InvoiceDetails/InvoiceDetails.vue'

const store = useStore()
const route = useRoute()

const invoice = computed(() => store.getters['invoices/getInvoice'](route.params.id))
</script>

<template>
  <AppLayout :headerText="`Factura #${invoice.id}`">
    <template #content>
      <div class="invoice">
        <div class="invoice__left-pane flex-column">
          <SectionLayout :headerText="'Client'" :height="'fit'">
            <template #end>
              <ul>
                <template v-for="key in Object.keys(invoice.client)" :key="key">
                  <li>
                    <span v-if="key === 'firstName'"
                      >{{ invoice.client[key] }} {{ invoice.client['lastName'] }}</span
                    >
                    <span v-else-if="key !== 'lastName'">{{ invoice.client[key] }}</span>
                  </li>
                </template>
              </ul>
            </template>
          </SectionLayout>
          <SectionLayout :headerText="'Articole'">
            <template #end>
              <div class="invoice__table-wrapper flex-column">
                <InvoiceItemTable :items="invoice.items" :currency="invoice.currency" />
                <InvoiceTotal :currency="invoice.currency" :total="invoice.total" />
              </div>
            </template>
          </SectionLayout>
        </div>
        <div class="invoice__right-pane flex-column">
          <InvoiceDetails
            :status="invoice.status"
            :date="invoice.date"
            :description="invoice.description"
          />
          <InvoiceActions :id="invoice.id" />
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped lang="sass">
.invoice
    display: grid
    grid-template-columns: 5fr 2fr
    height: 100%
    gap: 2rem

    &__table-wrapper
        height: 100%
        justify-content: space-between

    &__left-pane, &__right-pane
        border: solid 1px var(--clr-light-grey)
        border-radius: 5px
        padding: 1rem

    &__left-pane
        gap: 2rem
        justify-content: space-between


    &__right-pane
        justify-content: space-between
</style>
