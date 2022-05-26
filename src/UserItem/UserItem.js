import React from 'react';

const UserItem = ({item}) => {
	return (
				<div className="col-4">
					<ul>
						<li>name: {item.name}</li>
						<li>phone: {item.phone}</li>
						<li>id: {item.id}</li>
					</ul>
				</div>
	);
};
export default UserItem;
