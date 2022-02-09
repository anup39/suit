import ROUTES from '../../constants/routes';

const MenuOptions = {
  planA_admin: [
    {
      name: 'userRoles',
      path: ROUTES.USER_ROLES,
    },
    {
      name: 'companyManagement',
      path: ROUTES.COMPANY_MANAGEMENT,
    },
    {
      name: 'projectManagement',
      path: ROUTES.PROJECT_MANAGEMENT,
    },

    {
      name: 'worklistManagement',
      path: ROUTES.WORKLIST_MANAGEMENT,
    },
    {
      name: 'assingWorkActivities',
      path: ROUTES.ASSIGN_WORK_ACTIVITIES,
    },
    {
      name: 'managementOfFieldActivities',
      path: ROUTES.ACTIVITIES_MANAGEMENT,
    },
    {
      name: 'milestoneApproval',
      path: ROUTES.MILESTONE_APPROVAl,
    },
    {
      name: 'webGisServices',
      path: ROUTES.WEB_GIS_SERVICES,
    },
    {
      name: 'webEx',
      path: ROUTES.WEBEX,
    },
    {
      name: 'feedback',
      path: ROUTES.FEEDBACK_SERVICES,
    },
  ],

  planA_Engg: [
    {
      name: 'managementOfFieldActivities',
      path: ROUTES.ACTIVITIES_MANAGEMENT,
    },
    {
      name: 'webGisServices',
      path: ROUTES.WEB_GIS_SERVICES,
    },
    {
      name: 'webEx',
      path: ROUTES.WEBEX,
    },
    {
      name: 'feedback',
      path: ROUTES.FEEDBACK_SERVICES,
    },
  ],

  ext_engg: [
    {
      name: 'projectManagement',
      path: ROUTES.PROJECT_MANAGEMENT,
    },
    {
      name: 'webGisServices',
      path: ROUTES.WEB_GIS_SERVICES,
    },
  ],

  ext_worker: [
    {
      name: 'webGisServices',
      path: ROUTES.WEB_GIS_SERVICES,
    },
  ],

  public: [
    {
      name: 'feedback',
      path: ROUTES.FEEDBACK_SERVICES,
    },
  ],
};

export default MenuOptions;
