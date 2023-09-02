import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import invoices from './modules/invoices'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    invoices
  },
  plugins: [vuexLocal.plugin]
})
