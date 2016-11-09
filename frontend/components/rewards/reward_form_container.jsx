import { connect } from 'react-redux';
import RewardForm from './reward_form';
import { fetchReward, updateReward, createReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  reward: state.rewards[ownProps.params.rewardId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {location}) => {
  const currUrl = location.pathname.slice(-3);
  console.log(currUrl);
  const formType = (currUrl === 'new') ? "new" : "update";

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
