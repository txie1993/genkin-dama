
import {
  receiveTag,
  receiveAllTags,
  removeTag,
  FETCH_TAGS,
  FETCH_TAG,
  CREATE_TAG,
  UPDATE_TAG,
  DELETE_TAG
} from '../actions/tag_actions';

import {
  createTag,
  deleteTag,
  updateTag,
  fetchTags,
  fetchTag
} from '../util/tag_api_util';
import { hashHistory } from 'react-router';

const TagsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllTagsSuccess = tags => dispatch(receiveAllTags(tags));
  let receiveTagSuccess = tag => dispatch(receiveTag(tag));
  let removeTagSuccess = tag => dispatch(removeTag(tag));

  switch (action.type) {
    case FETCH_TAGS:
      fetchTags(receiveAllTagsSuccess);
      return next(action);
    case FETCH_TAG:
      fetchTag(action.id, receiveTagSuccess);
      return next(action);
    case CREATE_TAG:
      createTag(action.tag, receiveTagSuccess);
      return next(action);
    case UPDATE_TAG:
      success = tag => {
        dispatch(receiveTag(tag));
        hashHistory.push("/");
      };
      updateTag(action.tag, success);
      return next(action);
    case DELETE_TAG:
      deleteTag(action.id, removeTagSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default TagsMiddleware;
