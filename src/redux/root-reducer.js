import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AssignWorkListReducer from './assign-worklist/assign-worklist.reducer';
import companyReducer from './company-redux/company.reducer';
import feedbackReducer from './feedback-redux/feedback.reducer';
import magagementOfFieldActivitiesReducer from './Management-of-field-activities/management-field-activities.reducer';
import milestoneManagmeentReducer from './milestone-management/milestone-management.reducer';
import projectManagementReducer from './project-management-redux/project-management.reducer';
import userReducer from './user-redux/user.reducer';
import roleReducer from './User-Role/role.reducer';
import WorkListManagementReducer from './worklist-management-redux/worklist.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
  role: roleReducer,
  projectManagement: projectManagementReducer,
  workListManagement: WorkListManagementReducer,
  milestoneManagment: milestoneManagmeentReducer,
  assingWorkList: AssignWorkListReducer,
  feedback: feedbackReducer,
  fieldActivities: magagementOfFieldActivitiesReducer,
});

export default persistReducer(persistConfig, rootReducer);
