import React from 'react'
import { ShoppingCart } from '../components/ShoppingCart'

export const Navbar = ({ setError, toggleCart }) => {
	return (
		<header>
			<h1>Welcome</h1>
			<div className="actions">
				<button className="btn" onClick={ setError }>
					Set error
					</button>
				<button className="btn" onClick={ toggleCart }>
					<ShoppingCart color="#444" />
				</button>
			</div>
		</header>
	)
}
