import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects, deleteProject, createProject } from '../../actions/project_actions';

const mapStateToProps = state => ({
  projects: Object.keys(state.projects).map(id => state.projects[id])
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: id => dispatch(deleteProject(id)),
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
