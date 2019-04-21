import axios from '../../axios-meli';
import * as actionTypes from './actionTypes';

/***********************
 * Search Results
 */
export const fetchSearchResults = query => {
  return dispatch => {
    dispatch(fetchSearchResultsStart());

    axios
      .get('/api/items?q=' + query)
      .then(response => {
        dispatch(setSearchResults(response.data));
      })
      .catch(error => {
        dispatch(fetchSearchResultsFail(error.response));
      });
  };
};

export const fetchSearchResultsStart = () => {
  return {
    type: actionTypes.FETCH_SEARCH_RESULTS_START
  };
};

export const setSearchResults = searchResults => {
  return {
    type: actionTypes.SET_SEARCH_RESULTS,
    searchResults
  };
};

export const fetchSearchResultsFail = error => {
  return {
    type: actionTypes.FETCH_SEARCH_RESULTS_FAIL,
    error: error.status
  };
};

/***********************
 * Product
 */
export const fetchProduct = id => {
  return dispatch => {
    dispatch(fetchProductStart());

    axios
      .get('/api/items/' + id)
      .then(response => {
        dispatch(setProduct(response.data));
      })
      .catch(error => {
        dispatch(fetchProductFail(error.response));
      });
  };
};

export const fetchProductStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_START
  };
};

export const setProduct = product => {
  return {
    type: actionTypes.SET_PRODUCT,
    product
  };
};

export const fetchProductFail = error => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAIL,
    error: error.status
  };
};
