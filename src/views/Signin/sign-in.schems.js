import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().email('Invalid Email Format!').required('required'),
  password: yup.string().required('required'),
});

export default schema;
