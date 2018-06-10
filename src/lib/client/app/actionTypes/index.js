const actionTypes = {
  FORM: {
    RESET_STATE: 'FORM.RESET_STATE',
    SET_FIELD: 'FORM.SET_FIELD',
  },
  LOGIN: {
    RESET_STATE: 'LOGIN.RESET_STATE',
    BASIC_LOGIN: {
      REQUEST: 'LOGIN.BASIC_LOGIN_REQUEST',
      SUCCESS: 'LOGIN.BASIC_LOGIN_SUCCESS',
      FAILURE: 'LOGIN.BASIC_LOGIN_FAILURE',
    },
  },
};

const namespaces = Object.keys(actionTypes).reduce((acc, type) => ({ ...acc, [type]: type }), {});

export { actionTypes as default, namespaces };
