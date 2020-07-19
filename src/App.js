import React from 'react';
import './App.css';
import CalculatorApp from './components/CalculatorApp';
import Phone from './components/Phone';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './components/LoginScreen';

class App extends React.Component {
	state = {
		isLogin: false
	};

	onAuthenticate = () => {
		this.setState({ isLogin: true });
	};

	onLogout = () => {
		this.setState({ isLogin: false });
	};
	render() {
		let currentScreen;
		if (this.state.isLogin) {
			currentScreen = (
				<div>
					<Phone onLogout={this.onLogout} />
				</div>
			);
		} else {
			currentScreen = (
				<div>
					<LoginScreen onAuth={this.onAuthenticate} />
				</div>
			);
		}
		return (
			<div className="App">
				<div className="bg-img" />
				{currentScreen}
				{/* <Phone /> */}
			</div>
		);
	}
}
export default App;
