import {
    RECEIVE_ALL_TAGGINGS,
    RECEIVE_TAGGING,
    REMOVE_TAGGING,
} from '../actions/tagging_actions';
import merge from 'lodash/merge';

const TaggingsReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TAGGINGS:
            return merge({}, action.taggings);
        case RECEIVE_TAGGING:
            return merge({}, oldState, {
                [action.tagging.id]: action.tagging
            });
        case REMOVE_TAGGING:
            let newState = merge({}, oldState);
            delete newState[action.tagging.id];
            return newState;
        default:
            return oldState;
    }
};

export default TaggingsReducer;
