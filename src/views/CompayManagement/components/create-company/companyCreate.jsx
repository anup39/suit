import 'react-toastify/dist/ReactToastify.css';

import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Alert from '../../../../components/shared/Alerts/Alert';
import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import { createCompany } from '../../../../redux/company-redux/company.actions';
import {
  getCreateError,
  getCreateSuccess,
  getLoadingStatus,
} from '../../../../redux/company-redux/company.selectors';
import classes from './company.module.scss';
import schema from './schema';

// eslint-disable-next-line react/display-name
const CreateCompany = ({ isOpen, isClose }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);
  const successValue = useSelector(getCreateSuccess);
  const errorValue = useSelector(getCreateError);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeDrawer = () => {
    isClose(false);
    reset({
      name: '',
      address: '',
      city: '',
      reference_contact: '',
    });
  };

  const onSubmit = (data) => {
    dispatch(createCompany(data));
  };

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <GlobalSpinner isOpen={isLoading} />
      {errorValue ? toast.error(errorValue.message) : undefined}
      {successValue ? (
        <Alert message={successValue.message} title="error" type="success" />
      ) : undefined}
      <Box role="presentation" sx={{ width: 350, padding: 5 }}>
        <h3 className={classes.form_header}>Create Company</h3>
        <form
          className={classes.form_container}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="name">
              Name
            </label>
            <input
              className={classes.form_input}
              {...register('name')}
              id="name"
              type="text"
            />
            <span className={classes.form_error}>{errors.name?.message}</span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="address">
              Address
            </label>
            <textarea
              className={classes.form_form_input}
              {...register('address')}
              id="address"
              rows="5"
              type="text"
            />
            <span className={classes.form_error}>
              {errors.address?.message}
            </span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="city">
              City
            </label>
            <input
              className={classes.form_input}
              {...register('city')}
              id="city"
              type="text"
            />
            <span className={classes.form_error}>{errors.city?.message}</span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="reference_contact">
              Reference Contact Number
            </label>
            <input
              className={classes.form_input}
              {...register('reference_contact')}
              id="reference_contact"
              type="text"
            />
            <span className={classes.form_error}>{errors.number?.message}</span>
          </div>
          <div className={classes.form_buttons_container}>
            <span className={classes.form_button_1}>
              <Button color="error" onClick={closeDrawer}>
                Cancel
              </Button>
            </span>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </Drawer>
  );
};

CreateCompany.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
};

export default CreateCompany;
