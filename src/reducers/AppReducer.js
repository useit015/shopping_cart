export const initialState = {
	error: false,
	loading: true,
	products: [],
	alerts: []
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
		case 'SET_ALERT':
			return {
				...state,
				alerts: [ ...state.alerts, payload.alert ]
			}
		case 'UNSET_ALERT':
			// eslint-disable-next-line
			const [ first, ...rest ] = state.alerts
			return {
				...state,
				alerts: rest
			}
		default:
			return state
	}
}