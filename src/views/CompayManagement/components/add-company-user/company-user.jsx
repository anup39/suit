import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  addCompanyUsers,
  getAllCompany,
  getCompanyUsers,
} from '../../../../redux/company-redux/company.actions';
import {
  getComapnyDeletedUsersSuccess,
  getComapnyUsersList,
} from '../../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import { roleStart } from '../../../../redux/User-Role/role.actions';
import { getListOfUsers } from '../../../../redux/User-Role/User-Role.selectors';
import DatagridRow from './company-user.row';
import classes from './company-user.styles.module.scss';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const StyledAutocompleteWrapper = withStyles({
  border: 'none',
})(TextField);

const CompanyUserAdd = ({ isOpen, handleClose, prevData }) => {
  const userAccessToken = useSelector(getUserAuthToken);
  const [userSelectedList, setUserSelectedList] = useState([]);

  const closeDrawer = () => {
    handleClose(false);
  };
  const dispatch = useDispatch();

  const { handleSubmit } = useForm();
  const listOfUsers = useSelector(getListOfUsers);
  const companyUsersList = useSelector(getComapnyUsersList);
  const usersDeletedSuccess = useSelector(getComapnyDeletedUsersSuccess);
  console.log(usersDeletedSuccess);
  useEffect(() => {
    dispatch(roleStart(userAccessToken));
  }, []);
  useEffect(() => {
    if (isOpen) dispatch(getCompanyUsers({ userAccessToken, id: prevData.id }));
  }, [isOpen, usersDeletedSuccess]);
  const { t } = useTranslation();

  const handleUpdateSubmit = (data) => {
    const dataToSend = {
      authToken: userAccessToken,
      updatedData: data,
    };
    const userIds = [];
    userSelectedList.filter((list) => {
      userIds.push(list.idUser);
      return list;
    });
    dataToSend.idUser = userIds;
    dataToSend.companies_id = prevData.id;
    console.log(dataToSend);
    dispatch(addCompanyUsers(dataToSend));
    setTimeout(() => {
      dispatch(getAllCompany(userAccessToken));
    }, 2000);
  };
  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box
        className="add-feedback"
        role="presentation"
        sx={{ width: 400, padding: 3 }}
      >
        {' '}
        <form
          className={classes.form_container}
          onSubmit={handleSubmit(handleUpdateSubmit)}
        >
          <div className={classes.add_container}>
            <h2 className={classes.userlist_header_1}>{t('addUsers')}</h2>
            <div className={classes.userlist_container}>
              <h3 className={classes.userlist_header}>{t('search')}</h3>
              <div className={classes.userlist_box}>
                <Autocomplete
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.username}
                  id="checkboxes-tags-demo"
                  multiple
                  onChange={(_event, newValue) => {
                    console.log(
                      'Selected Value',
                      JSON.stringify(newValue, null, ' ')
                    );
                    setUserSelectedList(newValue);
                  }}
                  options={listOfUsers}
                  renderInput={(params) => (
                    <StyledAutocompleteWrapper
                      {...params}
                      label={t('users')}
                      placeholder={t('search')}
                      sx={{ border: 'none' }}
                    />
                  )}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        checked={selected}
                        checkedIcon={checkedIcon}
                        icon={icon}
                        style={{ marginRight: 8 }}
                      />
                      {option.username}
                    </li>
                  )}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            {isOpen && companyUsersList && companyUsersList.length > 0 ? (
              <div className={classes.add_list_container}>
                <table className={classes.add_list_tables}>
                  <thead className={classes.table_head}>
                    <tr className={classes.table_head_row}>
                      <th className={classes.table_row_head}>{t('users')}</th>
                      <th className={classes.table_row_head}>{t('roles')}</th>
                      <th className={classes.table_row_head}>{t('actions')}</th>
                    </tr>
                  </thead>
                  <tbody className={classes.table_body}>
                    {companyUsersList.map((user) => {
                      if (user.companies.id === prevData.id) {
                        return (
                          <DatagridRow
                            key={user.idUser}
                            companyId={prevData.id}
                            userData={user}
                          />
                        );
                      }
                      return '';
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              ''
            )}
            <div className={classes.action_buttons_container}>
              <span className={classes.cancel_button}>
                <Button
                  color="error"
                  onClick={closeDrawer}
                  sx={{ color: '#8094AE' }}
                  variant="text"
                >
                  {t('cancel')}
                </Button>
              </span>
              <Button
                sx={{
                  backgroundColor: '#e78201',
                  '&:hover': { backgroundColor: '#e78201' },
                }}
                type="submit"
                variant="contained"
              >
                {t('update')}
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </Drawer>
  );
};

CompanyUserAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  prevData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CompanyUserAdd;
