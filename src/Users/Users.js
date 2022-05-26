import React from 'react';

const Users = ({name, img}) => {
	return (
			<div>
				<h1>Title</h1>
				<img src={img} alt=""/>
				<div>
					Hello {name}
				</div>
			
			</div>
	);
};
export default Users;
