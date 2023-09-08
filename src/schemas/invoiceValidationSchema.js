import * as Yup from 'yup'

const FIELD_REQUIRED = 'Camp obligatoriu'
const FIELD_NUMBER = 'Doar numere'
const FIELD_POSITIVE = 'Camp obligatoriu de tip numar pozitiv'

export const invoiceValidationSchema = Yup.object().shape({
  client: Yup.object().shape({
    firstName: Yup.string().required(FIELD_REQUIRED),
    lastName: Yup.string().required(FIELD_REQUIRED),
    email: Yup.string().email().required(FIELD_REQUIRED),
    phone: Yup.number().typeError(FIELD_NUMBER).integer().required(FIELD_REQUIRED)
  }),
  description: Yup.string().required(FIELD_REQUIRED),
  items: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required(FIELD_REQUIRED),
      price: Yup.number()
        .required(FIELD_REQUIRED)
        .positive(FIELD_POSITIVE)
        .required(FIELD_REQUIRED)
        .typeError(FIELD_NUMBER),
      quantity: Yup.number().required(FIELD_REQUIRED).typeError(FIELD_NUMBER).integer()
    })
  )
})
