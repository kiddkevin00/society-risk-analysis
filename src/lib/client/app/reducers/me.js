import buildFormReducer from './builders/form';
import actionTypes, { namespaces } from '../actionTypes/';
import { combineReducers } from 'redux';

const { ME } = actionTypes;

const mainInitialState = {
  _id: '',
  type: undefined,
  fullName: '',
  email: '',
  hasCheckedAuth: false,
  isCheckingAuth: false,
  isAuthenticated: false,
};

const formInitialState = {
  email: {
    value: '',
  },
};

const mainReducer = (state = mainInitialState, action) => {
  const actionType = action.type;
  const actionPayload = action.payload;

  switch (actionType) {
    case ME.RESET_STATE:
      return { ...mainInitialState };
    case ME.SET_DATA:
      return {
        ...state,
        ...actionPayload,
      };
    case ME.CHECK_AUTH.REQUEST:
      return { ...state, isCheckingAuth: true };
    case ME.CHECK_AUTH.SUCCESS:
      return {
        ...state,
        isCheckingAuth: false,
        isAuthenticated: true,
        hasCheckedAuth: true,
      };
    case ME.CHECK_AUTH.FAILURE:
      return {
        ...state,
        isCheckingAuth: false,
        isAuthenticated: false,
        hasCheckedAuth: true,
      };
    default:
      return state;
  }
};

const meReducer = combineReducers({
  main: mainReducer,
  form: buildFormReducer(formInitialState, namespaces.ME),
});

export { meReducer as default };
