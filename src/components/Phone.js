import React, { Component } from 'react';
import CalculatorApp from './CalculatorApp';
import Home from './Home';
import Note from './Note';
import Ig from './Ig';
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

	render() {
		let screen;
		if (this.state.menu === 'calculator') {
			screen = <CalculatorApp />;
		} else if (this.state.menu == 'note') {
			screen = <Note />;
		} else if (this.state.menu == 'ig') {
			screen = <Ig />;
		} else {
			screen = <Home buttonClick={this.onButtonClick} />;
		}
		return (
			<div>
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
