const API_END_POINTS = {
  signup: `${process.env.REACT_APP_API_HOSTNAME}api/auth/signup`,
  signin: `${process.env.REACT_APP_API_HOSTNAME}api/auth/signin`,
  signOut: `${process.env.REACT_APP_API_HOSTNAME}api/logout`,
  refreshToken: `${process.env.REACT_APP_API_HOSTNAME}api/auth/refreshtoken`,
  getUser: `${process.env.REACT_APP_API_HOSTNAME}api/ListUser`,
  getUserById: `${process.env.REACT_APP_API_HOSTNAME}api/Userdetails/`,
  getAllUserRoles: `${process.env.REACT_APP_API_HOSTNAME}api/allRoleList`,
  updateUserRole: `${process.env.REACT_APP_API_HOSTNAME}api/updateUseRole`,
  deleteUser: `${process.env.REACT_APP_API_HOSTNAME}api/deleteUserDetails`,
  deleteUserInList: `${process.env.REACT_APP_API_HOSTNAME}api/deleteUserList`,
};

export default API_END_POINTS;
