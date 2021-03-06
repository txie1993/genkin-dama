import {connect} from 'react-redux';
import RewardIndex from './reward_index';
import {fetchRewards} from '../../actions/reward_actions';
import {createRewarding} from '../../actions/rewarding_actions';
import {fetchProjects} from '../../actions/project_actions';
import {createBacking} from '../../actions/backing_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        rewards: Object.keys(state.rewards).map(id => state.rewards[id]),
        project: state.projects[ownProps.params.projectId],
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRewards: () => dispatch(fetchRewards()),
    fetchProjects: () => dispatch(fetchProjects()),
    createBacking: (backing) => dispatch(createBacking(backing)),
    createRewarding: (rewarding) => dispatch(createRewarding(rewarding))
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
