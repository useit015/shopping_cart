export const errorAction = value => ({
	type: 'SET_ERROR',
	payload: {
		value
	}
})

export const setProductsAction = products => ({
	type: 'SET_PRODUCTS',
	payload: {
		products
	}
})

export const setLoading = () => ({
	type: 'SET_LOADING'
})