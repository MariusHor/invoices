import {
  SORTING_OPTIONS,
  INVOICE_CURRENCY_OPTIONS,
  compareStringDates,
  formatStringDate,
  formatName,
  removeCurrency,
  getInvoiceId
} from '@/helpers'

const state = {
  currentSortingOption: SORTING_OPTIONS[0],
  items: [],
  activeCurrency: INVOICE_CURRENCY_OPTIONS[0]
}

const getters = {
  getCurrentPageInvoices: (state) => (startIndex, endIndex) => {
    const sortingOption = state.currentSortingOption
    const invoices = state.items.map((invoice) => ({
      id: invoice.id,
      client: `${invoice.client.firstName} ${invoice.client.lastName}`,
      date: formatStringDate(invoice.date),
      total: `${invoice.currency} ${invoice.total}`,
      status: invoice.status,
      description: invoice.description
    }))

    switch (sortingOption) {
      case SORTING_OPTIONS[1]:
        return invoices
          .sort((a, b) => compareStringDates(a.date, b.date))
          .slice(startIndex.value, endIndex.value)
      case SORTING_OPTIONS[2]:
        return invoices
          .sort((a, b) => removeCurrency(b.total) - removeCurrency(a.total))
          .slice(startIndex.value, endIndex.value)
      case SORTING_OPTIONS[3]:
        return invoices
          .sort((a, b) => removeCurrency(a.total) - removeCurrency(b.total))
          .slice(startIndex.value, endIndex.value)
      default:
        return invoices
          .sort((a, b) => compareStringDates(b.date, a.date))
          .slice(startIndex.value, endIndex.value)
    }
  }
}

const mutations = {
  setCurrentSortingOption: (state, option) => {
    state.currentSortingOption = option
  },
  setActiveCurrency: (state, value) => {
    state.activeCurrency = value
  },
  addInvoice: (state, invoice) => {
    const id = getInvoiceId(invoice.client.firstName, invoice.client.lastName, 7)

    state.items.push({
      ...invoice,
      total: invoice.items
        .reduce((acc, curr) => {
          return acc + curr.price * curr.quantity
        }, 0)
        .toFixed(2),
      client: {
        ...invoice.client,
        firstName: formatName(invoice.client.firstName),
        lastName: formatName(invoice.client.lastName)
      },
      id
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
