import getProjects from '../utils/getProjects';
import { LOAD_PROJECTS_SUCCESS } from '../constants/actionTypes';

export const loadProjectsSuccess = projects => {
	return {
		type: LOAD_PROJECTS_SUCCESS,
		projects
	};
};

export const loadProjects = dispatch => {
  return getProjects().then(projects => {
    dispatch(loadProjectsSuccess(projects));
  }).catch(error => {
    // TODO: LOAD_PROJECTS_FAILURE
    throw(error);
  });
};
