import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Redux
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
// Images
import mainImage from '../../assets/signin-image.png';
// Spinner
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import { userSigninStart } from '../../redux/user-redux/user.actions';
import {
  getLoadingStatus,
  getSigninError,
} from '../../redux/user-redux/user.selectors';
import schema from './sign-in.schems';
import classes from './styles/sign-in.module.scss';
// Styled Components
import { FormButton, FormInput } from './styles/sign-in.syles';

const SigninPage = () => {
  const dispatch = useDispatch();
  const getError = useSelector(getSigninError);
  const onLoading = useSelector(getLoadingStatus);
  // const [alerts, setAlerts] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    dispatch(userSigninStart(data));
  };

  useEffect(() => {
    // setAlerts(getError);
    setIsLoading(onLoading);
  }, [getError, onLoading]);

  return (
    <div className={classes.base_div}>
      <GlobalSpinner isOpen={isLoading} />
      <div className={classes.left_container}>
        <img alt="" className={classes.logo} src={logo} />
        <img alt="" className={classes.main_image} src={mainImage} />

        <p className={classes.footer_text}>Powered by Negentis</p>
      </div>
      <div className={classes.right_container}>
        <div>
          <p className={classes.header_text}>Welcome back to SuiteA</p>
          <div className={classes.form_div}>
            <p className={classes.form_header_text}>Sign In</p>

            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <label className={classes.form_labels}>Username</label>
              <FormInput
                className={classes.form_inputs}
                id="username"
                placeholder="Email"
                type="text"
                {...register('username')}
                error={errors.email?.message}
              />
              <span className={classes.error_text}>
                {errors.username?.message}
              </span>
              <label className={classes.form_labels}>Password</label>
              <FormInput
                className={classes.form_inputs}
                id="password"
                placeholder="*********"
                type="password"
                {...register('password')}
                error={errors.password?.message}
              />{' '}
              <span className={classes.error_text}>
                {errors.password?.message}
              </span>
              <div className={classes.remember_me_text}>
                <div>
                  <input
                    id="rememberMe"
                    type="checkbox"
                    {...register('rememberMe')}
                  />
                  <label>Remember Me</label>
                </div>
                <p className={classes.fotgot_text}>Forgot Code? </p>
              </div>
              <FormButton>Login</FormButton>
            </form>

            <p className={classes.no_account_text}>
              Not a user? <span>Create Account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
