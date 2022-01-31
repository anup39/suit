import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  ADD_CONTROL_ACTIVITY_DATA,
  ALL_ACTIVITIES,
  CHANGE_LOG_STATUS,
  GET_ALL_CONTROL_ACTIVITIES,
  GET_CONTROL_ACTIVITIES_PARAMS_BY_ID,
  GET_FIELD_LOGS_BY_TASK,
} from '../../services/api/managementOfFieldActivities';
import {
  changeFieldLogStatusError,
  changeFieldLogStatusSuccess,
  controlActivityDataError,
  controlActivityDataSuccess,
  getAllActivitiesError,
  getAllActivitiesSuccess,
  getAllControlActivityError,
  getAllControlActivitySuccess,
  getAllfieldlogsError,
  getAllfieldlogsSuccess,
  getControlActivityParamError,
  getControlActivityParamSuccess,
} from './management-field-activities.action';
import MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES from './management-field-activities.action.types';

export function* getAllActivities({ payload }) {
  try {
    const allActivities = yield call(ALL_ACTIVITIES, payload);
    yield put(getAllActivitiesSuccess(allActivities));
    // yield toast.success('Project Updated Successfully!', {
    //   position: 'top-center',
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
  } catch (err) {
    yield put(getAllActivitiesError(err.response.data));
    yield toast.error('Failed To Get All Activities!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onGetAllActivities() {
  yield takeLatest(
    MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES,
    getAllActivities
  );
}

export function* onGetFieldLogs({ payload }) {
  try {
    const getfieldlogs = yield call(GET_FIELD_LOGS_BY_TASK, payload);
    yield put(getAllfieldlogsSuccess(getfieldlogs));
  } catch (error) {
    yield put(getAllfieldlogsError(error.response.data));
  }
}

// eslint-disable-next-line linebreak-style
export function* onGetFieldLogsStart() {
  yield takeLatest(
    MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK,
    onGetFieldLogs
  );
}

export function* changeFieldLogData({ payload }) {
  try {
    const fieldLogs = yield call(CHANGE_LOG_STATUS, payload);
    yield put(changeFieldLogStatusSuccess(fieldLogs));
    yield toast.success('Status updated successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    yield put(changeFieldLogStatusError(err.response.data));
    yield toast.error('Failed To Update Status !', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onChangeFieldLogData() {
  yield takeLatest(
    MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS,
    changeFieldLogData
  );
}

export function* getAllControlActivity({ payload }) {
  try {
    const fieldLogs = yield call(GET_ALL_CONTROL_ACTIVITIES, payload);
    yield put(getAllControlActivitySuccess(fieldLogs));
  } catch (err) {
    yield put(getAllControlActivityError(err.response.data));
    yield toast.error('Failed to get All Control Activity!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onGetAllControlActivity() {
  yield takeLatest(
    MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY,
    getAllControlActivity
  );
}

export function* getAllControlActivityParams({ payload }) {
  try {
    const controlActivityParams = yield call(
      GET_CONTROL_ACTIVITIES_PARAMS_BY_ID,
      payload
    );
    yield put(getControlActivityParamSuccess(controlActivityParams));
  } catch (err) {
    yield put(getControlActivityParamError(err.response.data));
    yield toast.error('Failed to get Control Activity Params!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onGetAllControlActivityParams() {
  yield takeLatest(
    MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS,
    getAllControlActivityParams
  );
}

export function* addControlParamData({ payload }) {
  try {
    const controlActivity = yield call(ADD_CONTROL_ACTIVITY_DATA, payload);
    yield put(controlActivityDataSuccess(controlActivity));
    yield toast.success('Control Activity Params Added Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    yield put(controlActivityDataError(err.response.data));
    yield toast.error('Failed to Add Control Activity Params!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onAddControlParamData() {
  yield takeLatest(
    MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.ADD_CONTROL_ACTIVITY_DATA,
    addControlParamData
  );
}

export function* managementOfFieldActivitiesSagas() {
  yield all([
    call(onGetAllActivities),
    call(onGetFieldLogsStart),
    call(onChangeFieldLogData),
    call(onGetAllControlActivity),
    call(onGetAllControlActivityParams),
    call(onAddControlParamData),
  ]);
}
