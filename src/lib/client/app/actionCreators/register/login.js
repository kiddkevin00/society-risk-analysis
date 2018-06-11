import buildFormActionCreator from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';

const mockHttp = {
  login(username, password) {
    return Promise.resolve();
  },
};

const loginActionCreator = {
  ...buildFormActionCreator(namespaces.LOGIN),

  resetMainState() {
    return {
      type: actionTypes.LOGIN.RESET_STATE,
    };
  },

  resetState() {
    return dispatch => {
      dispatch(this.resetMainState());

      dispatch(this.resetFormState());
    };
  },

  loginRequest() {
    return {
      type: actionTypes.LOGIN.BASIC_LOGIN.REQUEST,
    };
  },

  loginSuccess() {
    return {
      type: actionTypes.LOGIN.BASIC_LOGIN.SUCCESS,
    };
  },

  loginFailure(errorMsg) {
    return {
      type: actionTypes.LOGIN.BASIC_LOGIN.FAILURE,
      payload: { errorMsg },
    };
  },

  login(username, password, history) {
    return dispatch => {
      dispatch(this.loginRequest());

      return mockHttp
        .login(username, password)
        .then(() => {
          dispatch(this.loginSuccess());

          //history.push('/events');
          window.location.assign('/events');
        })
        .catch(error => {
          dispatch(this.loginFailure(error.message));
        });
    };
  },
};

export { loginActionCreator as default };
