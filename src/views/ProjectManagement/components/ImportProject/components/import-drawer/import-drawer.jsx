import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { importProjectData } from '../../../../../../redux/project-management-redux/project-management.actions';
import { getUserAuthToken } from '../../../../../../redux/user-redux/user.selectors';
import classes from './import-drawer.styles.module.scss';
import schema from './importData';

const ImportDrawer = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const authToken = useSelector(getUserAuthToken);

  const closeDrawer = () => {
    handleClose(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    const dataToSend = { authToken, data };

    dispatch(importProjectData(dataToSend));
  };

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <Box role="presentation" sx={{ width: 350, padding: 5, height: '100%' }}>
        <div className={classes.import_container}>
          <div className={classes.import_form_box}>
            <h3 className={classes.import_form_header}>Import Project Data</h3>
            <form
              className={classes.form_container}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Project Name
                </label>
                <select className={classes.form_input}>
                  <option>Please Select A Project</option>
                  <option>Please Select A Project</option>
                  <option>Please Select A Project</option>
                  <option>Please Select A Project</option>
                </select>
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Work List
                </label>
                <input
                  className={classes.form_input}
                  multiple
                  type="file"
                  {...register('workListFile')}
                />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  QGIS Files
                </label>
                <input
                  className={classes.form_input}
                  multiple
                  type="file"
                  {...register('qgisFile')}
                />
              </div>
              <div className={classes.form_input_container}>
                <label className={classes.form_label} htmlFor="name">
                  Documents
                </label>
                <input
                  className={classes.form_input}
                  multiple
                  type="file"
                  {...register('documents')}
                />
              </div>

              <div className={classes.action_buttons_container}>
                <span className={classes.form_button_1}>
                  <Button color="error" onClick={closeDrawer}>
                    Cancel
                  </Button>
                </span>
                <Button type="submit" variant="contained">
                  Upload
                </Button>
              </div>
            </form>
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
