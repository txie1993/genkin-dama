import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectsReducer from './project_reducer';
import BackingsReducer from './backing_reducer';
import RewardsReducer from './reward_reducer';
import RewardingsReducer from './rewarding_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  backings: BackingsReducer,
  rewards: RewardsReducer,
  rewardings: RewardingsReducer
});

export default RootReducer;
