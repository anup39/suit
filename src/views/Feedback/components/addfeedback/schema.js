import * as yup from 'yup';

const schema = yup.object().shape({
  idUser: yup.string(),
  address: yup
    .string()
    .required('Field is Required')
    .matches('^[a-zA-Z0-9]+$', 'Special Characters are not accepted'),

  city: yup
    .string()
    .required('Field is Required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
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
