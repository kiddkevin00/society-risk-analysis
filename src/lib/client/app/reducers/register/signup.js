import buildFormReducer from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';
import { combineReducers } from 'redux';

const defaultErrorMsg = 'Something went wrong while signing up. Please try again.';
const mainInitialState = {
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
  isCreatingAccount: false,
};

const formInitialState = {
  fullName: {
    value: 'test',
  },
  email: {
    value: 'user101@test.com',
  },
  password: {
    value: 'P@ssw0rd',
  },
  confirmPassword: {
    value: 'P@ssw0rd',
  },
};

function mainReducer(state = mainInitialState, action) {
  const actionType = action.type;
  const actionPayload = action.payload;

  switch (actionType) {
    case actionTypes.SIGNUP.CREATE_ACCOUNT.REQUEST:
      return {
        ...state,
        isCreatingAccount: true,
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      };
    case actionTypes.SIGNUP.RESET_STATE:
    case actionTypes.SIGNUP.CREATE_ACCOUNT.SUCCESS:
      return { ...mainInitialState };
    case actionTypes.SIGNUP.CREATE_ACCOUNT.FAILURE:
      return {
        ...state,
        isCreatingAccount: false,
        error: {
          isVisible: true,
          message: actionPayload.errorMsg,
        },
      };
    default:
      return state;
  }
}

const signupReducer = combineReducers({
  main: mainReducer,
  form: buildFormReducer(formInitialState, namespaces.SIGNUP),
});

export { signupReducer as default };
