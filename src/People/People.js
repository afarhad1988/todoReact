import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserItem from "../UserItem";
const People = () => {
	const [people, setPeople] = useState([])
    useEffect(()=>{
		axios('https://jsonplaceholder.typicode.com/users')
				.then((res)=>setPeople(res.data))
	},[])
	return (
			<div className="row">
					{people.map((item)=><UserItem item={item}  key={item.id}/>)}
			</div>
	);
};
export default People;
