export const initialState = {
	products: [],
	error: false,
	loading: true
}

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			}
		case 'SET_ERROR':
			return {
				...state,
				loading: false,
				error: payload.value
			}
		case 'SET_PRODUCTS':
			return {
				...state,
				loading: false,
				products: payload.products
			}
		default:
			return state
	}
}