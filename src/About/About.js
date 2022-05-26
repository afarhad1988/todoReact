import React, {useState} from 'react';

const About = () => {
	const[counter, setCounter] = useState(0)
	const up = () => setCounter (counter + 1)
	const down = () => setCounter(counter - 1)

	return (
			<div>
				{counter}
				<div>
					<button onClick={up}>Go Up</button>
					<button onClick={down}>Go Down</button>
				</div>

			</div>
	);
};
export default About;
