import * as http from './datasource';
import StandardResponseWrapper from '../../utils/standard-response-wrapper';
import buildFormActionCreator from '../builders/form';
import actionTypes, { namespaces } from '../../actionTypes/';
import { redirectTo } from '../../utils/helpers';

const { ME } = actionTypes;

const meActionCreator = {
  ...buildFormActionCreator(namespaces.ME),

  resetMainState() {
    return {
      type: ME.RESET_STATE,
    };
  },

  resetState() {
    return dispatch => {
      dispatch(this.resetFormState());

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

        const { data: myUserInfoResponse } = await http.checkAuthentication();
        const myUserInfo = StandardResponseWrapper.deserialize(myUserInfoResponse).getNthData(0).detail;

        dispatch(this.checkAuthenticationSuccess());
        dispatch(this.setData(myUserInfo));
      } catch (err) {
        dispatch(this.checkAuthenticationFailure());

        redirectTo('/register/login');
      }
    };
  },

  subscribeToEmailListRequest() {
    return {
      type: ME.CHECK_AUTH.REQUEST,
    };
  },

  subscribeToEmailListSuccess() {
    return {
      type: ME.CHECK_AUTH.SUCCESS,
    };
  },

  subscribeToEmailListFailure() {
    return {
      type: ME.CHECK_AUTH.FAILURE,
    };
  },

  subscribeToEmailList(email) {
    return async dispatch => {
      try {
        dispatch(this.subscribeToEmailListRequest());

        await http.subscribeToEmailList(email);

        dispatch(this.subscribeToEmailListSuccess());

        redirectTo('/home');
      } catch (err) {
        dispatch(this.subscribeToEmailListFailure());
      }
    };
  },
};

export { meActionCreator as default };
