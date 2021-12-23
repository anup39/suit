import React, { lazy } from 'react';

import ROUTES from '../constants/routes';

const MilestoneApproval = lazy(() =>
  import('../views/MilestoneApproval/MilestoneApproval')
);

const HomePage = lazy(() => import('../views/Home/home.view'));
const ErrorBoundryPage = lazy(() =>
  import('../views/Error_boundries/error_boundries.view')
);
const UnavailablePage = lazy(() =>
  import('../views/Error_boundries/unavailable.view')
);

const SignupPage = lazy(() => import('../views/Signup/sign-up.view'));
const Pannel = lazy(() => import('../views/Pannel/Pannel'));

const SigninPage = lazy(() => import('../views/Signin/sign-in.view'));

const UserRolesForms = lazy(() =>
  import('../components/shared/UserRolesForms/UserRolesForms')
);

const UserRoles = lazy(() => import('../views/UserRoles/UserRoles'));

const ProjectManagement = lazy(() =>
  import('../views/ProjectManagement/ProjectManagement')
);

const Webex = lazy(() => import('../views/Webex/Webex'));

const OpenLayer = lazy(() =>
  import('../components/shared/Openlayer/Openlayer')
);

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
    path: ROUTES.PANNEL,
    element: <Pannel />,
    children: [
      {
        element: <UserRoles />,
        path: ROUTES.USER_ROLES,
      },

      {
        element: <ProjectManagement />,
        path: ROUTES.PROJECT_MANAGEMENT,
      },
      {
        element: <HomePage />,
        path: ROUTES.IMPORT_PROJECT_DATA,
      },
      {
        element: 'Company Management',
        path: ROUTES.WORKLIST_MANAGEMENT,
      },
      {
        element: 'Worklist Management',
        path: ROUTES.ASSIGN_WORK_ACTIVITIES,
      },
      {
        element: 'Assign Work Activities',
        path: ROUTES.ACTIVITIES_MANAGEMENT,
      },
      {
        element: <MilestoneApproval />,
        path: ROUTES.MILESTONE_APPROVAl,
      },
      {
        element: 'ECM services',
        path: ROUTES.ECM_SERVICES,
      },
      {
        element: <OpenLayer />,
        path: ROUTES.WEB_GIS_SERVICES,
      },
      {
        element: <Webex />,
        path: ROUTES.WEBEX,
      },
      {
        element: 'Feedback',
        path: ROUTES.FEEDBACK_SERVICES,
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
  {
    path: ROUTES.SIGN_IN,
    element: <SigninPage />,
  },

  {
    path: ROUTES.USER,
    element: <UserRolesForms />,
  },
];

export default appRoutes;
