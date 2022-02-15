import 'react-toastify/dist/ReactToastify.css';

import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import GlobalSpinner from '../../../../components/shared/Spinners/GlobalSpinner';
import {
  createCompany,
  getAllCompany,
  // resetCreateCompany,
  updateCompany,
} from '../../../../redux/company-redux/company.actions';
import {
  getCreateError,
  getCreateSuccess,
  getLoadingStatus,
} from '../../../../redux/company-redux/company.selectors';
import { getUserAuthToken } from '../../../../redux/user-redux/user.selectors';
import classes from './company.module.scss';
import schema from './schema';
// eslint-disable-next-line react/display-name
const CreateCompany = ({ isOpen, isClose, isEdit, prevData }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);
  const successValue = useSelector(getCreateSuccess);
  const errorValue = useSelector(getCreateError);
  const userAccessToken = useSelector(getUserAuthToken);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: prevData?.id,
      name: prevData?.name,
      address: prevData?.address,
      city: prevData?.city,
      reference_contact: prevData?.referenceContact,
    },
  });
  const { t } = useTranslation();

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
    dispatch(createCompany([{ ...data }, { userAccessToken }]));
    setTimeout(() => {
      dispatch(getAllCompany(userAccessToken));
    }, 2000);
  };

  const closeEditDrawer = () => {
    isClose(false);
  };

  const handleEditSubmit = (data) => {
    const dataToSend = {
      authToken: userAccessToken,
      updatedData: data,
    };

    dispatch(updateCompany(dataToSend));
    setTimeout(() => {
      dispatch(getAllCompany(userAccessToken));
    }, 2000);
  };

  return (
    <Drawer anchor="right" onClose={closeDrawer} open={isOpen}>
      <GlobalSpinner isOpen={isLoading} />
      {errorValue ? toast.error(errorValue.message) : undefined}
      {successValue ? toast.success(successValue.message) : undefined}
      <Box
        className="add-feedback"
        role="presentation"
        sx={{ width: 400, padding: 3 }}
      >
        {isEdit ? (
          <h3 className={classes.form_header}>{t('editCompany')}</h3>
        ) : (
          <h3 className={classes.form_header}>{t('createCompany')}</h3>
        )}
        {!isEdit ? (
          <form
            className={classes.form_container}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="name">
                {t('companyName')}
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
                {t('address')}
              </label>
              <textarea
                className={classes.form_input}
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
                {t('city')}
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
                {t('referenceContactNumber')}{' '}
              </label>
              <input
                className={classes.form_input}
                {...register('reference_contact')}
                id="reference_contact"
                type="text"
              />
              <span className={classes.form_error}>
                {errors.number?.message}
              </span>
            </div>
            <div className={classes.form_buttons_container}>
              <span className={classes.form_button_1}>
                <Button
                  color="error"
                  onClick={closeDrawer}
                  sx={{ color: '#8094AE' }}
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
                {t('submit')}
              </Button>
            </div>
          </form>
        ) : (
          <form
            className={classes.form_container}
            onSubmit={handleSubmit(handleEditSubmit)}
          >
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="name">
                {t('companyName')}
              </label>
              <input
                className={classes.form_input}
                {...register('name')}
                id="name"
                type="text"
              />
              <input
                className={classes.form_input}
                {...register('id')}
                id="_id"
                type="hidden"
              />
              <span className={classes.form_error}>{errors.name?.message}</span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="address">
                {t('address')}
              </label>
              <textarea
                className={classes.form_input}
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
                {t('city')}
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
                {t('referenceContactNumber')}{' '}
              </label>
              <input
                className={classes.form_input}
                {...register('reference_contact')}
                id="reference_contact"
                type="text"
              />
              <span className={classes.form_error}>
                {errors.number?.message}
              </span>
            </div>
            <div className={classes.form_buttons_container}>
              <span className={classes.form_button_1}>
                <Button
                  color="error"
                  onClick={closeEditDrawer}
                  sx={{ color: '#8094AE' }}
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
                {t('submit')}
              </Button>
            </div>
          </form>
        )}
      </Box>
    </Drawer>
  );
};

/* eslint-disable */
CreateCompany.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  prevData: PropTypes.object,
};

export default CreateCompany;
