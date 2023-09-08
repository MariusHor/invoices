export const TABLE_HEADINGS = ['Id', 'Client', 'Data', 'Total', 'Status']
export const DROPDOWN_STATES = ['closed', 'open']
export const MAX_INV_PER_PAGE = 5

export const SORTING_OPTIONS = ['Cele mai noi', 'Cele mai vechi', 'Suma mai mare', 'Suma mai mica']
export const INVOICE_STATUS_OPTIONS = ['Done', 'Pending']
export const INVOICE_UNITS_OPTIONS = ['Ore', 'Zile', 'Saptamani', 'Luni']
export const INVOICE_CURRENCY_OPTIONS = ['EUR', 'USD', 'GBP']

export const CONVERSION_RATES = {
  [`${INVOICE_CURRENCY_OPTIONS[0]}_${INVOICE_CURRENCY_OPTIONS[1]}`]: 0.93,
  [`${INVOICE_CURRENCY_OPTIONS[0]}_${INVOICE_CURRENCY_OPTIONS[2]}`]: 1.17,
  [`${INVOICE_CURRENCY_OPTIONS[1]}_${INVOICE_CURRENCY_OPTIONS[0]}`]: 1.07,
  [`${INVOICE_CURRENCY_OPTIONS[1]}_${INVOICE_CURRENCY_OPTIONS[2]}`]: 1.25,
  [`${INVOICE_CURRENCY_OPTIONS[2]}_${INVOICE_CURRENCY_OPTIONS[0]}`]: 0.86,
  [`${INVOICE_CURRENCY_OPTIONS[2]}_${INVOICE_CURRENCY_OPTIONS[1]}`]: 0.8
}

export const FORM_INITIAL_DATA = {
  client: {
    firstName: '',
    lastName: '',
    email: ''
  },
  items: [
    {
      title: '',
      price: '',
      quantity: 1,
      unit: INVOICE_UNITS_OPTIONS[0]
    }
  ],
  id: '',
  date: '',
  total: 0,
  status: 'done',
  description: ''
}
