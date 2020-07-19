import React, { Component } from 'react';
import img from '../img/calc.webp';
import wa from '../img/wa.png';
import ig from '../img/ig.webp';
import note from '../img/note.png';
import akey from '../img/api-key2.png';
import key from '../img/off.png';

class HomePhone extends Component {
	buttonClick = (e) => {
		this.props.buttonClick(e.target.name);
	};

	buttonLogoutClick = () => {
		this.props.logoutClick();
	};

	render() {
		return (
			<div className="Home">
				<div className="menus">
					<img name="calculator" src={img} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img name="wa" src={wa} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img name="ig" src={ig} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img name="note" src={note} style={{ width: '60px' }} onClick={this.buttonClick} />
					<img
						name="fetch"
						src={akey}
						style={{ marginTop: '50px', width: '60px' }}
						onClick={this.buttonClick}
					/>
					<img
						name="logout"
						src={key}
						style={{ marginTop: '50px', width: '60px' }}
						onClick={this.buttonLogoutClick}
					/>
				</div>
			</div>
		);
	}
}

export default HomePhone;
