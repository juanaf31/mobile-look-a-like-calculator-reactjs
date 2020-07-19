import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './todo/TodoInput';
import TodoList from './todo/TodoList';
import Swal from 'sweetalert2';

class Note extends Component {
	state = {
		items: [],
		id: uuid(),
		item: '',
		editItem: false
	};
	handleChange = (e) => {
		this.setState({
			item: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item
		};

		const addItem = [ ...this.state.items, newItem ];

		this.setState({
			items: addItem,
			item: '',
			id: uuid(),
			editItem: false
		});
	};
	clearList = () => {
		this.setState({
			items: []
		});
	};
	handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {
				Swal.fire('Deleted!', 'Todo List has been deleted.', 'success');
				const deleteItems = this.state.items.filter((item) => item.id !== id);

				this.setState({
					items: deleteItems
				});
			}
		});
	};
	handleEdit = (id) => {
		this.setState({
			editItem: !this.state.editItem
		});
	};
	render() {
		return (
			<div className="Note">
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-8 mt-4">
							<h3 className="text-capitalize text-center">Note Todo</h3>
							<TodoInput
								item={this.state.item}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								// editItem={this.state.editItem}
							/>
							<TodoList
								items={this.state.items}
								clearList={this.clearList}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
								editItem={this.state.editItem}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Note;
