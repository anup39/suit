import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string(),
  roles_id: yup.number(),
  companies_id: yup.number(),
});

export default schema;
