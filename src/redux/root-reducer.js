import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import companyReducer from './company-redux/company.reducer';
import userReducer from './user-redux/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
});

export default persistReducer(persistConfig, rootReducer);
