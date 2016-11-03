import React from 'react';
import { Link } from 'react-router';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
     if(nextProps.value !== this.props.value) this.props.fetchProject(nextProps.params.projectId);
  }

  render () {
    const project = this.props.project;
    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{project.title} by {project.creator.username}</h3>
        <h4>GOAL: ${project.funding_goal}</h4>
        <img src={project.image_url}></img>
        <p>{project.description}</p>

        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ProjectShow;
