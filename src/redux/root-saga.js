import { all, call } from '@redux-saga/core/effects';

import { assignTaskSagas } from './assign-worklist/assign-work.sagas';
import { companySagas } from './company-redux/company.sagas';
import { feedbackSagas } from './feedback-redux/feedback.sagas';
import { managementOfFieldActivitiesSagas } from './Management-of-field-activities/management-field-activities.sagas';
import { milestoneManagementSagas } from './milestone-management/milestone-management.sagas';
import { projectManagementSagas } from './project-management-redux/project-management.sagas';
import { userSagas } from './user-redux/user.sagas';
import { getUserSaga, roleSaga } from './User-Role/role.sagas';
import { worklistManagementSaga } from './worklist-management-redux/worklist.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(roleSaga),
    call(getUserSaga),
    call(projectManagementSagas),
    call(worklistManagementSaga),
    call(milestoneManagementSagas),
    call(companySagas),
    call(feedbackSagas),
    call(assignTaskSagas),
    call(managementOfFieldActivitiesSagas),
  ]);
}
