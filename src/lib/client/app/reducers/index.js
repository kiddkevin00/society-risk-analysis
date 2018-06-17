import login from './register/login';
import signup from './register/signup';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  login,
  signup,
});

export { rootReducer as default };
