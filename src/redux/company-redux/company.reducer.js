import COMPANY_ACTION_TYPES from './company.action-types';

const COMPANY_INITIAL_STATE = {
  isLoading: false,
  createStatus: null,
  error: null,
  createData: null,

  isAllCompanyLoading: false,
  allCompanyData: '',
  allCompanyError: '',
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

    default:
      return state;
  }
};

export default companyReducer;
