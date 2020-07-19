import React, { Component } from 'react';
import CalculatorApp from './CalculatorApp';
import HomePhone from './HomePhone';
import Note from './Note';
import Ig from './Ig';
import FectGetApi from './FectGetApi';
class Phone extends Component {
	state = {
		menu: ''
	};

	onButtonClick = (e) => {
		this.setState({ menu: e });
	};

	homeButton = () => {
		this.setState({
			menu: 'home'
		});
	};

	onButtonLogoutClicked = () => {
		this.props.onLogout();
	};

	render() {
		let screen;
		if (this.state.menu === 'calculator') {
			screen = <CalculatorApp />;
		} else if (this.state.menu == 'note') {
			screen = <Note />;
		} else if (this.state.menu == 'ig') {
			screen = <Ig />;
		} else if (this.state.menu == 'fetch') {
			screen = <FectGetApi />;
		} else {
			screen = <HomePhone buttonClick={this.onButtonClick} logoutClick={this.onButtonLogoutClicked} />;
		}
		return (
			<div className="Phone">
				<div className="smartphone" style={{ marginTop: '10px' }}>
					{screen}
				</div>
				<button className="btn-back" name="home" onClick={this.homeButton}>
					Home
				</button>
			</div>
		);
	}
}

export default Phone;
