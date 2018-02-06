import getProjects from '../utils/getProjects';
import { 
  LOAD_PROJECTS_FAILURE,
  LOAD_PROJECTS_SUCCESS
} from '../constants/actionTypes';

export const loadProjectsFailure = error => {
	return {
		type: LOAD_PROJECTS_FAILURE,
		error
	};
};

export const loadProjectsSuccess = projects => {
	return {
		type: LOAD_PROJECTS_SUCCESS,
		projects
	};
};

export const loadProjects = async dispatch => {
  try {
    const projects = await getProjects();
    dispatch(loadProjectsSuccess(projects));
  } catch (error) {
    dispatch(loadProjectsFailure(error));
  };
};
