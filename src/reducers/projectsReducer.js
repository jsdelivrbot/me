import initialState from '../constants/initialState';
import { LOAD_PROJECTS_SUCCESS } from '../constants/actionTypes';

export default (state = initialState.projects, action) => {
  switch(action.type) {
    case LOAD_PROJECTS_SUCCESS:
      return { ...state, ...action.projects };
    default:
      return state;
  }
};
