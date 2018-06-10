import login from './register/login';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  login,
});

export { rootReducer as default };
