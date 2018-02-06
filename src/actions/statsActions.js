import getStats from '../utils/getStats';
import {
  LOAD_STATS_FAILURE,
  LOAD_STATS_SUCCESS
} from '../constants/actionTypes';

export const loadStatsFailure = error => {
	return {
		type: LOAD_STATS_FAILURE,
		error
	};
};

export const loadStatsSuccess = stats => {
	return {
		type: LOAD_STATS_SUCCESS,
		stats
	};
};

export const loadStats = async dispatch => {
  try {
    const stats = await getStats();
    dispatch(loadStatsSuccess(stats));
  } catch (error) {
    dispatch(loadStatsFailure(error));
  }
};
