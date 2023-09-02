import { SORTING_OPTIONS, compareStringDates } from '@/helpers'

const state = {
  currentSortingOption: SORTING_OPTIONS[0],
  items: [
    {
      id: 'VI35426',
      client: 'Alexander Jones',
      date: '25.08.2023',
      total: 250,
      status: 'done',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'VI83226',
      client: 'David Milner',
      date: '02.04.2023',
      total: 220,
      status: 'pending',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
}

const getters = {
  getCurrentPageInvoices: (state) => (startIndex, endIndex) => {
    const sortingOption = state.currentSortingOption

    switch (sortingOption) {
      case SORTING_OPTIONS[1]:
        return state.items
          .sort((a, b) => compareStringDates(a.date, b.date))
          .slice(startIndex.value, endIndex.value)
      default:
        return state.items
          .sort((a, b) => compareStringDates(b.date, a.date))
          .slice(startIndex.value, endIndex.value)
    }
  }
}

const mutations = {
  setCurrentSortingOption: (state, option) => {
    state.currentSortingOption = option
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
