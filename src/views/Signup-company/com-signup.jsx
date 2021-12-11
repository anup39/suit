/* import React from 'react';
import { useForm } from 'react-hook-form';

import classes from './styles/com-signup.styles.module.scss';

const CompanySignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className={classes.signup_container}>
      <div className={classes.main_container}>
        <div className={classes.main_left}>
          <h2 className={classes.main_left_header}>
            Welcome to
            <span className={classes.header_ASuit}>SuiteA</span>
          </h2>
          <div className={classes.main_logo_container}>
            <span className={classes.logo_powered}>Brought to you by</span>
            <img
              alt="powered by"
              className={classes.logo_powered_img}
              src="/"
            />
          </div>
          <img alt="powered by" className={classes.main_left_img} src="/" />
        </div>
        <div className={classes.main_right}>
          <div className={classes.form_container}>
            <h3 className={classes.form_header}>Sign Up</h3>
            <form
              className={classes.form_box}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={classes.input_container}>
                <label className={classes.input_label}>First Name</label>
                <input
                  type="text"
                  {...register('firstName')}
                  className={classes.inputform_input}
                  error={errors.firstName?.message}
                  placeholder="First Name"
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className={classes.bottom_tag}>Powered by Negentis</p>
    </div>
  );
};

export default CompanySignup;*/
