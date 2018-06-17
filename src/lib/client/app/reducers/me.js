import actionTypes from '../actionTypes/';

const { ME } = actionTypes;

const initialState = {
  fullName: '',
  email: '',
  hasBeenInitialized: false,
  isCheckingAuth: false,
  isAuthenticated: false,
};

const meReducer = (state = initialState, action) => {
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
    case ME.RESET_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

export { meReducer as default };
