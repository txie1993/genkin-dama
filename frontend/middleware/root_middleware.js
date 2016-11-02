import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import ProjectsMiddleware from '../middleware/projects_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProjectsMiddleware
);

export default RootMiddleware;
