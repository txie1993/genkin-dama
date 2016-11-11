import React from 'react';
import {Link, hashHistory} from 'react-router';

const rootLink = () => {
    hashHistory.replace("/");
};
const newLink = () => {
    hashHistory.replace("/new");
};
const loginLink = () => {
    hashHistory.replace("/login");
};
const projectLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}`;
        hashHistory.push(url);
    };
};
const signupLink = () => {
    hashHistory.replace("/signup");
};

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        };

        this.clickedName=this.clickedName.bind(this);
    }

    clickedName(){
      if(this.state.popup) this.setState({"popup":false});
      else this.setState({"popup": true});
    }

    dropdown() {
      if (this.state.popup)
        return (
            <div className="dropdown">
                <div className="dropdown-content">
                  <div className="dropdown-projects">
                    <h3>My Projects</h3>
                    <ul>
                        {this.props.currentUser.projects.map(project => <li onClick={projectLink(project.id)} key={`dp${project.id}`}>{project.title}</li>)}
                    </ul>
                </div>

                <div className="dropdown-backings">
                  <h3>My Backed Projects</h3>
                  <ul>
                    {this.props.currentUser.backed_projects.map(back => <li onClick={projectLink(back.id)}
                    key={`dr${back.id}`}>{back.title}</li>)}
                  </ul>
                </div>
                <div className="dropdown-logout">
                  <h1 onClick={this.props.logout}>Logout</h1>
                </div>
              </div>
            </div>
        );
    }
    personalGreeting() {
      return (
        <hgroup className="header-group">
          <div onClick={newLink} className="title-button">
            <h2>Start a project</h2>
          </div>

          <img onClick={rootLink} className="logo" src="http://i.imgur.com/uxl2emR.png"></img>

          <div onClick={this.clickedName} className="title-button">
            <h2>Hi, {this.props.currentUser.username}! <i className="fa fa-sort-desc fa-fw"></i></h2>
          </div>
          {this.dropdown()}
        </hgroup>
      );
    }

    sessionLinks() {
      return (
        <hgroup className="header-group-login">
          <img onClick={rootLink} className="logo" src="http://i.imgur.com/uxl2emR.png"></img>
          <div className="login-buttons">
            <div onClick={loginLink} className="title-button">
                <h2>Log In</h2>
            </div>
            <div onClick={signupLink} className="title-button">
                <h2>Sign Up</h2>
            </div>
            </div>
          </hgroup>
      );
    }


    render() {
        return ((this.props.currentUser
            ? this.personalGreeting()
            : this.sessionLinks()));
    }
}

export default Greeting;
