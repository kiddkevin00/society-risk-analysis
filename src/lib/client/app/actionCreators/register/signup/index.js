import * as http from './datasource';
import meActionCreator from '../../me';
import StandardResponseWrapper from '../../../utils/standard-response-wrapper';
import buildFormActionCreator from '../../builders/form';
import actionTypes, { namespaces } from '../../../actionTypes/';
import { redirectTo } from '../../../utils/helpers';

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

        const { data: myUserInfoResponse } = await http.createAccount(fullName, email, password);
        const myUserInfo = StandardResponseWrapper.deserialize(myUserInfoResponse).getNthData(0).detail;

        dispatch(this.createAccountSuccess());

        dispatch(meActionCreator.checkAuthenticationSuccess());
        dispatch(meActionCreator.setData(myUserInfo));

        //history.push('/magazines');
        redirectTo('/magazines');
      } catch (err) {
        dispatch(this.createAccountFailure(err.message));
      }
    };
  },
};

export { signupActionCreator as default };
