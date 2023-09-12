import { ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

const currentPage = ref(1)

export function useCurrentPage() {
  return { currentPage }
}

export function usePagination() {
  const store = useStore()
  const { currentPage } = useCurrentPage()
  const { startIndex, endIndex } = usePaginationIndexes()

  const currentPageInvoices = computed(() =>
    store.getters['invoices/getCurrentPageInvoices'](startIndex.value, endIndex.value)
  )
  const pageHasInvoices = computed(() => currentPageInvoices.value.length)

  watchEffect(() => {
    while (!currentPageInvoices.value.length && currentPage.value > 1) {
      currentPage.value -= 1
    }
  })

  return { currentPageInvoices, pageHasInvoices }
}

export function usePaginationIndexes() {
  const { currentPage } = useCurrentPage()
  const { maxInvPerPage } = useMaxInvPerPage()

  const startIndex = computed(() => (currentPage.value - 1) * maxInvPerPage.value)
  const endIndex = computed(() => startIndex.value + maxInvPerPage.value)

  return { startIndex, endIndex }
}

export function useNextPage() {
  const store = useStore()
  const { endIndex } = usePaginationIndexes()

  const invoices = computed(() => store.state.invoices.items)
  const hasNextPage = computed(() => endIndex.value < invoices.value.length)

  return { hasNextPage }
}

export function useMaxInvPerPage() {
  const store = useStore()
  const maxInvPerPage = computed(() => store.state.invoices.maxInvPerPage)

  return { maxInvPerPage }
}
