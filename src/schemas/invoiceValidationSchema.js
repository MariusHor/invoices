import * as Yup from 'yup'

export const invoiceValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Prenumele este obligatoriu'),
  lastName: Yup.string().required('Numele este obligatoriu'),
  email: Yup.string().email().required('Emailul este obligatoriu'),
  id: Yup.string().required('Id-ul este obligatoriu'),
  notes: Yup.string()
})
