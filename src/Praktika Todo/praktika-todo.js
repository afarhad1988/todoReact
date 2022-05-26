

const Todo2 = () => {
	return (
			<div className='row'>
				<div className="col-md-6 offset-md-3">
					<h2>Todo2List</h2>
					<input type="text" className="form-control mb-3"/>
					<button className='btn btn-danger w-100'>Add new item</button>
					<ul className='list-group mt-5'>
						<li className='list-group-item d-flex justify-content-between'>Гулять
							<button className='btn btn-success btn-sm'>Del</button>
						</li>

					</ul>
				</div>
			</div>
	);
};

