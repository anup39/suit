import { object, string } from 'yup';

const schema = object().shape({
  taskId: string().required('Required'),
  projectsId: string().required('Required'),
  taskName: string().required('Required'),
  taskDescription: string().required('Required'),
  isMilestone: string().required('Required'),
  type: string().required('Required'),
  priority: string().required('Required'),
  start: string().required('Required'),
  end: string().required('Required'),
  street: string().required('Required'),
  zipCode: string().required('Required'),
  city: string().required('Required'),
  country: string().required('Required'),
  latitude: string().required('Required'),
  longitude: string().required('Required'),
  note: string().required('Required'),
  documents: string().required('Required'),
});

export default schema;
