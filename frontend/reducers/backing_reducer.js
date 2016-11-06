import { RECEIVE_ALL_BACKINGS,
         RECEIVE_BACKING,
         REMOVE_BACKING } from '../actions/backing_actions';
import merge from 'lodash/merge';

const BackingsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_BACKINGS:
      return merge({}, action.backings);
    case RECEIVE_BACKING:
      return merge({}, oldState, {[action.backing.id]: action.backing});
    case REMOVE_BACKING:
      let newState = merge({}, oldState);
      delete newState[action.backing.id];
      return newState;
    default:
      return oldState;
  }
};

export default BackingsReducer;
