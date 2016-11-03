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
    if (!this.props.loggedIn) {
      this.props.router.push("/login");
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
    console.log(this.props.formType);
    e.preventDefault();
    this.props.formType === 'new' ? this.props.createProject(this.state) : this.props.updateProject(this.state);
    this.props.router.push("/");
  }

  render () {
    const text = this.props.formType === 'new' ? "Create Project" : "Update Project";
    return (
      <div className="project-form-background fade-in">
      <div className="project-form-container">
        <h3>{text}</h3>

        <form onSubmit={this.handleSubmit} className="project-form-box">
          <div className="grey-box">
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} className="project-input"/>

          </label>
        </div>
        <br/>
          <div className="grey-box">
            <label> Short Blurb
              <textarea
                value={this.state.description}
                onChange={this.update('description')}  className="project-text-input"/>
              <p>If you had to describe what you're creating in one tweet, how would you do it?</p>
            </label>
          </div>
          <br/>

          <div className="grey-box">
          <label>Image URL
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')} className="project-input" />
            <p>Your project title and blurb should be simple, specific, and memorable. Our search tools run through these sections of your project, so be sure to incorporate any key words here!

              These words will help people find your project, so choose them wisely! Your name will be searchable too.</p>
          </label>
        </div>
        <br/>

          <div className="grey-box">
          <label>Funding Goal
            <input
              type="text"
              value={this.state.funding_goal}
              onChange={this.update('funding_goal')} className="project-input" />

          </label>
        </div>
        <br/>

          <div className="grey-box">
          <label>End Date
            <input
              type="date"
              value={this.state.end_date}
              onChange={this.update('end_date')} className="project-input" />

          </label>
        </div>
        <br/>



          <input type="submit" value={text} className="project-submit"/>
        </form>
      </div>
      </div>
    );
  }
}

export default ProjectForm;
