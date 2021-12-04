import axios from 'axios';

import API_END_POINTS from '../constants/api.endpoints';

const SIGNUP = async (userData) => {
  const register = await axios.post(API_END_POINTS.signup, userData);
  return register.data;
};

export default SIGNUP;
