import { connect } from 'react-redux';
import RewardForm from './reward_form';
import { fetchReward, updateReward, createReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  reward: state.rewards[ownProps.params.rewardId]
});

const mapDispatchToProps = (dispatch, {location}) => {
  const currUrl = location.pathname.slice(1);
  const formType = (currUrl === 'newreward') ? "new" : "update";

  return {
  fetchReward: id => dispatch(fetchReward(id)),
  updateReward: reward => dispatch(updateReward(reward)),
  createReward: reward => dispatch(createReward(reward)),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
