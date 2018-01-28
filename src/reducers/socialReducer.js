import initialState from '../constants/initialState';
import { LOAD_SOCIAL_SUCCESS } from '../constants/actionTypes';

export default (state = initialState.social, action) => {
  switch(action.type) {
    case LOAD_SOCIAL_SUCCESS:
      return { ...state, ...action.social };
    default:
      return state;
  }
};
