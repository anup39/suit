import axios from 'axios';

import API_END_POINTS from '../constants/api.endpoints';

export const SIGNUP = async (userData) => {
  const register = await axios.post(API_END_POINTS.signup, userData);
  return register.data;
};

export const SIGNIN = async (userData) => {
  const signin = await axios.post(API_END_POINTS.signin, userData);
  return signin.data;
};
