import React, { Component } from 'react';
import img from '../img/calc.webp';
import wa from '../img/wa.png';
import ig from '../img/ig.webp';
import note from '../img/note.png';

class Home extends Component {
	buttonClick = (e) => {
		this.props.buttonClick(e.target.name);
	};
	render() {
		return (
			<div className="Home">
				<div className="menus">
					<img name="calculator" src={img} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img name="wa" src={wa} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img name="ig" src={ig} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img name="note" src={note} style={{ width: '60px' }} onClick={this.buttonClick} />
				</div>
			</div>
		);
	}
}

export default Home;
