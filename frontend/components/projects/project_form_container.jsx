import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, updateProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.params.projectId]
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  action: project => dispatch(updateProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
