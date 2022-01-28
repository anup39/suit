import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import { ASSGN_TASK } from '../../services/api/assignTask';
import { assingTaskError, assingTaskSuccess } from './assign-worklist.action';
import ASSING_WORKLIST_TYPE from './assign-worklist-action.types';

export function* assignTask(data) {
  try {
    const assingTask = yield call(ASSGN_TASK, data.payload);
    yield put(assingTaskSuccess(assingTask));
    yield toast.success('Assign Task Successful!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(assingTaskError(error.response.data));
    yield toast.error('Failed To Assign Task!', {
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

export function* onAssignTask() {
  yield takeLatest(ASSING_WORKLIST_TYPE.ASSIGN_TASK, assignTask);
}

export function* assignTaskSagas() {
  yield all([call(onAssignTask)]);
}
