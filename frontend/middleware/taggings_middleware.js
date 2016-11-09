
import {
  receiveTagging,
  receiveAllTaggings,
  removeTagging,
  FETCH_TAGGINGS,
  FETCH_TAGGING,
  CREATE_TAGGING,
  UPDATE_TAGGING,
  DELETE_TAGGING
} from '../actions/tagging_actions';

import {
  createTagging,
  deleteTagging,
  updateTagging,
  fetchTaggings,
  fetchTagging
} from '../util/tagging_api_util';
import { hashHistory } from 'react-router';

const TaggingsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllTaggingsSuccess = taggings => dispatch(receiveAllTaggings(taggings));
  let receiveTaggingSuccess = tagging => dispatch(receiveTagging(tagging));
  let removeTaggingSuccess = tagging => dispatch(removeTagging(tagging));

  switch (action.type) {
    case FETCH_TAGGINGS:
      fetchTaggings(receiveAllTaggingsSuccess);
      return next(action);
    case FETCH_TAGGING:
      fetchTagging(action.id, receiveTaggingSuccess);
      return next(action);
    case CREATE_TAGGING:
      createTagging(action.tagging, receiveTaggingSuccess);
      return next(action);

    case UPDATE_TAGGING:
      success = tagging => {
        dispatch(receiveTagging(tagging));
        hashHistory.push("/");
      };
      updateTagging(action.tagging, success);
      return next(action);
    case DELETE_TAGGING:
      deleteTagging(action.id, removeTaggingSuccess);
      return next(action);

    default:
      return next(action);
  }
};

export default TaggingsMiddleware;
