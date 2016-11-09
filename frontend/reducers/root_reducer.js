import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectsReducer from './project_reducer';
import BackingsReducer from './backing_reducer';
import RewardsReducer from './reward_reducer';
import RewardingsReducer from './rewarding_reducer';
import TagsReducer from './tag_reducer';
import TaggingsReducer from './tagging_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  backings: BackingsReducer,
  rewards: RewardsReducer,
  rewardings: RewardingsReducer,
  tags: TagsReducer,
  taggings: TaggingsReducer
});

export default RootReducer;
