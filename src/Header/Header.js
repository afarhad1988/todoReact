import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
	return (
			<header className='header'>
               <nav className="navbar">
				   <Link to="/">Home</Link>
				   <Link to="/About">About</Link>
				   <Link to="/Price">Price</Link>
				   <Link to="/Information">Information</Link>
				   <Link to="/People">People</Link>
				   <Link to="/Todo">Todo</Link>
				   <Link to="/Todo2">Todo2</Link>
				   <Link to="/Todo3">Todo3</Link>
			   </nav>
			</header>
	);
};
export default Header;
