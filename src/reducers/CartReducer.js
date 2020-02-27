
export const initialState = {
	total: 0,
	open: false,
	products: []
}

const calcTotal = products =>
	products.reduce((acc, { product, quantity }) =>
		acc + product.price * quantity,
		0
	)

const newState = (open, products) => ({
	open,
	products,
	total: calcTotal(products)
})

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'TOGGLE_CART':
			return {
				...state,
				open: !state.open
			}
		case 'ADD_PRODUCT':
			const existing = state.products.find(({ product }) =>
				product.id === payload.product.id
			)
			if (existing) {
				payload.setAlert({
					text: 'This product is already in your cart',
					color: '#dc3545'
				})
				return state
			}
			const newProduct = {
				quantity: 1,
				product: payload.product,
			}
			payload.setAlert({
				text: 'Product added successfully',
				color: '#28a745'
			})
			return newState(
				state.open,
				[ ...state.products, newProduct ]
			)
		case 'REMOVE_PRODUCT':
			return newState(
				state.open,
				state.products.filter(({ product }) =>
					product.id !== payload.id
				)
			)
		case 'CHANGE_PRODUCT_QUANTITY':
			return newState(
				state.open,
				state.products.map(({ product, quantity }) =>
					product.id !== payload.id
						? { product, quantity }
						: {
							product,
							quantity: payload.quantity
						}
				)
			)
		default:
			return state
	}
}