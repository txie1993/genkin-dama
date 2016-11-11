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
const signupLink = () => {
    hashHistory.replace("/signup");
};

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        };
    }

    dropdown() {
      if (this.state.popup)
        return (
            <div className="dropdown">
            </div>
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

    personalGreeting() {
        return (
            <hgroup className="header-group">
                <div onClick={newLink} className="title-button">
                    <h2>Start a project</h2>
                </div>

                <img onClick={rootLink} className="logo" src="http://i.imgur.com/uxl2emR.png"></img>

                <div onClick={this.props.logout} className="title-button">
                    <h2>Hi, {this.props.currentUser.username}!</h2>
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
