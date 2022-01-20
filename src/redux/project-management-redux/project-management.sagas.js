import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  ASSIGN_PROJECT_TO_COMPANY,
  CREATE_NEW_PROJECT,
  DELETE_PROJECT_DATA,
  GET_DASHBORD_BY_PROJECT_ID,
  GET_PROJECT_DASHBORD,
  GET_PROJECT_DETAILS,
  GET_PROJECT_DOCUMENTS,
  GET_PROJECT_LIST,
  IMPORT_PROJECT_DATA,
  UPDATE_PROJECT,
} from '../../services/projectManagement';
import PROJECT_MANAGEMENT_TYPES from './project-management.action-types';
import {
  assignProjectError,
  assignProjectSuccess,
  createNewProjectError,
  createNewProjectSuccess,
  dashbordByProjectIdError,
  dashbordByProjectIdSuccess,
  deleteProjectDataSuccess,
  deleteProjectError,
  getProjectDetailsError,
  getProjectDetailsSuccess,
  getProjectListError,
  getProjectListSuccess,
  importProjectDataError,
  importProjectDataSuccess,
  projectDashbordError,
  projectDashbordSuccess,
  projectDocumentsError,
  projectDocumentsSuccess,
  updateProjectError,
  updateProjectSuccess,
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
    yield toast.success('Project Deleted Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    yield put(deleteProjectError(err.response.data));
    yield toast.error('Failed To Delete Project!', {
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

export function* importProjectData({ payload }) {
  try {
    const projectDashbord = yield call(IMPORT_PROJECT_DATA, payload);
    yield put(importProjectDataSuccess(projectDashbord));
    yield toast.success(' Import Project Data Successsful!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    yield put(importProjectDataError(err?.response?.data));
    yield toast.error('Failed To Import Project Data!', {
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

export function* onImportProjectData() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.IMPORT_PROJECT_DATA,
    importProjectData
  );
}

export function* dashbordByProjectId({ payload }) {
  try {
    const projectDashbord = yield call(GET_DASHBORD_BY_PROJECT_ID, payload);
    yield put(dashbordByProjectIdSuccess(projectDashbord));
  } catch (err) {
    yield put(dashbordByProjectIdError(err.response.data));
  }
}

export function* onDashbordByProjectId() {
  yield takeLatest(
    PROJECT_MANAGEMENT_TYPES.DASHBORD_BY_PROJECT_ID,
    dashbordByProjectId
  );
}

export function* updateProject({ payload }) {
  try {
    const updatedData = yield call(UPDATE_PROJECT, payload);
    yield put(updateProjectSuccess(updatedData));
    yield toast.success('Project Updated Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    yield put(updateProjectError(err.response.data));
    yield toast.error('Failed To Update Project!', {
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

export function* onUpdateProject() {
  yield takeLatest(PROJECT_MANAGEMENT_TYPES.UPDATE_PROJECT, updateProject);
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
    call(onImportProjectData),
    call(onDashbordByProjectId),
    call(onUpdateProject),
  ]);
}
