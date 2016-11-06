
import {
  receiveBacking,
  receiveAllBackings,
  removeBacking,
  FETCH_BACKINGS,
  FETCH_BACKING,
  CREATE_BACKING,
  UPDATE_BACKING,
  DELETE_BACKING
} from '../actions/backing_actions';

import {
  createBacking,
  deleteBacking,
  updateBacking,
  fetchBackings,
  fetchBacking
} from '../util/backing_api_util';
import { hashHistory } from 'react-router';

const BackingsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllBackingsSuccess = backings => dispatch(receiveAllBackings(backings));
  let receiveBackingSuccess = backing => dispatch(receiveBacking(backing));
  let removeBackingSuccess = backing => dispatch(removeBacking(backing));

  switch (action.type) {
    case FETCH_BACKINGS:
      fetchBackings(receiveAllBackingsSuccess);
      return next(action);
    case FETCH_BACKING:
      fetchBacking(action.id, receiveBackingSuccess);
      return next(action);
    case CREATE_BACKING:
      createBacking(action.backing, receiveBackingSuccess);
      return next(action);
    case UPDATE_BACKING:
      success = backing => {
        dispatch(receiveBacking(backing));
        hashHistory.push("/");
      };
      updateBacking(action.backing, success);
      return next(action);
    case DELETE_BACKING:
      deleteBacking(action.id, removeBackingSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default BackingsMiddleware;
