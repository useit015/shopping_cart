import React from 'react'
import { Cross } from "./Cross"

export const ProductCartCard = ({ product, quantity, changeQuantity, remove }) => {
	const addQuantity = () =>
		changeQuantity(product.id, quantity + 1)
	const minusQuantity = () =>
		quantity > 1 && changeQuantity(product.id, quantity - 1)
	const removeProduct = () => remove(product.id)

	return (
		<div className="cart__item">
			<div className="cart__item-img" />
			<h4 className="cart__item-title">{ product.title }</h4>
			<div className="cart__quantity">
				<button className="minus" onClick={ minusQuantity }>-</button>
				<div className="quantity">{ quantity }</div>
				<button className="plus" onClick={ addQuantity }>+</button>
			</div>
			<div className="cart__delete">
				<button className="cart__delete-btn" onClick={ removeProduct }>
					<Cross />
				</button>
			</div>
		</div>
	)
}

