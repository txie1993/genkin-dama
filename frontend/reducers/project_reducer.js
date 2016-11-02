import { RECEIVE_ALL_PROJECTS,
         RECEIVE_PROJECT,
         REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, oldState, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
      let newState = merge({}, oldState);
      delete newState[action.project.id];
      return newState;
    default:
      return oldState;
  }
};

export default ProjectsReducer;
