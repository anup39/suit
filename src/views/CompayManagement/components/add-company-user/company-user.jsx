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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const CompanyUserAdd = ({ isOpen, handleClose }) => {
  const userAccessToken = useSelector(getUserAuthToken);
  const closeDrawer = () => {
    handleClose(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roleStart(userAccessToken));
  }, []);

  const listOfUsers = useSelector(getListOfUsers);
  console.log(listOfUsers, 'right here');

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box
        className="add-feedback"
        role="presentation"
        sx={{ width: 400, padding: 3 }}
      >
        {' '}
        <div className={classes.add_container}>
          <h2 className={classes.userlist_header_1}>Add Users</h2>
          <div className={classes.userlist_container}>
            <h3 className={classes.userlist_header}>Search</h3>
            <div className={classes.userlist_box}>
              <Autocomplete
                disableCloseOnSelect
                getOptionLabel={(option) => option.username}
                id="checkboxes-tags-demo"
                multiple
                options={listOfUsers}
                renderInput={(params) => (
                  <StyledAutocompleteWrapper
                    {...params}
                    label="Users"
                    placeholder="search..."
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
          <div className={classes.add_list_container}>
            <table className={classes.add_list_tables}>
              <thead className={classes.table_head}>
                <tr className={classes.table_head_row}>
                  <th className={classes.table_row_head}>
                    <input
                      className={classes.table_row_input}
                      type="checkbox"
                    />
                  </th>
                  <th className={classes.table_row_head}>Users</th>
                  <th className={classes.table_row_head}>Roles</th>
                </tr>
              </thead>
              <tbody className={classes.table_body}>
                <DatagridRow />
                <DatagridRow />
                <DatagridRow />
                <DatagridRow />
              </tbody>
            </table>
          </div>
          <div className={classes.action_buttons_container}>
            <span className={classes.cancel_button}>
              <Button
                color="error"
                onClick={closeDrawer}
                sx={{ color: '#8094AE' }}
                variant="text"
              >
                Cancel
              </Button>
            </span>
            <Button
              sx={{
                backgroundColor: '#e78201',
                '&:hover': { backgroundColor: '#e78201' },
              }}
              variant="contained"
            >
              Update
            </Button>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

CompanyUserAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CompanyUserAdd;
