import React, { useContext } from 'react'
import { ProductCartList } from '../components/ProductCartList'
import { CartContext } from '../store/CartContext'
import { Cross } from '../components/Cross'
import '../styles/Cart.css'

const stopPropagation = (e) => e.stopPropagation()

export const Cart = () => {
	const {
		cartState,
		toggleCart,
		removeProduct,
		changeProductQuantity
	} = useContext(CartContext)
	const { open, total, products } = cartState

	const cartClass = `cart__overlay ${ open && 'open' }`

	return (
		<div className={ cartClass } onClick={ toggleCart }>
			<div className="cart" onClick={ stopPropagation }>
				<div className="cart__top">
					<h2 className="cart__title">Your Cart</h2>
					<button className="cart__close" onClick={ toggleCart }>
						<Cross size={ 35 } />
					</button>
				</div>
				<div className="cart__items">
					<ProductCartList
						remove={ removeProduct }
						change={ changeProductQuantity }
						products={ products } />
				</div>
				<div className="cart__total">
					<span className="cart__total-title">
						Cart Total
					</span>
					<span className="cart__total-price">
						$ { total.toFixed(2) }
					</span>
				</div>
				<button
					className="cart__checkout"
					disabled={ !products.length }>
					CHECKOUT
				</button>
			</div>
		</div>
	)
}
