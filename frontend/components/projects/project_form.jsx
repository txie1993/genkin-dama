import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // use project in store if updating; start with blank project if new
    this.state = this.props.project || { title: "", image_url: "", description: "", funding_goal: "", creator_id: "" };
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchProject(this.props.params.projectId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.project || { title: "", image_url: "", description: "", funding_goal: "", creator_id: "" });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    const text = this.props.formType === 'new' ? "Create Project" : "Update Project";
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
            <br/>
          </label>
          <label>Image URL
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')} />
            <br/>
          </label>
          <label>Funding Goal
            <input
              type="text"
              value={this.state.funding_goal}
              onChange={this.update('funding_goal')} />
            <br/>
          </label>
          <label> description
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
            <br/>
          </label>

          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default ProjectForm;
