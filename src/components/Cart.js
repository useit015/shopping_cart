import React from 'react'
import { ProductCartCard } from "./ProductCartCard"
import '../styles/Cart.css'

export const Cart = ({ state, remove, change, toggleCart }) => {
	const { open, total, products } = state
	const cartClass = `cart__overlay ${ open && 'open' }`
	return (
		<div className={ cartClass } onClick={ toggleCart }>
			<div className="cart" onClick={ (e) => e.stopPropagation() }>
				<h2 className="cart__title">Your Cart</h2>
				<div className="cart__items">
					{
						products.map(({ product, quantity }) =>
							<ProductCartCard
								remove={ remove }
								key={ product.id }
								product={ product }
								quantity={ quantity }
								changeQuantity={ change } />
						)
					}
				</div>
			</div>
		</div>
	)
}
