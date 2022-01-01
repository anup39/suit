import { all, call } from '@redux-saga/core/effects';

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
  ]);
}
