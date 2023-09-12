import { ref } from 'vue'

export function useExpandInvoice() {
  const invoiceToExpandId = ref(null)

  function toggleExpandInvoice(id) {
    invoiceToExpandId.value = invoiceToExpandId.value === id ? null : id
  }

  return { invoiceToExpandId, toggleExpandInvoice }
}
