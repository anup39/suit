import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import { userSigninStart } from '../../redux/user-redux/user.actions';
import {
  getIfAuthenticated,
  // getLoadingStatus,
  getSigninError,
  getUserData,
} from '../../redux/user-redux/user.selectors';
import schema from './sign-in.schems';
import classes from './styles/sign-in.module.scss';
import { ASuit, FormButton, FormInput } from './styles/sign-in.syles';

const SigninPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const getError = useSelector(getSigninError);
  const isAuthenticated = useSelector(getIfAuthenticated);
  const userData = useSelector(getUserData);

  const { t } = useTranslation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    dispatch(userSigninStart(data));
  };

  const handelNavigateUser = () => {
    navigate('/asuiteweb/user/signup');
  };

  const handleForgotPassword = () => {
    navigate('/asuiteweb/forgotPassword');
  };

  useEffect(() => {
    if (getError) {
      setIsLoading(false);
      toast.error("Sign in Failed", {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (isAuthenticated) {
      if (userData.status) {
        setIsLoading(false);
        navigate('/asuiteweb/verify');
      } else {
        setIsLoading(false);

        if (userData.roles[0] === 'planA_admin') {
          navigate('/asuiteweb/pannel/user-roles');
        } else if (userData.roles[0] === 'public') {
          navigate('/asuiteweb/pannel/feedback-services');
        } else if (userData.roles[0] === 'planA_Engg') {
          navigate('/asuiteweb/pannel/project-management');
        } else if (userData.roles[0] === 'ext_engg') {
          navigate('/asuiteweb/pannel/project-management');
        } else if (userData.roles[0] === 'ext_worker') {
          navigate('/asuiteweb/pannel/project-management');
        }

        toast.success('Signin Success', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }, [isAuthenticated, getError]);

  return (
    <div className={classes.signup_container}>
      <GlobalSpinner isOpen={isLoading} />
      <div className={classes.signup_left}>
        <div>
          <h1 className={classes.left_header_blue}>
            {t('welcomeTo')}

            <ASuit className={classes.left_header_orange}>ASuite</ASuit>
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

            <ASuit
              className={classes.left_header_orange}
              // red={isRedTheme}
            >
              ASuite
            </ASuit>
          </h1>{' '}
          <h2 className={classes.right_header}> {t('login')} </h2>
          <form
            className={classes.right_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.form_input_container}>
              <label className={classes.form_label}>
                {t('username')} <sup>*</sup>{' '}
              </label>
              <FormInput
                className={classes.form_input}
                id="username"
                placeholder="Email"
                type="text"
                {...register('username')}
                error={errors.email?.message}
              />
              <span className={classes.signup_error}>
                {errors.username?.message}
              </span>
            </div>
            <div className={classes.form_input_container}>
              <label className={classes.form_label}>
                {t('password')} <sup>*</sup>{' '}
              </label>
              <FormInput
                className={classes.form_input}
                id="password"
                placeholder="*********"
                type="password"
                {...register('password')}
                error={errors.password?.message}
              />{' '}
              <span className={classes.signup_error}>
                {errors.password?.message}
              </span>
            </div>
            <div className={classes.remember_me_text}>
              <div>
                {/* <label className={classes.check_container}>
                  {t('rememberMe')}
                  <input
                    id="rememberMe"
                    type="checkbox"
                    {...register('rememberMe')}
                  />
                  <span className={classes.checkmark} />
                </label> */}
              </div>
              <p className={classes.fotgot_text} onClick={handleForgotPassword}>
                {t('fotgotCode')}{' '}
              </p>
            </div>
            <FormButton>{t('login')}</FormButton>
          </form>
          <div className={classes.already_user_container}>
            <span className={classes.already_user}>{t('notAUser')}</span>{' '}
            <span
              className={classes.create_account_text}
              onClick={handelNavigateUser}
            >
              {t('createAccount')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
