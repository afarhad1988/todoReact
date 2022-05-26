import React, {useState} from 'react';
import Button from "../Button";

const Price = () => {
	const [num, setNum] = useState(0)
	const push = () => setNum(num + 1)
	const pop = () => setNum(num - 1)

	return (
			<div>
				{num}
				<Button  title='decr' type='danger' onClick = {push}/>
				<Button title='incr' type='success' onClick = {pop}/>
			</div>
	);
};
export default Price;
