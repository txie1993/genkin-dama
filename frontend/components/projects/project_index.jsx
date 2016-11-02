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
        <ProjectForm formType="new" action={this.props.createProject} />
      </div>
    );
  }
}

export default ProjectIndex;
