import React, { Component } from 'react';

class Output extends Component {
	render() {
		return (
			<div className="Output">
				<input value={this.props.result} readOnly />
			</div>
		);
	}
}

export default Output;
