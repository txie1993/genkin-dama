import { connect } from 'react-redux';
import BackingIndex from './backing_index';
import { fetchBackings, deleteBacking, createBacking } from '../../actions/backing_actions';

const mapStateToProps = state => ({
  backings: Object.keys(state.backings).map(id => state.backings[id])
});

const mapDispatchToProps = dispatch => ({
  fetchBackings: () => dispatch(fetchBackings()),
  deleteBacking: id => dispatch(deleteBacking(id)),
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackingIndex);
