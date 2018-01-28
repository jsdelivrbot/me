import getSocial from '../utils/getSocial';
import { LOAD_SOCIAL_SUCCESS } from '../constants/actionTypes';

export const loadSocialSuccess = social => {
	return {
		type: LOAD_SOCIAL_SUCCESS,
		social
	};
};

export const loadSocial = dispatch => {
  return getSocial().then(social => {
    dispatch(loadSocialSuccess(social));
  }).catch(error => {
    // TODO: LOAD_SOCIAL_FAILURE
    throw(error);
  });
};
