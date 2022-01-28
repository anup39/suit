import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  ALL_ACTIVITIES,
  CHANGE_LOG_STATUS,
  GET_FIELD_LOGS_BY_TASK,
} from '../../services/api/managementOfFieldActivities';
import {
  changeFieldLogStatusError,
  changeFieldLogStatusSuccess,
  getAllActivitiesError,
  getAllActivitiesSuccess,
  getAllfieldlogsError,
  getAllfieldlogsSuccess,
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

export function* managementOfFieldActivitiesSagas() {
  yield all([
    call(onGetAllActivities),
    call(onGetFieldLogsStart),
    call(onChangeFieldLogData),
  ]);
}
