import Axios from 'axios'
import React, { useReducer, createContext, useEffect } from 'react'
import { initialState, reducer } from "../reducers/AppReducer"
import {
	setLoading,
	errorAction,
	setAlertAction,
	unsetAlertAction,
	setProductsAction
} from "../actions/AppActions"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [ appState, dispatch ] = useReducer(reducer, initialState)

	const setError = () => dispatch(errorAction(true))

	const unsetError = () => dispatch(errorAction(false))

	const setAlert = alert => {
		dispatch(setAlertAction(alert))
		setTimeout(
			() => dispatch(unsetAlertAction()),
			5000
		)
	}

	useEffect(() => {
		dispatch(setLoading())
		Axios.get('http://localhost:4000/items')
			.then(res => res.data)
			.then(setProductsAction)
			.then(dispatch)
			.catch(setError)
	}, [])

	return (
		<AppContext.Provider value={ {
			setAlert,
			appState,
			setError,
			unsetError
		} }>
			{ children }
		</AppContext.Provider>
	)
}