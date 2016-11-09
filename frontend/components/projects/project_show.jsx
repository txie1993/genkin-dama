import React from 'react';
import {Link, hashHistory} from 'react-router';

const backingLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}/rewards`;
        hashHistory.replace(url);
    };
};

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagForm: false,
            addTagForm: false
        };
        this.tagSelect = "";
        this.newTagName = "";

        this.handleTag = this.handleTag.bind(this);
        this.handleNewTag = this.handleNewTag.bind(this);
        this.showForm = this.showForm.bind(this);
        this.showNewForm = this.showNewForm.bind(this);
        this.setTagName = this.setTagName.bind(this);
    }
    componentDidMount() {
        this.props.fetchProject(this.props.params.projectId);
        this.props.fetchTags();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value){
            this.props.fetchProject(nextProps.params.projectId);
        this.props.fetchTags();
      }
    }

    handleTag(e) {
        e.preventDefault();
        this.props.createTagging({project_id: this.props.project.id, tag_id: this.tagSelect});
    }
    handleNewTag(e) {
        e.preventDefault();
        this.props.createTag({name: this.newTagName});
        const url = `/projects/${this.props.project.id}`;
        hashHistory.replace(url);
    }

    showForm() {
        this.setState({tagForm: true});
    }
    showNewForm() {
        this.newTagName = "";
        this.setState({addTagForm: true});
    }

    setTagName(e) {
      this.newTagName = e.target.value;
    }

    tagForm() {
        if (this.state.tagForm)
            return (
                <div className="fade-in">
                    <form onSubmit={this.handleTag}>
                        <h3>Pledge Amount</h3>
                        <select>
                            {this.props.tags.map(tag => <option value={tag.id}>{tag.name}</option>)}
                        </select>
                        <input type="submit" value="Add Tag"/>
                        <button onClick={this.showNewForm}>New Tag</button>
                    </form>
                </div>
            );
        }

    newTagForm() {
        if (this.state.addTagForm)
            return (
                <div className="fade-in">
                    <form onSubmit={this.handleNewTag}>
                        <h3>Tag Name</h3>
                        <input type="text" onChange={this.setTagName}></input>
                        <input type="submit" value="Create Tag"/>
                    </form>
                </div>
            );
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
                            <div className="project-left" style={{
                                backgroundImage: `url(${project.image_url})`
                            }}></div>
                            <div className="project-right">
                                <div className="project-right-backers">
                                    <h1>{numberWithCommas(project.num_backers)}</h1>
                                    <p>backers</p>
                                </div>
                                <div className="project-right-goal">
                                    <h1>${numberWithCommas(project.collected_funds)}</h1>
                                    <p>pledged of ${numberWithCommas(project.funding_goal)}</p>
                                </div>
                                <div className="project-right-time">
                                    <h1>{numberWithCommas(project.remaining_days)}</h1>
                                    <p>days to go</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-row-2">
                            <div className="project-left-2">
                                <p>{project.description}</p>
                                <button onClick={this.showForm}>Add Tag</button>
                                {this.tagForm()}
                                {this.newTagForm()}
                            </div>
                            <div className="project-right-2">
                                <button onClick={backingLink(project.id)}>Back This Project</button>&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectShow;
