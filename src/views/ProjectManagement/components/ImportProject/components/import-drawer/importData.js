import * as yup from 'yup';

const schema = yup.object().shape({
  workListFile: yup.mixed().nullable(),
  documents: yup.mixed().nullable(),
  qgisFile: yup.mixed().nullable(),
  projectId: yup.string().nullable(),
});

export default schema;
