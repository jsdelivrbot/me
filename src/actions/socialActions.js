import getSocial from '../utils/getSocial';
import {
  LOAD_SOCIAL_FAILURE,
  LOAD_SOCIAL_SUCCESS
} from '../constants/actionTypes';

export const loadSocialFailure = error => {
	return {
		type: LOAD_SOCIAL_FAILURE,
		error
	};
};

export const loadSocialSuccess = social => {
	return {
		type: LOAD_SOCIAL_SUCCESS,
		social
	};
};

export const loadSocial = async dispatch => {
  try {
    const social = await getSocial();
    dispatch(loadSocialSuccess(social));
  } catch (error) {
    dispatch(loadSocialFailure(error));
  }
};
