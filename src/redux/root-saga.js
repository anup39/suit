import { all, call } from '@redux-saga/core/effects';

import {
  companySaga,
  getCompaniesSaga,
} from './Company-Management/company.sagas';
import { userSagas } from './user-redux/user.sagas';
import { getUserSaga, roleSaga } from './User-Role/role.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(roleSaga),
    call(companySaga),
    call(getCompaniesSaga),
    call(getUserSaga),
  ]);
}
