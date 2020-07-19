import React, { Component } from 'react';
import loglogo from '../img/login.png';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			notif: ''
		};
	}

	handleChangeInput = (event) => {
		const name = event.target.name;
		console.log('Input Name', event.target.name);
		console.log(event.target.value);
		this.setState({ ...this.state, [name]: event.target.value });
	};

	handleSubmit = (e) => {
		const regexEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

		e.preventDefault();
		// if (this.state.username.length > 0 && this.state.username.includes('@') && this.state.username.includes('.')) {
		if (this.state.username.match(regexEmail)) {
			if (this.state.password.length > 0) {
				this.props.onAuth();
			} else {
			}
		} else {
			this.setState({
				notif: 'Email Invalid'
			});
		}
	};
	showForm = () => {
		this.setState({
			showForm: !this.state.showForm
		});
	};
	render() {
		return (
			<div className="Phone">
				<div className="smartphone" style={{ backgroundColor: 'grey', marginTop: '10px' }}>
					<div style={{ marginTop: '200px' }} />
					<h1>Click This</h1>
					<img name="note" src={loglogo} style={{ width: '60px' }} onClick={this.showForm} />
				</div>
				{this.state.showForm ? (
					<div id="myform" className="formLogin">
						<div className="loginhead">
							<h1>LOGIN PAGE</h1>
						</div>
						<div className="under" />
						<form onSubmit={this.handleSubmit}>
							<input
								name="username"
								value={this.state.username}
								onChange={this.handleChangeInput}
								placeholder="username"
							/>
							<div>{this.state.notif}</div>

							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChangeInput}
								placeholder="password"
							/>

							<button type="submit">Submit</button>
						</form>
					</div>
				) : null}
			</div>
		);
	}
}

export default LoginScreen;
