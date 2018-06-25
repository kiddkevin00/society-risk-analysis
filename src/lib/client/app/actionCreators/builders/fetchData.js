import actionTypes from '../../actionTypes/';

const { FETCH_DATA } = actionTypes;

export default function(name) {
  return {
    resetFetchDataState() {
      return {
        type: FETCH_DATA.RESET_STATE,
        name,
      };
    },

    fetchDataRequest() {
      return {
        type: FETCH_DATA.REQUEST,
        name,
      };
    },

    fetchDataSuccess() {
      return {
        type: FETCH_DATA.SUCCESS,
        name,
      };
    },

    fetchDataFailure() {
      return {
        type: FETCH_DATA.FAILURE,
        name,
      };
    },
  };
}
