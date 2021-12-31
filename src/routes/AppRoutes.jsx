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
const CompanySignupPage = lazy(() =>
  import('../views/Signup-company/com-signup')
);
const UserRoles = lazy(() => import('../views/UserRoles/UserRoles'));
const Pannel = lazy(() => import('../views/Pannel/Pannel'));

const SigninPage = lazy(() => import('../views/Signin/sign-in.view'));

const CreateCompanyForm = lazy(() =>
  import('../components/shared/CompanyManagementForms/AddUser/Add-User-Form')
);

const UserRolesForms = lazy(() =>
  import('../components/shared/UserRolesForms/UserRolesForms')
);

const CompanyManagementView = lazy(() =>
  import('../views/CompayManagement/CompanyManagement.view')
);
const ImportProjectPage = lazy(() =>
  import('../views/ImportProject/import-project.view')
);
const Test = lazy(() => import('../views/Test/Test'));

const ProjectManagement = lazy(() =>
  import('../views/ProjectManagement/ProjectManagement')
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
    path: ROUTES.SIGN_UP.USER,
    element: <SignupPage isRedTheme={false} />,
  },
  {
    path: ROUTES.SIGN_UP.COMPANY,
    element: <CompanySignupPage />,
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
        element: <MilestoneApproval />,
        path: ROUTES.MILESTONE_APPROVAl,
      },
      {
        element: <MapWrapper />,
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
    path: ROUTES.FORM,
    element: <CreateCompanyForm />,
  },
  {
    path: ROUTES.USER,
    element: <UserRolesForms />,
  },
  {
    path: ROUTES.TEST,
    element: <Test />,
  },
];

export default appRoutes;
