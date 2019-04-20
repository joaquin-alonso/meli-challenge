import * as actionTypes from './actions/actionTypes';

const initialState = {
  query: '',
  searchResults: null,
  selectedProduct: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUERY:
      return {
        ...state,
        query: action.query
      };
    case actionTypes.FETCH_SEARCH_RESULTS_START:
      return {
        ...state,
        searchResults: null,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
