import {
  SORTING_OPTIONS,
  INVOICE_CURRENCY_OPTIONS,
  compareStringDates,
  formatStringDate,
  formatInvoice,
  removeCurrency,
  getInvoiceId,
  formatTotal
} from '@/helpers'

const state = {
  currentSortingOption: SORTING_OPTIONS[0],
  items: [],
  activeCurrency: INVOICE_CURRENCY_OPTIONS[0],
  formCurrency: INVOICE_CURRENCY_OPTIONS[0]
}

const getters = {
  getInvoice: (state) => (id) => {
    const invoice = state.items.find((invoice) => invoice.id === id || invoice.draftId === id)

    return {
      ...invoice,
      date: formatStringDate(invoice.date)
    }
  },
  getCurrentPageInvoices: (state) => (startIndex, endIndex) => {
    const sortingOption = state.currentSortingOption
    const invoices = state.items.map((invoice) => ({
      id: invoice.id,
      client: `${invoice.client.firstName} ${invoice.client.lastName}`,
      date: invoice.date,
      total: formatTotal(state.activeCurrency, invoice.currency, invoice.total),
      status: invoice.status,
      description: invoice.description
    }))

    const sortDateAsc = (a, b) => compareStringDates(a.date, b.date)
    const sortDateDesc = (a, b) => compareStringDates(b.date, a.date)
    const sortTotalAsc = (a, b) => removeCurrency(a.total) - removeCurrency(b.total)
    const sortTotalDesc = (a, b) => removeCurrency(b.total) - removeCurrency(a.total)

    const sortingFunction =
      sortingOption === SORTING_OPTIONS[1]
        ? sortDateAsc
        : sortingOption === SORTING_OPTIONS[2]
        ? sortTotalDesc
        : sortingOption === SORTING_OPTIONS[3]
        ? sortTotalAsc
        : sortDateDesc

    const sortedInvoices = invoices
      .sort(sortingFunction)
      .slice(startIndex.value, endIndex.value)
      .map((invoice) => ({ ...invoice, date: formatStringDate(invoice.date) }))

    return sortedInvoices
  }
}

const mutations = {
  setCurrentSortingOption: (state, option) => {
    state.currentSortingOption = option
  },
  setFormCurrency: (state, value) => {
    state.formCurrency = value
  },
  setActiveCurrency: (state, value) => {
    state.activeCurrency = value
  },
  addInvoice: (state, invoice) => {
    const id = getInvoiceId(invoice.client.firstName, invoice.client.lastName, 7)
    const newInvoice = formatInvoice(invoice, id)
    state.items.push(newInvoice)
  },
  removeInvoice: (state, invoiceId) => {
    state.items = state.items.filter((invoice) => invoice.id !== invoiceId)
  },
  editInvoice: (state, { values, id, wasDraft }) => {
    const newInvoice = formatInvoice(values, id, wasDraft)

    state.items = state.items.map((invoice) => (invoice.id === id ? newInvoice : invoice))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
