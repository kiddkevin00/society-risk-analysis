const actionTypes = {
  FORM: {
    RESET_STATE: 'FORM.RESET_STATE',
    SET_FIELD: 'FORM.SET_FIELD',
  },
  ME: {
    CHECK_AUTH: {
      REQUEST: 'ME.CHECK_AUTH_REQUEST',
      SUCCESS: 'ME.CHECK_AUTH_SUCCESS',
      FAILURE: 'ME.CHECK_AUTH_FAILURE',
    },
    SET_DATA: 'ME.SET_DATA',
  },
  LOGIN: {
    RESET_STATE: 'LOGIN.RESET_STATE',
    BASIC_LOGIN: {
      REQUEST: 'LOGIN.BASIC_LOGIN_REQUEST',
      SUCCESS: 'LOGIN.BASIC_LOGIN_SUCCESS',
      FAILURE: 'LOGIN.BASIC_LOGIN_FAILURE',
    },
  },
  SIGNUP: {
    RESET_STATE: 'SIGN_UP.RESET_STATE',
    CREATE_ACCOUNT: {
      REQUEST: 'SIGN_UP.CREATE_ACCOUNT_REQUEST',
      SUCCESS: 'SIGN_UP.CREATE_ACCOUNT_SUCCESS',
      FAILURE: 'SIGN_UP.CREATE_ACCOUNT_FAILURE',
    },
  },
};

const namespaces = Object.keys(actionTypes).reduce((acc, type) => ({ ...acc, [type]: type }), {});

export { actionTypes as default, namespaces };
