import buildFormReducer from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';
import { combineReducers } from 'redux';

const defaultErrorMsg = 'Something went wrong while logging in. Please try again.';
const mainInitialState = {
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
  isLoggingIn: false,
};

const formInitialState = {
  email: {
    value: '',
  },
  password: {
    value: '',
  },
};

function mainReducer(state = mainInitialState, action) {
  const actionType = action.type;
  const actionPayload = action.payload;

  switch (actionType) {
    case actionTypes.LOGIN.BASIC_LOGIN.REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      };
    case actionTypes.LOGIN.RESET_STATE:
    case actionTypes.LOGIN.BASIC_LOGIN.SUCCESS:
      return { ...mainInitialState };
    case actionTypes.LOGIN.BASIC_LOGIN.FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: {
          isVisible: true,
          message: actionPayload.errorMsg,
        },
      };
    default:
      return state;
  }
}

const loginReducer = combineReducers({
  main: mainReducer,
  form: buildFormReducer(formInitialState, namespaces.LOGIN),
});

export { loginReducer as default };
