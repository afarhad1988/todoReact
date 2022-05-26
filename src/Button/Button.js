import React from 'react';
import './Button.css'

const Button = ({type, onClick, title}) => {

	return (
			<div>
				<button className={`btn btn-${type}`}
						onClick={onClick}>
						{title}
				</button>
			</div>
	);
};
export default Button;
