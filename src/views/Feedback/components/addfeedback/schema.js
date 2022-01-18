import * as yup from 'yup';

const schema = yup.object().shape({
  idUser: yup.string(),
  address: yup.string().required('Field is Required'),
  city: yup.string().required('Field is Required'),
  zipCode: yup.string().required('Field is Required'),
  comment: yup.string().required('Field is Required'),
  satisfactionLevel: yup
    .number()
    .transform((_, val) => (val ? Number(val) : null))
    .nullable(true),
});
export default schema;
