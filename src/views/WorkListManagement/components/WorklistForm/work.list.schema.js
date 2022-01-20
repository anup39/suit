import * as yup from 'yup';

const schema = yup.object().shape({
  taskId: yup.string().required('Required'),
  projectsId: yup
    .number()
    .required('Required')
    .typeError('Please Select a Valid Option'),
  taskName: yup.string().required('Required'),
  taskDescription: yup.string(),
  isMilestone: yup.string().required('Required'),
  type: yup.string().required('Required'),
  priority: yup
    .number()
    .required('Required')
    .typeError('Please Enter a Number'),
  start: yup.string().required('Required'),
  end: yup.string().required('Required'),
  street: yup.string(),
  zipCode: yup.string(),
  city: yup.string(),
  country: yup.string().required('Required'),
  latitude: yup
    .number()
    .max(90, 'Please Enter Valid Value')
    .min(0, 'Please Enter Valid Value')
    .transform((_, val) => (val ? Number(val) : null))
    .nullable(true),
  longitude: yup
    .number()
    .min(-180, 'Please Enter Valid Value')
    .max(180, 'Please Enter Valid Value')
    .nullable(true)
    .transform((_, val) => (val ? Number(val) : null)),
  geoFence: yup.string(),
  note: yup.string(),
  documents: yup.string(),
  taskStatus: yup.string().default('Not assigned'),
});

export default schema;
