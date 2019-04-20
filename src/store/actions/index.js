import axios from '../../axios-meli';
import * as actionTypes from './actionTypes';

export const setQuery = query => {
  console.log('QUERYING!', query);
  return {
    type: actionTypes.SET_QUERY,
    query
  };
};

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
