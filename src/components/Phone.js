import React, { Component } from 'react';
import CalculatorApp from './CalculatorApp';

class Phone extends Component {
	render() {
		return (
			<div className="smartphone" style={{ marginTop: '10px' }}>
				<CalculatorApp />
			</div>
		);
	}
}

export default Phone;
