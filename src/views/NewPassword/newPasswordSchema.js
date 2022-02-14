import * as yup from 'yup';

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .matches('[A-Z]', 'Password must contain atleast 1 capital letter')
    .matches('[a-z]', 'Password must contain atleast 1 small letter')
    .matches(
      // eslint-disable-next-line
      '[!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~]',
      'Password must contain atleast 1 special character'
    )
    .required('required'),
  conPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password does not match!'),
});

export default schema;
