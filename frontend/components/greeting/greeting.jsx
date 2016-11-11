import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <Link to="/newproject" className="new-project-link">Create a Project</Link>

    <img src="http://i.imgur.com/uxl2emR.png"></img>

      <div className="dropdown">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <div className="dropdown-content">
        <button className="header-button" onClick={logout}>Log Out</button>
        <p>My Projects!</p>
        <ul>
          {currentUser.projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
      </div>
    </div>


	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
