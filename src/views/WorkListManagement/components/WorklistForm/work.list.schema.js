import * as yup from 'yup';

const schema = yup.object().shape({
  taskId: yup.string().required('Required'),
  projectsId: yup.string().required('Required'),
  taskName: yup.string().required('Required'),
  taskDescription: yup.string().required('Required'),
  isMilestone: yup.string().required('Required'),
  type: yup.string().required('Required'),
  priority: yup.string().required('Required'),
  start: yup.string().required('Required'),
  end: yup.string().required('Required'),
  street: yup.string().required('Required'),
  zipCode: yup.string().required('Required'),
  city: yup.string().required('Required'),
  country: yup.string().required('Required'),
  latitude: yup.string().required('Required'),
  longitude: yup.string().required('Required'),
  note: yup.string().required('Required'),
  documents: yup.string().required('Required'),
  taskStatus: yup.string().default('Not assigned'),
});

export default schema;
