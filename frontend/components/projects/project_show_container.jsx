import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { createTag, fetchTags } from '../../actions/tag_actions';
import { createTagging, deleteTagging } from '../../actions/tagging_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.params.projectId],
  currentUser: state.session.currentUser,
  tags: Object.keys(state.tags).map(id => state.tags[id])
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  createTag: tag => dispatch(createTag(tag)),
  fetchTags: () => dispatch(fetchTags()),
  createTagging: tagging => dispatch(createTagging(tagging)),
  deleteTagging: id => dispatch(deleteTagging(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
