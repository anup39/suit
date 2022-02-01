import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import LoadingSpinner from '../../components/shared/LoadingSpinner/LoadingSpinner';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const searchParams = useLocation().search;

  React.useEffect(async () => {
    const verificationCode = await new URLSearchParams(searchParams).get(
      'code'
    );

    const url = `${process.env.REACT_APP_API_HOSTNAME}api/auth/verifyEmail?code=${verificationCode}`;

    try {
      const res = await axios.get(url);

      if (res.data) {
        toast.success('Email Successfully Verified!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate('/asuiteweb/signin');
        }, []);
      }
    } catch (err) {
      toast.error('Failed To Verify You Email!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate('/asuiteweb/user/signup');
      }, 2000);
    }
  });

  return <LoadingSpinner />;
};

export default VerifyEmail;
