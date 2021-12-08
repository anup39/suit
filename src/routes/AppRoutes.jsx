import React, { lazy } from 'react';

import ROUTES from '../constants/routes';

const HomePage = lazy(() => import('../views/Home/home.view'));
const ErrorBoundryPage = lazy(() =>
  import('../views/Error_boundries/error_boundries.view')
);
const UnavailablePage = lazy(() =>
  import('../views/Error_boundries/unavailable.view')
);
const SignupPage = lazy(() => import('../views/Signup/sign-up.view'));
const UserRoles = lazy(() => import('../views/UserRoles/UserRoles'));

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
    element: <SignupPage isRedTheme={false} />,
  },
  {
    path: ROUTES.USER_ROLES,
    element: <UserRoles />,
    children: [
      {
        path: 'child',
        element: <HomePage />,
      },
      {
        element: <HomePage />,
        path: '/user-roles',
      },
      {
        element: <HomePage />,
        path: 'company-management',
      },
      {
        element: <HomePage />,
        path: 'project-management',
      },
      {
        element: <HomePage />,
        path: 'project-import',
      },
      {
        element: 'Company Management',
        path: 'company-management',
      },
      {
        element: 'Worklist Management',
        path: 'worklist-management',
      },
      {
        element: 'Assign Work Activities',
        path: 'assign-activities',
      },
      {
        element: 'Management of Field Activities',
        path: 'field-activities-management',
      },
      {
        element: 'Company Management',
        path: 'company-management',
      },
      {
        element: 'Milestone Approvl',
        path: 'milestone-approval',
      },
      {
        element: 'ECM services',
        path: 'ecm-services',
      },
      {
        element: 'Web GIS services',
        path: 'gis-services',
      },
      {
        element: 'Webex',
        path: 'webex',
      },
      {
        element: 'Feedback',
        path: 'feedback',
      },
    ],
  },
  {
    path: ROUTES.MAIN,
    element: <HomePage />,
  },
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
];

export default appRoutes;
