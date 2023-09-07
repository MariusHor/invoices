import {
  SORTING_OPTIONS,
  DEFAULT_CURRENCY,
  compareStringDates,
  formatStringDate,
  formatName
} from '@/helpers'

const state = {
  currentSortingOption: SORTING_OPTIONS[0],
  items: []
}

const getters = {
  getCurrentPageInvoices: (state) => (startIndex, endIndex) => {
    const sortingOption = state.currentSortingOption
    const invoices = state.items.map((invoice) => ({
      id: invoice.id,
      client: `${invoice.client.firstName} ${invoice.client.lastName}`,
      date: formatStringDate(invoice.date),
      total: `${DEFAULT_CURRENCY} ${invoice.total}`,
      status: invoice.status,
      notes: invoice.notes
    }))

    switch (sortingOption) {
      case SORTING_OPTIONS[1]:
        return invoices
          .sort((a, b) => compareStringDates(a.date, b.date))
          .slice(startIndex.value, endIndex.value)
      case SORTING_OPTIONS[2]:
        return invoices.sort((a, b) => b.total - a.total).slice(startIndex.value, endIndex.value)
      case SORTING_OPTIONS[3]:
        return invoices.sort((a, b) => a.total - b.total).slice(startIndex.value, endIndex.value)
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
  addInvoice: (state, invoice) => {
    state.items.push({
      ...invoice,
      total: invoice.items.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity
      }, 0),
      client: {
        ...invoice.client,
        firstName: formatName(invoice.client.firstName),
        lastName: formatName(invoice.client.lastName)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
