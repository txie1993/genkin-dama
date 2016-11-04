import React from 'react';
import {Link} from 'react-router';

class ProjectShow extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.params.projectId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value)
            this.props.fetchProject(nextProps.params.projectId);
        }

    render() {
        const project = this.props.project;
        if (!project) {
            return <div>Loading...</div>;
        }

        return (
            <div className="project-show-container">
                <div className="project-show-box">
                    <div className="project-title">
                        <h2>{project.title}</h2>
                        <p>by {project.creator.username}</p>
                    </div>
                    <div className="project-body">
                        <div className="project-row">
                            <div className="project-left" style={{backgroundImage: `url(${project.image_url})`}}>
                            </div>
                            <div className="project-right">
                                <div className="project-right-backers">
                                    <h1>{project.num_backers}</h1>
                                    <p>backers</p>
                                </div>
                                <div className="project-right-goal">
                                    <h1>${project.collected_funds}</h1>
                                    <p>pledged of ${project.funding_goal}</p>
                                </div>
                                <div className="project-right-time">
                                    <h1>{project.remaining_days}</h1>
                                    <p>days to go</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-row-2">
                            <div className="project-left-2">
                              <p>{project.description}</p>
                            </div>
                            <div className="project-right-2">
                              <button>Back this Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectShow;
