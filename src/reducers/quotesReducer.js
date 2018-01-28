import initialState from '../constants/initialState';
import { LOAD_QUOTES_SUCCESS } from '../constants/actionTypes';

export default (state = initialState.quotes, action) => {
  switch(action.type) {
    case LOAD_QUOTES_SUCCESS:
      return { ...state, ...action.quotes.quotes };
    default:
      return state;
  }
};
