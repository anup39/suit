import MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES from './management-field-activities.action.types';

const initialState = {
  iAllActivitiesLoading: false,
  allActivitiesData: '',
  allActivitiesError: '',

  fieldlogsData: '',
  fieldlogsError: false,
  fieldlogsisloading: false,

  changeFieldlogsStatus: '',
  changeFieldlogsStatusError: '',
  isChangeFieldlogsStatusLoading: false,

  allControlActivity: '',
  allControlActivityError: '',
  isAllControlActivityLoading: false,

  controlActivityPrams: '',
  controlActivityPramsError: '',
  isControlActivityPramsLoading: false,

  controlActivityData: [],
};

// eslint-disable-next-line
const magagementOfFieldActivitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES:
      return {
        ...state,
        iAllActivitiesLoading: true,
        allActivitiesData: '',
        allActivitiesError: '',
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES_SUCCESS:
      return {
        ...state,
        iAllActivitiesLoading: false,
        allActivitiesData: action.payload,
        allActivitiesError: '',
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES_ERROR:
      return {
        ...state,
        iAllActivitiesLoading: false,
        allActivitiesData: '',
        allActivitiesError: action.payload,
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.RESET_GET_ALL_ACTIVITY:
      return {
        ...state,
        iAllActivitiesLoading: false,
        allActivitiesData: '',
        allActivitiesError: '',
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK:
      return {
        ...state,
        fieldlogsData: '',
        fieldlogsError: false,
        fieldlogsisloading: true,
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK_SUCCESS:
      return {
        ...state,
        fieldlogsData: action.payload,
        fieldlogsError: false,
        fieldlogsisloading: false,
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK_ERROR:
      return {
        ...state,
        fieldlogsData: '',
        fieldlogsError: action.payload,
        fieldlogsisloading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS:
      return {
        ...state,
        changeFieldlogsStatus: '',
        changeFieldlogsStatusError: '',
        isChangeFieldlogsStatusLoading: true,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS_ERROR:
      return {
        ...state,
        changeFieldlogsStatus: '',
        changeFieldlogsStatusError: action.payload,
        isChangeFieldlogsStatusLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS_SUCCESS:
      return {
        ...state,
        changeFieldlogsStatus: action.payload,
        changeFieldlogsStatusError: '',
        isChangeFieldlogsStatusLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.RESET_CHANGE_FIELD_LOG_STATUS:
      return {
        ...state,
        changeFieldlogsStatus: '',
        changeFieldlogsStatusError: '',
        isChangeFieldlogsStatusLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY:
      return {
        ...state,
        allControlActivity: '',
        allControlActivityError: '',
        isAllControlActivityLoading: true,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY_SUCCESS:
      return {
        ...state,
        allControlActivity: action.payload,
        allControlActivityError: '',
        isAllControlActivityLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY_ERROR:
      return {
        ...state,
        allControlActivity: '',
        allControlActivityError: action.payload,
        isAllControlActivityLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS:
      return {
        ...state,
        controlActivityPrams: '',
        controlActivityPramsError: '',
        isControlActivityPramsLoading: true,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS_SUCCESS:
      return {
        ...state,
        controlActivityPrams: action.payload,
        controlActivityPramsError: '',
        isControlActivityPramsLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS_ERROR:
      return {
        ...state,
        controlActivityPrams: '',
        controlActivityPramsError: action.payload,
        isControlActivityPramsLoading: false,
      };

    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.HANDLE_CONTROL_ACTIVITY_DATA_ADD:
      return {
        ...state,
        controlActivityData: [...state.controlActivityData, action.payload],
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.HANDLE_CONTROL_ACTIVITY_DATA_EDIT:
      return {
        ...state,
        controlActivityData: state.controlActivityData.map((val, index) => {
          if (index === action.payload.componentId) {
            return action.payload.data;
          }
          return val;
        }),
      };
    default:
      return state;
  }
};

export default magagementOfFieldActivitiesReducer;
