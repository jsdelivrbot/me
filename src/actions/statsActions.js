import getStats from '../utils/getStats';
import { LOAD_STATS_SUCCESS } from '../constants/actionTypes';

export const loadStatsSuccess = stats => {
	return {
		type: LOAD_STATS_SUCCESS,
		stats
	};
};

export const loadStats = dispatch => {
  return getStats().then(stats => {
    dispatch(loadStatsSuccess(stats));
  }).catch(error => {
    // TODO: LOAD_STATS_FAILURE
    throw(error);
  });
};
