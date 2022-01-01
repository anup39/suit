import * as yup from 'yup';

const createProjectFormSchema = yup
  .object()
  .shape({
    name: yup.string().required('Name is Required'),
    clientName: yup.string().required('Client Name is Required'),
    description: yup.string().required('Description is Required'),
    startDate: yup.date().required(),
    completionDate: yup.date().required('Completion Date is Required'),
  })
  .required();

export default createProjectFormSchema;
