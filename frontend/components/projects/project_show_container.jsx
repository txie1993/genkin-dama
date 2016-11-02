import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.params.projectId]
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
