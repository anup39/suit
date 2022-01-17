/*eslint-disable*/
import PROJECT_MANAGEMENT_TYPES from './project-management.action-types';

const PROJECT_MANAGEMENT_INITIAL_STATE = {
  isCreateNewProjectLoading: false,
  createNewProjectError: false,
  createNewProjectData: '',

  isProjectListLoading: false,
  projectList: [],
  projectListError: false,

  isGetProductDataLoading: false,
  getCurrentProductData: '',
  getCurrentProductDataError: false,

  isDeleteProjectDataLoading: false,
  deleteProjectDataSuccess: '',
  deleteProjectDataError: '',

  currentProjectDocuments: '',
  isCurrentProjectDocumentsLoading: false,
  currentProjectDocumentsError: '',

  assingProject: '',
  isAssingProjectLoading: false,
  assingProjectError: '',
};

const projectManagementReducer = (
  state = PROJECT_MANAGEMENT_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT:
      return {
        ...state,
        isCreateNewProjectLoading: true,
        createNewProjectError: false,
        createNewProjectData: '',
      };

    case PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT_SUCCESS:
      return {
        ...state,
        isCreateNewProjectLoading: false,
        createNewProjectError: false,
        createNewProjectData: action.payload,
      };

    case PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT_ERROR:
      return {
        ...state,
        isCreateNewProjectLoading: false,
        createNewProjectError: action.payload,
        createNewProjectData: '',
      };

    case PROJECT_MANAGEMENT_TYPES.RESET_NEW_PROJECT_DATA:
      return {
        ...state,
        isCreateNewProjectLoading: false,
        createNewProjectError: '',
        createNewProjectData: '',
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST:
      return {
        ...state,
        isProjectListLoading: true,
        projectList: [],
        projectListSuccess: false,
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST_SUCCESS:
      return {
        ...state,
        isProjectListLoading: false,
        projectList: action.payload,
        projectListError: '',
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST_ERROR:
      return {
        ...state,
        isProjectListLoading: false,
        projectList: [],
        projectListError: action.payload,
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DATA:
      return {
        ...state,
        isGetProductDataLoading: true,
        getCurrentProductData: '',
        getCurrentProductDataError: false,
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        isGetProductDataLoading: false,
        getCurrentProductData: action.payload,
        getCurrentProductDataError: false,
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DATA_ERROR:
      return {
        ...state,
        isGetProductDataLoading: false,
        getCurrentProductData: '',
        getCurrentProductDataError: action.payload,
      };

    case PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA:
      return {
        ...state,
        isDeleteProjectDataLoading: true,
        deleteProjectDataSuccess: '',
        deleteProjectDataError: '',
      };

    case PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        isDeleteProjectDataLoading: false,
        deleteProjectDataSuccess: action.payload,
        deleteProjectDataError: '',
      };

    case PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA_ERROR:
      return {
        ...state,
        isDeleteProjectDataLoading: false,
        deleteProjectDataSuccess: '',
        deleteProjectDataError: action.payload,
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS:
      return {
        ...state,
        currentProjectDocuments: '',
        isCurrentProjectDocumentsLoading: true,
        currentProjectDocumentsError: '',
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS_SUCCESS:
      return {
        ...state,
        currentProjectDocuments: action.payload,
        isCurrentProjectDocumentsLoading: false,
        currentProjectDocumentsError: '',
      };

    case PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS_ERROR:
      return {
        ...state,
        currentProjectDocuments: '',
        isCurrentProjectDocumentsLoading: false,
        currentProjectDocumentsError: action.payload,
      };

    case PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY:
      return {
        ...state,
        assingProject: '',
        isAssingProjectLoading: true,
        assingProjectError: '',
      };

    case PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY_ERROR:
      return {
        ...state,
        assingProject: '',
        isAssingProjectLoading: false,
        assingProjectError: action.payload,
      };

    case PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY_SUCCESS:
      return {
        ...state,
        assingProject: action.payload,
        isAssingProjectLoading: false,
        assingProjectError: '',
      };

    default:
      return state;
  }
};

export default projectManagementReducer;
