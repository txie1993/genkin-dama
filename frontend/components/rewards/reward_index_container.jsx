import { connect } from 'react-redux';
import RewardIndex from './reward_index';
import { fetchRewards, deleteReward, createReward } from '../../actions/reward_actions';

const mapStateToProps = state => ({
  rewards: Object.keys(state.rewards).map(id => state.rewards[id])
});

const mapDispatchToProps = dispatch => ({
  fetchRewards: () => dispatch(fetchRewards()),
  deleteReward: id => dispatch(deleteReward(id)),
  createReward: reward => dispatch(createReward(reward))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardIndex);
