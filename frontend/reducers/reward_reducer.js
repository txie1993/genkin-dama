import { RECEIVE_ALL_REWARDS,
         RECEIVE_REWARD,
         REMOVE_REWARD } from '../actions/reward_actions';
import merge from 'lodash/merge';

const RewardsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_REWARDS:
      return merge({}, action.rewards);
    case RECEIVE_REWARD:
      return merge({}, oldState, {[action.reward.id]: action.reward});
    case REMOVE_REWARD:
      let newState = merge({}, oldState);
      delete newState[action.reward.id];
      return newState;
    default:
      return oldState;
  }
};

export default RewardsReducer;
