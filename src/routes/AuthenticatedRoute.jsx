import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

import ROUTES from '../constants/routes';

const AuthenticatedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <Navigate to={ROUTES.SIGN_IN} />
  );
};

export default AuthenticatedRoute;

AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
