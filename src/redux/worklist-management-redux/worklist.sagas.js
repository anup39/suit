import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  CHANGE_TASK_STATUS,
  CREATE_NEW_WORKLIST,
  DELETE_TASK_BY_ID,
  GET_ALL_WORKLIST,
  GET_TASK_BY_ID,
  GET_TASK_BY_PROJECT,
} from '../../services/WorklistManagement';
import WORKLIST_MANAGEMENT_ACTION_TYPE from './worklist.action-types';
import {
  addWorkListError,
  addWorkListSuccess,
  changeTaskStatusError,
  changeTaskStatusSuccess,
  deleteTaskByIDError,
  deleteTaskByIDSuccess,
  editWorkListError,
  editWorkListSuccess,
  getTaskByIDError,
  getTaskByIDSuccess,
  getWorkListError,
  getWorkListSuccess,
  taskByProjectError,
  taskByProjectSuccess,
} from './worklist.actions';

export function* getAllWorkListData(data) {
  try {
    const getWorklistData = yield call(GET_ALL_WORKLIST, data.payload);
    yield put(getWorkListSuccess(getWorklistData));
  } catch (error) {
    yield put(getWorkListError(error.response.data));

    if (error.response.data.status === 500) {
      yield toast.error('Something Went Wrong. Please Try Again Later!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      yield toast.error('Failed To Get Worklist Data!', {
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
}

export function* onGetAllWorkListData() {
  yield takeLatest(
    WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST,
    getAllWorkListData
  );
}

export function* createWorkList(data) {
  try {
    const createWorkListData = yield call(CREATE_NEW_WORKLIST, data.payload);
    yield put(addWorkListSuccess(createWorkListData));
  } catch (error) {
    console.log(error);
    yield put(addWorkListError(error.response.data));
  }
}

export function* oncreateWorkList() {
  yield takeLatest(
    WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST,
    createWorkList
  );
}

export function* eidtWorkList(data) {
  try {
    const editWorkListData = yield call(CREATE_NEW_WORKLIST, data.payload);
    yield put(editWorkListSuccess(editWorkListData));
  } catch (error) {
    console.log(error);
    yield put(editWorkListError(error.response.data));
  }
}

export function* onEidtWorkList() {
  yield takeLatest(WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST, eidtWorkList);
}

export function* taskById(data) {
  try {
    const taskByIdData = yield call(GET_TASK_BY_ID, data.payload);
    yield put(getTaskByIDSuccess(taskByIdData));
  } catch (error) {
    console.log(error);
    yield put(getTaskByIDError(error.response.data));
  }
}

export function* onTaskById() {
  yield takeLatest(WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID, taskById);
}

export function* deleteTaskById(data) {
  try {
    const taskByIdData = yield call(DELETE_TASK_BY_ID, data.payload);
    yield put(deleteTaskByIDSuccess(taskByIdData));
    yield toast.success('Task Deleted Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(deleteTaskByIDError(error.response.data));
    yield toast.error('Failed To Delete Task!', {
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

export function* onDeleteTaskById() {
  yield takeLatest(
    WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID,
    deleteTaskById
  );
}

export function* getTaskByProject(data) {
  try {
    const taskByProjectData = yield call(GET_TASK_BY_PROJECT, data.payload);
    yield put(taskByProjectSuccess(taskByProjectData));
  } catch (error) {
    yield put(taskByProjectError(error.response.data));
  }
}

export function* onGetTaskByProject() {
  yield takeLatest(
    WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_PROJECT,
    getTaskByProject
  );
}

export function* changeTaskStatus(data) {
  try {
    const taskStatus = yield call(CHANGE_TASK_STATUS, data.payload);
    yield put(changeTaskStatusSuccess(taskStatus));
    yield toast.success('Task Status Changed!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(changeTaskStatusError(error.response.data));

    yield toast.error('Failed To Change Task Status!', {
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

export function* onChangeTaskStatus() {
  yield takeLatest(
    WORKLIST_MANAGEMENT_ACTION_TYPE.CHANGE_TASK_STATUS,
    changeTaskStatus
  );
}

export function* worklistManagementSaga() {
  yield all([
    call(onGetAllWorkListData),
    call(oncreateWorkList),
    call(onEidtWorkList),
    call(onTaskById),
    call(onDeleteTaskById),
    call(onGetTaskByProject),
    call(onChangeTaskStatus),
  ]);
}
