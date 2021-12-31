import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Required'),
  address: yup.string().required('Required'),
  city: yup.string().required('Required'),
  reference_contact: yup.string().required('Required'),
});

export default schema;
