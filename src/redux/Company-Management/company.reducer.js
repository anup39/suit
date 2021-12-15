/*eslint-disable*/
import COMPANY_MANAGEMENT from './company-action.types';

const COMPANY_INITIAL_STATE = {
  openForm: false,
  isLoading: false,
  response: '',
  success: false,
  allCompanies: '',
  errorDetails: '',
};

// eslint-disable-next-line default-param-last
const compantManagementReducer = (state = COMPANY_INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANY_MANAGEMENT.ADD:
      return {
        ...state,
        openForm: action.payload,
      };

    case COMPANY_MANAGEMENT.CANCEL:
      return {
        ...state,
        openForm: action.payload,
      };

    case COMPANY_MANAGEMENT.START:
      return {
        ...state,
        isLoading: true,
      };

    case COMPANY_MANAGEMENT.SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        success: true,
        openForm: false,
      };

    case COMPANY_MANAGEMENT.ERROR:
      return {
        ...state,
        success: false,
        response: action.payload,
        isLoading: false,
      };

    case COMPANY_MANAGEMENT.GET_COMPANIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCompanies: action.payload,
        success: true,
        response: '',
      };

    case COMPANY_MANAGEMENT.GET_COMPANIES_ERROR:
      return {
        ...state,
        isLoading: false,
        allCompanies: '',
        success: false,
        errorDetails: action.payload,
        response: '',
      };

    case COMPANY_MANAGEMENT.GET_COMPANIES:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default compantManagementReducer;
