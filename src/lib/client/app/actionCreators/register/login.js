import meActionCreator from '../me';
import buildFormActionCreator from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';

const mockHttp = {
  login(username, password) {
    return Promise.resolve({
      data: {
        fullName: 'Test User',
        email: 'user01@test.com',
      },
    });
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
    return async dispatch => {
      try {
        dispatch(this.loginRequest());

        const { data: myUserInfo } = mockHttp.login(username, password)

        dispatch(this.loginSuccess());

        dispatch(meActionCreator.checkAuthenticationSuccess());
        dispatch(meActionCreator.setData(myUserInfo));

        //history.push('/events');
        window.location.assign('/events');
      } catch (err) {
        dispatch(this.loginFailure(err.message));
      }
    };
  },
};

export { loginActionCreator as default };
