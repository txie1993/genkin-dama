import React from 'react';
import {Link, hashHistory} from 'react-router';

const editLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}/edit`;
        hashHistory.push(url);
    };
};

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
        this.hideForm = this.hideForm.bind(this);
        this.hideNewForm = this.hideNewForm.bind(this);
        this.setTagName = this.setTagName.bind(this);
        this.chooseTag = this.chooseTag.bind(this);
    }
    componentDidMount() {
        this.props.fetchProject(this.props.params.projectId);
        this.props.fetchTags();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
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

    }

    scroll() {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }

    showForm(e) {
        e.preventDefault();
        this.tagSelect = "";
        this.newTagName = "";
        this.setState({tagForm: true}, this.scroll);
    }

    showNewForm(e) {
        e.preventDefault();
        this.newTagName = "";
        this.setState({addTagForm: true}, this.scroll);
    }
    hideForm(e) {
        e.preventDefault();
        this.tagSelect = "";
        this.newTagName = "";
        this.setState({tagForm: false});
    }

    hideNewForm(e) {
        e.preventDefault();
        this.newTagName = "";
        this.setState({addTagForm: false});
    }

    setTagName(e) {
        this.newTagName = e.target.value;
    }
    chooseTag(e) {
        this.tagSelect = e.target.value;
    }


    formLinks() {
        if (this.props.currentUser.id === this.props.project.creator_id) {
            return (
                <div className="project-edit">
                    <button onClick={editLink(this.props.project.id)}>
                        <i className="fa fa-pencil" aria-hidden="true"></i> Edit</button>&nbsp;
                    <button  id="delete-button" onClick={() => this.props.deleteProject(this.props.project.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i> Delete</button>
                </div>
            );
        } else {
            return (
                <button onClick={backingLink(this.props.project.id)}>Back This Project</button>
            );
        }
    }
    tagButton() {
      if (this.props.currentUser.id === this.props.project.creator_id)
      return (
        <div className="project-tag-form">
          <button id="add-tag" onClick={this.showForm}>Add Tag</button>
          {this.tagForm()}
          {this.newTagForm()}
        </div>
      );
    }

    tagForm() {
        if (this.state.tagForm)
            return (
                <div className="fade-in">
                    <form className="tag-form" onSubmit={this.handleTag}>
                        <select onChange={this.chooseTag}>
                            {this.props.tags.map(tag => <option key={`k${tag.id}`} value={tag.id}>{tag.name}</option>)}
                        </select>
                        <input type="submit" value="Add"/>
                        <button onClick={this.showNewForm}>New Tag</button>
                        <i onClick={this.hideForm} className="fa fa-window-close fa-fw"></i>
                    </form>
                </div>
            );
        }

    newTagForm() {
        if (this.state.addTagForm)
            return (
                <div className="fade-in">
                    <form className="tag-form-new" onSubmit={this.handleNewTag}>
                        <h3>Tag Name</h3>
                        <input type="text" onChange={this.setTagName}></input>
                        <input type="submit" value="Create Tag"/>
                        <i onClick={this.hideNewForm} className="fa fa-window-close fa-fw"></i>
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
                                <div className="project-tags">
                                    <ul>
                                        {project.tags.map(tag => <li key={`t${tag.id}`}>
                                            <i className="fa fa-tag fa-fw" aria-hidden="true"></i>{tag.name}</li>)}
                                    </ul>
                                </div>

                                {this.tagButton()}

                            </div>
                            <div className="project-right-2">
                                {this.formLinks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectShow;
