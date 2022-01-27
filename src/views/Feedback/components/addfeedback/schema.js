import * as yup from 'yup';

const schema = yup.object().shape({
  idUser: yup.string(),
  address: yup
    .string()
    .matches('^[a-zA-Z0-9]+$', 'Special Characters are not accepted')
    .required('Field is Required'),
  city: yup.string().strict().required('Field is Required'),
  zipCode: yup
    .number()
    .required('Field is Required')
    .typeError('Zip Code Can Only Be Number!'),
  comment: yup.string().required('Field is Required'),
  satisfactionLevel: yup
    .number()
    .transform((_, val) => (val ? Number(val) : null))
    .nullable(true),
});
export default schema;
