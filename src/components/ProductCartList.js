import React from 'react'
import { ProductCartCard } from "./ProductCartCard"

export const ProductCartList = ({ products, remove, change }) => {
	return (
		!products.length
			? <div className="cart__empty">Your cart is empty</div>
			: <>
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
			</>
	)
}
