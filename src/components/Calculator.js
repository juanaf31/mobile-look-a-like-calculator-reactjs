import React from 'react';

class Calculator extends React.Component {
	buttonClick = (e) => {
		this.props.buttonClick(e.target.name);
	};
	render() {
		return (
			<div className="Buttons">
				<button name="C" onClick={this.buttonClick}>
					C
				</button>
				<button name="-" onClick={this.buttonClick}>
					+/-
				</button>
				<button name="CE" onClick={this.buttonClick}>
					<i className="fas fa-backspace" />
					CE
				</button>
				<button
					style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }}
					name="+"
					onClick={this.buttonClick}
				>
					+
				</button>
				<button name="1" onClick={this.buttonClick}>
					1
				</button>
				<button name="2" onClick={this.buttonClick}>
					2
				</button>
				<button name="3" onClick={this.buttonClick}>
					3
				</button>
				<button
					style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }}
					name="-"
					onClick={this.buttonClick}
				>
					-
				</button>
				<button name="4" onClick={this.buttonClick}>
					4
				</button>
				<button name="5" onClick={this.buttonClick}>
					5
				</button>
				<button name="6" onClick={this.buttonClick}>
					6
				</button>
				<button
					style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }}
					name="*"
					onClick={this.buttonClick}
				>
					*
				</button>
				<button name="7" onClick={this.buttonClick}>
					7
				</button>
				<button name="8" onClick={this.buttonClick}>
					8
				</button>
				<button name="9" onClick={this.buttonClick}>
					9
				</button>
				<button
					style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }}
					name="/"
					onClick={this.buttonClick}
				>
					/
				</button>
				<button style={{ width: '50%' }} name="0" onClick={this.buttonClick}>
					0
				</button>
				<button name="." onClick={this.buttonClick}>
					.
				</button>
				<button
					style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }}
					name="="
					onClick={this.buttonClick}
				>
					=
				</button>
			</div>
		);
	}
}
export default Calculator;
