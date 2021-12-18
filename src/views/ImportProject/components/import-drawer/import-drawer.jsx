import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';

import classes from './import-drawer.styles.module.scss';

const ImportDrawer = ({ isOpen, handleClose }) => {
  const closeDrawer = () => {
    handleClose(false);
  };
  console.log(classes);

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box role="presentation" sx={{ width: 350, padding: 5, height: '100%' }}>
        <div className={classes.import_container}>
          <div className={classes.import_form_box}>
            <h3 className={classes.import_form_header}>Import Project Data</h3>
            <form className={classes.form_container}>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Project Name
                </label>
                <input className={classes.form_input} type="text" />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Work List
                </label>
                <input className={classes.form_input} type="text" />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  QGIS Files
                </label>
                <input className={classes.form_input} type="text" />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Documents
                </label>
                <input className={classes.form_input} type="text" />
              </div>
            </form>
          </div>
          <div className={classes.action_buttons_container}>
            <span className={classes.form_button_1}>
              <Button color="error" onClick={closeDrawer}>
                Cancel
              </Button>
            </span>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

ImportDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ImportDrawer;
