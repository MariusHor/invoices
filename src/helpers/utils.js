import { CONVERSION_RATES } from './constants'

export function compareStringDates(a, b) {
  const dateA = parseDateString(a)
  const dateB = parseDateString(b)

  return dateA - dateB
}

export function formatStringDate(stringDate) {
  const inputDate = parseDateString(stringDate)

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return inputDate.toLocaleDateString('en-GB', options)
}

function parseDateString(dateString) {
  return new Date(dateString)
}

export function formatName(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}

export function removeCurrency(string) {
  return parseFloat(string.split(' ')[1])
}

export function getInvoiceId(firstName, lastName, length) {
  return `${firstName.slice(0, 1).toUpperCase()}${lastName.slice(0, 1).toUpperCase()}${crypto
    .randomUUID()
    .slice(0, length - 2)}`
}

export function formatTotal(activeCurrency, totalCurrency, total) {
  const conversionRate = CONVERSION_RATES[`${activeCurrency}_${totalCurrency}`] ?? 1.0
  const convertedTotal = total * conversionRate

  return `${activeCurrency} ${convertedTotal.toFixed(2)}`
}

export function formatInvoice(invoice, id) {
  return {
    ...invoice,
    client: {
      ...invoice.client,
      firstName: formatName(invoice.client.firstName),
      lastName: formatName(invoice.client.lastName)
    },
    items: invoice.items.map((item) => ({
      title: item.title,
      unit: item.unit,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity
    })),
    total: invoice.items
      .reduce((acc, curr) => {
        return acc + curr.price * curr.quantity
      }, 0)
      .toFixed(2),
    id
  }
}
