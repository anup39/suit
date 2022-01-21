import './NewPassword.scss';

import React from 'react';
import { useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';

const NewPassword = () => {
  const searchParams = useLocation().search;

  const handelResetPassword = (e) => {
    e.preventDefault();
    const verificationCode = new URLSearchParams(searchParams).get('code');
    console.log(verificationCode);
  };

  return (
    <div className="signup_container">
      <div className="signup_left">
        <div>
          <h1 className="left_header_blue">
            Welcome to <span className="left_header_orange">ASuite</span>
          </h1>
          <div className="left_bottom_logo">
            <span className="logo_description">Brought to you by</span>
            <img alt="..loading" className="left_logo" src={logo} />
          </div>
          <div className="left_image_container">
            <img alt="...Loading" className="left_image" src={image} />
          </div>
          <p className="left_coyright">Powered By Negentis</p>
        </div>
      </div>
      <div className="signup_right">
        <div>
          <h1 className="left_header_blue">
            Welcome to <span className="left_header_orange">ASuite</span>
          </h1>
          <h2 className="right_header"> New Password </h2>
          <form className="right_form">
            <div className="form_input_container">
              <label className="form_label">New Password</label>
              <input
                className="form_input"
                id="password"
                placeholder="New Password"
                type="password"
              />
              <span className="signup_error">{/* message */}</span>

              <label className="form_label">Confirm Password</label>
              <input
                className="form_input"
                id="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
              <span className="signup_error">{/* message */}</span>
            </div>
            <button
              className="right_button"
              onClick={handelResetPassword}
              type="submit"
            >
              Set New Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
