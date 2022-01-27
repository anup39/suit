import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCompanyUsers } from '../../../../redux/company-redux/company.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import classes from './row.styles.module.scss';

const dispatch = useDispatch();
const { handleSubmit } = useForm();
const userAccessToken = useSelector(getUserAuthToken);

const handleDeleteSubmit = (data) => {
  const dataToSend = {
    authToken: userAccessToken,
    updatedData: data,
  };
  const userIds = [];
 
  dataToSend.idUser = userIds;
  console.log(dataToSend);
  dispatch(deleteCompanyUsers(dataToSend));

};

const DatagridRow = ({ userData }) => {
  return (
    <form
    className={classes.form_container}
    onSubmit={handleSubmit(handleDeleteSubmit)}
  >
    <tr className={classes.row_container}>
      <td className={classes.row_description}>{userData.username}</td>
      <td className={classes.row_description}>{userData.role.name}</td>
      <td className={classes.row_description}>
        <Button
          sx={{
            backgroundColor: '#FF0000',
            '&:hover': { backgroundColor: '#FF7F7F' },
          }}
          type="submit"
          variant="contained"
        >
          DELETE
        </Button>
      </td>
    </tr>
    </form>
  );
};

DatagridRow.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DatagridRow;
