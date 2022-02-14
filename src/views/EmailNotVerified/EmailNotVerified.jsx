import './EmailNotVerified.scss';

import axios from 'axios';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import logo from '../../assets/logo.png';
import image from '../../assets/signin-info.png';

const EmailNotVerified = () => {
  const [email, setEmail] = React.useState('');

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Please Enter A Valid Email Id')
      .required('Email Is Required'),
  });

  const handleResend = async (e) => {
    e.preventDefault();

    schema
      .validate({
        email,
      })
      .then(async () => {
        const url = `${process.env.REACT_APP_API_HOSTNAME}api/auth/sentForgetNotification?username=${email}`;

        try {
          const urlResponse = await axios.get(url);
          if (urlResponse.data.result === 'invalid user') {
            toast.error('User Not Found!', {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.success('Please Check You Email For Verification Link!', {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        } catch (err) {
          toast.error('Something Went Wrong!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        toast.error(err?.errors[0], {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
          <h2 className="right_header"> Forgot Password </h2>
          <form className="right_form" onSubmit={handleResend}>
            <div className="form_input_container">
              <label className="form_label">Email</label>
              <input
                className="form_input"
                id="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="Email"
                value={email}
              />
              <span className="signup_error">{/* message */}</span>
            </div>
            <button
              className="right_button"
              onClick={handleResend}
              type="button"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailNotVerified;
