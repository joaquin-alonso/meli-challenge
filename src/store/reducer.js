import * as actionTypes from './actions/actionTypes';

const initialState = {
  searchResults: null,
  product: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        product: null,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.product,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
