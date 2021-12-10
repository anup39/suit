import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().email('Invalid Email Format!').required('Required'),
  password: yup.string().required('Required'),
});

export default schema;
