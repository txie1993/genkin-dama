import {
    RECEIVE_ALL_REWARDINGS,
    RECEIVE_REWARDING,
    REMOVE_REWARDING
} from '../actions/rewarding_actions';
import merge from 'lodash/merge';

const RewardingsReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_REWARDINGS:
            return merge({}, action.rewardings);
        case RECEIVE_REWARDING:
            return merge({}, oldState, {
                [action.rewarding.id]: action.rewarding
            });
        case REMOVE_REWARDING:
            let newState = merge({}, oldState);
            delete newState[action.rewarding.id];
            return newState;
        default:
            return oldState;
    }
};

export default RewardingsReducer;
