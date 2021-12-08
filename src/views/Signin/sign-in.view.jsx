/*eslint-disable */
import React, { useState, useEffect } from 'react';
import classes from './styles/sign-in.module.scss';

//Images
import mainImage from '../../assets/signin-image.png';
import logo from '../../assets/logo.png';

//Spinner
import GlobalSpinner from '../../components/shared/Spinners/GlobalSpinner';

//Styled Components
import { FormButton, FormInput } from './styles/sign-in.syles';

//React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './sign-in.schems';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { userSigninStart } from '../../redux/user-redux/user.actions';
import {
  getLoadingStatus,
  getSigninError,
} from '../../redux/user-redux/user.selectors';

const SigninPage = () => {
  const dispatch = useDispatch();
  const getError = useSelector(getSigninError);
  const onLoading = useSelector(getLoadingStatus);
  const [alerts, setAlerts] = useState(undefined);
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
    setAlerts(getError);
    setIsLoading(onLoading);
  }, [getError, onLoading]);

  return (
    <div className={classes.base_div}>
      <GlobalSpinner isOpen={isLoading} />
      <div className={classes.left_container}>
        <img src={logo} className={classes.logo} />
        <img src={mainImage} className={classes.main_image} />

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
                placeholder="Email"
                id="email"
                type="text"
                {...register('email')}
                error={errors.email?.message}
              />

              <label className={classes.form_labels}>Password</label>
              <FormInput
                className={classes.form_inputs}
                placeholder="*********"
                type="password"
                id="password"
                {...register('password')}
                error={errors.password?.message}
              />
              <div className={classes.remember_me_text}>
                <div>
                  <input
                    type="checkbox"
                    id="rememberMe"
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
