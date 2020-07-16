import React, { Component } from 'react';
import Calculator from './Calculator';
import Output from './Output';

class CalculatorApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: ''
		};
	}
	onButtonClick = (buttonName) => {
		if (buttonName === '=') {
			this.calculate();
		} else if (buttonName === 'C') {
			this.setState({
				result: ''
			});
		} else if (buttonName == 'CE') {
			this.setState({
				result: this.state.result.slice(0, -1)
			});
		} else {
			this.setState({ result: this.state.result + buttonName });
		}
	};

	calculate = () => {
		this.setState({
			// result: eval(this.state.result)
			result: (eval(this.state.result) || '') + ''
		});
	};
	render() {
		return (
			<div className="CalculatorApp">
				<div className="calc-body">
					<Output result={this.state.result} />
					<Calculator buttonClick={this.onButtonClick} />
				</div>
			</div>
		);
	}
}

export default CalculatorApp;
