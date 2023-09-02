export function compareStringDates(a, b) {
  const dateA = new Date(a.split('.').reverse().join('-'))
  const dateB = new Date(b.split('.').reverse().join('-'))

  return dateA - dateB
}
