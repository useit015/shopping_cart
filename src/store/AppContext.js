import Axios from 'axios'
import React, { useReducer, createContext, useCallback, useEffect } from 'react'
import { initialState, reducer } from "../reducers/AppReducer"
import { errorAction, setProductsAction, setLoading } from "../actions/AppActions"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [ appState, dispatch ] = useReducer(reducer, initialState)

	const setError = useCallback(
		() => dispatch(errorAction(true)),
		[ dispatch ]
	)

	const unsetError = useCallback(
		() => dispatch(errorAction(false)),
		[ dispatch ]
	)

	const fetchProducts = useCallback(
		() => {
			dispatch(setLoading())
			Axios.get('http://localhost:4000/items')
				.then(res => res.data)
				.then(setProductsAction)
				.then(dispatch)
				.catch(setError)
		},
		[ setError, dispatch ]
	)

	useEffect(() => {
		fetchProducts()
	}, [ fetchProducts ])

	return (
		<AppContext.Provider value={ { appState, setError, unsetError } }>
			{ children }
		</AppContext.Provider>
	)
}