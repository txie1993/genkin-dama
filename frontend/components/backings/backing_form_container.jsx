import { connect } from 'react-redux';
import BackingForm from './backing_form';
import { fetchBacking, updateBacking, createBacking } from '../../actions/backing_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  backing: state.backings[ownProps.params.backingId]
});

const mapDispatchToProps = (dispatch, {location}) => {
  const currUrl = location.pathname.slice(1);
  const formType = (currUrl === 'newbacking') ? "new" : "update";

  return {
  fetchBacking: id => dispatch(fetchBacking(id)),
  updateBacking: backing => dispatch(updateBacking(backing)),
  createBacking: backing => dispatch(createBacking(backing)),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackingForm);
