import initialState from '../constants/initialState';
import { LOAD_STATS_SUCCESS } from '../constants/actionTypes';

export default (state = initialState.stats, action) => {
  switch(action.type) {
    case LOAD_STATS_SUCCESS:
      return { ...state, ...action.stats };
    default:
      return state;
  }
};
