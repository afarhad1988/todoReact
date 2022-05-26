import React from 'react';

const TodoItem = ({item, index, deleteItem, handleDone}) => {
	const clazz = item.isDone ? 'ms-2 text-decoration-line-through' : 'ms-2'
	return (

				<li  className="list-group-item d-flex justify-content-between">
					<div>
						<input className="form-check-input" type="checkbox" id="checkboxNoLabel" onChange={(e)=> handleDone(e, index)} checked={item.isDone}/>
						<span className={clazz}>{item.title}</span>
					</div>
					<button className='btn btn-danger btn-sm' onClick={() => deleteItem(index)} >Del
					</button>
				</li>

	);
};
export default TodoItem;
