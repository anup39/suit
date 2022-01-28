import MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES from './management-field-activities.action.types';

const initialState = {
  iAllActivitiesLoading: false,
  allActivitiesData: '',
  allActivitiesError: '',

  fieldlogSuccess: false,
  fieldlogsData: [],
  fieldlogsError: false,
  fieldlogsisloading: false,
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
        fieldlogSuccess: false,
        fieldlogsData: [],
        fieldlogsisloading: true,
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK_SUCCESS:
      return {
        ...state,
        fieldlogsisloading: false,
        fieldlogsData: action.payload,
        fieldlogSuccess: '',
      };
    case MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK_ERROR:
      return {
        ...state,
        fieldlogsisloading: false,
        fieldlogsData: [],
        fieldlogError: action.payload,
      };
    default:
      return state;
  }
};

export default magagementOfFieldActivitiesReducer;
