import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import ROUTES from '../constants/routes';

const HomePage = lazy(() => import('../views/Home/home.view'));
const ErrorBoundryPage = lazy(() =>
  import('../views/Error_boundries/error_boundries.view')
);
const UnavailablePage = lazy(() =>
  import('../views/Error_boundries/unavailable.view')
);
const SignupPage = lazy(() => import('../views/Signup/sign-up.view'));

const appRoutes = [
  {
    path: ROUTES.ERROR,
    element: <ErrorBoundryPage />,
  },
  {
    path: ROUTES.UNAVAILABLE,
    element: <UnavailablePage />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignupPage />,
  },
  {
    path: ROUTES.MAIN,
    element: <Navigate to={ROUTES.SIGN_UP} />,
  },
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
];

export default appRoutes;
