import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';
// Images
// import mainImage from '../../assets/signin-image.png';
// Spinner
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';
import { userSigninStart } from '../../redux/user-redux/user.actions';
import {
  getIfAuthenticated,
  getLoadingStatus,
  getSigninError,
} from '../../redux/user-redux/user.selectors';
import schema from './sign-in.schems';
import classes from './styles/sign-in.module.scss';
import { ASuit, FormButton, FormInput } from './styles/sign-in.syles';

const SigninPage = () => {
  const dispatch = useDispatch();
  const getError = useSelector(getSigninError);

  const userData = useSelector(getIfAuthenticated);
  const onLoading = useSelector(getLoadingStatus);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
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

  const handelNavigateUser = () => {
    navigate('/user/signup');
  };

  useEffect(() => {
    setIsLoading(onLoading);
    console.log(userData);
    if (getError) {
      toast.error(getError.message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (userData) {
      navigate('/pannel/user-roles');
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
  }, [onLoading, userData]);

  return (
    <div className={classes.signup_container}>
      <GlobalSpinner isOpen={isLoading} />
      <div className={classes.signup_left}>
        <div>
          <h1 className={classes.left_header_blue}>
            Welcome to{' '}
            <ASuit className={classes.left_header_orange}>ASuite</ASuit>
          </h1>
          <div className={classes.left_bottom_logo}>
            <span className={classes.logo_description}>Brought to you by</span>
            <img alt="..loading" className={classes.left_logo} src={logo} />
          </div>
          <div className={classes.left_image_container}>
            <img alt="...Loading" className={classes.left_image} src={image} />
          </div>
          <p className={classes.left_coyright}>Powered by Negentis</p>
        </div>
      </div>
      <div className={classes.signup_right}>
        <div>
          <h1 className={classes.left_header_blue}>
            Welcome to{' '}
            <ASuit
              className={classes.left_header_orange}
              // red={isRedTheme}
            >
              ASuite
            </ASuit>
          </h1>{' '}
          <h2 className={classes.right_header}> Sign In </h2>
          <form
            className={classes.right_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={classes.form_input_container}>
              <label className={classes.form_label}>Username</label>
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
              <label className={classes.form_label}>Password</label>
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
                <label className={classes.check_container}>
                  Remember Me
                  <input
                    id="rememberMe"
                    type="checkbox"
                    {...register('rememberMe')}
                  />
                  <span className={classes.checkmark} />
                </label>
              </div>
              <p className={classes.fotgot_text}>Forgot Code? </p>
            </div>
            <FormButton>Login</FormButton>
          </form>
          <div className={classes.already_user_container}>
            <span className={classes.already_user}>Not a User?</span>{' '}
            <span
              className={classes.create_account_text}
              onClick={handelNavigateUser}
            >
              Create Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
