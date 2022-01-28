import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCompanyUsers } from '../../../../redux/company-redux/company.actions';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import classes from './row.styles.module.scss';

const DatagridRow = ({ userData, companyId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userAccessToken = useSelector(getUserAuthToken);
  const handleDeleteSubmit = (userId) => {
    const dataToSend = {
      authToken: userAccessToken,
      company_id: companyId,
      user_id: userId,
    };
    dispatch(deleteCompanyUsers(dataToSend));
  };

  return (
    <tr className={classes.row_container}>
      <td className={classes.row_description}>{userData.username}</td>
      <td className={classes.row_description}>{userData.role.name}</td>
      <td className={classes.row_description}>
        <Button
          color="error"
          onClick={() => handleDeleteSubmit(userData.idUser)}
          size="small"
          variant="outlined"
        >
          {t('delete')}
        </Button>
      </td>
    </tr>
  );
};

DatagridRow.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
  companyId: PropTypes.isRequired,
};

export default DatagridRow;
