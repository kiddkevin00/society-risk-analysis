import me from './me';
import login from './register/login';
import signup from './register/signup';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  me,
  login,
  signup,
});

export { rootReducer as default };
