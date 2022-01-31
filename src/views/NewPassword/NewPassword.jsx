import './NewPassword.scss';

import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';

const NewPassword = () => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigate = useNavigate();
  const searchParams = useLocation().search;

  const handelResetPassword = async (e) => {
    e.preventDefault();
    const verificationCode = new URLSearchParams(searchParams).get('code');

    if (password === confirmPassword) {
      const url = `${process.env.REACT_APP_API_HOSTNAME}api/auth/setForgetPassword?code=${verificationCode}&password=${password}&retypePassword=${confirmPassword}`;

      try {
        await axios.put(url);
        toast.success('New Password Set!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/asuiteweb/signin');
      } catch (err) {
        toast.error('Failed To Set Password!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warn('Passwords Must Be Same!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                type="password"
              />

              <label className="form_label">Confirm Password</label>
              <input
                className="form_input"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="password"
              />
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
