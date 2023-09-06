import * as Yup from 'yup'

export const invoiceValidationSchema = Yup.object().shape({
  client: Yup.object().shape({
    firstName: Yup.string().required('Prenumele este obligatoriu'),
    lastName: Yup.string().required('Numele este obligatoriu'),
    email: Yup.string().email().required('Emailul este obligatoriu')
  }),
  id: Yup.string().required('Id-ul este obligatoriu'),
  items: Yup.array().of(
    Yup.object().shape({
      description: Yup.string().required('Name is required'),
      price: Yup.number()
        .positive('Must be a positive number')
        .required('Price is required')
        .typeError('Must be a number'),
      quantity: Yup.number()
        .positive('Must be a positive number')
        .typeError('Must be a number')
        .required('Qty. is required')
        .integer()
    })
  )
})
