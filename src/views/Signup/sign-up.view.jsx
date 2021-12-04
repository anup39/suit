import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logoPicture.png';
import image from '../../assets/signupPicture.png';
import Alert from '../../components/shared/Alerts/Alert';
import { userSignupStart } from '../../redux/user-redux/user.actions';
import { getSignedupError } from '../../redux/user-redux/user.selectors';
import schema from './sign-up.schema';
import classes from './styles/sign-up.module.scss';
import { ASuit, FormButton, FormInput } from './styles/sign-up.styles';

const SignupPage = ({ isRedTheme }) => {
  const dispatch = useDispatch();
  const getError = useSelector(getSignedupError);
  const [alerts, setAlerts] = useState(undefined);

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
    setAlerts(getError);
  }, [getError]);



  return (
    <div className={classes.signup_container}>
      <div className={classes.signup_left}>
        {alerts ? (
          <Alert
            message={alerts.response.data.message}
            title="Error"
            type="danger"
          />
        ) : undefined}
        <h1 className={classes.left_header_blue}>
          Welcome to
          <ASuit className={classes.left_header_orange} red={isRedTheme}>
            ASuite
          </ASuit>
        </h1>
        <div className={classes.left_image_container}>
          <img alt="...Loading" className={classes.left_image} src={image} />
        </div>
        <div className={classes.left_bottom_logo}>
          <span className={classes.logo_description}>Powered by</span>
          <img alt="..loading" className={classes.left_logo} src={logo} />
        </div>
      </div>
      <div className={classes.signup_right}>
        <h2 className={classes.right_header}> Sign Up </h2>
        <form className={classes.right_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="firstName">
              First Name
            </label>
            <FormInput
              className={classes.form_input}
              id="firstName"
              {...register('firstName')}
              error={errors.firstName?.message}
              placeholder="First Name"
              type="text"
            />
            <span className={classes.signup_error}>
              {errors.firstName?.message}
            </span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="lasttName">
              Last Name
            </label>
            <FormInput
              className={classes.form_input}
              id="lastName"
              {...register('lastName')}
              error={errors.lastName?.message}
              placeholder="Last Name"
              type="text"
            />
            <span className={classes.signup_error}>
              {errors.lastName?.message}
            </span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="email">
              Email
            </label>
            <FormInput
              className={classes.form_input}
              id="email"
              {...register('username')}
              error={errors.username?.message}
              placeholder="Email"
              type="text"
            />
            <span className={classes.signup_error}>
              {errors.username?.message}
            </span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="password">
              Password
            </label>
            <FormInput
              className={classes.form_input}
              id="password"
              {...register('password')}
              error={errors.password?.message}
              placeholder="Password"
              type="password"
            />
            <span className={classes.signup_error}>
              {errors.password?.message}
            </span>
          </div>
          <div className={classes.form_input_container}>
            <label className={classes.form_label} htmlFor="conPassword">
              Confirm Password
            </label>
            <FormInput
              className={classes.form_input}
              id="conPassword"
              {...register('conPassword')}
              error={errors.conPassword?.message}
              placeholder="Confirm Password"
              type="password"
            />
            <span className={classes.signup_error}>
              {errors.conPassword?.message}
            </span>
          </div>
          <FormButton
            className={classes.form_button}
            red={isRedTheme}
            type="submit"
          >
            Sign up
          </FormButton>
        </form>
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  isRedTheme: PropTypes.bool.isRequired,
};

export default SignupPage;
