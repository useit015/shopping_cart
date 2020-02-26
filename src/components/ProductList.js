import React from 'react'
import { ProductCard } from './ProductCard'
import '../styles/Products.css'

export const ProductList = ({ products, addProduct }) => (
	<div className="product__list">
		{
			products.map(product => (
				<ProductCard
					key={ product.id }
					product={ product }
					addProduct={ addProduct } />
			))
		}
	</div>
)

