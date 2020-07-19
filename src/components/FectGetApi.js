import React, { Component } from 'react';
import Axios from 'axios';

class FectGetApi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			error: null,
			data: []
		};
	}

	// getData = async () => {
	// 	try {
	// 		const res = await fetch('/goods');
	// 		const result = await res.json();
	// 		this.setState({
	// 			data: result.data
	// 		});
	// 		console.log(this.state.data);
	// 	} catch (err) {
	// 		this.setState({
	// 			isLoaded: true,
	// 			err
	// 		});
	// 	}
	// };

	getDataByAx = async () => {
		try {
			const res = await Axios.get('/goods');
			this.setState({
				data: res.data.data
			});
			console.log(this.state.data);
		} catch (err) {
			this.setState({
				isLoaded: true,
				err
			});
		}
	};

	componentDidMount() {
		// this.getData().then();
		// this.getDataByAx().then();
	}
	render() {
		return (
			<div className="Note">
				<h1>GetAPI</h1>
				<button onClick={this.getDataByAx}>Get</button>
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>Goods ID</th>
							<th>Goods Name</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((item) => (
							<tr>
								<td>{item.goods_id}</td>
								<td>{item.goods_name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default FectGetApi;
