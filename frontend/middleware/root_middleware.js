import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import ProjectsMiddleware from '../middleware/projects_middleware';
import BackingsMiddleware from '../middleware/backings_middleware';
import RewardsMiddleware from '../middleware/rewards_middleware';
import RewardingsMiddleware from '../middleware/rewardings_middleware';
import TagsMiddleware from '../middleware/tags_middleware';
import TaggingsMiddleware from '../middleware/taggings_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProjectsMiddleware,
  BackingsMiddleware,
  RewardsMiddleware,
  RewardingsMiddleware,
  TagsMiddleware,
  TaggingsMiddleware
);

export default RootMiddleware;
