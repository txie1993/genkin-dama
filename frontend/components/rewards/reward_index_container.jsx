import {connect} from 'react-redux';
import RewardIndex from './reward_index';
import {fetchRewards} from '../../actions/reward_actions';
import {fetchProjects} from '../../actions/project_actions';
import {createBacking} from '../../actions/backing_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
    return {
        rewards: Object.keys(state.rewards).map(id => state.rewards[id]),
        project: state.projects[ownProps.params.projectId]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRewards: () => dispatch(fetchRewards()),
    fetchProjects: () => dispatch(fetchProjects()),
    createBacking: (backing) => dispatch(createBacking(backing))
});

export default connect(mapStateToProps, mapDispatchToProps)(RewardIndex);
