import COMPANY_ACTION_TYPES from './company.action-types';
import {
  eraseUncheckedCompany,
  makeCheckedCompanyArray,
} from './company.utils';

const COMPANY_INITIAL_STATE = {
  isLoading: false,
  createStatus: null,
  error: null,
  createData: null,

  isAllCompanyLoading: false,
  allCompanyData: '',
  allCompanyError: '',

  checkedCompanyList: [],
  globalCheckedStatus: false,

  deleteCompanySuccess: undefined,
  deleteCompanyError: undefined,
  isDeleteOnProgress: false,
  deletingItem: {},

  isUpdateCompanyLoading: false,
  updateCompanyData: '',
  updateCompanyError: '',

  isAllCompanyUsersLoading: false,
  allCompanyUsersData: '',
  allCompanyUsersError: '',

  companyAddUsersData: '',
  companyAddUsersError: '',

  companyDeleteUsersData: '',
  companyDeleteUsersError: '',
};

// eslint-disable-next-line default-param-last
const companyReducer = (state = COMPANY_INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANY_ACTION_TYPES.CREATE_COMPANY:
      return {
        ...state,
        isLoading: true,
        createData: action.payload,
      };
    case COMPANY_ACTION_TYPES.CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        createStatus: action.payload,
      };
    case COMPANY_ACTION_TYPES.CREATE_COMPANY_FAIL:
      return {
        ...state,
        isLoading: false,
        createStatus: null,
        error: action.payload,
        createData: null,
      };

    case COMPANY_ACTION_TYPES.RESET_CREACT_COMPANY:
      return {
        ...state,
        isLoading: false,
        createStatus: null,
        error: null,
        createData: null,
      };

    case COMPANY_ACTION_TYPES.GET_ALL_COMPANY:
      return {
        ...state,
        isAllCompanyLoading: true,
        allCompanyData: '',
        allCompanyError: '',
      };

    case COMPANY_ACTION_TYPES.GET_ALL_COMPANY_SUCCESS:
      return {
        ...state,
        isAllCompanyLoading: false,
        allCompanyData: action.payload,
        allCompanyError: '',
      };

    case COMPANY_ACTION_TYPES.GET_ALL_COMPANY_ERROR:
      return {
        ...state,
        isAllCompanyLoading: false,
        allCompanyData: '',
        allCompanyError: action.payload,
      };
    case COMPANY_ACTION_TYPES.GET_CHECKED_COMPANY:
      return {
        ...state,
        checkedCompanyList: makeCheckedCompanyArray(
          state.checkedCompanyList,
          action.payload
        ),
      };
    case COMPANY_ACTION_TYPES.EREASE_CHECKED_COMPANY:
      return {
        ...state,
        checkedCompanyList: eraseUncheckedCompany(
          state.checkedCompanyList,
          action.payload
        ),
      };
    case COMPANY_ACTION_TYPES.DELETE_COMPANY_START:
      return {
        ...state,
        isDeleteOnProgress: true,
        deletingItem: action.payload,
      };
    case COMPANY_ACTION_TYPES.DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        isDeleteOnProgress: false,
        deleteCompanySuccess: action.payload,
      };
    case COMPANY_ACTION_TYPES.DELETE_COMPANY_FAIL:
      return {
        ...state,
        isDeleteOnProgress: false,
        deleteCompanyError: action.payload,
      };

    case COMPANY_ACTION_TYPES.UPDATE_COMPANY:
      return {
        ...state,
        isUpdateCompanyLoading: true,
        updateCompanyData: '',
        updateCompanyError: '',
      };

    case COMPANY_ACTION_TYPES.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        isUpdateCompanyLoading: false,
        updateCompanyData: action.payload,
        updateCompanyError: '',
      };

    case COMPANY_ACTION_TYPES.UPDATE_COMPANY_ERROR:
      return {
        ...state,
        isUpdateCompanyLoading: false,
        updateCompanyData: '',
        updateCompanyError: action.payload,
      };

    case COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS:
      return {
        ...state,
        isAllCompanyUsersLoading: true,
        allCompanyUsersData: '',
        allCompanyUsersError: '',
      };

    case COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS_SUCCESS:
      return {
        ...state,
        isAllCompanyUsersLoading: false,
        allCompanyUsersData: action.payload,
        allCompanyUsersError: '',
      };

    case COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS_ERROR:
      return {
        ...state,
        isAllCompanyUsersLoading: false,
        allCompanyUsersData: '',
        allCompanyUsersError: action.payload,
      };

    case COMPANY_ACTION_TYPES.COMPANY_ADD_USERS:
      return {
        ...state,
      };

    case COMPANY_ACTION_TYPES.COMPANY_ADD_USERS_SUCCESS:
      return {
        ...state,
        companyAddUsersData: action.payload,
      };

    case COMPANY_ACTION_TYPES.COMPANY_ADD_USERS_FAIL:
      return {
        ...state,
        companyAddUsersError: action.payload,
      };

    case COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS:
      return {
        ...state,
      };

    case COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS_SUCCESS:
      return {
        ...state,
        companyDeleteUsersData: action.payload,
      };

    case COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS_ERROR:
      return {
        ...state,
        companyDeleteUsersError: action.payload,
      };

    default:
      return state;
  }
};

export default companyReducer;
