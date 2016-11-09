import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { fetchProject, updateProject, createProject } from '../../actions/project_actions';
import { fetchReward, updateReward, createReward } from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  project: state.projects[ownProps.params.projectId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {location}) => {
  const currUrl = location.pathname.slice(1);
  const formType = (currUrl === 'newproject') ? "new" : "update";

  return {
  fetchProject: id => dispatch(fetchProject(id)),
  updateProject: project => dispatch(updateProject(project)),
  createProject: project => dispatch(createProject(project)),
  fetchReward: id => dispatch(fetchReward(id)),
  updateReward: reward => dispatch(updateReward(reward)),
  createReward: reward => dispatch(createReward(reward)),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
