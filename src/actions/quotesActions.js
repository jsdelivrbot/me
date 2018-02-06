import { getQuotes } from '../utils/getQuotes';
import { 
  LOAD_QUOTES_FAILURE,
  LOAD_QUOTES_SUCCESS
} from '../constants/actionTypes';

export const loadQuotesFailure = error => {
	return {
		type: LOAD_QUOTES_FAILURE,
		error
	};
};

export const loadQuotesSuccess = quotes => {
	return {
		type: LOAD_QUOTES_SUCCESS,
		quotes
	};
};

export const loadQuotes = async dispatch => {
  try {
    const quotes = await getQuotes();
    dispatch(loadQuotesSuccess(quotes));
  } catch (error) {
    dispatch(loadQuotesFailure(error));
  }
};
