import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  username: yup.string().email('invalid email format !').required('required'),
  password: yup
    .string()
    .min(4, 'Password should be at least 4 characters long')
    .max(15, 'Password can not be longer than 15 characters')
    .required('required'),
  conPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password does not match!'),
});

export default schema;
