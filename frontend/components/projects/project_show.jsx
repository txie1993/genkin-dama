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
            <div>
                <div>
                    <h2>{project.title}</h2>
                    <h4>COLLECTED ${project.collected_funds} OUT OF GOAL: ${project.funding_goal} with {project.num_backers} backers</h4>
                    <img src={project.image_url}></img>
                    <p>{project.description}</p>
                    <p>{project.end_date}</p>

                    <Link to="/">Back to Index</Link>
                </div>
            </div>
        );
    }
}

export default ProjectShow;
