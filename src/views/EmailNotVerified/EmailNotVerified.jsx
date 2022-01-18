import './EmailNotVerified.scss';

import React from 'react';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';

const EmailNotVerified = () => {
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
          <h2 className="right_header"> Verify Email </h2>
          <form className="right_form">
            <div className="form_input_container">
              <label className="form_label">Email</label>
              <input
                className="form_input"
                id="Email"
                placeholder="Email"
                type="Email"
              />
              <span className="signup_error">{/* message */}</span>
            </div>
            <button className="right_button" type="button">
              Resend
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailNotVerified;
