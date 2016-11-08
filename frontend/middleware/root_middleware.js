import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import ProjectsMiddleware from '../middleware/projects_middleware';
import BackingsMiddleware from '../middleware/backings_middleware';
import RewardsMiddleware from '../middleware/rewards_middleware';
import RewardingsMiddleware from '../middleware/rewardings_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProjectsMiddleware,
  BackingsMiddleware,
  RewardsMiddleware,
  RewardingsMiddleware
);

export default RootMiddleware;
