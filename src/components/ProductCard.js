import React from 'react'
import { Plus } from "./Plus"

export const ProductCard = ({ product, addProduct }) => {
	const addToCart = () => addProduct(product)

	return (
		<div className="product__item">
			<div className="product__img" />
			<div className="product__desc">
				<h5>{ product.title }</h5>
				<small>{ product.style }</small>
				<div className="product__sizes">
					{
						product.availableSizes.map(cur => (
							<div className="product__size" key={ cur }>
								{ cur }
							</div>
						))
					}
				</div>
			</div>
			<div className="product__cta" onClick={ addToCart }>
				<Plus />
			</div>
		</div>
	)
}
