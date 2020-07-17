import React, { Component } from 'react';

class TodoItem extends Component {
	state = {
		vals: this.props.title,
		isEdit: this.props.editItem
	};

	change = () => {
		this.setState({
			isEdit: !this.state.isEdit
		});
	};

	editChange = (e) => {
		this.setState({
			vals: e.target.value
		});
	};
	render() {
		const { title, handleDelete, handleEdit, editItem } = this.props;
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				{this.state.isEdit ? (
					<input style={{ width: '100px' }} value={this.state.vals} onChange={this.editChange} />
				) : (
					<h6>{this.state.vals}</h6>
				)}
				<div className="todo-icon">
					{this.state.isEdit ? (
						<span className="mx-2 text-success" onClick={this.change}>
							<i className="fas fa-check" />
						</span>
					) : (
						<span className="mx-2 text-success" onClick={this.change}>
							<i className="fas fa-pen" />
						</span>
					)}
					<span className="mx-2 text-danger" onClick={handleDelete}>
						<i className="fas fa-trash" />
					</span>
				</div>
			</li>
		);
	}
}

export default TodoItem;
