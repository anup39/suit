import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import companyManagementReducer from './Company-Management/company.reducer';
import companyReducer from './company-redux/company.reducer';
import userReducer from './user-redux/user.reducer';
import roleReducer from './User-Role/role.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
  role: roleReducer,
  companyManagement: companyManagementReducer,
});

export default persistReducer(persistConfig, rootReducer);
