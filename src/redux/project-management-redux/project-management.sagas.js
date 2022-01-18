import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import {
  ASSIGN_PROJECT_TO_COMPANY,
  CREATE_NEW_PROJECT,
  DELETE_PROJECT_DATA,
  GET_PROJECT_DASHBORD,
  GET_PROJECT_DETAILS,
  GET_PROJECT_DOCUMENTS,
  GET_PROJECT_LIST,
} from '../../services/projectManagement';
import PROJECT_MANAGEMENT_TYPES from './project-management.action-types';
import {
  assignProjectError,
  assignProjectSuccess,
  createNewProjectError,
  createNewProjectSuccess,
  deleteProjectDataSuccess,
  deleteProjectError,
  getProjectDetailsError,
  getProjectDetailsSuccess,
  getProjectListError,
  getProjectListSuccess,
  projectDashbordError,
  projectDashbordSuccess,
  projectDocumentsError,
  projectDocumentsSuccess,
} from './project-management.actions';

export function* onCreateNewProject({ payload }) {
  try {
    const newProject = yield call(CREATE_NEW_PROJECT, payload);
    yield put(createNewProjectSuccess(newProject));
  } catch (error) {
    yield put(createNewProjectError(error.response.data));
  }
}

export function* onCreateNewProjectStart() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT,
    onCreateNewProject
  );
}

export function* getAllProjectList({ payload }) {
  try {
    const projectList = yield call(GET_PROJECT_LIST, payload);
    yield put(getProjectListSuccess(projectList));
  } catch (err) {
    yield put(getProjectListError(err.response.data));
  }
}

export function* onGetAllProjectList() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST,
    getAllProjectList
  );
}

export function* getProjectData({ payload }) {
  try {
    const projectData = yield call(GET_PROJECT_DETAILS, payload);
    yield put(getProjectDetailsSuccess(projectData));
  } catch (err) {
    yield put(getProjectDetailsError(err.response.data));
  }
}

export function* onGetProjectData() {
  yield takeLatest(PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DATA, getProjectData);
}

export function* deleteProjectData({ payload }) {
  try {
    const projectData = yield call(DELETE_PROJECT_DATA, payload);
    yield put(deleteProjectDataSuccess(projectData));
  } catch (err) {
    yield put(deleteProjectError(err.response.data));
  }
}

export function* onDeleteProjectData() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA,
    deleteProjectData
  );
}

export function* getProjectDocuments({ payload }) {
  try {
    const projectDocuments = yield call(GET_PROJECT_DOCUMENTS, payload);
    yield put(projectDocumentsSuccess(projectDocuments));
  } catch (err) {
    yield put(projectDocumentsError(err.response.data));
  }
}

export function* onGetProjectDocuments() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS,
    getProjectDocuments
  );
}

export function* assignProjectToCompany({ payload }) {
  try {
    const projectData = yield call(ASSIGN_PROJECT_TO_COMPANY, payload);
    yield put(assignProjectSuccess(projectData));
  } catch (err) {
    yield put(assignProjectError(err.response.data));
  }
}

export function* onAssignProjectToCompany() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY,
    assignProjectToCompany
  );
}

export function* getProjectDashbord({ payload }) {
  try {
    const projectDashbord = yield call(GET_PROJECT_DASHBORD, payload);
    yield put(projectDashbordSuccess(projectDashbord));
  } catch (err) {
    yield put(projectDashbordError(err.response.data));
  }
}

export function* onGetProjectDashbord() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DASHBORD,
    getProjectDashbord
  );
}

export function* projectManagementSagas() {
  yield all([
    call(onCreateNewProjectStart),
    call(onGetAllProjectList),
    call(onGetProjectData),
    call(onDeleteProjectData),
    call(onGetProjectDocuments),
    call(onAssignProjectToCompany),
    call(onGetProjectDashbord),
  ]);
}
