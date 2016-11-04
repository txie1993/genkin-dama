import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectForm from './project_form';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
    return (
      <div>
      <div>
      <div className="banner"></div>
      <div className="feature-row">
      <div className="feature"></div>
      <div className="feature"></div>
      <div className="feature"></div>
      </div>
        <ul>
          {
            this.props.projects.map(project => (
              <ProjectIndexItem
                key={project.id}
                deleteProject={this.props.deleteProject}
                project={project} />
            ))
          }
        </ul>
      </div>
      </div>
    );
  }
}

export default ProjectIndex;
