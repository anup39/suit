const API_END_POINTS = {
  signup: 'http://65.0.101.186:8080/api/auth/signup',
  signin: 'http://65.0.101.186:8080/api/auth/signin',
  refreshToken: 'http://65.0.101.186:8080/api/auth/refreshToken',
  company: {
    create: 'http://65.0.101.186:8080/api/createCompany',
    update: 'http://65.0.101.186:8080/api/updateCompany',
  },
};

export default API_END_POINTS;
