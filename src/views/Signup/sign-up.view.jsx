import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import logo from '../../assets/logoPicture.png';
import image from '../../assets/signin-info.png';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import {
  resetSignupError,
  userSignupStart,
} from '../../redux/user-redux/user.actions';
import {
  getLoadingStatus,
  getSignedupError,
} from '../../redux/user-redux/user.selectors';
import schema from './sign-up.schema';
import classes from './styles/sign-up.module.scss';
import {
  ASuit,
  FormButton,
  FormInput,
  LinkWrapper,
} from './styles/sign-up.styles';

const SignupPage = ({ isRedTheme }) => {
  const dispatch = useDispatch();
  const onLoading = useSelector(getLoadingStatus);
  const [alerts, setAlerts] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const signupError = useSelector(getSignedupError);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // eslint-disable-next-line no-param-reassign
    delete data.conPassword;
    dispatch(userSignupStart(data));
  };

  useEffect(() => {
    setIsLoading(onLoading);

    if (signupError) {
      toast.error('Email Already Exists! Please Login!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetSignupError());
      navigate('/signin');
    }
  }, [onLoading, signupError]);

  return (
    <div className={classes.signup_container}>
      <GlobalSpinner isOpen={isLoading} />
      <div className={classes.signup_left}>
        <div>
          <h1 className={classes.left_header_blue}>
            {t('welcomeTo')}
            <ASuit className={classes.left_header_orange} red={isRedTheme}>
              ASuite
            </ASuit>
          </h1>

          <div className={classes.left_bottom_logo}>
            <span className={classes.logo_description}>
              {t('broughtToYouBy')}
            </span>
            <img alt="..loading" className={classes.left_logo} src={logo} />
          </div>
          <div className={classes.left_image_container}>
            <img alt="...Loading" className={classes.left_image} src={image} />
          </div>
          <p className={classes.left_coyright}>{t('poweredBy')} Negentis</p>
        </div>
      </div>
      <div className={classes.signup_right}>
        <div>
          <h1 className={classes.left_header_blue}>
            {t('welcomeTo')}
            <ASuit className={classes.left_header_orange} red={isRedTheme}>
              ASuite
            </ASuit>
          </h1>
          <h2 className={classes.right_header}> {t('signup')} </h2>
          <form
            className={classes.right_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="firstName">
                {t('firstName')} <sup>*</sup>
              </label>
              <FormInput
                className={classes.form_input}
                id="firstName"
                {...register('firstName')}
                error={errors.firstName?.message}
                placeholder={t('firstName')}
                type="text"
              />
              <span className={classes.signup_error}>
                {errors.firstName?.message}
              </span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="lasttName">
                {t('lastName')} <sup>*</sup>
              </label>
              <FormInput
                className={classes.form_input}
                id="lastName"
                {...register('lastName')}
                error={errors.lastName?.message}
                placeholder={t('lastName')}
                type="text"
              />
              <span className={classes.signup_error}>
                {errors.lastName?.message}
              </span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="email">
                Email <sup>*</sup>
              </label>
              <FormInput
                className={classes.form_input}
                id="email"
                {...register('username')}
                error={
                  errors.username ? errors.username?.message : alerts?.message
                }
                onChange={() => setAlerts(null)}
                placeholder="Email"
                type="text"
              />
              <span className={classes.signup_error}>
                {errors.username?.message}
                {alerts?.message}
              </span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="password">
                {t('password')} <sup>*</sup>
              </label>
              <FormInput
                className={classes.form_input}
                id="password"
                {...register('password')}
                error={errors.password?.message}
                placeholder={t('password')}
                type="password"
              />
              <span className={classes.signup_error}>
                {errors.password?.message}
              </span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="conPassword">
                {t(`confirmPassword`)} <sup>*</sup>
              </label>
              <FormInput
                className={classes.form_input}
                id="conPassword"
                {...register('conPassword')}
                error={errors.conPassword?.message}
                placeholder={t(`confirmPassword`)}
                type="password"
              />
              <span className={classes.signup_error}>
                {errors.conPassword?.message}
              </span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label} htmlFor="Company">
                {t('company')}
              </label>
              <FormInput
                className={classes.form_input}
                id="Company"
                {...register('Company')}
                error={errors.Company?.message}
                placeholder={t('company')}
                type="text"
              />
              <span className={classes.signup_error}>
                {errors.Company?.message}
              </span>
            </div>
            <FormButton
              className={classes.form_button}
              red={isRedTheme}
              type="submit"
            >
              {t('signup')}
            </FormButton>
          </form>
          <div className={classes.already_user_container}>
            <span className={classes.already_user}>
              {t('alreadyUser')}
              <LinkWrapper to="/signin"> {t('login')}</LinkWrapper>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  isRedTheme: PropTypes.bool.isRequired,
};

export default SignupPage;
