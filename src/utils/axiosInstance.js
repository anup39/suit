import axios from 'axios';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';

import { REFERSH_TOKEN } from '../services/api';

let userData = localStorage.getItem('persist:root');

if (userData) {
  userData = JSON.parse(JSON.parse(userData)?.user);
}

let userAccessToken = localStorage.getItem('accessToken');

if (userAccessToken) {
  userAccessToken = !JSON.parse(localStorage.getItem('accessToken'))
    ? userData?.userData?.accessToken
    : JSON.parse(localStorage.getItem('accessToken'));
} else {
  userAccessToken = userData?.userData?.accessToken;
}

const hostName = 'http://13.233.23.132:8080/';

const axiosInstance = axios.create({
  hostName,
  headers: { Authorization: `Bearer ${userAccessToken}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  const userRefreshToken = userData?.userData?.refreshToken;
  const accessTokenExpiry = jwtDecode(userAccessToken)?.exp;
  const isTokenExpired = dayjs.unix(accessTokenExpiry).diff(dayjs()) < 1;

  if (isTokenExpired) {
    const newToken = await REFERSH_TOKEN(userRefreshToken);
    req.headers.Authorization = `Bearer ${newToken}`;
    localStorage.setItem('accessToken', newToken);
  } else {
    req.headers.Authorization = `Bearer ${userAccessToken}`;
    return req;
  }
  return req;
});

export default axiosInstance;
