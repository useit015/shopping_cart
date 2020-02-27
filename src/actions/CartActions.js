export const toggleCartAction = () => ({
	type: 'TOGGLE_CART'
})

export const addProductAction = (product, setAlert) => ({
	type: 'ADD_PRODUCT',
	payload: {
		product,
		setAlert
	}
})

export const removeProductAction = id => ({
	type: 'REMOVE_PRODUCT',
	payload: {
		id
	}
})

export const productQuantityAction = (id, quantity) => ({
	type: 'CHANGE_PRODUCT_QUANTITY',
	payload: {
		id,
		quantity
	}
})