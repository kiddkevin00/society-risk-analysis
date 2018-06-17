import buildLoadDataReducer from './builders/loadData';
import actionTypes, { namespaces } from '../actionTypes/';
import { combineReducers } from 'redux';

const { ME } = actionTypes;

const mainInitialState = {
  personId: undefined,
  firstName: '',
  lastName: '',
  hasBeenInitialized: false,
  isCheckingAuth: false,
  isAuthenticated: false,
};

const loadDataInitialState = {
  isLoadingData: false,
};

const mainReducer = (state = mainInitialState, action) => {
  const actionType = action.type;
  const actionPayload = action.payload;

  switch (actionType) {
    case ME.CHECK_AUTH.FAILURE:
      return {
        ...state,
        isCheckingAuth: false,
        isAuthenticated: false,
        hasBeenInitialized: true,
      };
    case ME.CHECK_AUTH.SUCCESS:
      return {
        ...state,
        isCheckingAuth: false,
        isAuthenticated: true,
        hasBeenInitialized: true,
      };
    case ME.CHECK_AUTH.REQUEST:
      return { ...state, isCheckingAuth: true };
    case ME.SET_DATA:
      return {
        ...state,
        ...actionPayload,
      };
    default:
      return state;
  }
};

const meReducer = combineReducers({
  main: mainReducer,
  loadData: buildLoadDataReducer(loadDataInitialState, namespaces.ME),
});

export { meReducer as default };
