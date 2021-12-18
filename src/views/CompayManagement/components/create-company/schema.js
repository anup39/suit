import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Company name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  reference_contact: yup.string().required('Reference number is required'),
});

export default schema;
