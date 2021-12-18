import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';

import DatagridRow from './company-user.row';
import classes from './company-user.styles.module.scss';

const CompanyUserAdd = ({ isOpen, handleClose }) => {
  const closeDrawer = () => {
    handleClose(false);
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box role="presentation" sx={{ width: 450, padding: 5 }}>
        <div className={classes.add_container}>
          <h2 className={classes.userlist_header_1}>Add Users</h2>
          <div className={classes.userlist_container}>
            <h3 className={classes.userlist_header}>Search</h3>
            <div className={classes.userlist_box}>
              <Chip
                label="Clickable"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                label="Clickable"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                label="Clickable"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                label="Clickable"
                onClick={handleClick}
                onDelete={handleDelete}
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
              <Button color="error" onClick={closeDrawer} variant="text">
                Cancel
              </Button>
            </span>
            <Button variant="contained">Update</Button>
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
