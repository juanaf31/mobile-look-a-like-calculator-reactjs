import React from 'react';
import './App.css';
import CalculatorApp from './components/CalculatorApp';
import Phone from './components/Phone';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				{/* <CalculatorApp /> */}
				<Phone />
			</div>
		);
	}
}
export default App;
