import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export function useInvoice() {
  const store = useStore()
  const route = useRoute()

  const invoice = computed(() => store.getters['invoices/getInvoice'](route.params.id))

  return { invoice }
}
