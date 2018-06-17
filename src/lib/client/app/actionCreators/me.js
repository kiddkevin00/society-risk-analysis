import actionTypes from '../actionTypes/';

const { ME } = actionTypes;

const mockHttp = {
  ensureAuthenticated() {
    return Promise.resolve({
      data: {
        fullName: 'Test User',
        email: 'user01@test.com',
      },
    });
  },
};

const meActionCreator = {
  resetMainState() {
    return {
      type: ME.RESET_STATE,
    };
  },

  resetState() {
    return dispatch => {
      dispatch(this.resetMainState());
    };
  },

  setData(payload) {
    return {
      type: ME.SET_DATA,
      payload,
    };
  },

  checkAuthenticationRequest() {
    return {
      type: ME.CHECK_AUTH.REQUEST,
    };
  },

  checkAuthenticationSuccess() {
    return {
      type: ME.CHECK_AUTH.SUCCESS,
    };
  },

  checkAuthenticationFailure() {
    return {
      type: ME.CHECK_AUTH.FAILURE,
    };
  },

  checkAuthentication() {
    return async dispatch => {
      try {
        dispatch(this.checkAuthenticationRequest());

        const { data: myUserInfo } = await mockHttp.ensureAuthenticated();

        dispatch(this.checkAuthenticationSuccess());

        dispatch(this.setData(myUserInfo));
      } catch (err) {
        dispatch(this.checkAuthenticationFailure());

        window.location.assign('/register/login');
      }
    };
  },
};

export { meActionCreator as default };
