import camelcaseKeys from 'camelcase-keys';
import initialState from '../constants/initialState';
import { LOAD_PROJECTS_SUCCESS } from '../constants/actionTypes';

export default (state = initialState.projects, action) => {
  switch(action.type) {
    case LOAD_PROJECTS_SUCCESS:
      const projects = camelcaseKeys(action.projects, { deep: true });
      return { ...state, ...projects };
    default:
      return state;
  }
};
