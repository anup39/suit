const ROUTES = {
  ERROR: '404',
  UNAVAILABLE: '*',
  MAIN: '/asuiteweb/',
  HOME: '/asuiteweb/home',
  SIGN_UP: {
    COMPANY: '/asuiteweb/company/signup',
    USER: '/asuiteweb/user/signup',
  },
  SIGN_IN: '/asuiteweb/signin',
  FORM: '/asuiteweb/form',
  USER: '/asuiteweb/form/user',
  TEST: '/asuiteweb/test',
  USER_ROLES: '/asuiteweb/pannel/user-roles',

  COMPANY_MANAGEMENT: '/asuiteweb/pannel/company-management',
  PROJECT_MANAGEMENT: '/asuiteweb/pannel/project-management',
  WORKLIST_MANAGEMENT: '/asuiteweb/pannel/worklist-management',
  FIELD_MAP_VIEW: '/asuiteweb/pannel/activities-management/field-map-view',
  ASSIGN_WORK_ACTIVITIES: '/asuiteweb/pannel/assign-work-activities',
  ACTIVITIES_MANAGEMENT: '/asuiteweb/pannel/activities-management',
  MILESTONE_APPROVAl: '/asuiteweb/pannel/milestone-approval',
  ECM_SERVICES: '/asuiteweb/pannel/ecm-services',
  WEB_GIS_SERVICES: '/asuiteweb/pannel/web-gis-services',
  WEBEX: '/asuiteweb/pannel/webex',
  FEEDBACK_SERVICES: '/asuiteweb/pannel/feedback-services',
  VIEW_PROJECT: '/asuiteweb/pannel/project-management/project/view',
  PANNEL: '/asuiteweb/pannel',
  NOT_VERIFIED: '/asuiteweb/forgotPassword',
  VERIFY_EMAIL: '/asuiteweb/verifyEmail',
  NEW_PASSWORD: '/asuiteweb/newPassword',
};

export default ROUTES;
