import * as http from './datasource';
import buildLoadDataActionCreator from '../builders/loadData';
import actionTypes, { namespaces } from '../../actionTypes/';
import { redirectTo } from '../../utils/helpers';

const { ME } = actionTypes;

const meActionCreator = {
  ...buildLoadDataActionCreator(namespaces.ME),

  resetMainState() {
    return {
      type: ME.RESET_STATE,
    };
  },

  resetState() {
    return dispatch => {
      dispatch(this.resetMainState());

      dispatch(this.resetLoadDataState());
    };
  },

  setData(payload) {
    return {
      type: ME.SET_DATA,
      payload,
    };
  },

  loadData() {
    return async dispatch => {
      try {
        const { data: myPersonalInfoResData } = await http.getMyPersonalInfo();

        dispatch(this.loadDataSuccess());

        const payload = {};

        if (myPersonalInfoResData.personId) {
          payload.personId = myPersonalInfoResData.personId;
        }

        if (myPersonalInfoResData.firstName) {
          payload.firstName = myPersonalInfoResData.firstName;
        }

        if (myPersonalInfoResData.lastName) {
          payload.lastName = myPersonalInfoResData.lastName;
        }

        dispatch(this.setData(payload));
      } catch (e) {
        dispatch(this.loadDataFailure());

        throw e;
      }
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

  checkAuthentication(redirectUrl = '/auth/login') {
    return async dispatch => {
      try {
        await http.ensureAuthenticated();

        dispatch(this.checkAuthenticationSuccess());
      } catch (e) {
        dispatch(this.checkAuthenticationFailure());

        redirectTo(redirectUrl);

        throw e;
      }
    };
  },

  initialize(redirectUrl) {
    return async dispatch => {
      try {
        dispatch(this.checkAuthenticationRequest());
        dispatch(this.loadDataRequest());

        await dispatch(this.checkAuthentication(redirectUrl));
        await dispatch(this.loadData());
      } catch (e) {
        // No need to handle here. Let the `history` object do it own job.
      }
    };
  },
};

export { meActionCreator as default };
