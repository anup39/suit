const ROUTES = {
  ERROR: '404',
  UNAVAILABLE: '*',
  MAIN: '/',
  HOME: '/home',
  SIGN_UP: {
    COMPANY: '/company/signup',
    USER: '/user/signup',
  },
  SIGN_IN: '/signin',
  FORM: '/form',
  USER: '/form/user',
  TEST: '/test',
  USER_ROLES: '/pannel/user-roles',

  COMPANY_MANAGEMENT: '/pannel/company-management',
  PROJECT_MANAGEMENT: '/pannel/project-management',
  WORKLIST_MANAGEMENT: '/pannel/worklist-management',
  FIELD_MAP_VIEW: '/pannel/activities-management/field-map-view',
  ASSIGN_WORK_ACTIVITIES: '/pannel/assign-work-activities',
  ACTIVITIES_MANAGEMENT: '/pannel/activities-management',
  MILESTONE_APPROVAl: '/pannel/milestone-approval',
  ECM_SERVICES: '/pannel/ecm-services',
  WEB_GIS_SERVICES: '/pannel/web-gis-services',
  WEBEX: '/pannel/webex',
  FEEDBACK_SERVICES: '/pannel/feedback-services',
  PANNEL: 'pannel',
  NOT_VERIFIED: 'verify',
};

export default ROUTES;
