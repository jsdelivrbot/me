import { getQuotes } from '../utils/getQuotes';
import { LOAD_QUOTES_SUCCESS } from '../constants/actionTypes';

export const loadQuotesSuccess = quotes => {
	return {
		type: LOAD_QUOTES_SUCCESS,
		quotes
	};
};

export const loadQuotes = dispatch => {
  return getQuotes().then(quotes => {
    dispatch(loadQuotesSuccess(quotes));
  }).catch(error => {
    // TODO: LOAD_QUOTES_FAILURE
    throw(error);
  });
};
