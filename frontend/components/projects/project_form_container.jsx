import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, updateProject, createProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  project: state.projects[ownProps.params.projectId]
});

const mapDispatchToProps = (dispatch, {location}) => {
  const currUrl = location.pathname.slice(1);
  const formType = (currUrl === 'newproject') ? "new" : "update";

  return {
  fetchProject: id => dispatch(fetchProject(id)),
  updateProject: project => dispatch(updateProject(project)),
  createProject: project => dispatch(createProject(project)),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
