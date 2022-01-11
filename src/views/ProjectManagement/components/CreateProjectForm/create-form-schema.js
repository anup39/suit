import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  clientName: yup.string().required('Client Name is Required'),
  description: yup.string().required('Description is Required'),
  startDate: yup.string().required('Start Date is Required'),
  completionDate: yup.string().required('Completion Date is Required'),
});

export default schema;
