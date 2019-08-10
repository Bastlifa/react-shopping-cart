import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContent } from '../contexts/CartContext';

const Navigation = _ => {
	const cart = useContext(CartContent)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
