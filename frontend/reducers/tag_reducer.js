import {
    RECEIVE_ALL_TAGS,
    RECEIVE_TAG,
    REMOVE_TAG,
} from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagsReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TAGS:
            return merge({}, action.tags);
        case RECEIVE_TAG:
            return merge({}, oldState, {
                [action.tag.id]: action.tag
            });
        case REMOVE_TAG:
            let newState = merge({}, oldState);
            delete newState[action.tag.id];
            return newState;
        default:
            return oldState;
    }
};

export default TagsReducer;
