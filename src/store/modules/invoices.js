const state = {
  currentSortingOption: 'Cele mai noi',
  items: [
    {
      id: 'VI35426',
      client: 'Alexander Jones',
      date: '25.10.2022',
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
    return state.items.slice(startIndex.value, endIndex.value)
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
