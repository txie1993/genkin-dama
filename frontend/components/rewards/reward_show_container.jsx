import { connect } from 'react-redux';
import RewardShow from './reward_show';
import { fetchReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => ({
  reward: state.rewards[ownProps.params.rewardId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchReward: id => dispatch(fetchReward(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardShow);
