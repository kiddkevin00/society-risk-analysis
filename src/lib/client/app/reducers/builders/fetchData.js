import buildNamedWrapperReducer from 'reducers/builders/namedWrapper';
import actionTypes from '../../actionTypes/';

const { FETCH_DATA } = actionTypes;

export default (initialState, name) => {
  const fetchDataReducer = (state = initialState, action) => {
    const actionType = action.type;

    switch (actionType) {
      case FETCH_DATA.RESET_STATE:
        return { ...initialState };
      case FETCH_DATA.REQUEST:
        return { ...state, isFetchingData: true };
      case FETCH_DATA.SUCCESS:
      case FETCH_DATA.FAILURE:
        return { ...state, isFetchingData: false };
      default:
        return state;
    }
  };

  return buildNamedWrapperReducer(fetchDataReducer, name);
};
