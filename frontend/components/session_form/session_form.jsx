import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	guestLogin(e) {
		e.preventDefault();
		const user = {username:"PPMD", password:"Kreygasm"};
		this.props.login({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul className="session-errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container fade-in">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to Genkin-Dama!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username:
						</label>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						<br/>
						<label> Password:
						</label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						<br/>
						<input className="login-submit" type="submit" value="Submit" />
						<br/>
						<button className="guest-login" onClick={this.guestLogin}>No Account? Sign In As Guest</button>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
