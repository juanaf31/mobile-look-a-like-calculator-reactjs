import React, { Component } from 'react';
import IgPict from '../img/ig.jpg';
class Ig extends Component {
	render() {
		return (
			<div className="Ig">
				<img src={IgPict} style={{ width: '325px', height: '520px' }} />
				{/* <iframe src="https://www.google.com/" /> */}
			</div>
		);
	}
}

export default Ig;
