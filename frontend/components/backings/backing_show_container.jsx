import { connect } from 'react-redux';
import BackingShow from './backing_show';
import { fetchBacking } from '../../actions/backing_actions';

const mapStateToProps = (state, ownProps) => ({
  backing: state.backings[ownProps.params.backingId]
});

const mapDispatchToProps = dispatch => ({
  fetchBacking: id => dispatch(fetchBacking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackingShow);
