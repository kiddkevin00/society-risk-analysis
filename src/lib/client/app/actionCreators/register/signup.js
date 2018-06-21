import meActionCreator from '../me';
import buildFormActionCreator from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';
import { redirectTo } from '../../utils/helpers';

const mockHttp = {
  createAccount(fullName, email, password) {
    return Promise.resolve({
      data: {
        fullName: 'Test User',
        email: 'user01@test.com',
      },
    });
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
    return async dispatch => {
      try {
        dispatch(this.createAccountRequest());

        const { data: myUserInfo } = await mockHttp.createAccount(fullName, email, password)

        dispatch(this.createAccountSuccess());

        dispatch(meActionCreator.checkAuthenticationSuccess());
        dispatch(meActionCreator.setData(myUserInfo));

        //history.push('/events');
        redirectTo('/events');
      } catch (err) {
        dispatch(this.createAccountFailure(err.message));


      }
    };
  },
};

export { signupActionCreator as default };
