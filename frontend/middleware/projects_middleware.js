
import {
  receiveProject,
  receiveAllProjects,
  removeProject,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT
} from '../actions/project_actions';

import {
  createProject,
  deleteProject,
  updateProject,
  fetchProjects,
  fetchProject
} from '../util/project_api_util';
import { hashHistory } from 'react-router';

const ProjectsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllProjectsSuccess = projects => dispatch(receiveAllProjects(projects));
  let receiveProjectSuccess = project => dispatch(receiveProject(project));
  let removeProjectSuccess = project => dispatch(removeProject(project));

  switch (action.type) {
    case FETCH_PROJECTS:
      fetchProjects(receiveAllProjectsSuccess);
      return next(action);
    case FETCH_PROJECT:
      fetchProject(action.id, receiveProjectSuccess);
      return next(action);
    case CREATE_PROJECT:
      createProject(action.project, receiveProjectSuccess);
      return next(action);
    case UPDATE_PROJECT:
      success = project => {
        dispatch(receiveProject(project));
      };
      updateProject(action.project, success);
      return next(action);
    case DELETE_PROJECT:
      deleteProject(action.id, removeProjectSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default ProjectsMiddleware;
