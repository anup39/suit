import COMPANY_MANAGEMENT from './company-action.types';

const COMPANY_INITIAL_STATE = {
  openForm: false,
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

    default:
      return state;
  }
};

export default compantManagementReducer;
