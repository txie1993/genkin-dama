import React from 'react';
import { Link } from 'react-router';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchProject(nextProps.params.projectId);
  }

  render () {
    const project = this.props.project;
    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{project.title}</h3>
        <p>{project.body}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ProjectShow;
