/*eslint-disable */
import React from 'react';
import classes from './sign-in-second.module.scss';

//Images
import mainImage from '../../assets/img1.png';
import logo from '../../assets/logo.png';

const SecondSigninPage = () => {
  return (
    <div className={classes.base_div}>
      <div className={classes.left_container}>
        <h1>
          Welcome to <span>ASuite</span>
        </h1>
        <img src={mainImage} className={classes.main_image} />
        <img src={logo} className={classes.logo} />
      </div>

      <div className={classes.right_container}>
        <div className={classes.form_div}>
          <h2 className={classes.form_header_text}> Sign In </h2>

          <form className={classes.form}>
            <label className={classes.form_label}>Email</label>
            <input className={classes.form_inputs} placeholder="Email" />

            <label className={classes.form_label}>Password</label>
            <input
              type="password"
              className={classes.form_inputs}
              placeholder="Password"
            />

            <input type="checkbox" style={{ marginTop: '10px' }} />
            <label className={classes.remember_me_text}> Remember Me</label>
            <span className={classes.fotgot_text}>Forgot Password ?</span>
            <div className={classes.login_button}>Log In</div>
          </form>
          <p>
            Not a User? <span> Create Account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSigninPage;
