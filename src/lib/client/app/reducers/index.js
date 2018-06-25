import me from './me';
import login from './register/login';
import signup from './register/signup';
import { firebaseStateReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  me,
  login,
  signup,
});

export { rootReducer as default };
