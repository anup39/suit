import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid Email Format!').required('required'),
  password: yup.string().required('required'),
});

export default schema;
