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
const CompanySignupPage = lazy(() =>
  import('../views/Signup-company/com-signup')
);
const UserRoles = lazy(() => import('../views/UserRoles/UserRoles'));
const Pannel = lazy(() => import('../views/Pannel/Pannel'));

const SigninPage = lazy(() => import('../views/Signin/sign-in.view'));

const UserRolesForms = lazy(() =>
  import('../components/shared/UserRolesForms/UserRolesForms')
);

const CompanyManagementView = lazy(() =>
  import('../views/CompayManagement/CompanyManagement.view')
);

const ProjectManagement = lazy(() =>
  import('../views/ProjectManagement/ProjectManagement')
);

const WebexView = lazy(() => import('../views/WebexView/webex.view'));

const MapWrapper = lazy(() =>
  import('../components/shared/Openlayer/Openlayer')
);

const ManagementOfFieldActivities = lazy(() =>
  import('../views/ManagementOfFieldActivities/ManagementOfFieldActivities')
);
const FieldMapView = lazy(() =>
  import('../views/ManagementOfFieldActivities/pages/FieldMapView.view')
);

const WorkListManagement = lazy(() =>
  import('../views/WorkListManagement/WorkListManagement')
);

const AssignWorkActivities = lazy(() =>
  import('../views/AssignWorkActivities/AssignWorkActivities')
);

const Feedback = lazy(() => import('../views/Feedback/Feedback.view'));

const EmailNotVerified = lazy(() =>
  import('../views/EmailNotVerified/EmailNotVerified')
);

const VerifyEmail = lazy(() => import('../views/VerifyEmail/VerifyEmail'));

const NewPassword = lazy(() => import('../views/NewPassword/NewPassword'));

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
    path: ROUTES.SIGN_UP.USER,
    element: <SignupPage isRedTheme={false} />,
  },
  {
    path: ROUTES.SIGN_UP.COMPANY,
    element: <CompanySignupPage />,
  },
  {
    path: ROUTES.NOT_VERIFIED,
    element: <EmailNotVerified />,
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
        element: <CompanyManagementView />,
        path: ROUTES.COMPANY_MANAGEMENT,
      },

      {
        element: <ProjectManagement />,
        path: ROUTES.PROJECT_MANAGEMENT,
      },

      {
        element: <WorkListManagement />,
        path: ROUTES.WORKLIST_MANAGEMENT,
      },
      {
        element: <AssignWorkActivities />,
        path: ROUTES.ASSIGN_WORK_ACTIVITIES,
      },
      {
        element: <ManagementOfFieldActivities />,
        path: ROUTES.ACTIVITIES_MANAGEMENT,
      },
      {
        element: <FieldMapView />,
        path: ROUTES.FIELD_MAP_VIEW,
      },
      {
        element: <MilestoneApproval />,
        path: ROUTES.MILESTONE_APPROVAl,
      },
      {
        element: <MapWrapper />,
        path: ROUTES.WEB_GIS_SERVICES,
      },
      {
        element: <WebexView />,
        path: ROUTES.WEBEX,
      },
      {
        element: <Feedback />,
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
  {
    path: ROUTES.VERIFY_EMAIL,
    element: <VerifyEmail />,
  },

  {
    path: ROUTES.NEW_PASSWORD,
    element: <NewPassword />,
  },
];

export default appRoutes;
