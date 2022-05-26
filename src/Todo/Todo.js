import React, {useState} from 'react';
import TodoItem from "../TodoItem";

const Todo = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
	const [newTodo, setNewTodo] = useState('')


	const handleChange = (e) => {
		setNewTodo(e.target.value)
	}
	const addNewItem = (e) => {
		const newTodoWith = [...todos, {title: newTodo, isDone: false}]
		localStorage.setItem('todos', JSON.stringify(newTodoWith))
		newTodo.trim() === ''
				? alert('Enter text')
				: setTodos(newTodoWith)
		setNewTodo('')
		if (newTodo.trim() === '') {
		}
	}
	const deleteItem = (index) => {
		const filteredItem = todos.filter((item, idx) => index !== idx)
		setTodos(filteredItem)
		localStorage.setItem('todos', JSON.stringify(filteredItem))

	}
	const onKeyDown = (e) => {
		const newTodoWith = [...todos, {title: newTodo, isDone: false}]
		localStorage.setItem('todos', JSON.stringify(newTodoWith))
		if (e.key === 'Enter' && newTodo.trim() === '') {
			alert('Please Enter text')
		} else if (e.key === 'Enter') {
			setTodos(newTodoWith)
			setNewTodo('')
		}
	}

	const handleDone = (e, index) =>{
		const updateArray = todos.map((item, idx)=>{
			if(index === idx) {
				return {...item, isDone: e.target.checked}
			}
			return item
		})
		localStorage.setItem('todos', JSON.stringify(updateArray))
		setTodos(updateArray)
	}
	return (
			<div className='row'>
				<div className="col-md-6 offset-md-3">
					<div className='title d-flex justify-content-between'><h2>TodoList</h2><h3>Item: {todos.length}</h3></div>
					<input type="text" className='form-control' onChange={handleChange} value={newTodo}
						   onKeyDown={onKeyDown}/>
					<button className="btn btn-success w-100 mt-3" onClick={addNewItem}>Add new item</button>
					<ul className="list-group mt-5">
						{
							todos.map((item, idx) => (
									<TodoItem key={idx} item={item} index={idx} deleteItem={deleteItem} handleDone={handleDone}/>
							))
						}
					</ul>
				</div>
			</div>
	);
};
export default Todo;
