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

export const setAlertAction = alert => ({
	type: 'SET_ALERT',
	payload: {
		alert
	}
})

export const unsetAlertAction = () => ({
	type: 'UNSET_ALERT'
})

export const setLoading = () => ({
	type: 'SET_LOADING'
})