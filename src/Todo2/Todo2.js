import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Todo2 = () => {
	const [todos, setTodos] = useState(['drink', 'eat', 'cola'])
    const [newTodo, setNewTodo] = useState('')

const handleChange = (e) =>{
	setNewTodo(e.target.value)
}
const addNewItem = () =>{
	newTodo.trim() === '' ? alert('input text') : setTodos(todos.concat(newTodo))
	setNewTodo('')
}
const deleteItem = (idx) =>{
	const filteredItem = todos.filter((item,index)=> idx !== index)
	setTodos(filteredItem)

}
const onKeyDown =(e) =>{
	if	(e.code === 'Enter' && newTodo.trim() === ''){
		alert('Where is the text?')
	} else if(e.code === 'Enter'){
		setTodos(todos.concat(newTodo))
		setNewTodo('')
	}

}

	return (
			<div className='row'>
				<div className="col-md-6 offset-md-3">
					<div className='d-flex justify-content-between'>
						<h2>Todo2List</h2>
						<h3>Item: {todos.length}</h3>
					</div>
					<input type="text" className="form-control mb-3" onChange={handleChange} value={newTodo} onKeyDown={onKeyDown}/>
					<button className='btn btn-danger w-100' onClick={addNewItem}>Add new item</button>
					<ul className='list-group mt-5'>
						{
							todos.map((item, idx)=>(
								<li key={idx} className='list-group-item d-flex justify-content-between'>{item}
									<button className='btn btn-success btn-sm' onClick={ () => deleteItem(idx)}>
										<FontAwesomeIcon icon={faTrashCan} />
									</button>
								</li>
							))
						}

					</ul>
				</div>
			</div>
	);
};
export default Todo2;
