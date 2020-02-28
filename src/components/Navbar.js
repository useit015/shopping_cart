import React from 'react'
import { ShoppingCart } from '../components/ShoppingCart'

export const Navbar = ({ setError, toggleCart }) => {
	return (
		<header>
			<h1>SHELFLIFE SHOP</h1>
			<div className="actions">
				<button className="btn" onClick={ setError }>
					Set error
				</button>
				<button className="opencart" onClick={ toggleCart }>
					<ShoppingCart size={ 30 } />
				</button>
			</div>
		</header>
	)
}
