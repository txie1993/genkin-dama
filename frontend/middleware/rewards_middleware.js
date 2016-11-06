
import {
  receiveReward,
  receiveAllRewards,
  removeReward,
  FETCH_REWARDS,
  FETCH_REWARD,
  CREATE_REWARD,
  UPDATE_REWARD,
  DELETE_REWARD
} from '../actions/reward_actions';

import {
  createReward,
  deleteReward,
  updateReward,
  fetchRewards,
  fetchReward
} from '../util/reward_api_util';
import { hashHistory } from 'react-router';

const RewardsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllRewardsSuccess = rewards => dispatch(receiveAllRewards(rewards));
  let receiveRewardSuccess = reward => dispatch(receiveReward(reward));
  let removeRewardSuccess = reward => dispatch(removeReward(reward));

  switch (action.type) {
    case FETCH_REWARDS:
      fetchRewards(receiveAllRewardsSuccess);
      return next(action);
    case FETCH_REWARD:
      fetchReward(action.id, receiveRewardSuccess);
      return next(action);
    case CREATE_REWARD:
      createReward(action.reward, receiveRewardSuccess);
      return next(action);
    case UPDATE_REWARD:
      success = reward => {
        dispatch(receiveReward(reward));
        hashHistory.push("/");
      };
      updateReward(action.reward, success);
      return next(action);
    case DELETE_REWARD:
      deleteReward(action.id, removeRewardSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default RewardsMiddleware;
