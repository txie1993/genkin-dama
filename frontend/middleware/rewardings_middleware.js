
import {
  receiveRewarding,
  receiveAllRewardings,
  removeRewarding,
  FETCH_REWARDINGS,
  FETCH_REWARDING,
  CREATE_REWARDING,
  UPDATE_REWARDING,
  DELETE_REWARDING
} from '../actions/rewarding_actions';

import {
  createRewarding,
  deleteRewarding,
  updateRewarding,
  fetchRewardings,
  fetchRewarding
} from '../util/rewarding_api_util';
import { hashHistory } from 'react-router';

const RewardingsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllRewardingsSuccess = rewardings => dispatch(receiveAllRewardings(rewardings));
  let receiveRewardingSuccess = rewarding => dispatch(receiveRewarding(rewarding));
  let removeRewardingSuccess = rewarding => dispatch(removeRewarding(rewarding));

  switch (action.type) {
    case FETCH_REWARDINGS:
      fetchRewardings(receiveAllRewardingsSuccess);
      return next(action);
    case FETCH_REWARDING:
      fetchRewarding(action.id, receiveRewardingSuccess);
      return next(action);
    case CREATE_REWARDING:
      createRewarding(action.rewarding, receiveRewardingSuccess);
      return next(action);

    case UPDATE_REWARDING:
      success = rewarding => {
        dispatch(receiveRewarding(rewarding));
        hashHistory.push("/");
      };
      updateRewarding(action.rewarding, success);
      return next(action);
    case DELETE_REWARDING:
      deleteRewarding(action.id, removeRewardingSuccess);
      return next(action);

    default:
      return next(action);
  }
};

export default RewardingsMiddleware;
