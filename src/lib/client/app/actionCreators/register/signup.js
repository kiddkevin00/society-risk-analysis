import buildFormActionCreator from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';

const mockHttp = {
  createAccount(fullName, email, password) {
    return Promise.resolve();
  },
};

const signupActionCreator = {
  ...buildFormActionCreator(namespaces.SIGNUP),

  resetMainState() {
    return {
      type: actionTypes.SIGNUP.RESET_STATE,
    };
  },

  resetState() {
    return dispatch => {
      dispatch(this.resetMainState());

      dispatch(this.resetFormState());
    };
  },

  createAccountRequest() {
    return {
      type: actionTypes.SIGNUP.CREATE_ACCOUNT.REQUEST,
    };
  },

  createAccountSuccess() {
    return {
      type: actionTypes.SIGNUP.CREATE_ACCOUNT.SUCCESS,
    };
  },

  createAccountFailure(errorMsg) {
    return {
      type: actionTypes.SIGNUP.CREATE_ACCOUNT.FAILURE,
      payload: { errorMsg },
    };
  },

  createAccount(fullName, email, password, history) {
    return dispatch => {
      dispatch(this.createAccountRequest());

      return mockHttp
        .createAccount(fullName, email, password)
        .then(() => {
          dispatch(this.createAccountSuccess());

          //history.push('/events');
          window.location.assign('/events');
        })
        .catch(error => {
          dispatch(this.createAccountFailure(error.message));
        });
    };
  },
};

export { signupActionCreator as default };
