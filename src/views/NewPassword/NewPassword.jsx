import './NewPassword.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';
import schema from './newPasswordSchema';

const NewPassword = () => {
  const navigate = useNavigate();
  const searchParams = useLocation().search;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const newPassword = data.password;
    const confirmPassword = data.conPassword;

    const verificationCode = new URLSearchParams(searchParams).get('code');

    const url = `${process.env.REACT_APP_API_HOSTNAME}api/auth/setForgetPassword?code=${verificationCode}&password=${newPassword}&retypePassword=${confirmPassword}`;

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
          <form className="right_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_input_container">
              <label className="form_label">New Password</label>
              <input
                {...register('password')}
                className="form_input"
                placeholder="New Password"
                type="password"
              />

              <span className="new-password-errors">
                {errors.password?.message}
              </span>

              <label className="form_label">Confirm Password</label>
              <input
                {...register('conPassword')}
                className="form_input"
                placeholder="Confirm Password"
                type="password"
              />

              <span className="new-password-errors">
                {errors.conPassword?.message}
              </span>
            </div>
            <button className="right_button" type="submit">
              Set New Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
