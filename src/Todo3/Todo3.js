import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

const Todo3 = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
	const [newTodos, setNewTodos] = useState('')

	const handleChange = (e) => {
		setNewTodos(e.target.value)
	}
	const addNewItem = () => {
		localStorage.setItem('todos', JSON.stringify(todos))
		setTodos([...todos, {title: newTodos, isDone: false}])
		setNewTodos('')
	}
	const deleteItem = (idx) => {
		const filteredItem = todos.filter((item, index) => index !== idx)
		setTodos(filteredItem)
	}
	const onKeyDown = (e) => {
		if (e.code === 'Enter' && newTodos.trim().length !== 0) {
			addNewItem()
		}
	}
	const handleCheck = (e, index) => {
		const updateArray = todos.map((item, idx) => {
			if (index === idx) {
				return {...item, isDone: e.target.checked}
			}
			return item
		})
		setTodos(updateArray)
	}
	return (
			<div className='row'>
				<div className="col-md-6 offset-md-3">
					<div className='d-flex justify-content-between'>
						<h2>Todo3List</h2>
						<h3>Item:{todos.length}</h3>
					</div>
					<input type="text" className="form-control mb-3" onChange={handleChange} onKeyDown={onKeyDown}
						   value={newTodos}/>
					<button className='btn btn-dark w-100' onClick={addNewItem}
							disabled={newTodos.trim().length === 0}>Add new item
					</button>
					<ul className='list-group mt-5'>
						{
							todos.map((item, index) => (
									<li key={index} className='list-group-item d-flex justify-content-between'>
										<input className="form-check-input" type="checkbox" id="checkboxNoLabel"
											   onChange={(e) => handleCheck(e, index)} />
										<span className ={`ms-2 ${item.isDone ? 'text-decoration-line-through' : ''}`}>{item.title}</span>
										<button className='btn btn-primary btn-sm' onClick={() => deleteItem(index)}>
											<FontAwesomeIcon icon={faTrashCan}/>
										</button>
									</li>
							))
						}
					</ul>
				</div>
			</div>
	);
};
export default Todo3;
