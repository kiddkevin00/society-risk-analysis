import * as http from './datasource';
import meActionCreator from '../../me';
import StandardResponseWrapper from '../../../utils/standard-response-wrapper';
import buildFormActionCreator from '../../builders/form';
import actionTypes, { namespaces } from '../../../actionTypes/';
import { redirectTo } from '../../../utils/helpers';

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

        const { data: myUserInfoResponse } = await http.login(username, password);
        const myUserInfo = StandardResponseWrapper.deserialize(myUserInfoResponse).getNthData(0).detail;

        dispatch(this.loginSuccess());

        dispatch(meActionCreator.checkAuthenticationSuccess());
        dispatch(meActionCreator.setData(myUserInfo));

        //history.push('/magazines');
        redirectTo('/magazines');
      } catch (err) {
        dispatch(this.loginFailure(err.message));
      }
    };
  },
};

export { loginActionCreator as default };
